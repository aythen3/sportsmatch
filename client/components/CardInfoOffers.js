import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color, FontFamily } from '../GlobalStyles'

const CardInfoOffers = ({ text, value, category }) => {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')

  const getSeparatedCategory = (value) => {
    let str = value
    let matches = str.match(/(.*?)\((.*)\)/)

    if (matches) {
      let firstPart = matches[1].trim() // "Hello"
      let secondPart = '(' + matches[2].trim() + ')' // "(Hello testing)"
      setFirst(firstPart)
      setSecond(secondPart)
      return
    } else {
      console.log('No match found.')
    }
  }

  useEffect(() => {
    if (category) {
      getSeparatedCategory(value)
    }
  }, [])

  useEffect(() => {
    text === 'Retribucion' && console.log('Retribucion, value', value)
  }, [])
  return (
    <View style={styles.card}>
      <Text style={[styles.text]}>{text}</Text>
      {text !== 'Urgencia' && text !== 'Retribucion' ? (
        <View>
          <Text style={styles.taxto1Clr}>{ value}</Text>
        </View>
      ) : text === 'Retribucion' ? (
        <View>
          <Text style={styles.taxto1Clr}>
            {value && value > 0 ? value : 'No'}
          </Text>
        </View>
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
