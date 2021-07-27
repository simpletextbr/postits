import axios from 'axios'
import env from 'react-dotenv'

const api = axios.create({
  baseURL: `http://localhost:${env.API_PORT}/api/v1`
})

export default api