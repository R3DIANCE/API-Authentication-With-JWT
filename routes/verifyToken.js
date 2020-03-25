require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verifiedToken;
        next();
    } catch(err) {
        res.status(400).send('Invalid Token');
    }
};