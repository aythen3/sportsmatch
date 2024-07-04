import React, { useContext, useState } from 'react'
import { Image, View } from 'react-native'
import { Context } from '../context/Context'
import { useSelector } from 'react-redux'

const Thumbnail = ({ url, notUrl, styles }) => {
  const { mainColor } = useSelector((state) => state.users)
  const { generateLowResUrl } = useContext(Context)
  const [originalImageLoaded, setOriginalImageLoaded] = useState(false)

  console.log('STYLES===', styles)

  const handleLoad = () => {
    console.log('Original image loaded successfully')
    setOriginalImageLoaded(true)
  }

  const handleLoadError = () => {
    console.log('Failed to load original image, switching to low resolution')
    setOriginalImageLoaded(false)
  }

  const imageUrl = notUrl
    ? url
    : originalImageLoaded
      ? generateLowResUrl(url, 90)
      : generateLowResUrl(url, 50)

  if (notUrl === true)
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
        <Image
          source={require('../assets/whiteSport.png')}
          style={{ width: '100%', height: '100%', backgroundColor: mainColor }}
          resizeMode="cover"
        />
      </View>
    )
  return (
    <View
      style={
        styles
          ? {
              ...styles,
              overflow: 'hidden'
              // backgroundColor: 'rgba(60,60,60,0.9)'
            }
          : {
              width: '100%',
              height: '100%',
              borderRadius: 5,
              overflow: 'hidden'
              // backgroundColor: 'rgba(60,60,60,0.9)'
            }
      }
    >
      <Image
        source={{ uri: imageUrl }}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        onLoad={handleLoad}
        onError={handleLoadError}
      />
    </View>
  )
}

export default Thumbnail
