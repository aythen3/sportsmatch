import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const Notifications = ({ text, send }) => {
  return (
    <>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 5
        }}
      >
        <Image
          style={[styles.groupIconLayout]}
          contentFit="cover"
          source={require('../assets/avatar.png')}
        />

        <Text style={[styles.hasHechoUn, styles.ayerTypo]}>{text}</Text>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={[styles.ayer, styles.ayerTypo]}>{send}</Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.colorDimgray_100,
          marginVertical: 15
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 45,
    width: '10%'
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    width: '70%'
  },
  ayerTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ayer: {
    color: Color.gREY2SPORTSMATCH
  }
})

export default Notifications
