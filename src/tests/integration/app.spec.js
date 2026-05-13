const request = require('supertest');

const app = require('../../app');

describe('App Integration', () => {
    describe('GET /health', () => {
        it('should return API status', async () => {
            const response = await request(app).get('/health');

            expect(response.status).toBe(200);

            expect(response.body).toHaveProperty('success', true);

            expect(response.body).toHaveProperty(
                'message',
                'API is running'
            );
        });
    });
});