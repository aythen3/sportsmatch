import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

const HorizontalProgressBar = ({ value , color }) => {
  const barWidth = (value / 100) * Dimensions.get('screen').width * 0.75
  return (
    <View
      style={{
        borderRadius: 5,
        overflow: 'hidden'
      }}
    >
      <Svg width={Dimensions.get('screen').width * 0.75} height="15">
        {/* Fondo de la barra */}
        <Rect
          x={0}
          y={0}
          width={Dimensions.get('screen').width * 0.75}
          height="15"
          fill="#252525"
        />
        {/* Barra de progreso */}
        <Rect x={0} y={0} width={barWidth} height="15" fill={color || "#e1451e"} />
      </Svg>
    </View>
  )
}

export default HorizontalProgressBar
