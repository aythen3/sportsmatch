import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../GlobalStyles'

const Lines = () => {
  return (
    <View
      style={{
        marginVertical: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
      }}
    >
      {/* <Text style={{ color: 'white' }}>Lines</Text> */}
      <View
        style={{
          borderWidth: 2,
          borderColor: Color.colorDimgray_100,
          width: 80,
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: Color.colorDimgray_100,
          width: 80,
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: Color.colorDimgray_100,
          width: 80,
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: Color.colorDimgray_100,
          width: 80,
          marginTop: 10
        }}
      />
    </View>
  )
}

export default Lines
