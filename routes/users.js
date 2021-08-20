const express = require('express');
const router = express.Router();
let users = require('../models/users');
const funcUsers = require('../controllers/users'); 
const middle = require('../middlewares/middleware');




/**
 * @swagger
 * /users:
 *  get:
 *
 */
router.get('/users', function(req,res){
    res.status(201).send();
    res.json(funcUsers.allUsers());
})

router.post('/users', function(req,res){
    
    funcUsers.newUser(req.body);
    res.json({msj:'New User:',users})

})

router.get('/users/:id/allOrders', middle.registerUser,  function(req,res){

    res.json(funcUsers.allProducts());
})


router.delete('/users/:id',function(req,res){

    res.json(funcUsers.deleteUser(req.params.id));

});

router.put('/users/:iduser/orders/:idorder', middle.userAdmin, function(req,res){



});



router.post('/users/login', function(req,res){
    
    res.json(funcUsers.login(req.body.username, req.body.password));
    

})













module.exports = router;