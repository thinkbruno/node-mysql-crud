const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userRepository = require('../repositories/user.repository');

const ApiError = require('../utils/ApiError');

class AuthService {
    async login(email, password) {
        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new ApiError('Invalid credentials', 401);
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            throw new ApiError('Invalid credentials', 401);
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d',
            }
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    }
}

module.exports = new AuthService();