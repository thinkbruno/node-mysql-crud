const User = require('../models/user.model');

class UserRepository {
    async create(data) {
        return User.create(data);
    }

    async findAll({ page = 1, limit = 10 }) {
        const offset = (page - 1) * limit;

        return User.findAndCountAll({
            limit: Number(limit),
            offset: Number(offset),
            order: [['id', 'DESC']],
        });
    }

    async findById(id) {
        return User.findByPk(id);
    }

    async findByEmail(email) {
        return User.findOne({
            where: {
                email,
            },
        });
    }

    async update(user, data) {
        return user.update(data);
    }

    async delete(user) {
        return user.destroy();
    }
}

module.exports = new UserRepository();