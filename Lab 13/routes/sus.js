const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    response.render('precioSuscripciones');
});

router.use( '/', (request, response, next) => {
    response.render('suscripciones');
});

module.exports = router;
