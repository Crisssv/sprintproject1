const func = require('../controllers/users'); 


function validateProductId(req,res,next){
    console.log('producto validado');
    next();

}

function auth(req,res,next){

    const userLog = func.login(req.body.username, req.body.password);
    if (userLog){
       res.json({msj:"Usuario valido"}); 
    }else{
       res.json({msj:"Usario no valir"}) 
     }
    next();
}

function registerUser (req,res,next){

        let userFound = users.find(user => req.body.username === username);
        if (userFound){
            res.json({msj:"Usuario registrado"}); 
        }else{
            res.json({msj:"Usuario no registrado"}); 
        }
    
        next();


}

module.exports = validateProductId;
module.exports = auth;
module.exports = registerUser;