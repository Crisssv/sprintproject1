const express = require('express');
const router = express.Router();
let products = require('../models/products');
const middle = require('../middlewares/middleware');


router.get('/', function(req,res){

    res.json({'products':products})


})

router.post('/',  function (req,res){
   
    products.push(req.body);
    res.json({'products':products})
    

})

module.exports = router;