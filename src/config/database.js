const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_db', 'root', 'root', {
    host: 'db',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;