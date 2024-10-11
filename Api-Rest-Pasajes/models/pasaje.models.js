const mongoose = require('mongoose');

const PasajeSchema = new mongoose.Schema({
    origen: { type: String, required: true },
  destino: { type: String, required: true },
  fechaSalida: { type: Date, required: true },
  fechaLlegada: { type: Date },
  precio: { type: Number, required: true },
  disponible: { type: Boolean, default: true }, // Estado de disponibilidad del pasaje
  asientosDisponibles: { type: Number, required: true }, // Cantidad de asientos disponibles
}, { timestamps: true });

const Pasaje = mongoose.model('Pasaje', pasajeSchema);
module.exports = Pasaje;
