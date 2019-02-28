var express = require('express');
var router = express.Router();
var db = require('../models');
var userAuthHelper = require('../helpers/helpers.js');
//check helpers.js to see what getSalt, getHash, and generateJWT do
router.post("/new", function(req, res) {
    var salt = userAuthHelper.getSalt(); //generate new salt
    var newUser = { //setup user object
        email: req.body.email.trim().toLowerCase(),
        hash: userAuthHelper.getHash(req.body.password, salt),
        salt: salt
    }
    db.User //create user
        .create(newUser)
        .then(function(response) { //success
            res.json({
                success: true,
                message: "User creation successful",
                token: userAuthHelper.generateJWT(response)
            });
        })
        .catch(function(error) { //failure
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "User creation failed!"
            });
        });
})

router.post("/login", function(req, res) { //attempting to login
    var email = req.body.email;
    var pass = req.body.password;

    db.User
        .findOne({ //look for a user with this email
            where: {
                email: email 
            }
        })
        .then(function(response) {
            if (response) {
                var inputHash = userAuthHelper.getHash(pass, response.salt) //hash the password attempt with found salt
                if (inputHash === response.hash) { //if hashed input is equal to hash in db, login successful
                    res.json({
                        success: true,
                        message: "Login authorized!",
                        token: userAuthHelper.generateJWT(response)
                    });
                } else { //otherwise a failure
                    return res.status(400).json({
                        success: false,
                        message: "Incorrect attempt! Login not authorized!"
                    });
                }
            } else { //could not find this user
                res.status(404).json({
                    success: false,
                    message: "User not found!"
                })
            }
        })
        .catch(function(error) { //some kind of DB error
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Login attempt unsuccessful due to server error."
            })
        })
})

module.exports = router;