import { createSlice } from '@reduxjs/toolkit'
import { getChatHistory, updateMessages } from '../actions/chats'

const clubSlices = createSlice({
  name: 'chats',
  initialState: {
    allMessages: [],
    loading: false,
    error: false
  },
  reducers: {
    resetChatsSlices: (state, action) => {
      state.allMessages = []
      ;(state.loading = false), (state.error = false)
    },
    setAllMessages: (state, action) => {
      state.allMessages = action.payload
    },
    setAllConversationMessagesToRead: (state, action) => {
      const allToReaded = state.allMessages.map((message) => ({
        ...message,
        isReaded: true
      }))
      state.allMessages = allToReaded
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
        console.log(
          '========SETTING ALLMESSAGES TO PAYLOAD',
          action.payload.map((message) => {
            return {
              message: message.message,
              receiverId: message.receiverId,
              senderId: message.senderId,
              roomId: message.room
            }
          })
        )
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

export const {
  setAllMessages,
  setAllConversationMessagesToRead,
  resetChatsSlices
} = clubSlices.actions

export default clubSlices.reducer
