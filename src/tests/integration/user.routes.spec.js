const request = require('supertest');

const app = require('../../app');

const sequelize = require('../../config/database');
const { User } = require('../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('User Routes', () => {
    it('should create a user', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({
                name: 'Bruno',
                email: 'bruno@test.com',
                password: '123456',
            });

        expect(response.status).toBe(201);

        expect(response.body.success).toBe(true);

        expect(response.body.data).toHaveProperty('id');
    });

    it('should fail when email already exists', async () => {
        await request(app)
            .post('/api/v1/users')
            .send({
                name: 'Bruno',
                email: 'duplicate@test.com',
                password: '123456',
            });

        const response = await request(app)
            .post('/api/v1/users')
            .send({
                name: 'Bruno 2',
                email: 'duplicate@test.com',
                password: '123456',
            });

        expect(response.status).toBe(409);

        expect(response.body.success).toBe(false);
    });
});