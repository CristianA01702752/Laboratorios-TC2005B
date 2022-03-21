const user = require('../models/username');

exports.getNuevoUser = (request, response, next) => {
    response.render('nuevoUser', {
        titulo: 'Añadir Username',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoUser = (request, response, next) => {
    const nuevoUser = new user(request.body.nombre);
    nuevoUser.save();
    response.setHeader( 'Set-Cookie', ['El usuario más reciente =' + nuevoUser.nombre + '; HttpOnly'] );
    response.redirect('/userv');
}

exports.get = (request, response, next) => {
    const usernames = user.fetchAll();
    response.render('usernames', {
        usernames: usernames,
        titulo: 'Usuarios',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};
