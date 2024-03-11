import React from 'react'
import { Circle, Svg } from 'react-native-svg'

const ThreePointsSVG = () => {
  return (
    <Svg
      width="6"
      height="24"
      viewBox="0 0 6 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="2.875" cy="3" r="2.5" fill="#999999" />
      <Circle cx="2.875" cy="12" r="2.5" fill="#999999" />
      <Circle cx="2.875" cy="21" r="2.5" fill="#999999" />
    </Svg>
  )
}

export default ThreePointsSVG
