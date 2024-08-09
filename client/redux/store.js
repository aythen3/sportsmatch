import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'
import muroSlices from './slices/muro.slices'
import offersSlices from './slices/offers.slices'
import notificationsSlices from './slices/notifications.slices'
import sportsSlices from './slices/sports.slices'
import clubSlices from './slices/club.slices'
import sportmanSlices from './slices/sportman.slices'
import postSlices from './slices/post.slices'
import commentsSlices from './slices/comments.slices'
import ChatsSlices from './slices/chats.slices'
import positionsSlices from './slices/positions.slices'
import matchsSlices from './slices/matchs.slices'
import reactotron from '../ReactotronConfig'

export const store = configureStore({
  reducer: {
    users: usersSlices,
    muro: muroSlices,
    offers: offersSlices,
    notifications: notificationsSlices,
    sports: sportsSlices,
    clubs: clubSlices,
    sportman: sportmanSlices,
    post: postSlices,
    comments: commentsSlices,
    chats: ChatsSlices,
    positions: positionsSlices,
    matchs: matchsSlices
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat( __DEV__ ? reactotron.createEnhancer() : []),

  
})
