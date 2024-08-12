import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

const LensSVG = ({ isActive }) => {
  return (
    <Svg
      width="34"
      height="34"
      viewBox="0 4 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="14.3"
        cy="15.0071"
        r="9.11166"
        transform="rotate(-45 14.3 15.0071)"
        stroke={isActive ? 'white' : '#999999'}
        stroke-width="2"
      />
      <Path
        d="M23.2567 23.5502L30 30.2926"
        stroke={isActive ? 'white' : '#999999'}
        stroke-width="2"
      />
    </Svg>
  )
}

export default LensSVG
