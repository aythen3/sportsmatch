import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const createClub = createAsyncThunk('create/club', async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post('club', body);
    return data;
  } catch (error) {
    if (error.response) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue(error.message || 'Algo salió mal');
  }
});
export const getAllClubs = createAsyncThunk('getAll/club', async () => {
  try {
    const { data } = await axiosInstance.get('club')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getClub = createAsyncThunk('get/club', async (id) => {
  try {
    console.log('getting club data of', id)
    const { data } = await axiosInstance.get(`club/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateClubData = createAsyncThunk(
  'updateClubData/club',
  async ({ id, body }) => {
    console.log('updating club data with ', body)
    try {
      const { data } = await axiosInstance.patch(`club/${id}`, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
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
