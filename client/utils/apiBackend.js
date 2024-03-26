import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api-sportsmatch.ay-cloud.com/api/'
})

export default axiosInstance
