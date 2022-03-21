const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    response.render('precioSuscripciones', {
      isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

router.use( '/', (request, response, next) => {
    response.render('suscripciones',{
      isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

module.exports = router;
