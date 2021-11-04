const express = require('express');
const router = express.Router();
const {IngresoData} = require('../controladores/IngresoData');
const Consultas = require('../controladores/busquedaData');
const {UpdateData} = require('../controladores/UpdateData');


//INGRESO DE DATOS
router.post('/ingreso', IngresoData);

//MOSTRAR TODOS LOS DATOS
router.get('/busqueda', Consultas.BusquedaData);

//MOSTRAR LOS DATOS POR ID
router.get('/busquedaID/:id', Consultas.BusquedaById);

//MOSTRAR DATOS POR MARCA
router.get('/busquedaMarca/:marc', Consultas.BusquedaByMarca);

//MOSTRAR DATOS POR PRODUCTO
router.get('/busquedaProducto/:product', Consultas.BusquedaByProduct);

//ACTUALIZAR DATOS
router.put('/editarProducto/:id', UpdateData);

module.exports =  router;