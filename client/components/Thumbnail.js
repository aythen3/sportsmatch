import React, { useContext, useState } from 'react'
import { Image, View, Platform, TouchableOpacity } from 'react-native'
import { Context } from '../context/Context'
import { useSelector } from 'react-redux'
import { Video } from 'expo-av'

const Thumbnail = ({ url, notUrl, styles }) => {
  const { mainColor } = useSelector((state) => state.users)
  const { generateLowResUrl } = useContext(Context)
  const [originalImageLoaded, setOriginalImageLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const handleLoad = () => {
    setOriginalImageLoaded(true)
  }

  const handleLoadError = () => {
    setOriginalImageLoaded(false)
  }

  // Function to get the file extension
  const getFileExtension = (url) => {
    return url.split('.').pop().toLowerCase()
  }

  // Determine if the file is an image or video
  const isVideo = ['mp4', 'avi', 'mov'].includes(getFileExtension(url))
  const imageUrl = notUrl
    ? url
    : originalImageLoaded
      ? generateLowResUrl(url, 90)
      : generateLowResUrl(url, 40)

  return (
    <View
      style={
        styles
          ? {
              ...styles,
              overflow: 'hidden'
            }
          : {
              width: '100%',
              height: '100%',
              borderRadius: 5,
              overflow: 'hidden'
            }
      }
    >
      {isVideo ? (
        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
          <Video
            source={{ uri: url }}
            style={{ width: '100%', height: '100%' }}
            controls={true}
            shouldPlay={isPlaying}
            isMuted={true}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          onLoad={handleLoad}
          onError={handleLoadError}
        />
      )}
    </View>
  )
}

export default Thumbnail
