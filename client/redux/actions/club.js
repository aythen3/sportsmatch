import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const createClub = createAsyncThunk('create/club', async (body) => {
  try {
    const { data } = await axiosInstance.post('club', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllClubs = createAsyncThunk('getAll/club', async () => {
  try {
    const { data } = await axiosInstance.get('club')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getClub = createAsyncThunk('get/club', async (id) => {
  try {
    const { data } = await axiosInstance.get(`club/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateImgClub = createAsyncThunk('upImages/club', async (file) => {
  try {
    console.log('actionfile', file)
    const { data } = await axios.post(
      // 'https://api-sportsmatch.ay-cloud.com/api/img-manager',
      'https://192.168.1.47:3000/api/img-manager',
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    console.log('actiondata', data)
    return data
  } catch (error) {
    console.log('actionerror', error)
    throw new Error(error)
  }
})
