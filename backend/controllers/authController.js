const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
const register = async (req, res) => {
    try {
        const { username, first_name, last_name, email, password, phone, role } = req.body;

        if (!username || !first_name || !last_name || !email || !password || !phone) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Tambahkan role jika tersedia, default ke 'customer' jika tidak
        const user = new User({ 
            username, 
            first_name, 
            last_name, 
            email, 
            password, 
            phone, 
            role: role || 'customer',
            addresses: [] 
        });
        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: { ...user.toObject(), addresses: [] }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ email }).populate('addresses');
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        const { password: _, ...userWithoutPassword } = user.toObject();
        res.status(200).json({ message: 'Login successful', token, user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get logged-in user with addresses
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('addresses');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { register, login, getUser };
