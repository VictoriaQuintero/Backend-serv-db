const {NewUser} = require('../models/modelsUser');

//BUSQUEDA DEL USER Y CLAVE PARA VALIDAR
async function busquedaUsers(req, res, next){
    let AllUsers = await NewUser.findAll({

        where: {
            UserName : req.params.userName,
            Contraseña: req.params.password
        },
        attributes: ['UserName']
    });
    if(AllUsers[0] === undefined){
        res.send('Su usuario o contraseña no son validos');
    }else{
        next()
    }
}

module.exports.busquedaUsers = busquedaUsers;