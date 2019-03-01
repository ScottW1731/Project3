const router = require("express").Router();
const taskController = require("../../controllers/taskControllers"); 

router.route("/")
  .get(taskController.findAll)
  .post(taskController.create);

router
  .route("/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

module.exports = router;