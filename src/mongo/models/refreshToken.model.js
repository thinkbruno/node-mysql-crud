const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true,
        },

        token: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    'RefreshToken',
    refreshTokenSchema
);