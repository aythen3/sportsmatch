import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SimboloSVG(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23 8H5a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V9a1 1 0 00-1-1zm-1 18H6V10h16v16zm6-21v18a1 1 0 01-2 0V6H9a1 1 0 010-2h18a1 1 0 011 1z"
        fill="#343330"
      />
    </Svg>
  )
}

export default SimboloSVG