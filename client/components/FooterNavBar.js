import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MessageSVG from './svg/footerSVG/MessageSVG'
import DiarySVG from './svg/footerSVG/DiarySVG'
import LensSVG from './svg/footerSVG/LensSVG'
import HomeSVG from './svg/footerSVG/HomeSVG'
import { Color } from '../GlobalStyles'

const FooterNavBar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <DiarySVG />
      <LensSVG />
      <TouchableOpacity
        onPress={() => navigation.navigate('SiguiendoUsuarios')}
      >
        <HomeSVG />
      </TouchableOpacity>
      <MessageSVG />
      <TouchableOpacity onPress={() => navigation.navigate('MiPerfil')}>
        <Image
          source={require('../assets/mask-group1.png')}
          contentFit="cover"
          style={styles.perfil}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.bLACK2SPORTMATCH,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  perfil: {
    width: 40,
    height: 40
  }
})
export default FooterNavBar
