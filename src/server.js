require('dotenv').config();

const app = require('./app');

const sequelize = require('./config/database');

const connectMongo = require('./config/mongo');

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log('MySQL connected');

        await connectMongo();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();