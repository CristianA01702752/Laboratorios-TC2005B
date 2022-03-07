const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const usernames = ['Lust Chase', 'BeTusToB', 'Iron Revenant', 'NetoEsPlata', 'Innert'];

router.get('/agregar-username', (request, response, next) => {
    response.render('nuevoUser');
});

router.post('/agregar-username', (request, response, next) => {
    usernames.push(request.body.nombre);
    response.redirect('/userv');
});

router.use( '/', (request, response, next) => {
    response.render('usernames', {usernames: usernames});
})

module.exports = router;
