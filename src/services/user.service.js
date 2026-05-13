const bcrypt = require('bcryptjs');

const userRepository = require('../repositories/user.repository');

const ApiError = require('../utils/ApiError');

class UserService {
    async create(data) {
        const userExists = await userRepository.findByEmail(data.email);

        if (userExists) {
            throw new ApiError('User already exists', 409);
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await userRepository.create({
            ...data,
            password: hashedPassword,
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
        };
    }

    async findAll(query) {
        return userRepository.findAll(query);
    }

    async findById(id) {
        const user = await userRepository.findById(id);

        if (!user) {
            throw new ApiError('User not found', 404);
        }

        return user;
    }

    async update(id, data) {
        const user = await userRepository.findById(id);

        if (!user) {
            throw new ApiError('User not found', 404);
        }

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        await userRepository.update(user, data);

        return user;
    }

    async delete(id) {
        const user = await userRepository.findById(id);

        if (!user) {
            throw new ApiError('User not found', 404);
        }

        await userRepository.delete(user);
    }
}

module.exports = new UserService();