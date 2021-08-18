const express = require('express');
const router = express.Router();
let users = require('../models/users');
const funcUsers = require('../controllers/users'); 


/**
 * @swagger
 * /users
 *   get:
 *     description: lista todos los users
 *       responses: 
 *         200: 
 *         description: Sucess
 */


router.get('/users', function(req,res){

    res.json(users);
})

router.post('/users', function(req,res){

    funcUsers.newUser(req.body);
    res.json({msj:'New User:',users})

})

router.post('/login', function(req,res){
    
    res.json(funcUsers.login(req.body.username, req.body.password));
    

})













module.exports = router;