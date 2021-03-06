const router = require("express").Router();
var db = require('../../models');

router.get("/findAll", function (req, res) {
    db.Task.find({})
        .populate("user")
        .then(function (dbUser) {
            // console.log(dbUser[0].user.firstName);
            res.json(dbUser);
        })
        .catch(function (err) {
            res.json(err);
        });
});


router.post("/newTask", function (req, res) {
    var newTask = {
        taskName: req.body.taskName,
        category: req.body.category
    }
    db.Task
        .create(newTask)
        .then(function (response) {
            console.log(response);
            res.json(response)
        })
        .catch(function (err) {
            res.json(err)
        })
})


router.put("/updateTask", function (req, res) {
    db.Task
        .update({ _id: req.body.id }, { $set: { completed: true } })
        .then(function (response) {
            res.json(response)
        })
        .catch(function (err) {
            res.json(err)
        })
})

module.exports = router;

