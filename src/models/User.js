const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false }
}, {
    hooks: {
        beforeCreate: async (user) => {
            user.senha = await bcrypt.hash(user.senha, 10);
        }
    }
});

module.exports = User;