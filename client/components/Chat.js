import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { Image } from 'expo-image'

const Chat = ({ text, isMy, read, hour }) => {
  return (
    <View
      style={{
        backgroundColor: isMy
          ? Color.colorDimgray_100
          : Color.bLACK3SPORTSMATCH,
        padding: 6,
        borderRadius: 10,
        alignSelf: isMy ? 'flex-end' : 'flex-start',
        maxWidth: '80%',
        minWidth: 100,
        flexDirection: 'column',
        marginTop: 5
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.t4TEXTMICRO,
          fontSize: FontSize.t1TextSMALL_size,
          color: Color.wHITESPORTSMATCH
        }}
      >
        {text}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          gap: 3,
          margin: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: Color.gREY2SPORTSMATCH,
            fontSize: FontSize.bodyBodyXS_size,
            fontFamily: FontFamily.t4TEXTMICRO,
            alignSelf: 'flex-end',
            justifyContent: 'flex-end'
          }}
        >
          {hour}
        </Text>
        {read ? (
          <Image
            style={{ width: 17, height: 17 }}
            source={require('../assets/readed.png')}
          />
        ) : (
          <Image
            style={{ width: 17, height: 17 }}
            source={require('../assets/notReaded.png')}
          />
        )}
      </View>
    </View>
  )
}

export default Chat
