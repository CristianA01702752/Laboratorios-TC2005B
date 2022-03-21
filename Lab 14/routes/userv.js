const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const usernameC = require('../controllers/username_controller');

router.use(bodyParser.urlencoded({extended: false}));
router.get('/agregar-username', usernameC.getNuevoUser);
router.post('/agregar-username', usernameC.postNuevoUser);
router.get( '/', usernameC.get);

module.exports = router;
