let products = require('../models/products');


const allProducts = () => {
    return products;
}

const newProduct = (product) => {
    
    
    let nProduct = {
        "id": products.length + 1,
        "name": product.name,
        "price": product.price, 
    };
    
    products.push(nProduct);    
    return products;

}

const searchProduct = (idproduct) => {

    return products.find(product => product.id == idproduct);

}

const searchProductName = (nameproduct) => {

    return products.find(product => product.name == nameproduct).name;

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


exports.allProducts = allProducts;
exports.newProduct = newProduct;
exports.editProduct = editProduct;
exports.deleteProduct = deleteProduct;
exports.searchProduct = searchProduct;
exports.searchProductName = searchProductName;