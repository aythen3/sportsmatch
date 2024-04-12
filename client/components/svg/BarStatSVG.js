import React from 'react'
import { View } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

const HorizontalProgressBar = ({ value }) => {
  // Calcula el ancho de la barra en función del valor y el valor máximo
  //   const barWidth = (value / maxValue) * width;
  maxValue = '100'
  width = '300'

  const barWidth = (value / maxValue) * width
  return (
    <View
      style={{
        borderRadius: 5,
        overflow: 'hidden'
      }}
    >
      <Svg width={width} height="15">
        {/* Fondo de la barra */}
        <Rect x={0} y={0} width={width} height="15" fill="#252525" />
        {/* Barra de progreso */}
        <Rect x={0} y={0} width={barWidth} height="15" fill="#e1451e" />
      </Svg>
    </View>
  )
}

export default HorizontalProgressBar
