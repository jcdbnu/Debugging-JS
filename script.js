function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }    
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Jean', 'Admin');
usuarios.set('Carlos', 'User');
usuarios.set('Gabriel', 'User');

console.log(getAdmins(usuarios));
