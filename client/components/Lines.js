import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../GlobalStyles'

const Lines = ({ index, club }) => {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: index === 1 ? Color.bALONCESTO : Color.colorDimgray_100,
          width: club ? '28%' : 80,
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: index === 2 ? Color.bALONCESTO : Color.colorDimgray_100,
          width: club ? '28%' : 80,
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: index === 3 ? Color.bALONCESTO : Color.colorDimgray_100,
          width: club ? '28%' : 80,
          marginTop: 10
        }}
      />
      {!club && (
        <View
          style={{
            borderWidth: 2,
            borderColor:
              index === 4 ? Color.bALONCESTO : Color.colorDimgray_100,
            width: 80,
            marginTop: 10
          }}
        />
      )}
    </View>
  )
}

export default Lines
