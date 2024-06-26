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

export const deletePost = createAsyncThunk('delete/post', async (postId) => {
  try {
    const { data } = await axiosInstance.delete(`post/${postId}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateLike = createAsyncThunk(
  'updateLike/post',
  async ({ post, author, liked }) => {
    try {
      return { post, author, liked }
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getAllLikes = createAsyncThunk('getAllLikes/post', async () => {
  try {
    const { data } = await axiosInstance.get('like')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const listLikes = createAsyncThunk(
  'findLikes/post',
  async (authorId) => {
    try {
      const { data } = await axiosInstance.get(`like/list?authorId=${authorId}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const updateListLikes = createAsyncThunk(
  'updateListLikes/post',
  async ({ authorId, bool }) => {
    try {
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const filterPost = (posts) => {
  try {
    return posts
  } catch (error) {
    throw new Error(error)
  }
}
