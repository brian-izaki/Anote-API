const router = require('express').Router();
const controller = require('../controller/userController');
const validateToken = require('../middlewares/validateToken');

router.get('/user', validateToken, controller.index);
router.post('/user', controller.create);

module.exports = router;
