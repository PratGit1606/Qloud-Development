const JWT = require('jsonwebtoken');

const secret = 'QloudDevelopmentSecretKeyMartinMarvan'

function createTokenUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role
    }
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){
    const payload = JWT.verify(token, secret)
    return payload;
}

module.exports = { createTokenUser, validateToken }