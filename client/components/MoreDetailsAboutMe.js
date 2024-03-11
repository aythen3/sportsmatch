import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const MoreDetailsAboutMe = ({ description, title }) => {
  return (
    <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.h2TITLEBIG_size,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.openSansSemiBold
  },
  description: {
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.openSansSemiBold,
    marginTop: 10
  }
})

export default MoreDetailsAboutMe
