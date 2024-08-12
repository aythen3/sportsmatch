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
  field,
  open,
  inputRef,
  onSubmit,
  keyboardType,
  type,
  state,setState
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
          <TextInput
            multiline={isMultiLine}
            placeholder={placeholderText}
            placeholderTextColor={Color.gREY2SPORTSMATCH}
            style={{
              flex: 1,
              height: isMultiLine ? 150 : 45,
              color: Color.gREY2SPORTSMATCH,
              paddingHorizontal: 15,
              fontFamily: FontFamily.t4TEXTMICRO,
              fontSize: FontSize.t2TextSTANDARD_size,
              borderWidth: 1,
              borderColor: Color.gREY2SPORTSMATCH,
              borderStyle: 'solid',
              paddingTop: isMultiLine && 5,
              borderRadius: isMultiLine ? 20 : Border.br_81xl,
              position: 'relative',
              backgroundColor: changeColor ? 'red' : 'transparent',
              textAlignVertical: isMultiLine ? 'top' : 'center'
            }}
            value={type ? state : value}
            onChangeText={(value) => type ? setState(value) : onValues(field, value)}
            ref={inputRef}
            onSubmitEditing={onSubmit}
            secureTextEntry={type ? true : false}
            keyboardType={keyboardType === 'numeric' ? 'numeric' : 'default'}
            maxLength={maxLength || 40}
          />
          {isAccordeon && (
            <Image
              style={{
                width: 12,
                height: 12,
                position: 'absolute',
                right: 20
              }}
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
