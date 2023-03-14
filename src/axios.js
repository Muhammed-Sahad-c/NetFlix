import Axios from 'axios'
import {baseUrl} from './constants/common'

const instance = Axios.create({
    baseURL: baseUrl
    
  });

  export default instance;