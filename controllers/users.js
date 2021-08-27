let users = require('../models/users');

//NO DUPLICATE EMAIL - E.P.l
const searchEmail = (email) => {

    
    if (users.find(user => user.email == email)) {
        return true;
    }
    else {
        return false;
    }
}

const newUser = (newUser) => {

    if (!searchEmail(newUser.email)) {
        let nUser = {
            "id": users.length + 1,
            "username": newUser.username,
            "nameLastName": newUser.nameLastName,
            "email": newUser.email,
            "phone": newUser.phone,
            "adress": newUser.adress,
            "password": newUser.password,
            "role": "user",
        };
        users.push(nUser);
        return users[users.length - 1];
    } else {
        return "The email already exists"
    }

}

const allUsers = () => {
    return users;
}

const deleteUser = (iduser) => {

    users = users.filter(user => user.id != iduser);
    return "Usuario borrado correctamente";

}

const login = (username, password) => {

    if (users.find(user => ((user.username == username || user.email == username) && (user.password == password)))) {
        return "usuario VALIDO"
    } else {
        return "usuario NO VALIDO";
    }
}

const searchIndex = (userid) => {

    return users.findIndex(user => user.id == userid);

}

const searchAdress = (userid) => {

    return users[searchIndex(userid)].adress;

}

const searchUsername = (userid) => {


    return users[searchIndex(userid)].username;

}

const searchUser = (username) => {

    let userFound = users.find(user => user.username === username);
    if (userFound) {
        return "Usuario Registrado"
    } else {
        return "Usuario no Registrado"
    }

}

const updateUser = (userid, updateUser) => {

    const index = searchIndex(userid);

    let nUser = {
        "id": userid,
        "username": users[index].username,
        "nameLastName": updateUser.nameLastName,
        "email": users[index].email,
        "phone": updateUser.phone,
        "adress": updateUser.adress,
        "password": updateUser.password,
        "role": updateUser.role,
    };
    users[index] = nUser;
    return users[index];


}


exports.newUser = newUser;
exports.login = login;
exports.searchUser = searchUser;
exports.deleteUser = deleteUser;
exports.allUsers = allUsers;
exports.searchUsername = searchUsername;
exports.searchAdress = searchAdress;
exports.updateUser = updateUser;




