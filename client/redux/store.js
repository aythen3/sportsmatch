import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'
import muroSlices from './slices/muro.slices'
import offersSlices from './slices/offers.slices'
import notificacionsSlices from './slices/notificacions.slices'
import sportsSlices from './slices/sports.slices'
import clubSlices from './slices/club.slices'
import sportmanSlices from './slices/sportman.slices'
import postSlices from './slices/post.slices'

export const store = configureStore({
  reducer: {
    users: usersSlices,
    muro: muroSlices,
    offers: offersSlices,
    notifications: notificacionsSlices,
    sports: sportsSlices,
    clubs: clubSlices,
    sportman: sportmanSlices,
    post: postSlices
  }
})
