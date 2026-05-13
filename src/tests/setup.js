const sequelize = require('../config/database');

require('../models');

beforeAll(async () => {
    await sequelize.authenticate();

    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});