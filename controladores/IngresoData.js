const { DataAlmacen, Marcas } = require('../conexionDB/models');

async function IngresoData(req, res) {
    
        let prod = await DataAlmacen.create({
            Producto: req.body.producto.toLowerCase(),
            Especificaciones: req.body.especificaciones,
            MarcaId: req.body.MarcaId
        }, {
            fields: ['Producto', 'Especificaciones', 'MarcaId']
        });
        
        let Mar = await Marcas.create({
            NombreMarca : req.body.marca
        },{
            fields: ["NombreMarca"]
        })

        if(prod && Mar){
            res.send('producto y marca agregada')
        }else{
            res.send('Verifique que lo que introdujo tiene los datos correctos');
        }
}

module.exports.IngresoData = IngresoData;