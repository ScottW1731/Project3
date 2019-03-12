const router = require("express").Router();
const jwt = require('express-jwt');

router.use("/validateuser", jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
}));

router.get("/validateuser", function (req, res) {
    res.json({
        message: "logged in successfully!"
    });
});

module.exports = router;