const http = require('http');
const usernames = ['Lust Chase', 'BeTusToB', 'Iron Revenant', 'NetoEsPlata', 'Innert'];

const server = http.createServer( (request, response) => {

// rutas:
// /agregar-username, /nombres-registrados, /inicio

    if (request.url == '/') {
      response.setHeader('Content-Type', 'text/html');
      response.write('<!DOCTYPE html>');
      response.write('<html lang="es-mx"><head>');
      response.write('<meta charset="utf-8">');
      response.write('<title>User vault</title>');
      response.write('</head><body>');
      response.write('<h1 id="principal">Bienvenido a User Vault</h1>');
      response.write('<p>Las rutas son:</p>');
      response.write('</body>');
      response.write("<body><p><ul>");
      response.write("<li>/inicio</li>");
      response.write("<li>/nombres-registrados</li>");
      response.write("<li>/agregar-username</li>");
      response.write("</ul></p></body>");
      response.end();
    }

    else if (request.url == "/inicio") {
      response.setHeader('Content-Type', 'text/html');
      response.write("<html>");
      response.write("<head><meta charset='UTF-8'><title>Inicio</title>");
      response.write('</head><body>');
      response.write("<h1>Bienvenido a User Vault</h1>");
      response.write("<p>Esta página sirve para que almacenes los nombres de usuarios</p>");
      response.write('<br><br>');
      response.write('<a href="nombres-registrados">Consulta los nombres que has guardado</a>');
      response.write('<br>');
      response.write('<a href="/">Regresa a consultar las rutas</a>');
      response.write('</body>');
      response.end();
    }

    else if (request.url == "/nombres-registrados") {
      response.setHeader('Content-Type', 'text/html');
      response.write('<!DOCTYPE html>');
      response.write('<html lang="es-mx"><head>');
      response.write('<meta charset="utf-8">');
      response.write('<title>Registrados</title>');
      response.write('</head><body>');
      response.write('<h1 id="principal">User Vault</h1>');
      response.write('<p>Tenemos los siguientes usernames:</p>');
      response.write('<ul>');
      for (let i in usernames) {
          response.write('<li>' + usernames[i] + '</li>');
      }
      response.write('</ul>');
      response.write('<br><br>');
      response.write('<a href="agregar-username">Agrega username</a>');
      response.write('<br>');
      response.write('<a href="inicio">Regresa a Inicio</a>');
      response.write('<br>');
      response.write('<a href="/">Regresa a consultar las rutas</a>');
      response.write('</body>');
      response.end();
    }

   else if (request.url === '/agregar-username' && request.method === 'GET') {
      response.setHeader('Content-Type', 'text/html');
      response.write('<!DOCTYPE html>');
      response.write('<html lang="es-mx"><head>');
      response.write('<title>Registro</title>');
      response.write('<meta charset="utf-8">');
      response.write('</head><body>');
      response.write('<h1 id="principal">User Vault</h1>');
      response.write('<h2>Agrega el username que deseas almacenar:</h2>');
      response.write('<form action="agregar-username" method="POST">');
      response.write('<label for="nombre">Username nuevo: </label>');
      response.write('<input type="text" id="nombre" name="nombre">');
      response.write('<br><br>');
      response.write('<input type="submit" value="Enviar">');
      response.write('</form>');
      response.write('<br><br>');
      response.write('<a href="nombres-registrados">Regresa a nombres registrados</a>');
      response.write('<br>');
      response.write('<a href="inicio">Regresa a Inicio</a>');
      response.write('<br>');
      response.write('<a href="/">Regresa a consultar las rutas</a>');
      response.write('</body>');
      response.end();
  }
  else if (request.url === '/agregar-username' && request.method === 'POST') {
      const datos = [];
      request.on('data', (dato) => {
          datos.push(dato);
      });
      return request.on('end', () => {
          const datos_completos = Buffer.concat(datos).toString();
          const nuevo_dato = datos_completos.split('=')[1];
          usernames.push(nuevo_dato);
          response.setHeader('Content-Type', 'text/html');
          response.write('<!DOCTYPE html>');
          response.write('<html lang="es-mx"><head>');
          response.write('<meta charset="utf-8">');
          response.write('<title>Registrados</title>');
          response.write('</head><body>');
          response.write('<h1 id="principal">User Vault</h1>');
          response.write('<p>Tenemos los siguientes usernames:</p>');
          response.write('<ul>');
          for (let i in usernames) {
              response.write('<li>' + usernames[i] + '</li>');
          }
          response.write('</ul>');
          response.write('<br><br>');
          response.write('<a href="agregar-username">Agrega username</a>');
          response.write('<br>');
          response.write('<a href="inicio">Regresa a Inicio</a>');
          response.write('<br>');
          response.write('<a href="/">Regresa a consultar las rutas</a>');
          response.write('</body>');
          return response.end();
      });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Page not found</title></head>");
        response.write("<body><h1>Error 404: Page not found</h1></body>");
        response.write("</html>");
    }
});

server.listen(4000);
