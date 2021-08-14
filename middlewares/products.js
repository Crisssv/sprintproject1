function validateProductId(req,res,next){
    console.log('producto validado');
    next();

}

module.exports = validateProductId;