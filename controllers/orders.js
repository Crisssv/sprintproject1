let orders = require('../models/orders');
const status = require('../models/status');
const funcU = require('../controllers/users')
const funcP = require('../controllers/products')
const funcS = require('../controllers/status')


const serachOrders = (iduser) => {


    let userOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].username == iduser) {
            userOrders.push(orders[i]);
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

const arrayProducts = (productListId) => {
    let arrayProducts = [];
    for (let i = 0; i < productListId.length; i++) {

        if (funcP.searchProduct(productListId[i])) {

            arrayProducts.push(funcP.searchProduct(productListId[i]));

        }

    }
    return arrayProducts;
}

const productName = (prodN) => {
    let prodName = [];
    
    for (let i = 0; i < prodN.length; i++) {

        prodName.push(arrayProducts(prodN[i]).name);

    }
    
    return prodName;

}

const userViewOrder = (order) => {

    
    let orderUser = {

        "status": funcS.searchStatus(order.status).name,
        "time": order.time,
        "number": order.number,
        "detail": productName(order.detail),
        "total": order.total,
        "method": order.method,
        "username": order.username,
        "adress": order.adress,

    }
    return orderUser;

}

const newOrder = (order, iduser) => {
    let hour = new Date();
    time = hour.getHours() + ':' + hour.getMinutes();
    let total = totalPrice(order.detail);
    let nOrders = {
        "id": orders.length + 1,
        "status": 1,
        "time": time,
        "number": orders.length + 1,
        "detail": order.detail,
        "total": total,
        "method": order.method,
        "username": iduser,
        "adress": funcU.searchAdress(iduser),
    };

    orders.push(nOrders);
    console.log(userViewOrder(nOrders));
    return orders;

}


const searchIndexOrder = (orderid) => {

    return orders.findIndex(order => order.id == orderid);

}

const changeStatus = (idOrder, status) => {

    const index = searchIndexOrder(idOrder);
    orders[index].status = status;
    return orders[index];


}



exports.serachOrders = serachOrders;
exports.newOrder = newOrder;
exports.allOrders = allOrders;
exports.changeStatus = changeStatus;

