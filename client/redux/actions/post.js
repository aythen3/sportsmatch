import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAllPosts = createAsyncThunk('getAll/post', async () => {
  try {
    const { data } = await axiosInstance.get('post')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const createPost = createAsyncThunk('create/post', async (post) => {
  try {
    const { data } = await axiosInstance.post('post', post)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
