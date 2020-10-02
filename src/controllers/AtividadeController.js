
const Atividades = require('../db/models/atividades');

module.exports = {
    async index(request, response) {
        const result = await Atividades.find()
        response.json(result);
    },
    async create(request, response) {
        const {
            description,
            name,
            imageURL,
            initialDate,
            endDate
        } = request.body;
        const atividade = {
            description,
            name,
            imageURL,
            initialDate,
            endDate
        }
        const result = await new Atividades(atividade).save();
        response.json(result);
    },
    async update(request, response) {
        const {
            description,
            name,
            imageURL,
            initialDate,
            endDate,
            id
        } = request.body;
        const updateValue = {
            description,
            name,
            imageURL,
            initialDate,
            endDate,
        };
        Atividades.findOneAndUpdate({ _id: id }, updateValue, {
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
        Atividades.findByIdAndDelete(id, function (err) {
            if (err) {
                return response.json({ message: 'error' })
            }
            return response.json({ message: 'success' })
        });
    }

}