process.env.NODE_ENV = 'test';

const sequelize = require('../config/database');

require('../models');

sequelize
    .sync({ force: true })
    .then(() => {
        console.log('tables created');
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });