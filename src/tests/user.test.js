const request = require('supertest');
const app = require('../app');

describe('User API - CRUD com Paginação', () => {
    let userId;
    // Email único por execução de teste para evitar conflito com o BD real/seed
    const uniqueEmail = `test-${Date.now()}@api.com`;


    it('Deve criar um novo usuário com sucesso', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                nome: "Bruno Teste",
                email: uniqueEmail,
                senha: "123"
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        userId = res.body.id; // Guardar o ID para os próximos testes
    });


    it('Deve retornar erro 400 para email já cadastrado', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                nome: "Outro Nome",
                email: uniqueEmail, // Usando o mesmo email do teste anterior
                senha: "456"
            });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });


    it('Deve listar usuários seguindo a estrutura de paginação', async () => {
        const res = await request(app).get('/users?page=1');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
        expect(res.body).toHaveProperty('totalItems');
        expect(res.body).toHaveProperty('currentPage');

        // verificar se o campo 'users' é o array de fato
        expect(Array.isArray(res.body.users)).toBeTruthy();
        expect(res.body.users.length).toBeLessThanOrEqual(10);
    });


    it('Deve atualizar o nome do usuário criado', async () => {
        const res = await request(app)
            .put(`/users/${userId}`)
            .send({
                nome: "Bruno Ramos Atualizado"
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.nome).toBe("Bruno Ramos Atualizado");
    });


    it('Deve deletar o usuário criado', async () => {
        const res = await request(app).delete(`/users/${userId}`);
        expect(res.statusCode).toEqual(204);
    });


    it('Deve retornar 404 ao buscar usuário inexistente', async () => {
        const res = await request(app).get('/users/999999');
        // Se você não criou a rota GET por ID ainda, este teste pode falhar/retornar 404 por padrão do Express
        expect(res.statusCode).toEqual(404);
    });
});