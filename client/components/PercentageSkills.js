import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily } from '../GlobalStyles'

const PercentageSkills = ({ skill, percentage }) => {
  return (
    <View style={{ paddingHorizontal: 15, marginTop: 10, gap: 5 }}>
      <Text style={[styles.taxto2Clr]}>{skill}</Text>
      <View
        style={{
          height: 20,
          backgroundColor: Color.colorDimgray_100,
          borderRadius: 50,
          overflow: 'hidden'
        }}
      >
        <View
          style={{
            backgroundColor: Color.bALONCESTO,
            width: percentage,
            height: 20
          }}
        ></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taxto2Clr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  }
})

export default PercentageSkills
