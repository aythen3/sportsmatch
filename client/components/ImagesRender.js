import { View, Text, Image } from 'react-native'
import React from 'react'

const ImagesRender = ({ img }) => {
  return (
    <View>
      <Image
        style={{
          width: 125,
          height: 140,
          borderRadius: 3
        }}
        contentFit="cover"
        source={img}
      />
    </View>
  )
}

export default ImagesRender
