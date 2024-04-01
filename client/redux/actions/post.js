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

export const like = createAsyncThunk('like/post', async (body) => {
  try {
    const { data } = await axiosInstance.post(`like`, body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllLikes = createAsyncThunk('getAllLikes/post', async () => {
  try {
    const { data } = await axiosInstance.get('like')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
