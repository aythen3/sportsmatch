import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'https://api-sportsmatch.ay-cloud.com/api/'
  baseURL: 'http://192.168.1.47:3000/api/'
})

// axiosInstance.defaults.headers.common['user_token'] = token;

export default axiosInstance
