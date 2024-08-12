import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PassView(props) {
  return (
    <Svg
      width={25}
      height={18}
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.93 9c0 2.096-1.142 4.073-3.143 5.561C18.785 16.05 15.971 17 12.822 17c-3.15 0-5.962-.95-7.964-2.439C2.856 13.073 1.715 11.096 1.715 9s1.14-4.073 3.143-5.561C6.86 1.95 9.672 1 12.822 1c3.15 0 5.963.95 7.965 2.439C22.788 4.927 23.928 6.904 23.928 9zm-8.072 0c0 1.649-1.35 3-3.036 3-1.685 0-3.036-1.351-3.036-3 0-1.648 1.351-3 3.036-3s3.036 1.352 3.036 3zm-3.036 5c2.773 0 5.036-2.23 5.036-5s-2.263-5-5.036-5C10.05 4 7.786 6.23 7.786 9s2.263 5 5.036 5z"
        stroke="#505050"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default PassView