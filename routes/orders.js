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

router.get('/:idusername', middle.registerUser, function(req,res){
    
    
    res.json(funcO.serachOrders(req.params.idusername));


})

/**
* @swagger
* /orders/1:
*  post:
*    tags:
*    - "Order"
*    summary: ""
*    description: "Make an Order"
*    operationId: "makeOrder"
*    consumes:
*    produces:
*    parameters:
*    - name : "description"
*      description: "description" 
*      in: formData
*      required:
*      type: array 
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
    console.log(req.body);
    funcO.newOrder(req.body);
    res.json({'Orders': orders});
    

})


router.put('/:id', middle.userAdmin, function(req,res){
    
    const changeStatus = funcO.changeStatus(req.params.id,req.body.status);
    res.json(changeStatus);

});

router.delete('/:id',function(req,res){

    

});



module.exports = router;