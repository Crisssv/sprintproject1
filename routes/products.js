const express = require('express');
const router = express.Router();
let products = require('../models/products');
const middle = require('../middlewares/middleware');

/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - "Product"
 *    description: lista de todos los usuarios de la base de datos
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/', function(req,res){

    res.json({'products':products})


})

router.post('/',  function (req,res){
   
    products.push(req.body);
    res.json({'products':products})
    

})

module.exports = router;