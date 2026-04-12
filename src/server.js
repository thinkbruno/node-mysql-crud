const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3000;


async function startServer() {
    try {

        await sequelize.sync({ force: false });
        console.log('Conexão com o banco estabelecida com sucesso.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Não foi possível conectar ao banco:', error);

        setTimeout(startServer, 5000);
    }
}

startServer();