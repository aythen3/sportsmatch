import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'
import muroSlices from './slices/muro.slices'
import offersSlices from './slices/offers.slices'

export const store = configureStore({
  reducer: {
    users: usersSlices,
    muro: muroSlices,
    offers: offersSlices
  }
})
