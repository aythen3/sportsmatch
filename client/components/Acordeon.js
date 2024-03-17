import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'

function Acordeon({
  title,
  placeholderText,
  isAccordeon,
  isMultiLine,
  changeColor,
  open
}) {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 15
      }}
    >
      <View style={{ width: '100%' }}>
        <Text
          style={{
            color: Color.wHITESPORTSMATCH,
            marginBottom: 5,
            fontFamily: FontFamily.t4TEXTMICRO,
            fontSize: FontSize.t2TextSTANDARD_size
          }}
        >
          {title}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              flex: 1,
              height: !isMultiLine && 45,
              color: Color.gREY2SPORTSMATCH,
              paddingHorizontal: 15,
              paddingVertical: 11,
              fontFamily: FontFamily.t4TEXTMICRO,
              fontSize: FontSize.t2TextSTANDARD_size,
              borderWidth: 1,
              borderColor: Color.gREY2SPORTSMATCH,
              borderStyle: 'solid',
              borderRadius: isMultiLine ? 12 : Border.br_81xl,
              position: 'relative',
              backgroundColor: changeColor ? 'red' : 'transparent'
            }}
            onPress={open}
          >
            {placeholderText}
          </Text>
          {isAccordeon && (
            <Image
              style={{ width: 12, height: 12, position: 'absolute', right: 20 }}
              contentFit="cover"
              source={require('../assets/coolicon2.png')}
            />
          )}
        </View>
      </View>
    </View>
  )
}

export default Acordeon
