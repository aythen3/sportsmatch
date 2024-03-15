import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createSportman = createAsyncThunk(
  'create/sportman',
  async (body) => {
    console.log('actionnnnnn', body)
    try {
      const { data } = await axiosInstance.post('sportman', body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
