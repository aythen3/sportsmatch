import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const getChatHistory = createAsyncThunk(
  'getChatHistory/chats',
  async ({ limit, date, sender, receiver }) => {
    try {
      const { data } = await axiosInstance.get(
        `chat?limit=${limit}&createdAt=${date}&senderId=${sender}&receiverId=${receiver}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
