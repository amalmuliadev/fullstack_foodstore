import axios from 'axios';
import { config } from '../config';

export async function getProducts(params){
    return await axios
        .get(`${config.api_host}/api/products`, {
        params,
    });
}

export async function createProduct(payload){
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.post(config.api_host + "/api/products", payload, {
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    })
}