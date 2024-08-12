import { View, Text, TouchableOpacity, ScrollView ,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Color, FontFamily } from '../../GlobalStyles'
import Entypo from 'react-native-vector-icons/Entypo'

const CustomPicker = ({
  state,
  setState,
  showModal,
  setShowModal,
  placeholder,
  array,
  zIndex,
  cities
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setShowModal(!showModal)
      }}
      style={{
        zIndex,
        borderWidth: 0.5,
        position: 'relative',
        borderColor: Color.colorWhitesmoke,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Text
        style={{
          marginLeft: 15,
          color: Color.colorWhitesmoke,
          fontFamily: FontFamily.t4TEXTMICRO
        }}
      >
        {!state
          ? placeholder
          : state === 'Female'
            ? 'Mujer'
            : state === 'Male'
              ? 'Hombre'
              : state}
      </Text>
      
      <Entypo
        style={{ color: '#fff', marginRight: 15 }}
        name={ showModal ? 'chevron-up' : 'chevron-down'}
        color="#fff"
        size={18}
      />
    </TouchableOpacity>
  )
}

export default CustomPicker
