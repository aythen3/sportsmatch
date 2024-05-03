import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'
import { setAllMessages } from '../slices/chats.slices'

export const getChatHistory = createAsyncThunk(
  'getChatHistory/chats',
  async ({ sender, receiver, limit, date }) => {
    try {
      const ts = new Date()
      if (!date) {
        const { data } = await axiosInstance.get(
          `chat/room?limit=${limit || 10}&senderId=${sender}&receiverId=${receiver}`
        )
        console.log('data1: ', data)
        return data
      } else {
        const { data } = await axiosInstance.get(
          `chat/room?limit=${limit || 10}&createdAt=${date || ts}&senderId=${sender}&receiverId=${receiver}`
        )
        //console.log('data: ', data)
        return data
      }
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateMessages = createAsyncThunk(
  'updateMessages/chats',
  async (msg) => {
    try {
      return msg
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const emptyAllMessages = () => async (dispatch) => {
  try {
    dispatch(setAllMessages([]))
  } catch (error) {
    console.log(error)
  }
}
