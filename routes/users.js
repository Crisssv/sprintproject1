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
*    - name : "username"
*      description: "name" 
*      in: formData
*      required: true
*      type: string 
*    - name : "nameLastName"
*      description: "lastName"
*      in: formData
*      required: true
*      type: string 
*    - name : "email"
*      description: "email"
*      in: formData
*      required: true
*      type: string  
*    - name : "phone"
*      description: "phone"
*      in: formData
*      required: true
*      type: integer 
*    - name : "adress"
*      description: "adress"
*      in: formData
*      required: true
*      type: string
*    - name : "password"
*      description: "password"
*      in: formData
*      required: true
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/


router.post('/', function(req,res){
    
    res.json(funcUsers.newUser(req.body));

})

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
*      required: true
*      type: string 
*    - name : "password"
*      description: "password"
*      in: formData
*      required: true
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.post('/login', function(req,res){
    
    res.json(funcUsers.login(req.body.username, req.body.password));
    

})



router.get('/:id/allOrders', middle.registerUser,  function(req,res){

    res.json(funcUsers.allProducts());
})

/**
* @swagger
* /users/{iduser}:
*  delete:
*    tags:
*    - "User"
*    summary: ""
*    description: "Delete user"
*    operationId: "deleteUser"
*    paths:
*    /users/{iduser}:
*    consumes:
*    produces:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.delete('/:iduser',function(req,res){

    res.json(funcUsers.deleteUser(req.params.iduser));

});

/**
* @swagger
* /users/{iduser}:
*  put:
*    tags:
*    - "User"
*    summary: ""
*    description: "Update user"
*    operationId: "updateUser"
*    paths:
*    /users/{iduser}:
*    consumes:
*    produces:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "nameLastName"
*      description: "nameLastName"
*      in: formData
*      required: true
*      type: string 
*    - name : "phone"
*      description: "phone"
*      in: formData
*      required: true
*      type: integer 
*    - name : "adress"
*      description: "adress"
*      in: formData
*      required: true
*      type: string
*    - name : "password"
*      description: "password"
*      in: formData
*      required: true
*      type: string
*    - name : "role"
*      description: "role"
*      in: formData
*      required: true
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:iduser', function(req,res){

res.json(funcUsers.updateUser(req.params.iduser,req.body));

});















module.exports = router;