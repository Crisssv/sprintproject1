const express = require('express');
const router = express.Router();
const funcO = require('../controllers/orders');
const middle = require('../middlewares/middleware');


/**
* @swagger
* /orders/admin/{iduser}:
*  get:
*    tags:
*    - "Order"
*    summary: "ADMIN - E.P.e"
*    description: "Show All Orders ADMIN"
*    operationId: "Show All Orders Admin"
*    paths:
*    /orders/admin/{iduser}:
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

router.get('/admin/:iduser', middle.userAdmin, function(req,res){

    res.json(funcO.allOrders());


})


/**
* @swagger
* /orders/{iduser}:
*  get:
*    tags:
*    - "Order"
*    summary: "Users Orders - E.P.d"
*    description: "Show All Orders of the user"
*    operationId: "ShowAllOrdersOfTheUser"
*    paths:
*    /orders/{iduser}:
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

router.get('/:iduser', middle.registerUser, function(req,res){
    
    
    res.json(funcO.searchOrders(req.params.iduser));


})

/**
* @swagger
* /orders/{iduser}:
*  post:
*    tags:
*    - "Order"
*    summary: "User make Order - E.P.c - r"
*    description: "Make an Order"
*    operationId: "makeOrder"
*    paths:
*    /orders/{iduser}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "detail"
*      description: "detail" 
*      in: formData
*      required: true
*      type: array 
*    - name : "method"
*      description: "method"
*      in: formData
*      required: true
*      type: string
*    - name : "adress"
*      description: "adress"
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
* /orders/{iduser}/{idorder}:
*  put:
*    tags:
*    - "Order"
*    summary: "ADMIN - E.P.e"
*    description: "Admin Change Status"
*    operationId: "AdminChangeStatus"
*    paths:
*    /orders/{iduser}/{idorder}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "idorder"
*      description: "idorder" 
*      in: path
*      required: true
*      type: integer 
*    - name : "status"
*      description: "status" 
*      in: formData
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:iduser/:idorder', middle.userAdmin, function(req,res){
    
    res.json(funcO.changeStatus(req.params.idorder,req.body.status));

});

/**
* @swagger
* /orders/{idorder}:
*  delete:
*    tags:
*    - "Order"
*    summary: "DELETE"
*    description: "Delete Order"
*    operationId: "DeleteOrder"
*    paths:
*    /orders/{idorder}:
*    parameters:
*    - name : "idorder"
*      description: "idorder" 
*      in: path
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.delete('/:idorder',function(req,res){

    res.json(funcO.deleteOrder(req.params.idorder));

});

/**
* @swagger
* /orders/changeOrder/{iduser}/{idorder}:
*  put:
*    tags:
*    - "Order"
*    summary: "User Change Order - E.P.s-t"
*    description: "User Change Order"
*    operationId: "UserChangeStatus"
*    paths:
*    /orders/changeOrder/{iduser}/{idorder}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "idorder"
*      description: "idorder" 
*      in: path
*      required: true
*      type: integer 
*    - name : "detail"
*      description: "detail" 
*      in: formData
*      required: true
*      type: array
*    - name : "method"
*      description: "method"
*      in: formData
*      required: true
*      type: string 
*    - name : "adress"
*      description: "adress"
*      in: formData
*      required: true
*      type: string 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/changeOrder/:iduser/:idorder', middle.registerUser, function(req,res){

    res.json(funcO.changeOrder(req.params.idorder,req.body));

});



module.exports = router;