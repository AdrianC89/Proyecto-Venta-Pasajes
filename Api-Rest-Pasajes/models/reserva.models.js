const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, // Usuario que hace la reserva
  pasaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Pasaje', required: true },  // Pasaje reservado
  fechaReserva: { type: Date, default: Date.now },  // Fecha en que se hizo la reserva
  cantidadPasajeros: { type: Number, required: true }, // Número de pasajeros en la reserva
  estado: { type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente' }, // Estado de la reserva
}, { timestamps: true });

const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;
