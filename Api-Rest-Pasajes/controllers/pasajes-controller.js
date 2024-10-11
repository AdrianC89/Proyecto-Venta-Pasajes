const Pasaje = require('../models/Pasaje');

// Crear un nuevo pasaje
exports.crearPasaje = async (req, res) => {
  try {
    const pasaje = new Pasaje(req.body);
    await pasaje.save();
    res.status(201).json(pasaje);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el pasaje', error });
  }
};

// Listar todos los pasajes
exports.listarPasajes = async (req, res) => {
  try {
    const pasajes = await Pasaje.find();
    res.status(200).json(pasajes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al listar los pasajes', error });
  }
};

// Buscar pasajes con filtros (por destino y fecha)
exports.buscarPasajes = async (req, res) => {
  const { destino, fechaSalida } = req.query;
  const filtro = {};
  if (destino) filtro.destino = destino;
  if (fechaSalida) filtro.fechaSalida = new Date(fechaSalida);

  try {
    const pasajes = await Pasaje.find(filtro);
    res.status(200).json(pasajes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar pasajes', error });
  }
};

// Actualizar un pasaje
exports.actualizarPasaje = async (req, res) => {
  const { id } = req.params;
  try {
    const pasajeActualizado = await Pasaje.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(pasajeActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el pasaje', error });
  }
};

// Eliminar un pasaje
exports.eliminarPasaje = async (req, res) => {
  const { id } = req.params;
  try {
    await Pasaje.findByIdAndDelete(id);
    res.status(200).json({ mensaje: 'Pasaje eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el pasaje', error });
  }
};
