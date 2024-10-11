import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost/pasajes-dv')
        console.log(">>>>> Base de Datos Conectada")
    } catch (error) {
        console.log(error);
    }
};