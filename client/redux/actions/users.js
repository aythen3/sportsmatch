import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAllUsers = createAsyncThunk('getAll/users', async () => {
  try {
    const { data } = await axiosInstance.get('user')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getUserData = createAsyncThunk('getUserData/users', async (id) => {
  try {
    const { data } = await axiosInstance.get(`user/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const loginWithGoogle = createAsyncThunk(
  'users/loginWithGoogle',
  async (body) => {
    //console.log('data from google login: ', body)
    try {
      // const { data } = await axiosInstance.patch(`/users/${id}`, body)
      return body
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateUserClubData = createAsyncThunk(
  'updateUserClubData/users',
  async ({ id, data }) => {
    try {
      // await axiosInstance.patch(`user/${id}`, { type: 'club' })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getUserChild = createAsyncThunk(
  'getUserChild/users',
  async (body) => {
    const { id, type } = body
    try {
      const { data } = await axiosInstance.get(`user/child/${id}?type=${type}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateUserData = createAsyncThunk(
  'updateUserData/users',
  async ({ id, body }) => {
    try {
      const { data } = await axiosInstance.patch(`user/${id}`, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const deleteUserById = createAsyncThunk(
  'deleteUserById/users',
  async (id) => {
    try {
      const { data } = await axiosInstance.delete(`user/${id}`)
      return id
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const create = createAsyncThunk('create/user', async (body) => {
  console.log('creating user with ', body)
  try {
    const { data } = await axiosInstance.post('user', body)
    console.log('response from create action', data)
    return data
  } catch (error) {
    console.log('Error creating user: ', error)
  }
})

export const login = createAsyncThunk('login/user', async (body) => {
  try {
    const { data } = await axiosInstance.post('auth/login', body)
    console.log('returning data from login', data)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
