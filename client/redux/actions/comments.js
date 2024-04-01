import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createComment = createAsyncThunk(
  'create/comment',
  async (body) => {
    try {
      const { data } = await axiosInstance.post('comment', body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
