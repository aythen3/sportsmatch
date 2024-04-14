import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const sendMatch = createAsyncThunk(
  'sendMatch/matchs',
  async ({ offerId, sportmanId, clubId, status, prop1 }) => {
    try {
      console.log('data from sendMatch:', {
        offerId,
        sportmanId,
        clubId,
        status,
        prop1
      })
      const { data } = await axiosInstance.post('match', {
        offerId,
        sportmanId,
        clubId,
        status,
        prop1
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

// FIX THIS ======
export const getClubMatchs = createAsyncThunk(
  'getClubMatchs/matchs',
  async (id) => {
    try {
      console.log('id from getClubMatchs', id)
      const { data } = await axiosInstance.post(`club/${id}/info-relation`, {
        relation: ['matches']
      })
      console.log('data response from getClubMatchs: ', data)
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
