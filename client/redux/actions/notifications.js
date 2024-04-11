import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const getAllNotifications = createAsyncThunk(
  'getAllNotifications/notifications',
  async () => {
    try {
      const { data } = await axiosInstance.get('notification')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const getNotificationById = createAsyncThunk(
  'getNotificationById/notifications',
  async (id) => {
    try {
      const { data } = await axiosInstance.get(`notifications/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const getNotificationsByUserId = createAsyncThunk(
  'getNotificationsByUserId/notifications',
  async (id) => {
    try {
      const { data } = await axiosInstance.get(`notifications/user/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
