import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const createClub = createAsyncThunk('create/club', async (body) => {
  try {
    const { data } = await axiosInstance.post('club', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllClubs = createAsyncThunk('getAll/club', async () => {
  try {
    const { data } = await axiosInstance.get('club')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getClub = createAsyncThunk('get/club', async (id) => {
  console.log('on getClub action!')
  try {
    const { data } = await axiosInstance.get(`club/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

// export const updateImgClub = createAsyncThunk('upImages/club', async (file) => {
//   try {
//     console.log('actionfile', file)
//     const { data } = await axiosInstance.post(
//       // 'https://api-sportsmatch.ay-cloud.com/api/img-manager',
//       'img-manager',
//       file,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       }
//     )
//     console.log('actiondata', data)
//     return data
//   } catch (error) {
//     console.log('actionerror', error)
//     throw new Error(error)
//   }
// })
export const updateClubProfileImage = createAsyncThunk(
  'updateClubProfileImage/club',
  async ({ id, body }) => {
    try {
      const { data } = await axiosInstance.patch(`club/img/${id}`, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

// img_perfil
// img_front

export const updateClubCoverImage = createAsyncThunk(
  'updateClubCoverImage/club',
  async ({ id, body }) => {
    try {
      const { data } = await axiosInstance.patch(`club/img/${id}`, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const deleteClubById = createAsyncThunk(
  'deleteClubById/club',
  async (id) => {
    try {
      const { data } = await axiosInstance.delete(`club/${id}`)
      return id
    } catch (error) {
      throw new Error(error)
    }
  }
)
