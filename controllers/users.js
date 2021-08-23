let users = require('../models/users');
let products = require('../models/products');


const newUser = (newUser) =>{
    let nUser = [{
        "id": users.length+1,
        "username": newUser.name,
        "nameLastName": newUser.lastName,
        "email": newUser.email,
        "phone": newUser.phone,
        "adress": newUser.adress,
        "password": newUser.password,
        "role": newUser.role,
    }];
    

    users.push(nUser);
    


}

const allUsers = () =>{
    return users;
}

const allProducts = () =>{
    return products;
}

const deleteUser = (id) => {

    users = users.filter(user => user.id != id);
    return "Usuario borrado correctamente";

}

const login = (username, password) => {
    console.log(username);
    let usuariovalido =  users.find(user => (user.username || user.email) == username  && user.password == password);
    
    console.log(usuariovalido);
    if (usuariovalido){
        return "usuariovalido"
    }else{
        return "usuarioinvalido";
    }
}

const searchUser = (username) => {

    let userFound = users.find(user => user.username === username);
    if (userFound){
        return "Usuario Registrado"
    }else{
        return "Usuario no Registrado"
    }

}


exports.newUser = newUser;
exports.login = login;
exports.searchUser = searchUser;
exports.deleteUser = deleteUser;
exports.allUsers = allUsers;
exports.allProducts = allProducts;



