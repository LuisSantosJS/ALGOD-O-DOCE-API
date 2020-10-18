const mongoose = require('mongoose');
const atividades = new mongoose.Schema({
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
        require: true,
         
        
    },
    initialDate: {
        type: String,
        require: true
    },
    endDate: {
        type: String,
        require: true
    }

});
module.exports = Atividades = mongoose.model('atividade', atividades);