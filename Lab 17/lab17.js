const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const rutasUser = require('./routes/userv');
const rutasSus = require('./routes/sus');
const registro = require('./routes/registro')

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'abcdef',
    resave: false,
    saveUninitialized: false,
}));

app.use('/userv', rutasUser);
app.use('/suscripcion', rutasSus);
app.use('/registro', registro)

app.use( '/inicio', (request, response, next) => {
    response.render('inicio', {
      isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(8080);
