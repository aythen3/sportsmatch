import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createClub = createAsyncThunk('create/club', async (body) => {
  try {
    const { data } = await axiosInstance.post('club/', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateImgClub = createAsyncThunk(
  'upImages/club',
  async ({ id, files }) => {
    try {
      // const { files, id } = body

      console.log('entreeeee', id, files)

      const { data } = await axiosInstance.patch(`club/img/${id}`, files)
      console.log('RESPUESTRAAAAAA', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
