/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: List users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users list
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Find user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User updated
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User deleted
 */

const { Router } = require('express');

const userController = require('../../controllers/user.controller');

const validationMiddleware = require('../../middlewares/validation.middleware');

const {
    createUserSchema,
    updateUserSchema,
} = require('../../validators/user.validator');

const userRoutes = Router();

userRoutes.post(
    '/',
    validationMiddleware(createUserSchema),
    userController.create
);

userRoutes.get('/', userController.findAll);

userRoutes.get('/:id', userController.findById);

userRoutes.put(
    '/:id',
    validationMiddleware(updateUserSchema),
    userController.update
);

userRoutes.delete('/:id', userController.delete);

module.exports = userRoutes;