const mongoose = require('mongoose');
const cardapios = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    data:{
        type: String,
        require: true
    },
    anexo:{
        type: String,
        require: true
    }
});
module.exports = Cardapios = mongoose.model('cardapio', cardapios);