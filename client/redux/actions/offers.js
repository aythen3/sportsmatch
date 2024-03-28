import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const setOffer = createAsyncThunk('setOffer', async (offer) => {
  try {
    const { data } = await axiosInstance.post('offer', offer)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllOffers = createAsyncThunk('getAllOffers', async () => {
  try {
    const { data } = await axiosInstance.get('offer')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
