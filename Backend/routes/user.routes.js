const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controllers');
const { body } = require("express-validator");
const { userAuthenticate } = require('../middleware/users.middleware');

router.post('/register',
    [body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('phone').isMobilePhone().withMessage('Please provide a valid phone number'),
    body('address').notEmpty().withMessage('Address is required'),
    body('fullname.firstname').notEmpty().withMessage('First name is required')
    ],
    userController.registerUser);


router.post("/login",
    [
        body('email').isEmail().withMessage('Please provide a valid email'),
        body('password').notEmpty().withMessage('Password is required')
    ],
    userController.loginUser);


router.get("/profile", userAuthenticate, userController.getProfile);


router.post("/logout", userAuthenticate, userController.logoutUser);


module.exports = router;