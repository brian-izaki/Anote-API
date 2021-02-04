const router = require("express").Router(),
  controller = require("../controller/userController"),
  validateToken = require("../middlewares/validateToken");

router.get("/user", validateToken, controller.index)
router.post("/user", controller.create)

module.exports = router;