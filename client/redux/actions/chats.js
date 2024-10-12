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
          `chat/room?senderId=${sender}&receiverId=${receiver}`
        )
        // const res = await axiosInstance.get(
        //   `chat/room?senderId=${receiver}&receiverId=${sender}`
        // )
        return data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      } else {
        const { data } = await axiosInstance.get(
          `chat/room?limit=${limit || 1000}&createdAt=${date || ts}&senderId=${sender}&receiverId=${receiver}`
        )
        const res = await axiosInstance.get(
          `chat/room?limit=${limit || 1000}&createdAt=${date || ts}&senderId=${receiver}&receiverId=${sender}`
        )
        //console.log('data: ', data)
        return [...data, ...res.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      }
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getUserChat = createAsyncThunk(
  'getUserChat/chats',
  async ({ userA, userB }) => {
    console.log('eee3', userA, userB)
    try {
      const data = await axiosInstance.get(
        `/chat/between-users/${userA}/${userB}`
      )
      return data.data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const getUserChats = createAsyncThunk(
  'getUserChats/chats',
  async (id) => {
    try {
      const data = await axiosInstance.get(`/chat/user/${id}/chats`)
      return data.data
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
export const updateChatMessages = createAsyncThunk(
  'updateChatMessages/chats',
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
