const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = process.env.DB_URI;
        
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Berhasil koneksi ke database');
    } catch (error) {
        console.error('Gagal koneksi ke database:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
