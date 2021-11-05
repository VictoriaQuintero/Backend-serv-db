const express = require('express');
const router = express.Router();
const {IngresoData} = require('../controllers/IngresoData');
const Consultas = require('../controllers/busquedaData');
const {UpdateData} = require('../controllers/UpdateData');
const {DeleteData} = require('../controllers/DeleteData');

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

//ELIMINAR PRODUCTO
router.delete('/eliminar/:id', DeleteData);

module.exports =  router;