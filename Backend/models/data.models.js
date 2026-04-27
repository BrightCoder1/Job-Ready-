const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
const bcrypt = require('bcrypt');
dotenv.config()


const dataSchema = new mongoose.Schema({
    fullname: {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'employee', 'user'],
        default: 'user'
    }
});

// generate token method
dataSchema.methods.generateToken = function () {
    const token = jwt.sign(
        { id: this._id, },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );
    return token;
}

dataSchema.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

dataSchema.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const DataModel = mongoose.model('Register', dataSchema);

module.exports = DataModel;