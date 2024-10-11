const express = require('express');
const router = express.Router();
const pasajeController = require('../controllers/pasajes-controller');
const reservaController = require('../controllers/reserva-controller');
const usuarioController = require('../controllers/usuario-controller');

// Rutas para Pasajes
router.post('/pasajes', pasajeController.crearPasaje);
router.get('/pasajes', pasajeController.listarPasajes);
router.get('/pasajes/buscar', pasajeController.buscarPasajes);
router.put('/pasajes/:id', pasajeController.actualizarPasaje);
router.delete('/pasajes/:id', pasajeController.eliminarPasaje);

// Rutas para Reservas
router.post('/reservas', reservaController.crearReserva);
router.get('/reservas', reservaController.listarReservas);
router.put('/reservas/:id', reservaController.actualizarReserva);
router.delete('/reservas/:id', reservaController.eliminarReserva);

// Rutas para Usuarios
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;
