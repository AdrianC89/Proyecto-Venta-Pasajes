const Reserva = require('../models/Reserva');
const Pasaje = require('../models/Pasaje');

// Crear una nueva reserva
exports.crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body);
    
    // Disminuir asientos disponibles del pasaje reservado
    const pasaje = await Pasaje.findById(req.body.pasaje);
    if (pasaje.asientosDisponibles < req.body.cantidadPasajeros) {
      return res.status(400).json({ mensaje: 'No hay suficientes asientos disponibles' });
    }
    pasaje.asientosDisponibles -= req.body.cantidadPasajeros;
    await pasaje.save();

    await reserva.save();
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la reserva', error });
  }
};

// Listar todas las reservas
exports.listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find().populate('pasaje usuario');
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al listar las reservas', error });
  }
};

// Actualizar una reserva
exports.actualizarReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const reservaActualizada = await Reserva.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(reservaActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la reserva', error });
  }
};

// Eliminar una reserva
exports.eliminarReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findById(id);
    
    // Restablecer asientos al eliminar la reserva
    const pasaje = await Pasaje.findById(reserva.pasaje);
    pasaje.asientosDisponibles += reserva.cantidadPasajeros;
    await pasaje.save();

    await reserva.remove();
    res.status(200).json({ mensaje: 'Reserva eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la reserva', error });
  }
};
