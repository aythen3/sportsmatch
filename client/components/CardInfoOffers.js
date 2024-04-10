import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color, FontFamily } from '../GlobalStyles'

const CardInfoOffers = ({ text, value }) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.text]}>{text}</Text>
      {text !== 'Urgencia' && text !== 'Retribucion' ? (
        <Text style={styles.taxto1Clr}>{value}</Text>
      ) : (
        <View
          style={{
            marginTop: 10,
            width: '100%',
            height: 25,
            backgroundColor: Color.colorDimgray_100,
            borderWidth: 1,
            borderColor: 'white',
            paddingVertical: 3,
            justifyContent: 'center',
            borderRadius: 8,
            overflow: 'hidden'
          }}
        >
          <View
            style={{
              width:
                text === 'Urgencia'
                  ? `${value * 10}%`
                  : text === 'Retribucion' && value === 'No'
                    ? 0
                    : '100%',
              height: 20,
              backgroundColor: Color.colorWhitesmoke,
              borderRadius: 6,
              marginLeft: 2
            }}
          ></View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 10,
    height: 110,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  text: {
    color: Color.colorWhitesmoke,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    top: -15
  },
  taxto1Clr: {
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '700'
  }
})

export default CardInfoOffers
