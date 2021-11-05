const {NewUser} = require('../models/modelsUser');

async function busquedaUsers(req, res){
    let AllUsers = await NewUser.findAll({
        attributes: ['UserName']
    });
    res.json(AllUsers);
}

module.exports.busquedaUsers = busquedaUsers;