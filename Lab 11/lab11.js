const { response, request } = require('express');
const express = require('express');
const app = express();

const rutasUser = require('./routes/userv');

app.use('/userv', rutasUser);

app.use('/inicio', (request, response, next) => {
    let html = '<h1>Bienvenido a User Vault</h1>';
    html += '<h3>Las rutas son:</h3>';
    html += '<p><ul><li>/inicio</li><li>/userv</li><li>/userv/agregar-username</li><li>/userv/precios</li><li>/userv/intro</li></ul></p>';
    response.send(html);
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(3000);
