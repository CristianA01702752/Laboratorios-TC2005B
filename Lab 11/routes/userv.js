const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

router.use(bodyParser.urlencoded({extended: false}));

const usernames = ['Lust Chase', 'BeTusToB', 'Iron Revenant', 'NetoEsPlata', 'Innert'];

usernames.forEach(usernames => {
    fs.appendFileSync('usernames.txt', usernames+"\n");
});

router.get('/agregar-username', (request, response, next) => {
    response.send('<h1>Añadir nombre de usuario</h1><form action="agregar-username" method="POST"><input type="text" name="nombre"><input type="submit" value="Registrar usuario"></form>');
});

router.post('/agregar-username', (request, response, next) => {
    usernames.push(request.body.nombre);
    fs.appendFileSync('usernames.txt', request.body.nombre+"\n");
    response.redirect('/userv');
});

router.use( '/', (request, response, next) => {
    let html = '<h1>Usuarios Registrados</h1><ul>';
    usernames.forEach(usernames => {
        html += '<li>' + usernames + '</li>';
    });
    html += '</ul>'
    response.send(html);
})

module.exports = router;
