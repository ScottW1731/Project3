const router = require("express").Router();
const bookRoutes = require("./task");

// Book routes
router.use("/task", bookRoutes);

module.exports = router;
