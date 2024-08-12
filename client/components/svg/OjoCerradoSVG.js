import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OjoCerradoSVG(props) {
  return (
    <Svg
      width={24}
      height={19}
      viewBox="0 0 28 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25 9.352c0 2.1-1.133 4.077-3.115 5.564-1.982 1.487-4.767 2.436-7.885 2.436-3.118 0-5.903-.95-7.885-2.436C4.133 13.429 3 11.452 3 9.352s1.133-4.077 3.115-5.564C8.097 2.301 10.882 1.352 14 1.352c3.118 0 5.903.95 7.885 2.436C23.867 5.275 25 7.252 25 9.352z"
        stroke="#505050"
        strokeWidth={2}
      />
      <Path
        d="M17 9.352a3 3 0 11-6 0 3 3 0 016 0zM1 17.352l26-16"
        stroke="#505050"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default OjoCerradoSVG
