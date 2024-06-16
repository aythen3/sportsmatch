import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/actions/users'
import { updateMessages } from '../redux/actions/chats'
import axiosInstance from '../utils/apiBackend'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { allMatchs } = useSelector((state) => state.matchs)
  const [activeIcon, setActiveIcon] = useState('diary')
  const [clubMatches, setClubMatches] = useState([])
  const [userMatches, setUserMatches] = useState([])
  const { allUsers, user } = useSelector((state) => state.users)
  const [provisoryProfileImage, setProvisoryProfileImage] = useState()
  const [provisoryCoverImage, setProvisoryCoverImage] = useState()
  const [profileImage, setProfileImage] = useState()
  const [coverImage, setCoverImage] = useState()
  const [roomId, setRoomId] = useState()
  const [libraryImage, setLibraryImage] = useState()
  const userId = user?.user?.id

  function transformHttpToHttps(url) {
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://')
    } else {
      return url
    }
  }

  const pickImageFromCamera = async (source, imageUri) => {
    if (source && imageUri) {
      source === 'profile'
        ? setProvisoryProfileImage(imageUri)
        : setProvisoryCoverImage(imageUri)
      const profileImageData = {
        uri: imageUri,
        type: 'image/jpg',
        name: imageUri?.split('/')?.reverse()[0]?.split('.')[0]
      }

      const profileImageForm = new FormData()
      profileImageForm.append('file', profileImageData)
      profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
      profileImageForm.append('cloud_name', 'der45x19c')

      await fetch('https://api.cloudinary.com/v1_1/der45x19c/image/upload', {
        method: 'post',
        body: profileImageForm
      })
        .then((res) => res.json())
        .then((data) => {
          source === 'profile'
            ? setProfileImage(transformHttpToHttps(data.url))
            : setCoverImage(transformHttpToHttps(data.url))
        })
    }
  }

  const pickImage = async (source, imageUri) => {
    if (imageUri) {
      setProvisoryProfileImage(imageUri)
      const profileImageData = {
        uri: imageUri,
        type: 'image/jpg',
        name: imageUri?.split('/')?.reverse()[0]?.split('.')[0]
      }

      const profileImageForm = new FormData()
      profileImageForm.append('file', profileImageData)
      profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
      profileImageForm.append('cloud_name', 'der45x19c')

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
        {
          method: 'post',
          body: profileImageForm
        }
      )
        .then(async (res) => res.json())
        .then((data) => {
          setLibraryImage(transformHttpToHttps(data.url))
          return transformHttpToHttps(data.url)
        })
        .catch((error) => console.log(error))

      return res
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.1
      })

      if (!result.canceled) {
        source === 'profile'
          ? setProvisoryProfileImage(result.assets[0].uri)
          : setProvisoryCoverImage(result.assets[0].uri)
        if (source === 'profile') {
          const profileImageData = {
            uri: result.assets[0].uri,
            type: 'image/jpg',
            name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
          }

          const profileImageForm = new FormData()
          profileImageForm.append('file', profileImageData)
          profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
          profileImageForm.append('cloud_name', 'der45x19c')

          await fetch(
            'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
            {
              method: 'post',
              body: profileImageForm
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setProfileImage(transformHttpToHttps(data.url))
            })
        } else {
          const coverImageData = {
            uri: result.assets[0].uri,
            type: 'image/jpg',
            name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
          }

          const coverImageForm = new FormData()
          coverImageForm.append('file', coverImageData)
          coverImageForm.append('upload_preset', 'cfbb_profile_pictures')
          coverImageForm.append('cloud_name', 'der45x19c')

          await fetch(
            'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
            {
              method: 'post',
              body: coverImageForm
            }
          )
            .then((res) => res.json())
            .then((data) => {
              // console.log('dataUrl from cover:', data.url)
              setCoverImage(transformHttpToHttps(data.url))
            })
        }
      }
    }
  }

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  function getTimeFromDate(dateString) {
    // Create a new Date object from the UTC string
    const utcDate = new Date(dateString)

    // // Get the local time zone offset in milliseconds
    // const localOffsetMilliseconds = new Date().getTimezoneOffset() * 60000

    // Convert the UTC time to local time by adding the offset
    const localTime = utcDate

    // Create a new Date object representing the local time
    const localDate = new Date(localTime)

    // Extract local hours and minutes
    const hours = localDate.getHours()
    const minutes = localDate.getMinutes()

    // Format hours and minutes
    const formattedHours = hours < 10 ? '0' + hours : hours
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

    // Return formatted time
    return `${formattedHours}:${formattedMinutes}`
  }

  // http://cda3a8c0-e981-4f8d-808f-a9a389c5174e.pub.instances.scw.cloud:3010
  // http://192.168.0.8:3010
  const socket = io(
    'http://cda3a8c0-e981-4f8d-808f-a9a389c5174e.pub.instances.scw.cloud:3010',
    {
      transports: ['websocket']
      // auth: {
      //   autoConnect: true,
      //   forceNew: true,
      //   addTrailingSlash: false,
      //   withCredentials: true
      // }
    }
  )

  socket.on('connect', () => {})

  socket.on('disconnect', () => {
    setRoomId()
  })

  socket.on('error', (error) => {})

  socket.on('joinedRoom', (room) => {
    setRoomId(room)
  })

  socket.on('leaveRoom', (room) => {
    // console.log('Leaving room: ', room)
    setRoomId()
  })

  socket.on('message-server', (msg) => {
    // console.log('New message:', msg)
    dispatch(updateMessages(msg))
  })

  const joinRoom = (sender, receiver) => {
    socket.emit('joinRoom', { sender, receiver })
  }

  const leaveRoom = (sender, receiver) => {
    socket.emit('leaveRoom', { sender, receiver })
  }

  const sendMessage = (message, sender, receiver) => {
    socket.emit('message', { message, sender, receiver })
  }

  const getClubMatches = () => {
    axiosInstance.get('match').then((data) => {
      const clubMatches = data.data.filter(
        (match) => match?.prop1?.clubId === user?.user?.club?.id
      )
      setClubMatches(clubMatches)
    })
  }
  const getUserMatches = () => {
    axiosInstance.get('match').then((data) => {
      const userMatches = data.data.filter(
        (match) => match?.prop1?.sportmanId === user?.user?.sportman?.id
      )
      setUserMatches(userMatches)
    })
  }

  function getUserAge(birthdate) {
    const year = parseInt(birthdate)
    const actualYear = new Date().getFullYear()
    const age = actualYear - year
    return age
  }

  const [usersWithMessages, setUsersWithMessages] = useState([])
  const [notReaded, setNotReaded] = useState(0)

  const getUsersMessages = async () => {
    // const getConvMessages = async (user) => {
    //   try {
    //     const { data } = await axiosInstance.get(
    //       `chat/room?limit=${10}&senderId=${userId}&receiverId=${user.id}`
    //     )
    //     const filterByDelete = data.filter((message) => {
    //       const senderOrReceiver =
    //         message.senderId === userId ? 'sender' : 'receiver'
    //       if (senderOrReceiver === 'sender') {
    //         if (message.senderDelete === true) {
    //           return false
    //         }
    //         return true
    //       }
    //       if (senderOrReceiver === 'receiver') {
    //         if (message.receiverDelete === true) {
    //           return false
    //         }
    //         return true
    //       }
    //     })
    //     return filterByDelete
    //   } catch (error) {
    //     console.error('Error fetching data:', error)
    //     return []
    //   }
    // }
    // Promise.all(
    //   allUsers
    //     ?.filter((user) => user?.id !== userId)
    //     .map(async (user) => ({
    //       user,
    //       data: await getConvMessages(user)
    //     }))
    // )
    //   .then((filteredUsers) => {
    //     const usersWithMessages = filteredUsers.filter(
    //       (user) => user?.data && user?.data.length > 0
    //     )

    //     const sortedUsersWithMessages = usersWithMessages.sort(
    //       (a, b) =>
    //         new Date(b.data[0].createdAt) - new Date(a.data[0].createdAt)
    //     )
    //     console.log(
    //       'setting users with messages to',
    //       sortedUsersWithMessages.map(({ user }) => user)
    //     )
    //     setUsersWithMessages(sortedUsersWithMessages.map(({ user }) => user))
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching messages for users:', error)
    //   })
    const { data } = await axiosInstance.post('chat/chats', {
      userId
    })
    const convs = Object.keys(data)
    const notReaded = convs
      .map(
        (conv) =>
          data[conv].filter(
            (message) =>
              message.senderId !== userId && message.isReaded === false
          ).length
      )
      .reduce((acc, curr) => acc + curr, 0)
    setNotReaded(notReaded)
    if (Object.keys(data).length > 0) {
      const finalInfo = Object.keys(data).map((key) => {
        const otherUserId = key
          .split('_')
          .filter((singleId) => singleId !== userId)[0]
        const userData = allUsers.filter((user) => user.id === otherUserId)[0]
        return { room: key, ...userData }
      })
      setUsersWithMessages(finalInfo)
    }
  }

  return (
    <Context.Provider
      value={{
        notReaded,
        setNotReaded,
        getUsersMessages,
        setUsersWithMessages,
        usersWithMessages,
        pickImage,
        coverImage,
        setCoverImage,
        profileImage,
        setProfileImage,
        provisoryProfileImage,
        setProvisoryProfileImage,
        provisoryCoverImage,
        setProvisoryCoverImage,
        getUserAge,
        joinRoom,
        sendMessage,
        roomId,
        setRoomId,
        libraryImage,
        setLibraryImage,
        transformHttpToHttps,
        leaveRoom,
        getTimeFromDate,
        activeIcon,
        setActiveIcon,
        setClubMatches,
        getClubMatches,
        getUserMatches,
        setUserMatches,
        pickImageFromCamera,
        clubMatches,
        userMatches
      }}
    >
      {children}
    </Context.Provider>
  )
}
