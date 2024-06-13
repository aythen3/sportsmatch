import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function LineaVertical(props) {
  return (
    <Svg
      width={5}
      height={40}
      viewBox="0 0 5 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.484.032v87.915"
        stroke="rgba(0,0,0,1)"
        strokeWidth={4.04207}
      />
    </Svg>
  )
}

export default LineaVertical
