import axios from 'axios';


export const productAxios = axios.create({
    baseURL: 'http://localhost:5080/api/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },

});

// productAxios.interceptors.request.use(

// )