const { Sequelize } = require('sequelize');

const env = require('./env');

const sequelize = new Sequelize(
    env.database.name,
    env.database.user,
    env.database.password,
    {
        host: env.database.host,
        dialect: 'mysql',
        logging: false,
    }
);

module.exports = sequelize;