import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAll = createAsyncThunk('getAll/sports', async () => {
  try {
    const { data } = await axiosInstance.get('sport/')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllPositions = createAsyncThunk(
  'getAll/positions',
  async () => {
    try {
      const { data } = await axiosInstance.get('position')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getSportById = createAsyncThunk(
  'getSportById/sport',
  async (id) => {
    try {
      const { data } = await axiosInstance.get(`sport/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
