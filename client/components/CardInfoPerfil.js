import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color, FontFamily } from '../GlobalStyles'

const CardInfoPerfil = ({ text, value }) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.text]}>{text}</Text>
      <Text style={[styles.value, styles.taxto1Clr]}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 30,
    height: 100,
    backgroundColor: Color.colorDimgray_100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  text: {
    color: Color.gREY2SPORTSMATCH
  },
  value: {
    color: Color.bALONCESTO
  },
  taxto1Clr: {
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 22,
    fontWeight: '700'
  }
})

export default CardInfoPerfil
