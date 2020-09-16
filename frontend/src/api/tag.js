import axios from 'axios';

import { config } from '../config';


export async function getTags(params){
  return await axios.get(`${config.api_host}/api/tags`, {
    params,
  })
}