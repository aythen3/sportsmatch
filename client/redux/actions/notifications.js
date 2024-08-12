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
      const { data } = await axiosInstance.get(`notification/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const updatePushToken = createAsyncThunk(
  'user/update-token',
  async (user_id, token) => {
    try {
      const { data } = await axiosInstance.patch(
        `user/update-token/${user_id}/${token}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const markAllUserNotificationsAsRead = createAsyncThunk(
  'markAllUserNotificationsAsRead/notifications',
  async (userId) => {
    console.log('READING ALL NOTIF FROM', userId)
    try {
      const { data } = await axiosInstance.patch(
        `notification/user/${userId}/mark-read`
      )
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
      const { data } = await axiosInstance.get(`notification/user/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const sendNotification = createAsyncThunk(
  'sendNotification',
  async (body) => {
    try {
      const { data } = await axiosInstance.post('notification', body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const removeNotification = createAsyncThunk(
  'removeNotification',
  async (id) => {
    try {
      const { data } = await axiosInstance.delete(`notification/${id}`)
      return id
    } catch (error) {
      throw new Error(error)
    }
  }
)
