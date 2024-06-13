import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'

const NavigationBack = ({children}) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.goBack()}>
      {children}
    </Pressable>
  )
}

export default NavigationBack