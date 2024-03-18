import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const createClub = createAsyncThunk('create/club', async (body) => {
  try {
    const { data } = await axiosInstance.post('club/', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateImgClub = createAsyncThunk('upImages/club', async (file) => {
  try {
    // console.log('action', formData)
    // const formData = new FormData()
    // formData.append('file', {
    //   uri: image1.uri,
    //   type: image1.type,
    //   name: fileName
    // })

    console.log('form', file)

    // for (const part of formData._parts) {
    //   const [name, value] = part
    //   console.log(`Part Name: ${name}`)
    //   console.log(`Part Value:`, value)
    // }

    const { data } = await axios.post(
      'http://192.168.18.82:3000/api/img-manager',
      file.file,
      {
        headers: {
          'Content-Type': 'multipart/form-data' // Este es el encabezado requerido para enviar FormData
          // Otros headers opcionales pueden ser agregados aquí según tus necesidades
        }
      }
    )

    console.log('RESPUESTRAAAAAA', data)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
