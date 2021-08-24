const pay = require('../models/pay');


const indexMethods = (idMethod) => {

    return methods.findIndex(method => method.id == idMethod);

}

const searchMethodName = (idMethod) => {

    return methods[indexMethods(idMethod)].name;

}

exports.indexMethods = indexMethods;
exports.searchMethodName = searchMethodName;