import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.18.82:3000/api/'
})

export default axiosInstance
