const mongoose = require('mongoose');
const users = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

});

module.exports = Users = mongoose.model('user', users);