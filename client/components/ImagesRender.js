import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const ImagesRender = ({ img }) => {
  const navigation = useNavigation()

  return (
    <Pressable>
      <Image
        style={{
          width: 125,
          height: 140,
          borderRadius: 3
        }}
        contentFit="cover"
        source={img}
      />
    </Pressable>
  )
}

export default ImagesRender
