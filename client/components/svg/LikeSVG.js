import React, { useEffect } from 'react'
import { Svg, Path } from 'react-native-svg'
import { useSelector } from 'react-redux'

const LikeSVG = ({ id , doubleTap }) => {
  const { findedLike } = useSelector((state) => state.post)
  const { mainColor } = useSelector((state) => state.users)

  useEffect(() => {
    console.log('like changed: ', findedLike?.includes(id))
  }, [findedLike])
  return (
    <Svg
      width="23"
      height="26"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.2333 5.10214H11.8416V2.31829C11.8411 1.7036 11.5731 1.11422 11.0966 0.679567C10.62 0.244913 9.97388 0.000503229 9.29996 0H8.92705C8.54028 0 8.16934 0.140142 7.89586 0.389597C7.62237 0.639051 7.46872 0.977384 7.46872 1.33017V3.58575C7.44271 4.54065 7.06059 5.45893 6.38539 6.18907L5.80623 6.60143C5.7325 6.48949 5.62841 6.39677 5.50397 6.3322C5.37954 6.26763 5.23897 6.23339 5.09581 6.23278H0.83333C0.612317 6.23278 0.400356 6.31286 0.244077 6.45541C0.087797 6.59795 0 6.79129 0 6.99287V15.2399C0 15.4415 0.087797 15.6348 0.244077 15.7774C0.400356 15.9199 0.612317 16 0.83333 16H5.09581C5.31683 16 5.52879 15.9199 5.68507 15.7774C5.84135 15.6348 5.92914 15.4415 5.92914 15.2399V15.0119H14.6791C15.3026 15.0137 15.9064 14.8133 16.3827 14.4464C16.859 14.0794 17.1768 13.57 17.2791 13.009L18.1937 8.23943C18.2666 7.87012 18.2502 7.49074 18.1458 7.12779C17.9699 6.54613 17.5899 6.03308 17.0638 5.66722C16.5378 5.30136 15.8948 5.10287 15.2333 5.10214ZM4.26248 14.4798H1.66666V7.75297H4.26248V14.4798ZM16.5541 7.9829L15.6354 12.7506C15.5982 12.9577 15.4812 13.1458 15.3056 13.2813C15.1299 13.4168 14.9071 13.4907 14.677 13.4898H5.92706V8.44466L7.48122 7.33492C7.52782 7.30176 7.57042 7.26418 7.6083 7.2228C8.56568 6.20953 9.10506 4.92313 9.1333 3.58575V1.52019H9.29788C9.52994 1.52019 9.7525 1.60428 9.9166 1.75395C10.0807 1.90362 10.1729 2.10662 10.1729 2.31829V5.86223C10.1729 6.06382 10.2607 6.25716 10.417 6.3997C10.5732 6.54225 10.7852 6.62233 11.0062 6.62233H15.2333C15.53 6.62257 15.8184 6.71154 16.0543 6.87561C16.2902 7.03967 16.4607 7.26977 16.5395 7.53064C16.579 7.67885 16.5833 7.83306 16.552 7.9829H16.5541Z"
        fill={findedLike?.includes(id) ? mainColor : 'white'}
      />
    </Svg>
  )
}

export default LikeSVG
