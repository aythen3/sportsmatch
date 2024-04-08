import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createSportman = createAsyncThunk(
  'create/sportman',
  async (body) => {
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
      console.log('body from updateSportman: ', body)
      const { id, newData } = body
      const { data } = await axiosInstance.patch(`sportman/${id}`, {
        info: newData
      })
      console.log('data response from updateSportsman: ', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
