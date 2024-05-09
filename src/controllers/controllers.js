const Pessoa = require('../models/pessoa');

async function getAll(req, res) {
    try {
        const pessoas = await Pessoa.find();
        res.json(pessoas);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensagem: "Ocorreu um erro ao buscar pessoas",
            erro: error
        });
    }
}

async function create(req, res) {
    try {
        const pessoa = new Pessoa(req.body);
        const pessoaCriada = await pessoa.save();
        res.status(201).json(pessoaCriada);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensagem: "Ocorreu um erro ao cadastrar pessoa",
            erro: error
        });
    }
}

async function getById(req, res) {
    try {
        const pessoa = await Pessoa.findById(req.params.id);
        if (!pessoa) {
            return res.status(404).json({ mensagem: "Pessoa não encontrada" });
        }
        res.json(pessoa);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensagem: "Ocorreu um erro ao buscar pessoa",
            erro: error
        });
    }
}

async function update(req, res) {
    try {
        const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pessoa) {
            return res.status(404).json({ mensagem: "Pessoa não encontrada" });
        }
        res.json(pessoa);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensagem: "Ocorreu um erro ao atualizar pessoa",
            erro: error
        });
    }
}

async function remove(req, res) {
    try {
        const pessoa = await Pessoa.findByIdAndDelete(req.params.id);
        if (!pessoa) {
            return res.status(404).json({ mensagem: "Pessoa não encontrada" });
        }
        res.json({ mensagem: "Pessoa deletada com sucesso" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensagem: "Ocorreu um erro ao deletar pessoa",
            erro: error
        });
    }
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    remove
};
