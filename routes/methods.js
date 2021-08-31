const express = require('express');
const router = express.Router();
const funcM = require('../controllers/methods');
const middle = require('../middlewares/middleware');



/**
* @swagger
* /methods/{iduser}:
*  post:
*    tags:
*    - "Method"
*    summary: "ADMIN - E.P.n"
*    description: "Admin create a new Method"
*    operationId: "AdminCreateANewMethod"
*    paths:
*    /methods/{iduser}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "name"
*      description: "method" 
*      in: formData
*      required: true
*      type: string 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.post('/:iduser', middle.userAdmin,  function (req,res){
   
    res.json(funcM.newMethod(req.body));
    

})

/**
* @swagger
* /methods/{iduser}/{idmethod}:
*  put:
*    tags:
*    - "Method"
*    summary: "ADMIN - E.P.o"
*    description: "Admin edits Method"
*    operationId: "AdminCreateANewMethod"
*    paths:
*    /methods/{iduser}/{idmethod}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "idmethod"
*      description: "idmethod" 
*      in: path
*      required: true
*      type: integer 
*    - name : "name"
*      description: "method" 
*      in: formData
*      required: true
*      type: string 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.put('/:iduser/:idmethod', middle.userAdmin, function(req,res){
    
    res.json(funcM.editMethod(req.params.idmethod,req.body));

});

/**
* @swagger
* /methods/{iduser}/{idmethod}:
*  delete:
*    tags:
*    - "Method"
*    summary: "ADMIN - E.P.p"
*    description: "Admin delete a Method"
*    operationId: "AdminDeleteMethod"
*    paths:
*    /methods/{iduser}/{idmethod}:
*    parameters:
*    - name : "iduser"
*      description: "iduser" 
*      in: path
*      required: true
*      type: integer 
*    - name : "idmethod"
*      description: "idmethod" 
*      in: path
*      required: true
*      type: integer 
*    responses:
*      "200":
*      desciption: Sucess   
*/

router.delete('/:iduser/:idmethod', middle.userAdmin, function(req,res){
    
    res.json(funcM.deleteMethod(req.params.idmethod));

});

/**
* @swagger
* /methods/{iduser}:
*  get:
*    tags:
*    - "Method"
*    summary: "ADMIN - E.P.q"
*    description: "Admin get all Methods"
*    operationId: "AdminGetAllMethods"
*    paths:
*    /methods/{iduser}:
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

router.get('/:iduser', middle.userAdmin, function (req,res){

    res.json(funcM.allMethods());

})


module.exports = router;