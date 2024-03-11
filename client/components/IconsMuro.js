import { View, Text } from 'react-native'
import React from 'react'
import CommentSVG from './svg/CommentSVG'
import ShareSVG from './svg/ShareSVG'
import LikeSVG from './svg/LikeSVG'
import { Color } from '../GlobalStyles'

const IconsMuro = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          backgroundColor: Color.bLACK3SPORTSMATCH,
          height: 35,
          width: 48,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <LikeSVG />
      </View>
      <View
        style={{
          backgroundColor: Color.bLACK3SPORTSMATCH,
          height: 35,
          width: 48,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ShareSVG />
      </View>
      <View
        style={{
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: Color.bLACK3SPORTSMATCH,
          height: 35,
          width: 48,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CommentSVG />
      </View>
    </View>
  )
}

export default IconsMuro
