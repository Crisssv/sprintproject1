const express = require('express');
const router = express.Router();
const funcO = require('../controllers/orders');
const middle = require('../middlewares/middleware');



router.get('/', function(req,res){

    res.json(funcO.allOrders());


})

router.get('/:idusername', middle.registerUser, function(req,res){
    
    
    res.json(funcO.serachOrders(req.params.idusername));


})


router.post('/', middle.registerUser, function (req,res){
    
    funcO.newOrder(req.body);
    res.json({'Orders': orders});
    

})


router.put('/:id', middle.userAdmin, function(req,res){
    
    const changeStatus = funcO.changeStatus(req.params.id,req.body.status);
    res.json(changeStatus);

});

router.delete('/:id',function(req,res){

    

});



module.exports = router;