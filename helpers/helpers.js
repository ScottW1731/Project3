var crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports = {
    getHash: function(password, salt) {
        //encrypts password with salt. this is a one way encryption. it can not be reversed.
        return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    },
    getSalt: function() {
        //returns a random 16 character string
        return crypto.randomBytes(16).toString("hex");
    },
    generateJWT: function(user) {
        //generates a json web token using the user object it is passed. we can store any kind of information in this token
        var expire = new Date();
        expire.setDate(expire.getDate() + 7);
        var token = jwt.sign({
            id: user.id,
            email: user.email,
            exp: expire.getTime()/1000
        }, process.env.JWT_SECRET);
        return token;
    }
}