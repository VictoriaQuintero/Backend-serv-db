const {DataTypes} = require('sequelize');
const sequelize = require('../conexionDB/conexSqlize');

const NewUser = sequelize.define('Users', {
    UserName : {
        type : DataTypes.TEXT,
    },
    Contraseña: {
         type : DataTypes.TEXT
    }
},{
    timestamps: false
});

module.exports.NewUser = NewUser;