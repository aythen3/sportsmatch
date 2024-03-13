import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAll = createAsyncThunk('getAll/sports', async () => {
  try {
    const { data } = await axiosInstance.get('sport/')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
