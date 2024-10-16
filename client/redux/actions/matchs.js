import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const sendMatch = createAsyncThunk(
  'sendMatch/matchs',
  async ({ offerId, sportmanId, clubId, status, prop1, userId }) => {
    try {
      // console.log('data from sendMatch:', {
      //   offerId,
      //   sportmanId,
      //   clubId,
      //   status,
      //   prop1
      // })

      const body = !offerId
        ? { sportmanId, clubId, status, prop1, userId }
        : { userId, offerId, sportmanId, clubId, status, prop1 }
      const { data } = await axiosInstance.post('match', body)
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
      const { data } = await axiosInstance.post(`club/${id}/info-relation`, {
        relation: ['matches']
      })
      //console.log('data response from getClubMatchs: ', data)
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
      // console.log('data: ', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateMatchById = createAsyncThunk(
  'updateMatchById/matchs',
  async ({ id, body }) => {
    try {
      const { data } = await axiosInstance.patch(`match/${id}`, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
