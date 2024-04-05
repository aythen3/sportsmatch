import React from 'react'
import { View, Image, Pressable } from 'react-native'
import DiarySVG from './svg/footerSVG/DiarySVG'
import LensSVG from './svg/footerSVG/LensSVG'
import HomeSVG from './svg/footerSVG/HomeSVG'
import MessageSVG from './svg/footerSVG/MessageSVG'
import { Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'

const NavBarInferior = () => {
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)
  const { user } = useSelector((state) => state.users)

  console.log(isSportman)

  const handleNavigation = () => {
    if (isSportman) {
      navigation.navigate('MiPerfil')
    } else {
      navigation.navigate('PerfilDatosPropioClub')
    }
  }
  return (
    <View
      style={{
        backgroundColor: Color.bLACK2SPORTMATCH,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
      }}
    >
      <Pressable onPress={() => navigation.navigate('SiguiendoJugadores')}>
        <DiarySVG />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ExplorarClubs')}>
        <LensSVG />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SeleccionarImagen')}>
        <HomeSVG />
      </Pressable>
      <View>
        <MessageSVG />
      </View>
      <Pressable onPress={handleNavigation}>
        <Image
          style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
          contentFit="cover"
          source={{ uri: user?.user?.club?.img_front }}
        />
      </Pressable>
    </View>
  )
}

export default NavBarInferior
