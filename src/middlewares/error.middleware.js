const logger = require('../config/logger');

const ApiResponse = require('../utils/apiResponse');

function errorMiddleware(error, req, res, next) {
    logger.error({
        message: error.message,
        stack: error.stack,
    });

    const statusCode = error.statusCode || 500;

    return ApiResponse.error(
        res,
        error.message || 'Internal server error',
        statusCode
    );
}

module.exports = errorMiddleware;