import axios from 'axios';

const API_URL = 'http://localhost:3000/api/pasajes'; // Cambia esto por la URL de tu API

export const getPasajes = async () => {
    return await axios.get(API_URL);
};

export const createPasaje = async (pasajeData) => {
    return await axios.post(API_URL, pasajeData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};