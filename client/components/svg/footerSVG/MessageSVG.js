import React from 'react'
import { Svg, Rect, Path } from 'react-native-svg'

const MessageSVG = ({ isActive }) => {
  return (
    <Svg
      width="40"
      height="30"
      viewBox="0 1 34 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="1"
        y="1"
        width="31.8947"
        height="21"
        rx="1"
        stroke={isActive ? 'white' : '#999999'}
        stroke-width="2"
      />
      <Path
        d="M2.4209 1.21094L15.6668 12.2492C16.4085 12.8673 17.4859 12.8673 18.2276 12.2492L31.4735 1.21094"
        stroke={isActive ? 'white' : '#999999'}
        stroke-width="2"
      />
      <Path
        d="M32.6841 21.7891L20.5788 11.4996"
        stroke={isActive ? 'white' : '#999999'}
        stroke-width="2"
      />
      <Path
        d="M1.21045 21.7891L13.3157 11.4996"
        stroke={isActive ? 'white' : '#999999'}
        stroke-width="2"
      />
    </Svg>
  )
}

export default MessageSVG
