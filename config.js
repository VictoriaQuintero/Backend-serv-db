const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require('mysql');
const funciones = require('./routes/allRoutes'); 

app.use(express.json());
app.use(morgan('dev'));
app.use('/productos', funciones);

module.exports= app;