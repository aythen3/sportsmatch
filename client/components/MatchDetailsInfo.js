import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const MatchDetailsInfo = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.aoDeFundacin}>{title}</Text>
      <Text style={styles.value}>{value}</Text>

      <View
        style={{
          borderWidth: 0.5,
          borderColor: '#fff',
          marginTop: 5
          //   marginVertical: 15
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  aoDeFundacin: {
    width: 126,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    height: 17,
    fontSize: FontSize.size_smi_9
  },
  value: {
    fontWeight: '500',
    fontSize: FontSize.h3TitleMEDIUM_size,
    alignSelf: 'stretch',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 15
  }
})

export default MatchDetailsInfo
