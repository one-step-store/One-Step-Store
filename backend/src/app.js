const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./config/googleAuth');
const setupSwagger = require('./config/swagger');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cookieParser());

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session Middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'defaultsecret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        },
    })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Swagger Documentation
setupSwagger(app);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
});

module.exports = app;
