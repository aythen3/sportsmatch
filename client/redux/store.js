import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'

export const store = configureStore({
  reducer: {
    users: usersSlices
  }
})
