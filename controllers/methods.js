let methods = require('../models/methods');


const allMethods = () => {

    return methods;

}

const indexMethods = (idMethod) => {

    return methods.findIndex(method => method.id == idMethod);

}

const searchMethodName = (idMethod) => {

    return methods[indexMethods(idMethod)].name;

}

const newMethod = (method) => {

    let nMethod = {
        "id": methods.length + 1,
        "name": method.name

    };
    methods.push(nMethod);
    return methods[methods.length-1];

}

const editMethod = (idmethod, method) => {

    const index = indexMethods(idmethod);
    methods[index].name = method.name;

    
    return methods[index];

}

const deleteMethod = (idmethod) => {

    methods = methods.filter(method => method.id != idmethod);
    return methods;

}

exports.allMethods = allMethods;
exports.indexMethods = indexMethods;
exports.searchMethodName = searchMethodName;
exports.newMethod = newMethod;
exports.editMethod = editMethod;
exports.deleteMethod = deleteMethod;