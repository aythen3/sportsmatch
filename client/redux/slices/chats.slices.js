import { createSlice } from '@reduxjs/toolkit'
import {
  getChatHistory,
  getUserChat,
  getUserChats,
  updateChatMessages,
  updateMessages
} from '../actions/chats'

const clubSlices = createSlice({
  name: 'chats',
  initialState: {
    allMessages: [],
    userChats: [],

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
      // .addCase(updateMessages.pending, (state) => {
      //   state.loading = true
      //   state.error = false
      // })
      // .addCase(updateMessages.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.allMessages = [action.payload, ...state.allMessages]
      //   state.error = false
      // })
      // .addCase(updateMessages.rejected, (state) => {
      //   state.loading = false
      //   state.error = true
      // })
      .addCase(getUserChat.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getUserChat.fulfilled, (state, action) => {
        state.loading = false
        state.chat = action.payload.data
        state.error = false
      })
      .addCase(getUserChat.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(getUserChats.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getUserChats.fulfilled, (state, action) => {
        state.loading = false
        state.userChats = action.payload.data
        state.error = false
      })
      .addCase(getUserChats.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(updateMessages.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateMessages.fulfilled, (state, action) => {
        console.log(action.payload, 'payload')

        const allMessages = [...state.allMessages]

        // Verifica si el nuevo mensaje ya existe en el array de mensajes
        const messageExists = allMessages.some(
          (msg) => msg.id === action.payload.id
        )

        // Si el mensaje no existe, lo agregamos
        let newMessages
        if (!messageExists) {
          if (action?.payload?.chat?.messages) {
            // Agregar todos los mensajes del chat y el mensaje nuevo
            newMessages = [...action.payload.chat.messages, action.payload]
          } else {
            // Agregar solo el mensaje nuevo
            newMessages = [...allMessages, action.payload]
          }
        } else {
          // Si el mensaje ya existe, mantenemos los mensajes actuales sin cambios
          newMessages = allMessages
        }

        // Ordenar los mensajes por fecha de creación
        const sortedMessages = newMessages?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
        console.log('sorteddddddd', sortedMessages)
        // Actualizamos el estado
        state.loading = false
        state.allMessages = sortedMessages
        state.error = false
      })

      .addCase(updateMessages.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(updateChatMessages.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateChatMessages.fulfilled, (state, action) => {
        const allChats = [...state.userChats]

        // Verifica si el nuevo mensaje ya existe en el array de mensajes
        const chatExist = allChats.some(
          (cht) => cht.id === action.payload.chat.id
        )

        // Si el mensaje no existe, lo agregamos
        let newChat

        if (!chatExist) {
          if (action?.payload?.chat) {
            // Agregar todos los mensajes del chat y el mensaje nuevo
            newChat = {
              ...action.payload.chat, // Propaga las propiedades del objeto chat
              messages: [action.payload.newMessage] // Propaga los mensajes dentro del chat, si es necesario
            }
            state.userChats = [...state.userChats, newChat] // Agrega el nuevo chat al array de chats
          }
        } else {
          const chatFilter = [...state.userChats].map((c) => {
            if (c.id !== action.payload.chat.id) {
              return c
            } else {
              return {
                ...action.payload.chat,
                messages: [
                  ...action.payload.chat.messages,
                  action.payload.newMessage
                ]
              }
            }
          })
          // Si el mensaje ya existe, mantenemos los mensajes actuales sin cambios
          state.userChats = chatFilter
          console.log(
            chatFilter,
            'payload---------------------------------------------'
          )
        }

        // Actualizamos el estado
        state.loading = false
        state.error = false
      })

      .addCase(updateChatMessages.rejected, (state) => {
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
