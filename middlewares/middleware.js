const func = require('../controllers/users'); 


function validateProductId(req,res,next){
    console.log('producto validado');
    next();

}

function auth(req,res,next){

    const userLog = func.login(req.body.username, req.body.password);
    if (userLog){
        
    }else{ }
    next();
}

function registerUser (req,res,next){



}

module.exports = validateProductId;