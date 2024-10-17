import axios from './axios';
import Cookies from 'js-cookie';

export const getProtectedData = () => {
    const token = Cookies.get('token'); // Obtener el token desde las cookies
    return axios.get('/protected');
};
