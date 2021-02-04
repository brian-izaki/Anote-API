const routes = require("express").Router(),
  notes = require("./notes"),
  user = require("./user"),
  token = require("./token");

routes.use("/", notes);
routes.use("/", user);
routes.use("/", token);

module.exports = routes;
