import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg'

const CircularStat = ({ value, color }) => {
  const radius = 55 // Radio del círculo
  const strokeWidth = 4 // Ancho de la línea del círculo
  const circumference = 2 * Math.PI * radius // Circunferencia del círculo

  // Calcula la longitud de la línea de acuerdo al valor proporcionado
  const strokeDashoffset = circumference * (1 - value / 100)

  return (
    <View>
      <Svg
        width={(Dimensions.get('screen').width * 0.8) / 3}
        height={(Dimensions.get('screen').width * 0.8) / 3}
      >
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="100%" stopColor={color || '#e1451e'} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={(Dimensions.get('screen').width * 0.8) / 3 / 2}
          cy={(Dimensions.get('screen').width * 0.8) / 3 / 2}
          r={(Dimensions.get('screen').width * 0.8) / 3 / 2 - strokeWidth / 1}
          fill="none"
          stroke="#252525"
          strokeWidth={5}
          // strokeDasharray={
          //   (2 * Math.PI * ((Dimensions.get('screen').width * 0.8) / 3)) / 2
          // }
          strokeDashoffset={
            ((2 * Math.PI * ((Dimensions.get('screen').width * 0.8) / 3)) / 2) *
            (1 + value / 100)
          }
        />
        <Circle
          cx={(Dimensions.get('screen').width * 0.8) / 3 / 2}
          cy={(Dimensions.get('screen').width * 0.8) / 3 / 2}
          r={(Dimensions.get('screen').width * 0.8) / 3 / 2 - strokeWidth / 1}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeDasharray={
            (2 * Math.PI * ((Dimensions.get('screen').width * 0.8) / 3)) / 2
          }
          strokeDashoffset={
            ((2 * Math.PI * ((Dimensions.get('screen').width * 0.8) / 3)) / 2) *
            (1 - value / 100)
          }
        />
      </Svg>
    </View>
  )
}

export default CircularStat
