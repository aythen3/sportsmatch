import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createSportman = createAsyncThunk(
  'create/sportman',
  async (body) => {
    try {
      const { data } = await axiosInstance.post('sportman', body)
      console.log(data,'dat')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getSportman = createAsyncThunk('get/sportman', async (id) => {
  try {
    const { data } = await axiosInstance.get(`sportman/${id}`)
    console.log(data,'sportman data')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateSportman = createAsyncThunk(
  'update/sportman',
  async (body) => {
    console.log('body: ', body)
    try {
      const { id, newData } = body
      const { data } = await axiosInstance.patch(`sportman/${id}`, {
        info: newData
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
