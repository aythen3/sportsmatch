import { createSlice } from '@reduxjs/toolkit'
import { getChatHistory, updateMessages } from '../actions/chats'

const clubSlices = createSlice({
  name: 'chats',
  initialState: {
    allMessages: []
  },
  reducers: {
    setAllMessages: (state, action) => {
      state.allMessages = action.payload
    }
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
      // Update allMessages
      .addCase(updateMessages.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateMessages.fulfilled, (state, action) => {
        state.loading = false
        state.allMessages = [action.payload, ...state.allMessages]
        state.error = false
      })
      .addCase(updateMessages.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setAllMessages } = clubSlices.actions

export default clubSlices.reducer
