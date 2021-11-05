const {NewUser} = require('../models/modelsUser');

async function CreateUser(req, res){
    let UserMAY = await NewUser.findAll({
        where : {
            UserName : req.body.usuario,
            Contraseña : req.body.contraseña
        },
        attributes:['UserName', 'Contraseña']
    })

    if(UserMAY[0] === undefined){
        NewUser.create({
            UserName : req.body.usuario,
            Contraseña: req.body.contraseña
        },{
            fields: ['UserName', 'Contraseña']
        })

        res.send('Usuario Agregado Correctamente');
    }else{
        res.json({
            mensaje : 'El usuario que desea agreagar ya existe',
            usuario: UserMAY
        })
    }
}

module.exports.CreateUser = CreateUser;