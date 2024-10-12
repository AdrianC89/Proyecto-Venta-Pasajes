import Reserva from '../models/reserva.models.js';

// Crear una nueva reserva
export const createReserva = async (req, res) => {
  const { usuario, pasaje, cantidadPasajeros } = req.body;

  try {
    const newReserva = new Reserva({
      usuario,
      pasaje,
      cantidadPasajeros
    });

    const reservaSaved = await newReserva.save(); // Guardamos la reserva en la base de datos
    res.status(201).json(reservaSaved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las reservas (o filtrar por usuario o estado)
export const getReservas = async (req, res) => {
  const { usuario, estado } = req.query;
  const filter = {};

  if (usuario) filter.usuario = usuario;
  if (estado) filter.estado = estado;

  try {
    const reservas = await Reserva.find(filter).populate('usuario pasaje'); // Popula los campos relacionados
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una reserva por ID
export const getReservaById = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await Reserva.findById(id).populate('usuario pasaje');
    if (!reserva) return res.status(404).json({ message: "Reserva no encontrada" });

    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una reserva
export const updateReserva = async (req, res) => {
  const { id } = req.params;
  const { usuario, pasaje, cantidadPasajeros, estado } = req.body;

  try {
    const reservaUpdated = await Reserva.findByIdAndUpdate(
      id,
      { usuario, pasaje, cantidadPasajeros, estado },
      { new: true } // Retorna el documento actualizado
    ).populate('usuario pasaje');

    if (!reservaUpdated) return res.status(404).json({ message: "Reserva no encontrada" });

    res.json(reservaUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una reserva
export const deleteReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reservaDeleted = await Reserva.findByIdAndDelete(id);
    if (!reservaDeleted) return res.status(404).json({ message: "Reserva no encontrada" });

    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
