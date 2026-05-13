const Audit = require('../models/audit.model');

async function auditMiddleware(req, res, next) {
    const originalSend = res.send;

    res.send = function (body) {
        Audit.create({
            action: `${req.method} ${req.originalUrl}`,
            method: req.method,
            route: req.originalUrl,
            statusCode: res.statusCode,
            payload: req.body,
        }).catch(console.error);

        return originalSend.call(this, body);
    };

    next();
}

module.exports = auditMiddleware;