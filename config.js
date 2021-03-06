const express = require("express");
const app = express();
const morgan = require("morgan");
const funciones = require('./routes/allRoutes'); 
const CreateUsers = require('./routes/UserRoutes');
const {busquedaUsers} = require('./controllers/ValidaUser');

app.use(express.json());
app.use(morgan('dev'));
app.use('/:userName/:password/productos', busquedaUsers);
app.use('/:userName/:password/productos', funciones);
app.use('/Users', CreateUsers);

module.exports= app;