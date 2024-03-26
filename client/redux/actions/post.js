import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAllPosts = createAsyncThunk('getAll/users', async () => {
  try {
    const { data } = await axiosInstance.get('post')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
