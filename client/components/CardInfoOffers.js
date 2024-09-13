import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color, FontFamily } from '../GlobalStyles'
import { Dimensions } from 'react-native'
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
  }, [category, text, value])

  useEffect(() => {
    text === 'Retribucion' && console.log('Retribucion, value', value)
  }, [])

  const scalableFontSize = (fontSize) => {
    const { width } = Dimensions.get('window')
    const scalableFontSize = fontSize * (width / 400) // 375 es el ancho de la pantalla de un iPhone 8
    return scalableFontSize
  }

  return (
    <View style={styles.card}>
      <Text style={[styles.text, { fontSize: scalableFontSize(12) }]}>
        {text}
      </Text>
      {text !== 'Urgencia' && text !== 'Retribucion' && text !== 'Categoría' ? (
        <View style={{}}>
          <Text style={{ ...styles.taxto1Clr, fontSize: scalableFontSize(18) }}>
            {value}
          </Text>
        </View>
      ) : text === 'Retribucion' ? (
        <View style={{}}>
          <Text style={{ ...styles.taxto1Clr, fontSize: scalableFontSize(18) }}>
            {value && value > 0 ? value : 'No'}
          </Text>
        </View>
      ) : text === 'Categoría' ? (
        <View style={{}}>
          <Text style={{ ...styles.taxto1Clr, fontSize: scalableFontSize(18) }}>
            {first || '-'}
          </Text>
        </View>
      ) : (
        <View
          style={{
            width: '80%',
            height: 25,
            backgroundColor: '#252525',
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            borderRadius: 8,
            paddingHorizontal: 2
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
              height: 18,
              backgroundColor: Color.colorWhitesmoke,
              borderRadius: 6
            }}
          ></View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5
    // borderEndWidth: 1,
    // borderBottomWidth: 1,
    // borderColor: '#505050'
  },
  text: {
    color: '#999999',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    top: '-20%'
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
