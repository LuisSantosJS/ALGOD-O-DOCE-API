const mongoose = require('mongoose');
const portifolios = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    }
});
module.exports = Portifolios = mongoose.model('portifolio', portifolios);