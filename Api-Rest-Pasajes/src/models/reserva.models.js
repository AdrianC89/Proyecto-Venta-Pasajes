import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Actualicé la referencia para coincidir con el modelo "User"
        required: true
    },
    pasaje: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pasaje',
        required: true
    },
    fechaReserva: {
        type: Date,
        default: Date.now
    },
    cantidadPasajeros: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'confirmada', 'cancelada'],
        default: 'pendiente'
    }
}, {
    timestamps: true
});

export default mongoose.model('Reserva', reservaSchema);
