import axios from 'axios';
import { config } from '../config';

export async function getProducts(params){
    return await axios
        .get(`${config.api_host}/api/products`, {
        params,
    });
}

export async function getProductsId(product_id){
    return await axios
        .get(`${config.api_host}/api/products/${product_id}`);
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


export async function updateProduct(payload, product_id){
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.put(`${config.api_host}/api/products/${product_id}`, payload, {
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    })
}

export async function deleteProduct(product_id){
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.delete(`${config.api_host}/api/products/${product_id}`, {
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    })
}