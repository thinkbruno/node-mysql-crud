const bcrypt = require('bcryptjs');

const userService = require('../../services/user.service');

const userRepository = require('../../repositories/user.repository');

jest.mock('../../repositories/user.repository');

jest.mock('bcryptjs');

describe('UserService', () => {
    describe('create', () => {
        it('should create a user successfully', async () => {
            userRepository.findByEmail.mockResolvedValue(null);

            bcrypt.hash.mockResolvedValue('hashed-password');

            userRepository.create.mockResolvedValue({
                id: 1,
                name: 'Bruno',
                email: 'bruno@test.com',
                createdAt: new Date(),
            });

            const result = await userService.create({
                name: 'Bruno',
                email: 'bruno@test.com',
                password: '123456',
            });

            expect(result).toHaveProperty('id');

            expect(result.email).toBe('bruno@test.com');
        });

        it('should throw error when user already exists', async () => {
            userRepository.findByEmail.mockResolvedValue({
                id: 1,
            });

            await expect(
                userService.create({
                    name: 'Bruno',
                    email: 'bruno@test.com',
                    password: '123456',
                })
            ).rejects.toThrow('User already exists');
        });
    });
});