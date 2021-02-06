const routes = require('express').Router(),
  controller = require('../controller/notesController'),
  validateToken = require('../middlewares/validateToken');

routes.get('/notes', validateToken, controller.index);
routes.post('/notes', validateToken, controller.store);
routes.delete('/notes/:id', validateToken, controller.delete);
routes.put('/notes/:id', validateToken, controller.update);

module.exports = routes;