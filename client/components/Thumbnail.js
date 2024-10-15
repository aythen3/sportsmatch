import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image, View, Platform, TouchableOpacity, Button } from 'react-native'
import { Context } from '../context/Context'
import { useSelector } from 'react-redux'
import { Video } from 'expo-av'
import * as VideoThumbnails from 'expo-video-thumbnails'

const Thumbnail = ({ url, notUrl, styles, play, isMini, post }) => {
  const video = useRef(null)
  const [status, setStatus] = useState({})
  const { mainColor } = useSelector((state) => state.users)
  const { generateLowResUrl, scalableFontSize } = useContext(Context)
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
        <View style={{ flex: 1 }}>
          <Video
            useNativeControls
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            source={{ uri: url }}
            style={{ width: '100%', height: '100%' }}
            controls={true}
            isLooping
            shouldPlay={play && isPlaying}
            isMuted={play ? false : true}
            resizeMode="cover"
          />
          {/* <View style={{ backgroundColor: 'red' }}>
            <Button
              title={status.isPlaying ? 'Pause' : 'Play'}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            />
          </View> */}
        </View>
      ) : (
        <Image
          source={{ uri: isVideo ? thumbnailUri : imageUrl }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: post ? 'cover' : 'cover',
            borderRadius: 5
          }}
          onLoad={handleLoad}
          onError={handleLoadError}
        />
      )}
    </View>
  )
}

export default Thumbnail
