let orders = require('../models/orders');
const status = require('../models/status');


const serachOrders = (username) => {

    let userOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].username == username){
            userOrders.push(orders[i]);
        }    
    }   

    return userOrders;

}

const allOrders = () =>{
    return orders;
}

//const searhStatus ();

const newOrder = (order) => {

    let nOrder = [{
        "id": orders.length+1,    
        "status": 1,
        "time": order.time,
        "number": orders.length+1,
        "description": order.description,
        "pay": order.pay,
        "username": order.username,
        "adress": order.adress,
    }];
    

    orders.push(nOrder);    


}

const changeStatus = (id,status) => {
    
    orders[id].status = status;
    return orders[id];
        

}



exports.serachOrders = serachOrders;
exports.newOrder = newOrder;
exports.allOrders = allOrders;
exports.changeStatus = changeStatus;

