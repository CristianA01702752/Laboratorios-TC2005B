const db = require('../util/database');

module.exports = class User {

    constructor(nombre_usuario) {
        this.nombre = nombre_usuario;
    }

    save() {
      return db.execute('INSERT INTO datos (nombre_usuario) VALUES (?)',
        [this.nombre]);
    }

    static fetchAll() {
        return db.execute('SELECT nombre_usuario FROM datos');
    }

}
