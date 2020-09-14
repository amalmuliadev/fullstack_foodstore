import axios from 'axios';

import { config } from '../config';


export async function getCategories(params){
  return await axios.get(`${config.api_host}/api/categories`, {
    params,
  })
}