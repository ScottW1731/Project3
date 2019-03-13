const router = require("express").Router();
var db = require('../../models');

router.get("/findAll", function (req, res) {
    db.Student.find({})
        .populate("user")
        .then(function (dbUser) {
            // console.log(dbUser[0].user.userName);
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        });
});

router.post("/new", function (req, res) {
    var newStudent = {
        user: req.body.userId
    }

    db.Student
        .create(newStudent)
        .then(function (response) {
            console.log(response);
            res.json(response)
        })
        .catch(function (err) {
            res.json(err)
        })
})

module.exports = router;