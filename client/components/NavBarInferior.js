import React, { useState } from 'react'
import { View, Image, Pressable } from 'react-native'
import DiarySVG from './svg/footerSVG/DiarySVG'
import LensSVG from './svg/footerSVG/LensSVG'
import HomeSVG from './svg/footerSVG/HomeSVG'
import MessageSVG from './svg/footerSVG/MessageSVG'
import { Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'

const NavBarInferior = () => {
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)

  const [image, setImage] = useState(null)

  const pickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0])

      const fileName = `${result.assets[0].uri.split('.').pop()}`

      const file = new FormData()

      file.append('file', {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: fileName
      })
      // dispatch(updateImgClub(file))
      navigation.navigate('CrearHighlight', { image })
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
