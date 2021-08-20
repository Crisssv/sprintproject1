const express = require('express');
const router = express.Router();
const funcO = require('../controllers/orders');
const middle = require('../middlewares/middleware');



router.get('/orders', function(req,res){

    res.json(funcO.allOrders());


})

router.get('/orders/:idusername', function(req,res){
    
    
    res.json(funcO.serachOrders(req.params.idusername));


})


router.post('/orders',  function (req,res){
    
    funcO.newOrder(req.body);
    res.json({'Orders': orders});
    

})


router.put('/orders/:id', middle.userAdmin, function(req,res){
    
    const changeStatus = funcO.changeStatus(req.params.id,req.body.status);
    res.json(changeStatus);

});

router.delete('/orders/:id',function(req,res){

    

});



module.exports = router;