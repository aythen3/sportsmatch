import { View, Text } from 'react-native'
import React from 'react'
import { Color, FontFamily } from '../GlobalStyles'
import { Image } from 'expo-image'

const FiltersSportman = ({ onClose }) => {
  return (
    <View
      style={{
        backgroundColor: Color.bLACK3SPORTSMATCH,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
      }}
    >
      <Text
        style={{
          color: Color.gREY2SPORTSMATCH,
          fontFamily: FontFamily.openSansSemiBold
        }}
      >
        Filtros sugeridos
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.gREY2SPORTSMATCH,
          marginVertical: 5,
          width: '100%'
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: Color.colorWhitesmoke,
            fontFamily: FontFamily.openSansSemiBold
          }}
          onPress={() => onClose()}
        >
          Por proximidad
        </Text>
        <Image
          style={{ width: 14, height: 17 }}
          contentFit="cover"
          source={require('../assets/pictograma.png')}
        />
      </View>

      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.gREY2SPORTSMATCH,
          marginVertical: 5,
          width: '100%'
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: Color.colorWhitesmoke,
            fontFamily: FontFamily.openSansSemiBold
          }}
          onPress={() => onClose()}
        >
          Por relevancia
        </Text>
        <Image
          style={{ width: 14, height: 16 }}
          contentFit="cover"
          source={require('../assets/group6.png')}
        />
      </View>
    </View>
  )
}

export default FiltersSportman
