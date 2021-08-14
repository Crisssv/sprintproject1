const express = require('express');
const router = express.Router();



router.get('/', function(req,res){

    res.send('Index productos');


})

module.exports = router;