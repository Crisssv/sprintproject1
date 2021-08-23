const express = require('express');
const router = express.Router();
let users = require('../models/users');
const funcUsers = require('../controllers/users'); 
const middle = require('../middlewares/middleware');




/**
 * @swagger
 * /users:
 *  get:
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
*    - in: "id"
*      name: "id"
*      description: 
*    - in: "username"
*      name: "username"
*      type: string
*      description: 
*      required: true
*    - in: "lastName"
*      name: "lastName"
*      type: string
*      description: 
*      required: true
*    - in: "email"
*      name: "email"
*      type: string
*      description: 
*      required: true
*    - in: "tel"
*      name: "tel"
*      type: string
*      description: 
*      required: true
*    - in: "adress"
*      name: "adress"
*      type: string
*      description: 
*      required: true
*    - in: "password"
*      name: "password"
*      type: string
*      description: 
*      required: true
*    - in: "rol"
*      name: "rol"
*      type: string
*      description: 
*      required: true
*    responses:
*      "405":
*/
router.post('/', function(req,res){
    console.log(req.body);
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



router.post('/users/login', function(req,res){
    
    res.json(funcUsers.login(req.body.username, req.body.password));
    

})













module.exports = router;