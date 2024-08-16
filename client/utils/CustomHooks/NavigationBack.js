import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'

const NavigationBack = ({ children, action }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
      onPress={() => (action ? action() : navigation.goBack())}
    >
      {children}
    </Pressable>
  )
}

export default NavigationBack
