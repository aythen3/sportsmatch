import { createSlice } from '@reduxjs/toolkit'
import { getChatHistory } from '../actions/chats'

const clubSlices = createSlice({
  name: 'chats',
  initialState: {
    allMessages: []
  },
  reducers: {
    // setClub: (state, action) => {
    //   state.club = action.payload.payload.user.club
    // }
  },
  extraReducers: (builder) => {
    builder
      // Get chat history
      .addCase(getChatHistory.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getChatHistory.fulfilled, (state, action) => {
        state.loading = false
        state.allMessages = action.payload
        state.error = false
      })
      .addCase(getChatHistory.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setClub } = clubSlices.actions

export default clubSlices.reducer
