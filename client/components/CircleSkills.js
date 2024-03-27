import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const CircleSkills = ({ percentage, skill }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.taxto1, styles.taxto1Clr]}>{percentage}</Text>
      <Text style={[styles.texto2, styles.taxto2Clr]}>{skill}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: Color.colorDimgray_100,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taxto1: {
    fontWeight: '500',
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    width: 109,
    textAlign: 'center'
  },
  taxto1Clr: {
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  taxto2Clr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  texto2: {
    marginTop: 9,
    width: 109,
    textAlign: 'center',
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  }
})

export default CircleSkills
