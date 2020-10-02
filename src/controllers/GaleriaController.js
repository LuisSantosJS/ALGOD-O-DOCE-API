
const Galerias = require('../db/models/galery');

module.exports = {
    async index(request, response) {
        const result = await Galerias.find()
        response.json(result);
    },
    async create(request, response) {
        const {
            description,
            imageURL
        } = request.body;
        const galeria = {
            description,
            imageURL
        }
        const result = await new Galerias(galeria).save();
        response.json(result);
    },
    async update(request, response) {
        const {
            description,
            imageURL,
            id
        } = request.body;
        const updateValue = {
            description,
            imageURL
        }
        Galerias.findOneAndUpdate({ _id: id }, updateValue, {
            new: true,
            upsert: true,
            rawResult: true
        }).then(res => {
            return response.json({ message: 'success', res })
        }).catch((e) => {
            return response.json({ message: 'error', e })
        })
    },
    async delete(request, response) {
        const { id } = request.body;
        Galerias.findByIdAndDelete(id, function (err) {
            if (err) {
                return response.json({ message: 'error' })
            }
            return response.json({ message: 'success' })
        });
    }

}