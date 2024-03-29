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

export const deleteOffer = createAsyncThunk('deleteOffer', async (id) => {
  try {
    const { data } = await axiosInstance.delete(`offer/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateOffer = createAsyncThunk('updateOffer', async (offer) => {
  try {
    const { id, offerData } = offer
    console.log('action', offer)
    const { data } = await axiosInstance.patch(`offer/${id}`, { offerData })
    return data
  } catch (error) {
    console.log('error', error)
    throw new Error(error)
  }
})
