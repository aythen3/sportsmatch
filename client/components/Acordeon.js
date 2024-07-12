import React from 'react'
import { View, Text, TextInput, Image, Pressable } from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { Entypo } from '@expo/vector-icons'

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
        marginTop: 0,
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

        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:"space-between" }}>
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
        <Pressable   onPress={open} style={{position:"absolute",right:0}}>
        <Entypo
              style={{ color: '#fff', marginRight: 15 }}
              name={isAccordeon ? 'chevron-up' : 'chevron-down'}
              color="#fff"
              size={18}
            />
        </Pressable>
       
        </View>
      </View>
    </View>
  )
}

export default Acordeon
