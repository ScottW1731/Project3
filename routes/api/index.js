const router = require("express").Router();
const studentRoutes = require("./routes");

// student routes
router.use("/routes", studentRoutes);

module.exports = router;
