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
 *    summary: "READ "
 *    operationId: "READ"
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
*    summary: "CREATE - EP.a"
*    operationId: "CREATE"
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
* /users/{iduser}:
*  delete:
*    tags:
*    - "User"
*    summary: "DELETE"
*    description: "DELETE"
*    operationId: "DELETE"
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
*    summary: "UPDATE"
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





/**
* @swagger
* /users/login:
*  post:
*    tags:
*    - "User"
*    summary: "LOGIN - E.P.b"
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




















module.exports = router;