import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
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
      {showModal && (
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          style={{
            position: 'absolute',
            top: 40,
            width: '100%',
            maxHeight: 200,
            borderRadius: 15,
            borderWidth: 1,
            backgroundColor: Color.bLACK1SPORTSMATCH
          }}
        >
          {array.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                paddingVertical: 3,
                width: '100%',
                alignItems: 'center'
              }}
              onPress={() => {
                setState(item)
                setShowModal(false)
              }}
            >
              <Text
                style={{
                  width: 200,
                  paddingBottom: 5,
                  textAlign: 'center',
                  borderBottomWidth: index !== array.length ? 1 : 0,
                  borderBottomColor: '#ccc',
                  fontSize: 16,
                  color: Color.gREY2SPORTSMATCH
                }}
              >
                {item === 'Female'
                  ? 'Mujer'
                  : item === 'Male'
                    ? 'Hombre'
                    : cities
                      ? item?.city
                      : item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Entypo
        style={{ color: '#fff', marginRight: 15 }}
        name={showModal ? 'chevron-down' : 'chevron-up'}
        color="#fff"
        size={18}
      />
    </TouchableOpacity>
  )
}

export default CustomPicker
