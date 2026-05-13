const jwt = require('jsonwebtoken');

const ApiError = require('../utils/ApiError');

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new ApiError('Token not provided', 401);
    }

    const [, token] = authHeader.split(' ');

    if (!token) {
        throw new ApiError('Invalid token', 401);
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();
    } catch (error) {
        throw new ApiError('Token invalid or expired', 401);
    }
}

module.exports = authMiddleware;