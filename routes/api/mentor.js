const router = require("express").Router();
var db = require('../../models');

router.get("/find", function (req, res) {
    db.Mentor.find({})
        .populate("user")
        .then(function (dbUser) {
            console.log(dbUser[0].user.firstName);
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        });
});


module.exports = router;