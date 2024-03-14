import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'

function Input({
  title,
  placeholderText,
  isAccordeon,
  isMultiLine,
  changeColor,
  value,
  onValues,
  field
}) {
  return (
    <View
      style={{
        // top: 160,
        width: '100%',
        marginTop: 15,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
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
          <TextInput
            multiline={isMultiLine}
            placeholder={placeholderText}
            placeholderTextColor={Color.gREY2SPORTSMATCH}
            style={{
              flex: 1,
              height: !isMultiLine && 45,
              color: Color.gREY2SPORTSMATCH,
              paddingHorizontal: 15,
              fontFamily: FontFamily.t4TEXTMICRO,
              fontSize: FontSize.t2TextSTANDARD_size,
              borderWidth: 1,
              borderColor: Color.gREY2SPORTSMATCH,
              borderStyle: 'solid',
              borderRadius: isMultiLine ? 12 : Border.br_81xl,
              position: 'relative',
              backgroundColor: changeColor ? 'red' : 'transparent'
            }}
            value={value}
            onChangeText={(value) => onValues(field, value)}
          />
          {isAccordeon && (
            <Image
              //   style={[styles.coolicon1, styles.cooliconLayout]}
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

export default Input
