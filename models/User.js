const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    logins: {
        type: Number,
        required: true,
        default: 0
    },
    profilePicture: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('users', UserSchema);