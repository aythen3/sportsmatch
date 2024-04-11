import { createSlice } from '@reduxjs/toolkit'
import {
  getAllNotifications,
  getNotificationsByUserId
} from '../actions/notifications'

const notificationsSlices = createSlice({
  name: 'notifications',
  initialState: {
    allNotifications: [],
    userNotifications: []
  },
  reducers: {
    setUserNotifications: (state, action) => {
      state.userNotifications = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // Get all notifications
      .addCase(getAllNotifications.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.loading = false
        state.allNotifications = action.payload
        state.error
      })
      .addCase(getAllNotifications.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Get all user notifications
      .addCase(getNotificationsByUserId.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getNotificationsByUserId.fulfilled, (state, action) => {
        state.loading = false
        state.userNotifications = action.payload
        state.error
      })
      .addCase(getNotificationsByUserId.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setUserNotifications } = notificationsSlices.actions

export default notificationsSlices.reducer
