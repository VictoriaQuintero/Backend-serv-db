const { DataAlmacen} = require('../models/models');

async function DeleteData(req,res){
    let DataDeleted = await DataAlmacen.destroy({
        where: {
            Id : req.params.id
        }
    });

    if(DataDeleted > 0){
        res.send('Producto eliminado Correctamente');
    }else{
        res.send('El producto que desea eliminar no se ha encontrado');
    }
}

module.exports.DeleteData = DeleteData;