import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Linea(props) {
  return (
    <Svg
      width={272}
      height={219}
      viewBox="0 0 272 219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M266.481 213.08L11.531-41.87 149.661-180l116.83 116.83"
        stroke="#505050"
        strokeWidth={15}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default Linea