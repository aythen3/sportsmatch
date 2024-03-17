import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const create = createAsyncThunk('create/user', async (body) => {
  try {
    const { data } = await axiosInstance.post('user/', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const login = createAsyncThunk('login/user', async (body) => {
  console.log(body)
  try {
    const { data } = await axiosInstance.post('auth/login/', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
