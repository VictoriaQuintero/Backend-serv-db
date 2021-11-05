const { DataAlmacen, Marcas } = require('../models/models');


async function IngresoData(req, res) {

    let busquedaMar = await Marcas.findAll({
        where: {
            NombreMarca: req.body.marca.toLowerCase()
        }
    })
    if (busquedaMar[0] === undefined) {

        await Marcas.create({
            NombreMarca: req.body.marca.toLowerCase(),
            MarcaId: req.body.MarcaId
        }, {
            fields: ["NombreMarca", 'MarcaId']
        });

    }

    let prod = await DataAlmacen.create({
        Producto: req.body.producto.toLowerCase(),
        Especificaciones: req.body.especificaciones,
        MarcaId: req.body.MarcaId
    }, {
        fields: ['Producto', 'Especificaciones', 'MarcaId']
    });


    if (prod) {
        res.send('Producto Agregado correctamente');
    } else {
        res.send('Verifique que lo que introdujo tiene los datos correctos');
    }
}

module.exports.IngresoData = IngresoData;