const routes = require('express').Router();
const controller = require('../controller/notesController');
const validateToken = require('../middlewares/validateToken');

routes.get('/notes', validateToken, controller.index);
routes.post('/notes', validateToken, controller.store);
routes.delete('/notes/:id', validateToken, controller.delete);
routes.put('/notes/:id', validateToken, controller.update);

module.exports = routes;
