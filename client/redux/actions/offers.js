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

export const signToOffer = createAsyncThunk(
  'signToOffer',
  async ({ offerId, userId }) => {
    console.log('{offerId, userId}: ', { offerId, userId })
    try {
      const { data } = await axiosInstance.post(
        `offer/${offerId}/agregar-inscripcion/${userId}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getAllOffers = createAsyncThunk('getAllOffers', async () => {
  try {
    const { data } = await axiosInstance.get('offer')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getOfferById = createAsyncThunk('getOfferById', async (id) => {
  try {
    const { data } = await axiosInstance.get(`offer/${id}`)
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

export const updateOffer = createAsyncThunk(
  'updateOffer',
  async ({ id, body }) => {
    try {
      console.log('id, body :', id, body)
      const { data } = await axiosInstance.patch(`offer/${id}`, body)
      console.log('data from updateOffer: ', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
