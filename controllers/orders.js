let orders = require('../models/orders');
const funcU = require('../controllers/users')
const funcP = require('../controllers/products')
const funcS = require('../controllers/status')
const funcM = require('../controllers/methods')


const searchOrders = (iduser) => {

    let userOrders = [];

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].username == iduser) {
            userOrders.push(userViewOrder(orders[i]));
        }
    }

    return userOrders;

}

const allOrders = () => {
    return orders;
}

const totalPrice = (productsList) => {
    let total = 0;
    let productsListPrice = arrayProducts(productsList);
    for (let i = 0; i < productsListPrice.length; i++) {

        total = productsListPrice[i].price + total;
    }
    return total;

}

const productName = (productListId) => {

    let arrayProducts = [];
    for (let i = 0; i < productListId.length; i++) {

        if (funcP.searchProduct(productListId[i])) {

            arrayProducts.push(funcP.searchProduct(productListId[i]).name);

        }

    }

    return arrayProducts;

}

const addAdress = (order, iduser) => {

    if (order.adress != null){
       return order.adress;  
    }else{
       return funcU.searchAdress(iduser);  
    } 

}

const arrayProducts = (productListId) => {
    let arrayProducts = [];
    for (let i = 0; i < productListId.length; i++) {

        if (funcP.searchProduct(productListId[i])) {

            arrayProducts.push(funcP.searchProduct(productListId[i]));

        }

    }
    return arrayProducts;
}

const userViewOrder = (order) => {

  let orderUser = {

        "status": funcS.searchStatus(order.status).name,
        "time": order.time,
        "number": order.number,
        "detail": productName(order.detail),
        "total": order.total,
        "method": funcM.searchMethod(order.method).name,
        "username": funcU.searchUsername(order.username),
        "adress": order.adress,

    }
    return orderUser;

}

const getTime = ()=> {

    let hour = new Date();
    let time = hour.getHours() + ':' + hour.getMinutes();
    return time;
}

const newOrder = (order, iduser) => {

    let nOrders = {
        "id": orders.length + 1,
        "status": 1,
        "time": getTime(),
        "number": orders.length + 1,
        "detail": order.detail,
        "total": totalPrice(order.detail),
        "method": order.method,
        "username": iduser,
        "adress": addAdress(order,iduser),
    };

    orders.push(nOrders);
    return userViewOrder(nOrders);

}

const searchOrderId = (orderid) => {
    console.log(orderid);
    return orders.find(order => order.id == orderid);

}

const searchIndexOrder = (orderid) => {

    return orders.findIndex(order => order.id == orderid);

}

const changeStatus = (idOrder, status) => {

    const index = searchIndexOrder(idOrder);
    orders[index].status = status;
    return orders[index];


}

const changeOrder = (idorder, newOrder) => {

    if (searchOrderId(idorder).status == 1) {
        const index = searchIndexOrder(idorder);
        orders[index].detail = newOrder.detail;
        orders[index].method = newOrder.method;
        orders[index].adress = newOrder.adress;
        orders[index].total = totalPrice(orders[index].detail);
        return userViewOrder(orders[index]);
    } else {
        return "El pedido solo puede ser modificado si su estado es NUEVO"
    }

}

const deleteOrder = (idorder) => {

    orders = orders.filter(order => order.id != idorder);
    return orders;

}



exports.searchOrders = searchOrders;
exports.newOrder = newOrder;
exports.allOrders = allOrders;
exports.changeStatus = changeStatus;
exports.changeOrder = changeOrder;
exports.deleteOrder = deleteOrder;


