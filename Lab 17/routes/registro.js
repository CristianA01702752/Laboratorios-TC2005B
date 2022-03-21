const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registroController');

router.get('/login', registerController.getLogin);
router.post('/login', registerController.postLogin);
router.get('/logout', registerController.getLogout);

module.exports = router;
