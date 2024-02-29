import React from 'react'
import { Svg, Rect, Path } from 'react-native-svg'

const HomeSVG = () => {
  return (
    <Svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="35" height="35" rx="5" fill="#E1451E" />
      <Path d="M17 11L17 25" stroke="white" stroke-width="2" />
      <Path d="M24 18.0417L10 18.0417" stroke="white" stroke-width="2" />
      <Rect x="18" y="11" width="2" height="14" fill="#E1451E" />
      <Rect x="14" y="11" width="2" height="14" fill="#E1451E" />
    </Svg>
  )
}

export default HomeSVG
