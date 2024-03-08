import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
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
      <Pressable onPress={() => navigation.navigate('CrearHighlight')}>
        <HomeSVG />
      </Pressable>
      <View>
        <MessageSVG />
      </View>
      <Pressable
        onPress={() =>
          // ? navigation.navigate('MiPerfil')
          // :
          navigation.navigate('PerfilDatosPropioClub')
        }
      >
        <Image
          style={{ width: 35, height: 35 }}
          contentFit="cover"
          source={require('../assets/group-5161.png')}
        />
      </Pressable>
    </View>
  )
}

export default NavBarInferior
