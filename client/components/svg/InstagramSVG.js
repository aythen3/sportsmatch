import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InstagramSVG(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.09 0h8.82C18.27 0 21 2.73 21 6.09v8.82A6.09 6.09 0 0114.91 21H6.09C2.73 21 0 18.27 0 14.91V6.09A6.09 6.09 0 016.09 0zm-.21 2.1A3.78 3.78 0 002.1 5.88v9.24c0 2.09 1.69 3.78 3.78 3.78h9.24a3.78 3.78 0 003.78-3.78V5.88c0-2.09-1.69-3.78-3.78-3.78H5.88zm10.133 1.575a1.313 1.313 0 110 2.625 1.313 1.313 0 010-2.625zM10.5 5.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 2.1a3.15 3.15 0 100 6.3 3.15 3.15 0 000-6.3z"
        fill="#000"
      />
    </Svg>
  )
}

export default InstagramSVG