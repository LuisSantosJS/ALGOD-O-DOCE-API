
const Cardapios = require('../db/models/cadapios');
const jwt = require('jsonwebtoken');
module.exports = {
    async index(request, response) {
        const result = await Cardapios.find()
        response.json(result);
    },
    async create(request, response) {
        const token = request.headers['x-access-token'];
        if (!token) return response.status(401).json({ message: 'error', res: 'No token provided.' });
        jwt.verify(token, process.env.SECRET || 'issosecreto', function (err, decoded) {
            if (err) return response.status(500).json({ message: 'error', res: 'Failed to authenticate token.' });
        })
        const {
            description,
            name,
            data
        } = request.body;
        const cardapio = {
            description,
            name,
            data
        }
        const result = await new Cardapios(cardapio).save();
        response.json(result);
    },
    async delete(request, response) {
        const token = request.headers['x-access-token'];
        if (!token) return response.status(401).json({ message: 'error', res: 'No token provided.' });
        jwt.verify(token, process.env.SECRET || 'issosecreto', function (err, decoded) {
            if (err) return response.status(500).json({ message: 'error', res: 'Failed to authenticate token.' });
        })
        const { id } = request.body;
        Cardapios.findByIdAndDelete(id, function (err) {
            if (err) {
                return response.json({ message: 'error' })
            }
            return response.json({ message: 'success' })
        });
    },
    async update(request, response) {
        const token = request.headers['x-access-token'];
        if (!token) return response.status(401).json({ message: 'error', res: 'No token provided.' });
        jwt.verify(token, process.env.SECRET || 'issosecreto', function (err, decoded) {
            if (err) return response.status(500).json({ message: 'error', res: 'Failed to authenticate token.' });
        })
        const {
            description,
            name,
            data,
            id
        } = request.body;
        const updateValue = {
            description,
            name,
            data
        }
        Cardapios.findOneAndUpdate({ _id: id }, updateValue, {
            new: true,
            upsert: true,
            rawResult: true
        }).then(res => {
            return response.json({ message: 'success', res })
        }).catch((e) => {
            return response.json({ message: 'error', e })
        })
    }
};