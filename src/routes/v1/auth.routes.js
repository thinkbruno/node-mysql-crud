const { Router } = require('express');

const authController = require('../../controllers/auth.controller');

const authMiddleware = require('../../middlewares/auth.middleware');

const router = Router();

router.post('/login', authController.login);

router.get('/me', authMiddleware, (req, res) => {
    return res.json({
        success: true,
        user: req.user,
    });
});

module.exports = router;