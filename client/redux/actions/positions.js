import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const getAllPositions = createAsyncThunk(
  'getAllPositions/positions',
  async () => {
    try {
      const { data } = await axiosInstance.get('position')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
