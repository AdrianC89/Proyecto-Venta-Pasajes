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
    validate: {
      validator: function(v) {
        return v > this.fechaSalida;
      },
      message: 'La fecha de llegada debe ser posterior a la fecha de salida' 
    } 
  },
  precio: { 
    type: Number, 
    required: true,  
    min: [0, 'El precio no puede ser negativo'] 
  },
  disponible: { 
    type: Boolean, 
    default: true  
  },
  asientosDisponibles: { 
    type: Number, 
    required: true,  
    min: [0, 'Los asientos disponibles no pueden ser negativos']
  },
  compradores: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // Referencia a los usuarios que han comprado boletos para este pasaje
  }],
  imagen: { // Nuevo campo para la imagen
    type: String,
    required: true // Puedes hacerlo opcional si no todas las imágenes están disponibles al momento de la creación
  }
}, { 
  timestamps: true 
});

export default mongoose.model('Pasaje', pasajeSchema);
