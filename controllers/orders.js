let orders = require('../models/orders');
const status = require('../models/status');
const funcU = require('../controllers/users')
const funcM = require('../controllers/users')


const serachOrders = (iduser) => {


    let userOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].username == iduser){
            userOrders.push(orders[i]);
        }    
    }   

    return userOrders;

}

const allOrders = () =>{
    return orders;
}



const newOrder = (order,iduser) => {
    
    let hour = new Date();
    time = hour.getHours() + ':' + hour.getMinutes();
    let nOrders = {
        "id": orders.length+1,    
        "status": 1,
        "time": time,
        "number": orders.length+1,
        "detail": order.detail,
        "total": 999,
        "method": order.method,
        "username": iduser,
        "adress": funcU.searchAdress(iduser),
    };
    
    orders.push(nOrders);    
    return orders;

}

const userView = (newOrder) => {


    let nOrderUserView = {    
        "status": 1,
        "time": hour,
        "number": orders.length+1,
        "detail": order.detail,
        "total": 999,
        "method": order.method,
        "username": funcU.searchUsername(iduser),
        "adress": funcU.searchAdress(iduser),
    };

}

const searchIndexOrder = (orderid) => {

    return orders.findIndex(order => order.id == orderid);

}

const changeStatus = (idOrder,status) => {

    const index = searchIndexOrder(idOrder);
    orders[index].status = status;
    return orders[index];
        

}



exports.serachOrders = serachOrders;
exports.newOrder = newOrder;
exports.allOrders = allOrders;
exports.changeStatus = changeStatus;

