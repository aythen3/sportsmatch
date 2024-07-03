import { createSlice } from '@reduxjs/toolkit'
import {
  getAllNotifications,
  getNotificationsByUserId,
  removeNotification
} from '../actions/notifications'

const notificationsSlices = createSlice({
  name: 'notifications',
  initialState: {
    allNotifications: [],
    userNotifications: []
  },
  reducers: {
    resetNotificationsSlices: (state, action) => {
      ;(state.allNotifications = []), (state.userNotifications = [])
    },
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
      .addCase(removeNotification.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(removeNotification.fulfilled, (state, action) => {
        console.log('removing notification', action.payload)
        const actualNotif = [...state.allNotifications]
        const filteredNotif = actualNotif.filter(
          (notif) => notif.id !== action.payload
        )
        state.loading = false
        console.log('setting allNotifications to', filteredNotif)
        state.allNotifications = filteredNotif
        state.error
      })
      .addCase(removeNotification.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setUserNotifications, resetNotificationsSlices } =
  notificationsSlices.actions

export default notificationsSlices.reducer
