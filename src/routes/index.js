const { Router } = require("express")
const controller = require("../controller/index");

const routes = Router();

routes.get('/', controller.inicio)

module.exports = routes;