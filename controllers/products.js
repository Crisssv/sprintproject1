let products = require('../models/products');




const newProduct = (product) => {
    
    
    let nProduct = {
        "id": products.length + 1,
        "name": product.name,
        "price": product.price, 
    };
    
    products.push(nProduct);    
    return products;

}

const searchIndexproduct = (productid) => {

    return products.findIndex(product => product.id == productid);

}



const editProduct = (productid, product) => {

    const index = searchIndexproduct(productid);

    products[index].name = product.name;
    products[index].price = product.price;
    return products[index];
        

}

const deleteProduct = (productid) => {

    products = products.filter(product => product.id != productid);
    return products;

}



exports.newProduct = newProduct;
exports.editProduct = editProduct;
exports.deleteProduct = deleteProduct;