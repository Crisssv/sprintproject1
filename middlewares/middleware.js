const func = require('../controllers/users'); 
const users = require('../models/users');


const validateProductId = (req,res,next) =>{
    console.log('producto validado');
    next();

}

const userAdmin = (req,res,next) => {

    let userAdmin = users.filter(user => user.id == req.params.iduser);
    
    if (userAdmin[0].role == 1){
        return next();
    }else{
        return res.sendStatus(401);
    }

          
      

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
       
        let userFound = users.filter(user => user.id == req.params.iduser);
    
        if (userFound.length > 0){
            return next(); 
        }else{
            return res.sendStatus(401); 
        }
    
        


}

exports.validateProductId = validateProductId;
exports.auth = auth;
exports.registerUser = registerUser;
exports.userAdmin = userAdmin;