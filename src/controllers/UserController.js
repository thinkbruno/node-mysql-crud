const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.findAll = async (req, res) => {
    try {

        const limit = 10;
        const page = parseInt(req.query.page, 10) || 1;
        const offset = (page - 1) * limit;

        const { count, rows } = await User.findAndCountAll({
            limit: limit,
            offset: offset,
            attributes: { exclude: ['senha'] }
        });

        const totalPages = Math.ceil(count / limit);

        res.json({
            totalItems: count,
            totalPages: totalPages,
            currentPage: page,
            nextPage: page < totalPages ? page + 1 : null,
            users: rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, { where: { id } });

        if (updated) {
            const updatedUser = await User.findByPk(id);
            return res.status(200).json(updatedUser);
        }
        throw new Error('Usuário não encontrado');
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });

        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Usuário não encontrado');
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};