const router = require("express").Router();
const userRoutes = require("./userRoute");
const validateRoutes = require("./validateUser");
const mentorRoutes = require("./mentorRoute");
const studentRoutes = require("./studentRoute");
const taskRoutes = require("./taskRoute");
const dayRoutes = require("./dayRoute");


// authorize user
router.use("/user", userRoutes);
// validate user
router.use("/", validateRoutes);
// mentor
router.use("/mentor", mentorRoutes);
// student
router.use("/student", studentRoutes);
// task
router.use("/task", taskRoutes);
// day
// router.use("/day", dayRoutes);
router.use("/day", dayRoutes)

module.exports = router;
