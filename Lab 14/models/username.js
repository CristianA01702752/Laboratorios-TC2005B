const usernames = ['Lust Chase', 'BeTusToB', 'Iron Revenant', 'NetoEsPlata', 'Innert'];

module.exports = class User {

    constructor(nombre) {
        this.nombre = nombre;
    }

    save() {
        usernames.push(this.nombre);
    }

    static fetchAll() {
        return usernames;
    }

}
