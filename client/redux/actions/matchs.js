import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const sendMatch = createAsyncThunk(
  'sendMatch/matchs',
  async ({ offerId, sportmanId }) => {
    try {
      console.log('data from sendMatch:', { offerId, sportmanId })
      const { data } = await axiosInstance.post('match', {
        offerId,
        sportmanId
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getUserMatchs = createAsyncThunk(
  'getUserMatchs/matchs',
  async (id) => {
    try {
      const { data } = await axiosInstance.get(`match/user/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getAllMatchs = createAsyncThunk(
  'getAllMatchs/matchs',
  async (id) => {
    try {
      const { data } = await axiosInstance.get('match')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
