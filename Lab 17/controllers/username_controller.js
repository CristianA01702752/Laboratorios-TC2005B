const User = require('../models/username');

exports.getNuevoUser = (request, response, next) => {
    response.render('nuevoUser', {
        titulo: 'Añadir Username',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoUser = (request, response, next) => {
    const nuevoUser = new User(request.body.nombre);
    nuevoUser.save()
    .then(() => {
      response.setHeader( 'Set-Cookie', ['El usuario más reciente =' + nuevoUser.nombre + '; HttpOnly'] );
      response.redirect('/userv');
    })
    .catch(err => console.log(err));
};

exports.get = (request, response, next) => {
    User.fetchAll()
      .then(([rows, fieldData]) => {
          response.render('usernames', {
              nombre_usuario: rows,
              titulo: 'Usuarios',
              isLoggedIn: request.session.isLoggedIn === true ? true : false
          });
      })
      .catch(err => {
          console.log(err);
      });
};
