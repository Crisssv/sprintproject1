let users = require('../models/users');



const newUser = (newUser) =>{

    return users.push(newUser);


}

const login = (username, password) => {
    let usuariovalido =  users.find(user => user.username === username && user.password === password);

    if (usuariovalido){
        return "usuariovalido"
    }else{
        return "usuarioinvalido";
    }
}


exports.newUser = newUser;
exports.login = login;


