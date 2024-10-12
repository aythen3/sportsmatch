import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { AntDesign } from '@expo/vector-icons'
import PassView from '../screens/Login/passview'
import OjoCerradoSVG from './svg/OjoCerradoSVG'

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
  state,
  setState,
  maxLength,
  disable,
  emailcheked,
  isEmailValid,
  passView,
  testId
}) {
  const [passview2, setPassview2] = useState(true)

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
            testID={testId}
            editable={disable ? false : true}
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
            onChangeText={(value) =>
              type ? setState(value) : onValues(field, value)
            }
            ref={inputRef}
            onSubmitEditing={onSubmit}
            secureTextEntry={
              type && !emailcheked && !passView
                ? true
                : passView
                  ? passview2
                  : false
            }
            keyboardType={keyboardType === 'numeric' ? 'numeric' : 'default'}
            maxLength={maxLength ? maxLength : 40}
            id="Repetir nueva contraseña"
          />
          {passView && (
            <TouchableOpacity
              style={{ position: 'absolute', right: 14, bottom: 14 }}
              onPress={() => setPassview2(!passview2)}
            >
              {passview2 ? (
                <PassView></PassView>
              ) : (
                <OjoCerradoSVG></OjoCerradoSVG>
              )}
            </TouchableOpacity>
          )}
          {emailcheked && (
            <View>
              {!isEmailValid ? (
                <View style={{ position: 'absolute', right: 14, bottom: -10 }}>
                  <AntDesign name="close" color={'#ff0000'} size={20} />
                </View>
              ) : (
                <View style={{ position: 'absolute', right: 14, bottom: -10 }}>
                  <AntDesign name="check" color={'#00ff00'} size={20} />
                </View>
              )}
            </View>
          )}
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
