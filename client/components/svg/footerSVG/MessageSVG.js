import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Svg, Rect, Path } from 'react-native-svg'

const MessageSVG = () => {
  const navigation = useNavigation()
  return (
    <Svg
      onPress={() => navigation.navigate('TusNotificaciones1')}
      width="34"
      height="23"
      viewBox="0 0 34 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="1"
        y="1"
        width="31.8947"
        height="21"
        rx="1"
        stroke="#999999"
        stroke-width="2"
      />
      <Path
        d="M2.4209 1.21094L15.6668 12.2492C16.4085 12.8673 17.4859 12.8673 18.2276 12.2492L31.4735 1.21094"
        stroke="#999999"
        stroke-width="2"
      />
      <Rect x="1.94727" y="2" width="30" height="2" rx="1" fill="#252525" />
      <Path
        d="M32.6841 21.7891L20.5788 11.4996"
        stroke="#999999"
        stroke-width="2"
      />
      <Path
        d="M1.21045 21.7891L13.3157 11.4996"
        stroke="#999999"
        stroke-width="2"
      />
      <Rect x="1.94727" y="19" width="30" height="2" rx="1" fill="#252525" />
      <Rect
        x="15.9473"
        y="15.2129"
        width="19"
        height="2"
        rx="1"
        transform="rotate(-40 15.9473 15.2129)"
        fill="#252525"
      />
      <Rect
        width="18.7279"
        height="2"
        rx="1"
        transform="matrix(-0.766044 -0.642788 -0.642788 0.766044 17.7876 15.2129)"
        fill="#252525"
      />
    </Svg>
  )
}

export default MessageSVG
