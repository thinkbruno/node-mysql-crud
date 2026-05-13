const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema(
    {
        action: {
            type: String,
            required: true,
        },

        method: {
            type: String,
            required: true,
        },

        route: {
            type: String,
            required: true,
        },

        statusCode: {
            type: Number,
            required: true,
        },

        payload: {
            type: Object,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Audit', auditSchema);