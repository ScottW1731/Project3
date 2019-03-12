const router = require("express").Router();
const userRoutes = require("./user");
const validateRoutes = require("./validateUser");
const mentorRoutes = require("./mentor");
const studentRoutes = require("./student");

// authorize user
router.use("/user", userRoutes);
// validate user
router.use("/", validateRoutes);
// mentor
router.use("/mentor", mentorRoutes);
// student
router.use("/student", studentRoutes);

module.exports = router;
