const func = require('../controllers/users'); 


const validateProductId = (req,res,next) =>{
    console.log('producto validado');
    next();

}

const userAdmin = (req,res,next) => {

    req.params.idusername
    next();

}

const auth = (req,res,next) => {

    const userLog = func.login(req.body.username, req.body.password);
    if (userLog){
       res.json({msj:"Usuario valido"}); 
    }else{
       res.json({msj:"Usario no valir"}) 
     }
    next();
}

const registerUser = (req,res,next) =>{

        let userFound = users.find(user => req.body.username === username);
        if (userFound){
            res.json({msj:"Usuario registrado"}); 
        }else{
            res.json({msj:"Usuario no registrado"}); 
        }
    
        next();


}

exports.validateProductId = validateProductId;
exports.auth = auth;
exports.registerUser = registerUser;
exports.userAdmin = userAdmin;