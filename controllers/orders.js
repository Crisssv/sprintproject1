let orders = require('../models/orders');


const serachOrders = (username) => {

    let userOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].username == username){
            userOrders.push(orders[i]);
        }    
    }   

    return userOrders;

}

exports.serachOrders = serachOrders;

