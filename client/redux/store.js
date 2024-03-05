import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'
import muroSlices from './slices/muro.slices'

export const store = configureStore({
  reducer: {
    users: usersSlices,
    muro: muroSlices
  }
})
