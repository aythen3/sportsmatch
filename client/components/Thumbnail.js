import React, { useContext, useEffect, useState } from 'react'
import { Image, View, Platform, TouchableOpacity } from 'react-native'
import { Context } from '../context/Context'
import { useSelector } from 'react-redux'
import { Video } from 'expo-av'
import * as VideoThumbnails from 'expo-video-thumbnails'

const Thumbnail = ({ url, notUrl, styles, play, isMini }) => {
  const { mainColor } = useSelector((state) => state.users)
  const { generateLowResUrl } = useContext(Context)
  const [originalImageLoaded, setOriginalImageLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnailUri, setThumbnailUri] = useState(null)
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
      ? generateLowResUrl(url, 80)
      : generateLowResUrl(url, 40)

  // Function to generate video thumbnail
  useEffect(() => {
    if (isVideo) {
      generateThumbnail(url)
    }
  }, [url, isVideo])

  const generateThumbnail = async (videoUrl) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(videoUrl, {
        time: 1000 // Captura un frame a los 1 segundo del video
      })
      setThumbnailUri(uri)
    } catch (e) {
      console.warn(e)
    }
  }

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
      {isVideo && !isMini ? (
        <Video
          onTouchStart={() => setIsPlaying(!isPlaying)}
          source={{ uri: url }}
          style={{ width: '100%', height: '100%' }}
          controls={true}
          shouldPlay={play && isPlaying}
          isMuted={play ? false : true}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={{ uri: isVideo ? thumbnailUri : imageUrl }}
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
