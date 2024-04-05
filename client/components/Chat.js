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
        padding: 10,
        borderRadius: 10,
        alignSelf: isMy ? 'flex-end' : 'flex-start',
        maxWidth: '80%',
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap'
      }}
    >
      <Text style={styles.jordiEspeltTypo}>{text}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5
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
        {read && (
          <Image
            style={{ width: 10, height: 10 }}
            source={require('../assets/group-4541.png')}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  jordiEspeltTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH
  }
})

export default Chat
