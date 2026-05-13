const asyncHandler = require('../utils/asyncHandler');

const ApiResponse = require('../utils/apiResponse');

const authService = require('../services/auth.service');

class AuthController {
    login = asyncHandler(async (req, res) => {
        const result = await authService.login(
            req.body.email,
            req.body.password
        );

        return ApiResponse.success(
            res,
            result,
            'Login successful'
        );
    });
}

module.exports = new AuthController();