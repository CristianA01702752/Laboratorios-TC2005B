const express = require('express');
const app = express();
const rutasUser = require('./routes/userv');
const rutasSus = require('./routes/sus');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/userv', rutasUser);
app.use('/suscripcion', rutasSus);

app.use( '/inicio', (request, response, next) => {
    response.render('inicio');
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(3000);
