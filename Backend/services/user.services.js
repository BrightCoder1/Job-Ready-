const DataModel = require('../models/data.models');

module.exports.createUser = async ({
    firstname, lastname, email, password, phone, address
}) => {
    if (!firstname || !lastname || !email || !password || !phone || !address) {
        throw new Error('All fields are required');
    }

    const user = DataModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        phone,
        address
    })

    return user;
}