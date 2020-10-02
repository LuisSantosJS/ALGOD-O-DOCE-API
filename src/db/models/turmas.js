const mongoose = require('mongoose');
const turmas = new mongoose.Schema({
    name: {
        type: String,
        require: true,
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
module.exports = Turmas = mongoose.model('turma', turmas);