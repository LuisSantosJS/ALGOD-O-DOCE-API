
const Portifolios = require('../db/models/portifolio');
const jwt = require('jsonwebtoken');
module.exports = {
    async index(request, response){
        const result = await Portifolios.find()
        response.json(result);
    },
    async create(request, response){
        const token = request.headers['x-access-token'];
        if (!token) return response.status(401).json({ message: 'error', res: 'No token provided.' });
        jwt.verify(token, process.env.SECRET || 'issosecreto', function (err, decoded) {
            if (err) return response.status(500).json({ message: 'error', res: 'Failed to authenticate token.' });
        });

        const {
            description,
            name,
            imageURL
        } = request.body;
        const portifolio = {
            description,
            name,
            imageURL
        }
        const result = await new Portifolios(portifolio).save();
        response.json(result);
    }
}