import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createSportman = createAsyncThunk(
  'create/sportman',
  async (body) => {
    console.log('CREATING SPORTMAN WITH', body)
    try {
      const { data } = await axiosInstance.post('sportman', body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getSportman = createAsyncThunk('get/sportman', async (id) => {
  try {
    const { data } = await axiosInstance.get(`sportman/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateSportman = createAsyncThunk(
  'update/sportman',
  async (body) => {
    try {
      const { id, newData, type } = body
      if (!type) {
        const { data } = await axiosInstance.patch(`sportman/${id}`, {
          info: newData
        })
        return data
      } else {
        const { data } = await axiosInstance.patch(`sportman/${id}`, {
          info: newData,
          type: 'sportman'
        })
        return data
      }
    } catch (error) {
      throw new Error(error)
    }
  }
)
