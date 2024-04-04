import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [provisoryProfileImage, setProvisoryProfileImage] = useState()
  const [provisoryCoverImage, setProvisoryCoverImage] = useState()
  const [profileImage, setProfileImage] = useState()
  const [coverImage, setCoverImage] = useState()

  const pickImage = async (source) => {
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

        await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
          method: 'post',
          body: profileImageForm
        })
          .then((res) => res.json())
          .then((data) => {
            setProfileImage(data.url)
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

        await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
          method: 'post',
          body: coverImageForm
        })
          .then((res) => res.json())
          .then((data) => {
            setCoverImage(data.url)
          })
      }
    }
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
        setProvisoryCoverImage
      }}
    >
      {children}
    </Context.Provider>
  )
}
