import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const ImagesRender = ({ img, width, height }) => {
  const navigation = useNavigation()

  return (
    <Pressable>
      <Image
        style={{
          width: width,
          height: height,
          borderRadius: 3
        }}
        contentFit="cover"
        source={img}
      />
    </Pressable>
  )
}

export default ImagesRender
