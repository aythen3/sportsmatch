import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessages, updateChatMessages } from '../redux/actions/chats'

// Crear el contexto del socket
const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ children }) => {
  const { user } = useSelector((state) => state.users)
  const [roomId, setRoomId] = useState(null)
  const dispatch = useDispatch()

  console.log(user.user?.id, '-----------------------s-------------')
  //http://163.172.172.81:3010
  //192.168.0.77:3010
  // Solo inicializar si no existe una conexión de socket activa
  const socket = io('http://163.172.172.81:3010', {
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

  socket.on('message-server', (msg) => {
    console.log('New message from server:', msg)
    dispatch(updateMessages(msg))
  })

  //   socket.on('message-chat', (msg) => {
  //     console.log('New chat message:', msg)
  //     dispatch(updateChatMessages(msg)).then(() => {
  //       // Aquí puedes añadir más dispatchs o lógica extra si necesitas
  //     })
  //   })

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

  return (
    <SocketContext.Provider
      value={{ socket, sendMessage, joinRoom, leaveRoom, emitToUser, roomId }}
    >
      {children}
    </SocketContext.Provider>
  )
  // Exportar newSocket
}
