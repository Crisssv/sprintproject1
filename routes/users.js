const express = require('express');
const router = express.Router();
let users = require('../models/users');
const funcUsers = require('../controllers/users'); 



router.get('/', function(req,res){

    res.json({msj:"Users: ",users})
})

router.post('/', function(req,res){

    funcUsers.newUser(req.body);
    res.json({msj:'New User:',users})

})

router.post('/login', function(req,res){
    
    res.json(funcUsers.login(req.body.username, req.body.password));
    

})













module.exports = router;