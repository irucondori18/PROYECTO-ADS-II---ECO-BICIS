//defino controlador para el manejo de CRUD
const reservaCtrl = require('../controllers/reserva.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', reservaCtrl.getReservas);
router.get('/:id', reservaCtrl.getOneReserva);
router.post('/', reservaCtrl.createReserva);
//exportamos el modulo de rutas
module.exports = router;