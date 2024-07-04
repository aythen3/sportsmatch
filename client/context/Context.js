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
  const [selectedPost, setSelectedPost] = useState()
  const [showDeletePostModalFromProfile, setShowDeletePostModalFromProfile] =
    useState(false)
  const userId = user?.user?.id

  function transformHttpToHttps(url) {
    if (url?.startsWith('http://')) {
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
  // const [pickImageLoading, setPickImageLoading] = useState(false)
  // const pickImage = async (source, imageUri) => {
  //   if (imageUri) {
  //     setProvisoryProfileImage(imageUri)
  //     const profileImageData = {
  //       uri: imageUri,
  //       type: 'image/jpg',
  //       name: imageUri?.split('/')?.reverse()[0]?.split('.')[0]
  //     }

  //     const profileImageForm = new FormData()
  //     profileImageForm.append('file', profileImageData)
  //     profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
  //     profileImageForm.append('cloud_name', 'der45x19c')

  //     const res = await fetch(
  //       'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
  //       {
  //         method: 'post',
  //         body: profileImageForm
  //       }
  //     )
  //       .then(async (res) => res.json())
  //       .then((data) => {
  //         setLibraryImage(transformHttpToHttps(data.url))
  //         return transformHttpToHttps(data.url)
  //       })
  //       .catch((error) => console.log(error))

  //     return res
  //   } else {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [1, 1],
  //       quality: 0.1
  //     })

  //     if (!result.canceled) {
  //       source === 'profile'
  //         ? setProvisoryProfileImage(result.assets[0].uri)
  //         : setProvisoryCoverImage(result.assets[0].uri)
  //       if (source === 'profile') {
  //         const profileImageData = {
  //           uri: result.assets[0].uri,
  //           type: 'image/jpg',
  //           name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
  //         }

  //         const profileImageForm = new FormData()
  //         profileImageForm.append('file', profileImageData)
  //         profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
  //         profileImageForm.append('cloud_name', 'der45x19c')

  //         await fetch(
  //           'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
  //           {
  //             method: 'post',
  //             body: profileImageForm
  //           }
  //         )
  //           .then((res) => res.json())
  //           .then((data) => {
  //             setProfileImage(transformHttpToHttps(data.url))
  //           })
  //       } else {
  //         const coverImageData = {
  //           uri: result.assets[0].uri,
  //           type: 'image/jpg',
  //           name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
  //         }

  //         const coverImageForm = new FormData()
  //         coverImageForm.append('file', coverImageData)
  //         coverImageForm.append('upload_preset', 'cfbb_profile_pictures')
  //         coverImageForm.append('cloud_name', 'der45x19c')

  //         await fetch(
  //           'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
  //           {
  //             method: 'post',
  //             body: coverImageForm
  //           }
  //         )
  //           .then((res) => res.json())
  //           .then((data) => {
  //             // console.log('dataUrl from cover:', data.url)
  //             setCoverImage(transformHttpToHttps(data.url))
  //           })
  //       }
  //     }
  //   }
  // }
  const [pickImageLoading, setPickImageLoading] = useState(false)

  const pickImage = async (source, imageUri) => {
    console.log('setting image loader to TRUE')
    setPickImageLoading(true)

    try {
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
        const data = await res.json()
        setLibraryImage(transformHttpToHttps(data.url))
        console.log('setting image loader to FALSE')
        setPickImageLoading(false)
        return transformHttpToHttps(data.url)
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
              name: result.assets[0].uri
                ?.split('/')
                ?.reverse()[0]
                ?.split('.')[0]
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
            const data = await res.json()
            setProfileImage(transformHttpToHttps(data.url))
          } else {
            const coverImageData = {
              uri: result.assets[0].uri,
              type: 'image/jpg',
              name: result.assets[0].uri
                ?.split('/')
                ?.reverse()[0]
                ?.split('.')[0]
            }

            const coverImageForm = new FormData()
            coverImageForm.append('file', coverImageData)
            coverImageForm.append('upload_preset', 'cfbb_profile_pictures')
            coverImageForm.append('cloud_name', 'der45x19c')

            const res = await fetch(
              'https://api.cloudinary.com/v1_1/der45x19c/image/upload',
              {
                method: 'post',
                body: coverImageForm
              }
            )
            const data = await res.json()
            setCoverImage(transformHttpToHttps(data.url))
          }
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      console.log('setting image loader to FALSE')
      setPickImageLoading(false)
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

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io(
      'http://cda3a8c0-e981-4f8d-808f-a9a389c5174e.pub.instances.scw.cloud:3010',
      {
        transports: ['websocket']
      }
    )

    newSocket.on('connect', () => {})

    newSocket.on('disconnect', () => {
      setRoomId()
    })

    newSocket.on('error', (error) => {
      console.log('ERROR FROM SOCKET', error)
    })

    newSocket.on('joinedRoom', (room) => {
      setRoomId(room)
    })

    newSocket.on('leaveRoom', (room) => {
      // console.log('Leaving room: ', room)
      setRoomId()
    })

    newSocket.on('message-server', (msg) => {
      // console.log('New message:', msg)
      dispatch(updateMessages(msg))
      // getUsersMessages()
    })

    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [])

  const disconnectFromSocket = () => {
    if (socket) {
      socket.disconnect()
    }
  }

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
  const [notReadedMessages, setNotReadedMessages] = useState()

  const getUsersMessages = async () => {
    const { data } = await axiosInstance.post('chat/chats', {
      userId
    })
    // console.log('DATA', data)
    const convs = Object.keys(data)
    const notReadedConvMessages = convs
      .map((conv) =>
        data[conv].filter(
          (message) => message.senderId !== userId && message.isReaded === false
        )
      )
      .flat()
    setNotReadedMessages(notReadedConvMessages)
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
        const lastMessage = data[key].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )[0]
        return { room: key, ...userData, lastMessage }
      })
      // console.log('Setting users with messages to: ', finalInfo)
      setUsersWithMessages(
        finalInfo.sort(
          (a, b) =>
            new Date(b.lastMessage.createdAt) -
            new Date(a.lastMessage.createdAt)
        )
      )
    }
  }

  const generateLowResUrl = (imageUrl, quality) => {
    const imgQuality = quality || 80
    const baseUrl = 'https://res.cloudinary.com'
    const cloudName = 'der45x19c'

    if (!imageUrl?.startsWith(baseUrl)) {
      return imageUrl
    }

    const imagePathStartIndex = imageUrl.indexOf('/upload/') + 8
    const imagePath = imageUrl.substring(imagePathStartIndex)

    const lowResUrl = `${baseUrl}/${cloudName}/image/upload/q_${imgQuality}/${imagePath}`

    return lowResUrl
  }

  return (
    <Context.Provider
      value={{
        notReaded,
        generateLowResUrl,
        setNotReaded,
        getUsersMessages,
        setUsersWithMessages,
        usersWithMessages,
        pickImage,
        showDeletePostModalFromProfile,
        setShowDeletePostModalFromProfile,
        coverImage,
        setCoverImage,
        profileImage,
        setProfileImage,
        provisoryProfileImage,
        notReadedMessages,
        setNotReadedMessages,
        setProvisoryProfileImage,
        provisoryCoverImage,
        setProvisoryCoverImage,
        getUserAge,
        joinRoom,
        disconnectFromSocket,
        sendMessage,
        roomId,
        setRoomId,
        pickImageLoading,
        setPickImageLoading,
        libraryImage,
        setLibraryImage,
        transformHttpToHttps,
        selectedPost,
        setSelectedPost,
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
