const {DataTypes} = require('sequelize');
const sequelize = require('./conexSqlize');

const DataAlmacen = sequelize.define('Productos', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Producto:{
        type: DataTypes.STRING
    },
    Especificaciones:{
        type: DataTypes.STRING
    },
    MarcaId:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});

const Marcas = sequelize.define('Marcas',{
    MarcaId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    NombreMarca: {
        type: DataTypes.STRING,
        unique : true
    }
},{
    timestamps: false
});

Marcas.hasMany(DataAlmacen, { as: "producto", foreignKey : 'MarcaId'});
DataAlmacen.belongsTo(Marcas, {as: "marca"});

module.exports.DataAlmacen = DataAlmacen;
module.exports.Marcas = Marcas;