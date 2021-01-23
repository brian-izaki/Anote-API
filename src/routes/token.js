const routes = require("express").Router();
const controller = require("../controller/tokenController");

routes.post("/token", controller.genToken);

module.exports = routes;