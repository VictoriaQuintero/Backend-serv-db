const { DataAlmacen, Marcas } = require('../models/models');

//Actualizar datos por id

async function UpdateData(req, res){

    let busquedaMar = await Marcas.findAll({
        where: {
            NombreMarca: req.body.marca.toLowerCase()
        }
    });
    if(busquedaMar[0] === undefined){
        await Marcas.create({
            NombreMarca : req.body.marca
        },{
            fields: ["NombreMarca"]
        });
    }
    const dataUpdate = await DataAlmacen.update({
        
        Producto: req.body.producto.toLowerCase(),
        Especificaciones: req.body.especificaciones,
        MarcaId: req.body.MarcaId

    },{
        where :{
            id : req.params.id
        }
    });

    if(dataUpdate){
        res.send('Los datos se han actualizado correctamente');
    }else{
        res.send('Los datos no han sido actualizados');
    }
}

module.exports.UpdateData = UpdateData;