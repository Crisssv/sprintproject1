let status = require('../models/status');

const searchStatus = (idstatus) => {

    return status.find(statu => statu.id == idstatus);

}

exports.searchStatus = searchStatus;