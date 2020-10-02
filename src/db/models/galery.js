const mongoose = require('mongoose');
const galerias = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    }
});
module.exports = Galerias = mongoose.model('galeria', galerias);