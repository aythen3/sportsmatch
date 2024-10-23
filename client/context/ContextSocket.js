import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateMessages,
  updateChatMessages,
  updateChats
} from '../redux/actions/chats'
import { setAllChats, setAllMessages } from '../redux/slices/chats.slices'
import { getNotificationsByUserId } from '../redux/actions/notifications'

// Crear el contexto del socket
const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext)
let socket
export const SocketProvider = ({ children }) => {
  const { user } = useSelector((state) => state.users)
  const { allMessages, userChats } = useSelector((state) => state.chats)
  // const states = useSelector((state) => state)

  const [roomId, setRoomId] = useState(null)
  const dispatch = useDispatch()

  //http://163.172.172.81:3010
  //192.168.0.77:3010
  // Solo inicializar si no existe una conexión de socket activa
  useEffect(() => {
    socket = io('http://163.172.172.81:3010', {
      transports: ['websocket'],
      query: {
        userId: user?.user?.id // Enviar userId al conectar
      }
    })

    socket.on('connect', () => {
      console.log('Connected to server11111111111111111111')
      socket.emit('joinGroup', { room: user?.user?.id })
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from server')
      setRoomId(null)
    })

    socket.on('error', (error) => {
      console.log('ERROR FROM SOCKET', error)
    })

    socket.on('readMessages', (room) => {
      console.log('Read Messages:', room)
    })

    socket.on('joinedRoom', (room) => {
      console.log(`Joined room: ${room}`)
      setRoomId(room)
    })

    socket.on('message-server', async (msg) => {
      console.log(msg, 'mmmmmmmmmmmmmmmm')
      dispatch(updateMessages(msg))
      if (msg.chat) {
        dispatch(updateChats(msg))
      }
    })

    socket.on('notification', (data) => {
      console.log(data, '22222222222222')
      dispatch(getNotificationsByUserId(user?.user?.id))
    })

    socket.on('messageRead', (data) => {
      const { messageId } = data

      // Actualiza la UI para reflejar que el mensaje ha sido leído
      // updateMessageAsRead(messageId) // Implementa esta función para actualizar el estado en tu UI
    })

    // // Manejar la respuesta del servidor (opcional)
    // socket.on('messagesMarkedAsRead', (messageIds) => {
    //   console.log('cambiaron los msg11', messageIds)
    //   const copy = [...allMessages]

    //   const allNewMessages = copy.map((message) => {
    //     if (messageIds.includes(message.id)) {
    //       console.log('entra')
    //       return { ...message, isReaded: true }
    //     } else {
    //       console.log('entra 2222')

    //       return message
    //     }
    //   })
    //   dispatch(setAllMessages(allNewMessages))
    //   console.log('cambiaron los msg', allNewMessages)
    // })

    //   socket.on('message-chat', (msg) => {
    //     console.log('New chat message:', msg)
    //     dispatch(updateChatMessages(msg)).then(() => {
    //       // Aquí puedes añadir más dispatchs o lógica extra si necesitas
    //     })
    //   })

    return () => {}
  }, [user])

  const sendMessage = (message, sender, receiver) => {
    if (socket) {
      console.log('Sending message:', { message, sender, receiver })
      socket.emit('message', { message, sender, receiver })
    }
  }

  const joinRoom = (room) => {
    if (socket) {
      console.log('join', room)
      socket.emit('joinGroup', { room })
    }
  }

  const leaveRoom = (room) => {
    if (socket) {
      socket.emit('leaveRoom', { room })
    }
  }

  const emitToUser = (usuarioId, evento, data) => {
    if (socket) {
      socket.emit('emitToUser', { usuarioId, evento, data })
    }
  }

  const openConversation = (chatId, userId) => {
    // Aquí podrías emitir un evento para marcar como leído
    if (socket) {
      socket.emit('markMessagesAsRead', {
        chatId,
        userId
      })
      console.log('cambiaron los msgggg')
    }
    // Cargar los mensajes de la conversación
  }

  return (
    <SocketContext.Provider
      value={{
        socket,
        sendMessage,
        joinRoom,
        leaveRoom,
        emitToUser,
        roomId,
        openConversation
      }}
    >
      {children}
    </SocketContext.Provider>
  )
  // Exportar newSocket
}
