import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createClub = createAsyncThunk('create/club', async (body) => {
  try {
    const { data } = await axiosInstance.post('club/', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
