const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});

const Pessoa = mongoose.model('Pessoa', schema);

module.exports = Pessoa;
