import axios from 'axios'
import Axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api;