const router = require("express").Router();
const userRoutes = require("./userRoute");
const validateRoutes = require("./validateUser");
const mentorRoutes = require("./mentorRoute");
const studentRoutes = require("./studentRoute");
const taskRoutes = require("./taskRoute");

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

module.exports = router;
