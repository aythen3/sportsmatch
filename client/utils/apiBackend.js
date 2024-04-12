import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const axiosInstance = axios.create({
  baseURL: 'https://api-sportsmatch.ay-cloud.com/api/'
  // baseURL: 'http://192.168.0.236:3000/api/'

})

axiosInstance.interceptors.request.use(
  async (config) => {
    // Obtener el token de usuario almacenado en AsyncStorage
    const userToken = await AsyncStorage.getItem('userToken')
    if (userToken) {
      // Agregar el token como encabezado personalizado en la solicitud
      config.headers.user_token = userToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
