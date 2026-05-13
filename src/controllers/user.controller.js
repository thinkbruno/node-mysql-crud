const asyncHandler = require('../utils/asyncHandler');

const ApiResponse = require('../utils/apiResponse');

const userService = require('../services/user.service');

class UserController {
    create = asyncHandler(async (req, res) => {
        const user = await userService.create(req.body);

        return ApiResponse.success(
            res,
            user,
            'User created successfully',
            201
        );
    });

    findAll = asyncHandler(async (req, res) => {
        const users = await userService.findAll(req.query);

        return ApiResponse.success(
            res,
            users,
            'Users retrieved successfully'
        );
    });

    findById = asyncHandler(async (req, res) => {
        const user = await userService.findById(req.params.id);

        return ApiResponse.success(
            res,
            user,
            'User retrieved successfully'
        );
    });

    update = asyncHandler(async (req, res) => {
        const user = await userService.update(req.params.id, req.body);

        return ApiResponse.success(
            res,
            user,
            'User updated successfully'
        );
    });

    delete = asyncHandler(async (req, res) => {
        await userService.delete(req.params.id);

        return ApiResponse.success(
            res,
            null,
            'User deleted successfully',
            200
        );
    });
}

module.exports = new UserController();