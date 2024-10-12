import mongoose from "mongoose";

const pasajeSchema = new mongoose.Schema({
  origen: { 
    type: String, 
    required: true 
  },
  destino: { 
    type: String, 
    required: true 
  },
  fechaSalida: { 
    type: Date, 
    required: true 
  },
  fechaLlegada: { 
    type: Date,  
    validate: {validator: function(v) {
      return v > this.fechaSalida;},
    message: 'La fecha de llegada debe ser posterior a la fecha de salida' } 
  },
  precio: { 
    type: Number, 
    required: true,  min: [0, 'El precio no puede ser negativo'] 
  },
  disponible: { 
    type: Boolean, 
    default: true  // Estado de disponibilidad del pasaje
  },
  asientosDisponibles: { 
    type: Number, 
    required: true,  
    min: [0, 'Los asientos disponibles no pueden ser negativos'] // Validación para que no haya asientos negativos
  }},{ 
    timestamps: true 
  })

export default mongoose.model('Pasaje', pasajeSchema)