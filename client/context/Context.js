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
  const [clubMatches, setClubMatches] = useState([])
  const [userMatches, setUserMatches] = useState([])
  const { allUsers, user } = useSelector((state) => state.users)
  const [provisoryProfileImage, setProvisoryProfileImage] = useState()
  const [provisoryCoverImage, setProvisoryCoverImage] = useState()
  const [profileImage, setProfileImage] = useState()
  const [coverImage, setCoverImage] = useState()
  const [roomId, setRoomId] = useState()
  const [libraryImage, setLibraryImage] = useState()

  function transformHttpToHttps(url) {
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://')
    } else {
      return url
    }
  }

  const pickImageFromCamera = async (source, imageUri) => {
    if(source && imageUri) {
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
      profileImageForm.append('cloud_name', 'dnewfuuv0')

      await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
        method: 'post',
        body: profileImageForm
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('setting', source, 'image to:',data.url)
          source === 'profile' ? setProfileImage(transformHttpToHttps(data.url)) : setCoverImage(transformHttpToHttps(data.url))
        })
    }
  }

  const pickImage = async (source, imageUri) => {
    console.log('source: ',source)
    console.log('imageUri:', imageUri)
    if (imageUri) {
      const profileImageData = {
        uri: imageUri,
        type: 'image/jpg',
        name: imageUri?.split('/')?.reverse()[0]?.split('.')[0]
      }

      const profileImageForm = new FormData()
      profileImageForm.append('file', profileImageData)
      profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
      profileImageForm.append('cloud_name', 'dnewfuuv0')

      await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
        method: 'post',
        body: profileImageForm
      })
        .then((res) => res.json())
        .then((data) => {
         console.log('dataUrl from uriImg:', data.url)
          setLibraryImage(transformHttpToHttps(data.url))
        })
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
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
          profileImageForm.append('cloud_name', 'dnewfuuv0')

          await fetch(
            'https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload',
            {
              method: 'post',
              body: profileImageForm
            }
          )
            .then((res) => res.json())
            .then((data) => {
              // console.log('dataUrl from profile:', data.url)
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
          coverImageForm.append('cloud_name', 'dnewfuuv0')

          await fetch(
            'https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload',
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
    const date = new Date(dateString)
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const formattedHours = hours < 10 ? '0' + hours : hours
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
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

  socket.on('connect', () => {
    console.log('Connected to server')
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from server')
    setRoomId()
  })

  socket.on('error', (error) => {
    console.error('Socket connection error:', error)
  })

  socket.on('joinedRoom', (room) => {
    // console.log('Joined to room: ', room)
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
    console.log('on joinRoom with id: ', sender, receiver)
    socket.emit('joinRoom', { sender, receiver })
  }

  const leaveRoom = (sender, receiver) => {
    console.log('on leaveRoom with id: ', sender, receiver)
    socket.emit('leaveRoom', { sender, receiver })
  }

  const sendMessage = (message, sender, receiver) => {
    socket.emit('message', { message, sender, receiver })
  }

  const getClubMatches = () => {
    console.log('getting club matches')
    axiosInstance.get('match').then((data) => {
      const clubMatches = data.data.filter(
        (match) => match?.prop1?.clubId === user?.user?.club?.id
      )
      console.log('clubMatches: ', clubMatches)
      setClubMatches(clubMatches)
    })
  }
  const getUserMatches = () => {
    console.log('getting user matches')
    axiosInstance.get('match').then((data) => {
      const userMatches = data.data.filter(
        (match) => match?.prop1?.sportmanId === user?.user?.sportman?.id
      )
      console.log('userMatches: ', userMatches)
      setUserMatches(userMatches)
    })
  }

  function getUserAge(birthdate) {
    const year = parseInt(birthdate)
    const actualYear = new Date().getFullYear()
    const age = actualYear - year
    return age
  }

  return (
    <Context.Provider
      value={{
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
