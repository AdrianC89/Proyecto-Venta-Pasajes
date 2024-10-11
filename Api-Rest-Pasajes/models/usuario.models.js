const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['cliente', 'administrador'], default: 'cliente' }, // Rol del usuario
  reservas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reserva' }], // Relación con reservas hechas por el usuario
}, { timestamps: true });

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
