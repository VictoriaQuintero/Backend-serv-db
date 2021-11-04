const { DataAlmacen, Marcas } = require('../conexionDB/models');

//Actualizar datos por id

async function UpdateData(req, res){
    const dataUpdate = await DataAlmacen.update({
        
        Producto: req.body.producto.toLowerCase(),
        Especificaciones: req.body.especificaciones,
        MarcaId: req.body.MarcaId

    },{
        where :{
            id : req.params.id
        }
    });
    let Mar = await Marcas.create({
        NombreMarca : req.body.marca
    },{
        fields: ["NombreMarca"]
    });

    if(dataUpdate && Mar){
        res.send('Los datos se han actualizado correctamente');
    }else{
        res.send('Los datos no han sido actualizados');
    }
}

module.exports.UpdateData = UpdateData;