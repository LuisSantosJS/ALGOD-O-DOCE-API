const Turmas = require('../db/models/turmas');

module.exports = {
    async index(request, response) {
        const result = await Turmas.find()
        response.json(result);
    },
    async create(request, response) {
        const { name, description, imageURL } = request.body;
        const turma = {
            name,
            description,
            imageURL
        }
        const result = await new Turmas(turma).save();
        response.json(result);
    },
    async delete(request, response) {
        const { id } = request.body;
        Turmas.findByIdAndDelete(id, function (err) {
            if (err) {
                return response.json({ message: 'error' })
            }
            return response.json({ message: 'success' })
        });
    },
    async update(request, response) {
        const { description, name, imageURL, id } = request.body;
        const updateValue = {
            description,
            name,
            imageURL
        }
        Turmas.findOneAndUpdate({ _id: id }, updateValue, {
            new: true,
            upsert: true,
            rawResult: true
        }).then(res => {
            return response.json({ message: 'success', res })
        }).catch((e) => {
            return response.json({ message: 'error', e })
        })
    }
}