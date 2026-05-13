const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const errorMiddleware = require('./middlewares/error.middleware');
const auditMiddleware = require('./middlewares/audit.middleware');
const userRoutes = require('./routes/v1/user.routes');

const authRoutes = require('./routes/v1/auth.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(auditMiddleware);
app.get('/health', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'API is running',
    });
});

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/auth', authRoutes);

app.use(errorMiddleware);

module.exports = app;