const Address = require('../models/Address');
const User = require('../models/User');

// Get all addresses for the logged-in user
const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user.id })
            .populate({
                path: 'user',
                select: '-password -__v', // Kecualikan field password dan __v
            });

        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new address
const createAddress = async (req, res) => {
    try {
        const { street, city, state, postalCode, country } = req.body;

        if (!street || !city || !state || !postalCode || !country) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Buat address baru
        const address = new Address({
            user: req.user.id,
            street,
            city,
            state,
            postalCode,
            country
        });

        await address.save();

        // Perbarui koleksi User dengan menambahkan ID address
        await User.updateOne(
            { _id: req.user.id },
            { $push: { addresses: address._id } } // Tambahkan ID address ke array addresses
        );

        res.status(201).json({ message: 'Address created successfully', address });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an address
const updateAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const { street, city, state, postalCode, country } = req.body;

        const address = await Address.findOneAndUpdate(
            { _id: id, user: req.user.id },
            { street, city, state, postalCode, country },
            { new: true }
        );

        if (!address) {
            return res.status(404).json({ message: 'Address not found or unauthorized' });
        }

        res.status(200).json({ message: 'Address updated successfully', address });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an address
const deleteAddress = async (req, res) => {
    try {
        const { id } = req.params;

        const address = await Address.findOneAndDelete({ _id: id, user: req.user.id });

        if (!address) {
            return res.status(404).json({ message: 'Address not found or unauthorized' });
        }

        res.status(200).json({ message: 'Address deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAddresses, createAddress, updateAddress, deleteAddress };
