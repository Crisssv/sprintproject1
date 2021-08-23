const express = require('express');
const router = express.Router();
let users = require('../models/users');
const funcUsers = require('../controllers/users'); 
const middle = require('../middlewares/middleware');




/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - "User"
 *    description: lista de todos los usuarios de la base de datos
 *    responses:
 *      200:
 *        description: Success
 */



router.get('/', function(req,res){
   res.json(funcUsers.allUsers());
})
/**
* @swagger
* /users:
*  post:
*    tags:
*    - "User"
*    summary: "Add New User"
*    description: "Add new user"
*    operationId: "addUser"
*    consumes:
*    produces:
*    parameters:
*    - name : "id"
*      description: "id"
*      in: formData
*      required: 
*      type: string  
*    - name : "username"
*      description: "name" 
*      in: formData
*      required:
*      type: string 
*    - name : "nameLastName"
*      description: "lastName"
*      in: formData
*      required:
*      type: string 
*    - name : "email"
*      description: "email"
*      in: formData
*      required:
*      type: string  
*    - name : "phone"
*      description: "phone"
*      in: formData
*      required:
*      type: string 
*    - name : "adress"
*      description: "adress"
*      in: formData
*      required:
*      type: string
*    - name : "password"
*      description: "password"
*      in: formData
*      required:
*      type: string
*    - name : "role"
*      description: "role"
*      in: formData
*      required:
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/


router.post('/', function(req,res){
    funcUsers.newUser(req.body);
    res.json({msj:'New User:',users})

})

router.get('/:id/allOrders', middle.registerUser,  function(req,res){

    res.json(funcUsers.allProducts());
})


router.delete('/:id',function(req,res){

    res.json(funcUsers.deleteUser(req.params.id));

});

router.put('/:iduser/orders/:idorder', middle.userAdmin, function(req,res){



});

/**
* @swagger
* /users/login:
*  post:
*    tags:
*    - "User"
*    summary: "Login"
*    description: "Login"
*    operationId: "Login"
*    consumes:
*    produces:
*    parameters:
*    - name : "username"
*      description: "username or email" 
*      in: formData
*      required:
*      type: string 
*    - name : "password"
*      description: "password"
*      in: formData
*      required:
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.post('/login', function(req,res){
    
    res.json(funcUsers.login(req.body.username, req.body.password));
    

})













module.exports = router;