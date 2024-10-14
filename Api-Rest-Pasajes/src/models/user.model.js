import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    boletosComprados: [
      {
        pasaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Pasaje' },
        cantidad: { type: Number, required: true }
      }
    ]
  }, {
    timestamps: true
  });

export default mongoose.model('User', userSchema)