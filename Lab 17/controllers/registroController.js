const { request } = require("express");

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicia sesion',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    })
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;
    response.redirect('/');
};

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/suscripcion/precios');
    });
};
