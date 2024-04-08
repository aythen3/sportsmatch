import React from 'react'
import { View } from 'react-native'
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg'

const CircularStat = ({ value }) => {
  const radius = 55 // Radio del círculo
  const strokeWidth = 4 // Ancho de la línea del círculo
  const circumference = 2 * Math.PI * radius // Circunferencia del círculo

  // Calcula la longitud de la línea de acuerdo al valor proporcionado
  const strokeDashoffset = circumference * (1 - value / 100)

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="100%" stopColor="#e1451e" />
          </LinearGradient>
        </Defs>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
    </View>
  )
}

export default CircularStat
