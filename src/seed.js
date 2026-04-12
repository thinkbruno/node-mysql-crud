const User = require('./models/User');
const sequelize = require('./config/database');

async function seedUsers() {
    try {
        // Conecta ao banco
        await sequelize.authenticate();
        console.log('Conectado para o seeding...');

        const usuarios = [];

        // Gerando 50 usuários de exemplo
        for (let i = 1; i <= 50; i++) {
            usuarios.push({
                nome: `Usuário Teste ${i}`,
                email: `teste${i}@provedor.com`,
                senha: `senha123` // O hook beforeCreate no Model vai criptografar cada uma
            });
        }

        console.log(`Iniciando inserção de ${usuarios.length} usuários...`);

        // bulkCreate insere tudo de uma vez
        // individualHooks: true garante que a criptografia do Model funcione para cada item
        await User.bulkCreate(usuarios, { individualHooks: true });

        console.log('✅ Usuários inseridos com sucesso!');
        process.exit(0); // Fecha o script
    } catch (error) {
        console.error('❌ Erro ao inserir dados:', error);
        process.exit(1);
    }
}

seedUsers();