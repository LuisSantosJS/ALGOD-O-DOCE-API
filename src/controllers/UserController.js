
const bcrypt = require('bcryptjs');
const Users = require('../db/models/users');

module.exports = {
    async index(request, response) {
        const result = await Users.find()
        response.json(result);
    },
    async create(request, response) {
        const { name, email, password } = request.body;
        var hash = bcrypt.hashSync(password, 8);
        let user = {};
        user.name = name;
        user.email = email;
        user.password = hash;
        const result = await new Users(user).save();
        return response.json(result);

    },
    async update(request, response) {
        const { name, password, email } = request.body;
        var hash = bcrypt.hashSync(password, 8);
        await Users.findOneAndUpdate({ email: email }, { name: name, password: hash });
        const result = await Users.find({ email: email });
        return response.json(result[0]);
    },
    async login(request, response) {
        const { password, email } = request.body;
        const userGet = await Users.find({ email: email });
        if (userGet.length === 0) {
            return response.json({ message: 'error', res: 'Usuário não existe' })
        }
        const hash = userGet[0].password;
        bcrypt.compare(`${password}`, `${hash}`).then(res => {
            if (!res) {
                return response.json({
                    message: 'error',
                    res: 'Senha incorreta!'

                });
            }
            return response.json({ message: 'success', res: userGet[0] })
        });
    }
}