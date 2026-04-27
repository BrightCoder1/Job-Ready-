const DataModel = require('../models/data.models');
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const userService = require('../services/user.services');

exports.registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, phone, address } = req.body;

        const existingUser = await DataModel.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        };

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword,
            phone,
            address
        });

        const token = user.generateToken();

        res.cookie('token', token);
        res.status(201).json({ message: 'User registered successfully', token });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });

    }
}


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await DataModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = user.generateToken();

        res.cookie('token', token);
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


exports.getProfile = async (req, res) => {
    console.log(req.user);

    return res.status(200).json({
        message: "User profile fetched successfully",
        user: req.user
    })
}