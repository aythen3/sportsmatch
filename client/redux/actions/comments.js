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

export const getCommentByPost = createAsyncThunk(
  'getCommentByPost',
  async (id) => {
    try {
      const { data } = await axiosInstance.get(`comment/post/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
