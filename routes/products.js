const express = require('express');
const router = express.Router();
const middle = require('../middlewares/middleware');
const funcP = require('../controllers/products');

/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - "Product"
 *    summary: "READ" 
 *    description: Show all products
 *    responses:
 *      200:
 *        description: Success
 */

 router.get('/', function(req,res){

    res.json(funcP.allProducts());


})

/**
* @swagger
* /products/:
*  post:
*    tags:
*    - "Product"
*    summary: "CREATE"
*    description: "Create a new Product"
*    operationId: "CreateANewProduct"
*    paths:
*    /orders/:
*    parameters:
*    - name : "name"
*      description: "product name" 
*      in: formData
*      required: true
*      type: string 
*    - name : "price"
*      description: "price" 
*      in: formData
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.post('/', function(req,res){

    res.json(funcP.newProduct(req.body));

})

/**
* @swagger
* /products/{idproduct}:
*  delete:
*    tags:
*    - "Product"
*    summary: "DELETE"
*    description: "Delete Product"
*    operationId: "DeleteProduct"
*    paths:
*    /products/{idproduct}:
*    parameters:
*    - name : "idproduct"
*      description: "idproduct" 
*      in: path
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.delete('/:idproduct', function(req,res){
    
    res.json(funcP.deleteProduct(req.params.idproduct));

});


/**
* @swagger
* /products/{idproduct}:
*  put:
*    tags:
*    - "Product"
*    summary: "UPDATE"
*    description: "Update Product"
*    operationId: "UpdateProduct"
*    paths:
*    /products/{idproduct}:
*    parameters:
*    - name : "idproduct"
*      description: "idproduct" 
*      in: path
*      required: true
*      type: integer 
*    - name : "name"
*      description: "name" 
*      in: formData
*      required: true
*      type: string
*    - name : "price"
*      description: "price" 
*      in: formData
*      required: true
*      type: integer  
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:idproduct', function(req,res){
    
    res.json(funcP.editProduct(req.params.idproduct,req.body));

});



/**
* @swagger
* /products/{iduser}:
*  post:
*    tags:
*    - "Product"
*    summary: "ADMIN - E.P.f"
*    description: "Admin create a new Product"
*    operationId: "AdminCreateANewProduct"
*    paths:
*    /orders/{iduser}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "name"
*      description: "product name" 
*      in: formData
*      required: true
*      type: string 
*    - name : "price"
*      description: "price" 
*      in: formData
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.post('/:iduser', middle.userAdmin,  function (req,res){

    res.json(funcP.newProduct(req.body));
    
})

/**
* @swagger
* /products/{iduser}/{idproduct}:
*  put:
*    tags:
*    - "Product"
*    summary: "ADMIN - E.P.g"
*    description: "Admin Edit Product"
*    operationId: "AdminEditProduct"
*    paths:
*    /products/{iduser}/{idproduct}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "idproduct"
*      description: "idproduct" 
*      in: path
*      required: true
*      type: integer 
*    - name : "name"
*      description: "name" 
*      in: formData
*      required: true
*      type: string
*    - name : "price"
*      description: "price" 
*      in: formData
*      required: true
*      type: integer  
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:iduser/:idproduct', middle.userAdmin, function(req,res){
    
    res.json(funcP.editProduct(req.params.idproduct,req.body));

});

/**
* @swagger
* /products/{idproduct}:
*  put:
*    tags:
*    - "Product"
*    summary: ""
*    description: "Edit Product"
*    operationId: "EditProduct"
*    paths:
*    /products/{idproduct}:
*    parameters:
*    - name : "idproduct"
*      description: "idproduct" 
*      in: path
*      required: true
*      type: integer 
*    - name : "name"
*      description: "name" 
*      in: formData
*      required: true
*      type: string
*    - name : "price"
*      description: "price" 
*      in: formData
*      required: true
*      type: integer  
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:idproduct',  function(req,res){
    
    res.json(funcP.editProduct(req.params.idproduct,req.body));

});

/**
* @swagger
* /products/{iduser}/{idproduct}:
*  delete:
*    tags:
*    - "Product"
*    summary: "ADMIN - E.P.h"
*    description: "Admin delete Product"
*    operationId: "AdminDeleteProduct"
*    paths:
*    /products/{iduser}/{idproduct}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "idproduct"
*      description: "idproduct" 
*      in: path
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.delete('/:iduser/:idproduct', middle.userAdmin, function(req,res){
    
    res.json(funcP.deleteProduct(req.params.idproduct));

});

module.exports = router;