const routes = require('express').Router();
const notes = require('./notes');
const user = require('./user');
const token = require('./token');

routes.use('/', notes);
routes.use('/', user);
routes.use('/', token);

module.exports = routes;
