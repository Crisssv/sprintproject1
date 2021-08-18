const express = require('express');
const router = express.Router();
const funcO = require('../controllers/orders');
const middle = require('../middlewares/middleware');

let orders = require('../models/orders');

router.get('/orders', function(req,res){

    res.json({msj:'Orders: ',orders});


})

router.get('/orders/:idusername', function(req,res){
    
    
    res.json(funcO.serachOrders(req.params.idusername));


})


router.post('/',  function (req,res){
    
    products.push(req.body);
    res.json({'Orders': orders});
    

})

module.exports = router;