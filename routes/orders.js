const express = require('express');
const router = express.Router();
const funcO = require('../controllers/orders');
const middle = require('../middlewares/middleware');


/**
 * @swagger
 * /orders:
 *  get:
 *    tags:
 *    - "Order"
 *    description: All orders 
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/', function(req,res){

    res.json(funcO.allOrders());

})



/**
* @swagger
* /orders/{iduser}:
*  get:
*    tags:
*    - "Order"
*    summary: ""
*    description: "Show All Orders of the user"
*    operationId: "ShowAllOrdersOfTheUser"
*    paths:
*    /orders/{iduser}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required:
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.get('/:iduser', middle.registerUser, function(req,res){
    
    
    res.json(funcO.searchOrders(req.params.iduser));


})

/**
* @swagger
* /orders/{iduser}:
*  post:
*    tags:
*    - "Order"
*    summary: ""
*    description: "Make an Order"
*    operationId: "makeOrder"
*    paths:
*    /orders/{iduser}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required:
*      type: integer 
*    - name : "detail"
*      description: "detail" 
*      in: formData
*      required:
*      type: array 
*    - name : "method"
*      description: "method"
*      in: formData
*      required:
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/
router.post('/:iduser', middle.registerUser, function (req,res){
    
    res.json(funcO.newOrder(req.body,req.params.iduser));
    

})

/**
* @swagger
* /orders/admin/{iduser}:
*  get:
*    tags:
*    - "Order"
*    summary: ""
*    description: "Show All Orders ADMIN"
*    operationId: "Show All Orders Admin"
*    paths:
*    /orders/admin/{iduser}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required:
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.get('/admin/:iduser', middle.userAdmin, function(req,res){

    res.json(funcO.allOrders());


})

/**
* @swagger
* /orders/{iduser}/{idorder}:
*  put:
*    tags:
*    - "Order"
*    summary: ""
*    description: "Admin Change Status"
*    operationId: "AdminChangeStatus"
*    paths:
*    /orders/{iduser}/{idorder}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required:
*      type: integer 
*    - name : "idorder"
*      description: "idorder" 
*      in: path
*      required:
*      type: integer 
*    - name : "status"
*      description: "status" 
*      in: formData
*      required:
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:iduser/:idorder', middle.userAdmin, function(req,res){
    
    res.json(funcO.changeStatus(req.params.idorder,req.body.status));

});

router.delete('/:id',function(req,res){

    

});

/**
* @swagger
* /orders/changeOrder/{iduser}/{idorder}:
*  put:
*    tags:
*    - "Order"
*    summary: ""
*    description: "User Change Order"
*    operationId: "UserChangeStatus"
*    paths:
*    /orders/changeOrder/{iduser}/{idorder}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required:
*      type: integer 
*    - name : "idorder"
*      description: "idorder" 
*      in: path
*      required:
*      type: integer 
*    - name : "detail"
*      description: "detail" 
*      in: formData
*      required:
*      type: array 
*    - name : "method"
*      description: "method"
*      in: formData
*      required:
*      type: string
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/changeOrder/:iduser/:idorder', middle.registerUser, function(req,res){
  
    res.json(funcO.changeOrder(req.params.idorder,req.body));

});




module.exports = router;