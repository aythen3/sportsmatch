import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const CirclePerfilClub = () => {
  return (
    <View
      style={{
        marginTop: 20,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
      }}
    >
      <View
        style={{
          width: 120,
          height: 120,
          borderWidth: 4,
          borderColor: Color.colorDimgray_100,
          borderRadius: 80,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={[styles.taxto1, styles.taxto1Clr]}>1920</Text>
        <Text style={[styles.texto2, styles.taxto1Clr]}>Fundación</Text>
      </View>
      <View
        style={{
          width: 130,
          height: 130,
          borderWidth: 4,
          borderColor: Color.colorDimgray_100,
          borderRadius: 80,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={[styles.taxto1, styles.taxto1Clr]}>1920</Text>
        <Text style={[styles.texto2, styles.taxto1Clr]}>Fundación</Text>
      </View>
      <View
        style={{
          width: 130,
          height: 130,
          borderWidth: 4,
          borderColor: Color.colorDimgray_100,
          borderRadius: 80,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={[styles.taxto1, styles.taxto1Clr]}>1920</Text>
        <Text style={[styles.texto2, styles.taxto1Clr]}>Fundación</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  texto2: {
    marginTop: 9,
    width: 109,
    textAlign: 'center',
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  }
})

export default CirclePerfilClub
