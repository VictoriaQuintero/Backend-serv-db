const { DataAlmacen, Marcas } = require('../conexionDB/models');

//busqueda completa 

async function BusquedaData(req, res) {
    //consulta de tabla productos
    const productos = await DataAlmacen.findAll({
        attributes: ['Id', 'Producto', 'Especificaciones', 'MarcaId'],
    });
    //consulta de tabla marcas
    const marcas = await Marcas.findAll({
        attributes: ['MarcaId', 'NombreMarca']
    });
    res.json({ productos, marcas });
}


//busqueda por id

async function BusquedaById(req, res) {
    let busquedaId = await Marcas.findAll({

        include : [
            {
                model : DataAlmacen,
                as : 'producto',
                attributes: ['Id', 'Producto', 'Especificaciones', 'MarcaId'],
                where:{
                    'Id' : req.params.id
                }
            }
        ],
        attributes: ["NombreMarca"]


    });
    if(busquedaId){
        res.json(busquedaId);
    }else{
        res.send('El producto que busca no existe');
    }
}

//busqueda por marca

async function BusquedaByMarca(req, res){
    let busquedaMarca = await Marcas.findAll({

        include : [
            {
                model : DataAlmacen,
                as : 'producto',
                attributes: ['Id', 'Producto', 'Especificaciones', 'MarcaId'],
            }
        ],
        attributes: ["NombreMarca"],
        where :{
            NombreMarca : req.params.marc
        }
    });
    if(busquedaMarca){
        res.json(busquedaMarca);
    }else{
        res.send('La marca que busca no existe');
    }
}

//busqueda por producto

async function BusquedaByProduct(req, res){
    let BusquedaProduct = await Marcas.findAll({

        include : [
            {
                model : DataAlmacen,
                as : 'producto',
                attributes: ['Id', 'Producto', 'Especificaciones', 'MarcaId'],
                where : {
                    Producto : req.params.product.toLowerCase()
                }
            }
        ],
        attributes: ["NombreMarca"],
    });
    
    if(BusquedaProduct){
        res.json(BusquedaProduct);
    }else{
        res.send('El producto que busca no existe');
    }
}

module.exports.BusquedaData = BusquedaData;
module.exports.BusquedaById = BusquedaById;
module.exports.BusquedaByMarca = BusquedaByMarca;
module.exports.BusquedaByProduct = BusquedaByProduct;
