const user = require('../models/username');

exports.getNuevoUser = (request, response, next) => {
    response.render('nuevoUser', {
        titulo: 'Añadir Username'
    });
};

exports.postNuevoUser = (request, response, next) => {
    const nuevoUser = new user(request.body.nombre);
    nuevoUser.save();
    response.redirect('/userv');
}

exports.get = (request, response, next) => {
    const usernames = user.fetchAll();
    response.render('usernames', {
        usernames: usernames,
        titulo: 'Usuarios'
    });
};
