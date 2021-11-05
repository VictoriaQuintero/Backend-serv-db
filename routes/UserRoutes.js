const express = require('express');
const router = express.Router();
const {CreateUser} = require('../controllers/CrearUser')
const {busquedaUsers} = require('../controllers/BusquedaUsers')

//CREACION DE USUARIOS NUEVOS
router.post('/createUsers', CreateUser);

//MOSTRAR TODOS LOS USUARIOS

router.get('/busqueda', busquedaUsers);

module.exports =  router;