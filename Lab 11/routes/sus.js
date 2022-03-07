const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    let html = '<h1>Precios de suscripciones</h1>';
    html += '<ul><li>Suscripción base: $300</li>';
    html += '<li>Suscripción premium: $500</li>';
    html += '<li>Suscripción deluxe: $700</li>';
    html += '</ul>';
    response.send(html);
});

router.get( '/intro', (request, response, next) => {
    let html = '<h1>User vault</h1>';
    html += '<p>Somos una empresa de almacenamiento online.</p>'
    html += '<p>Para que guardes todo lo que tu pc no puede guardar</p>'
    response.send(html);
});

module.exports = router;
