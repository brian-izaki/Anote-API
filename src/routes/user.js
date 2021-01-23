const router = require("express").Router(),
  controller = require("../controller/userController");

router.get("/user", controller.index)
router.post("/user", controller.create)

module.exports = router;