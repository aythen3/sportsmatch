import React, { useContext, useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import DiarySVG from './svg/footerSVG/DiarySVG'
import LensSVG from './svg/footerSVG/LensSVG'
import HomeSVG from './svg/footerSVG/HomeSVG'
import MessageSVG from './svg/footerSVG/MessageSVG'
import { Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { getSportman } from '../redux/actions/sportman'
import { Context } from '../context/Context'

const NavBarInferior = () => {
  const { activeIcon, setActiveIcon } = useContext(Context)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [sportColor, setSportColor] = useState('#E1451E')
  const { isSportman } = useSelector((state) => state.users)
  const { user } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)

  useEffect(() => { 
    console.log(sportman?.info?.sport.name,"aaaaaaaaaaaaaaaaa")
    if (sportman?.info?.sport.name == 'Fútbol Sala' || sportman?.info?.sport == 'Fútbol Sala') { setSportColor('#0062FF') }
    if (sportman?.info?.sport.name == 'Hockey' || sportman?.info?.sport == 'Hockey') { setSportColor('#E1AA1E') }
    if (sportman?.info?.sport.name == 'Voley' || sportman?.info?.sport.name == 'Voley') { setSportColor('#A8154A') }
    if (sportman?.info?.sport.name == 'Handball' || sportman?.info?.sport == 'Handball') { setSportColor('#6A1C4F') }
    if (sportman?.info?.sport.name == 'Fútbol' || sportman?.info?.sport == 'Fútbol') { setSportColor('#00FF18') }
    if (sportman?.info?.sport.name == 'Básquetbol' || sportman?.info?.sport == 'Básquetbol') { setSportColor('#E1451E') }
  }, [sportman?.info])

  useEffect(() => {
    if (Object.keys(sportman).length === 0) {
      dispatch(getSportman(user?.user?.sportman?.id))
    }
  }, [])
  const handleIconPress = (iconName) => {
    setActiveIcon(iconName)
    switch (iconName) {
      case 'diary':
        navigation.navigate('SiguiendoJugadores')
        break
      case 'lens':
        navigation.navigate('ExplorarClubs')
        break
      case 'post':
        if (sportman.type == 'invitado') {
          navigation.navigate('Paso1')

        } else {

          navigation.navigate('SeleccionarImagen')
        }
        break
      case 'message':
        if (sportman.type == 'invitado') {
          navigation.navigate('Paso1')

        } else {
          navigation.navigate('TusNotificaciones1')

        }

        break
      default:
        break
    }
  }

  const handleNavigation = () => {
    if (sportman?.type == 'invitado') {
      return navigation.navigate('Paso1')

    }
    if (user?.user?.type !== 'club') {
      navigation.navigate('MiPerfil')
    } else {
      navigation.navigate('PerfilDatosPropioClub')
    }
    setActiveIcon('profile')
  }


  const imgPerfil =
    (user?.user?.type !== 'club' && sportman?.info?.img_perfil) ||
    (user?.user?.club?.img_perfil && user?.user?.club?.img_perfil);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleIconPress('diary')}
        style={activeIcon === 'diary' ? [styles.selected,{borderTopColor:sportColor} ] : styles.deselected}
      >
        <DiarySVG isActive={activeIcon === 'diary'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleIconPress('lens')}
        style={activeIcon === 'lens' ? [styles.selected,{borderTopColor:sportColor} ] : styles.deselected}
      >
        <LensSVG isActive={activeIcon === 'lens'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleIconPress('post')}
        style={styles.deselected}
      >
        <HomeSVG sportColor={sportColor} isActive={activeIcon === 'post'} />
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => handleIconPress('message')}
        style={activeIcon === 'message' ? [styles.selected,{borderTopColor:sportColor} ] : styles.deselected}
      >
        <View style={styles.iconContainer}>
          <MessageSVG
            isActive={activeIcon === 'message'}
            style={[styles.icon, activeIcon === 'message' && styles.iconActive]}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleNavigation}
        style={activeIcon === 'profile' ? [styles.selected,{borderTopColor:sportColor} ]: styles.deselected}
      >

        {/* {sportman?.info?.img_perfil || user?.user?.club?.img_perfil && (
          <Image
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
            contentFit="cover"
            source={{
              uri:
                user?.user?.type !== 'club' && sportman?.info?.img_perfil
                  ? sportman?.info?.img_perfil
                  : user?.user?.club?.img_perfil && user?.user?.club?.img_perfil
            }}
          />

          
        )} */}
        {imgPerfil && (
          <Image
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
            contentFit="cover"
            source={{ uri: imgPerfil }}
          />
        )}
        {sportman?.info?.img_perfil == '' && (
          <Image
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />

        )}
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    // width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 15,
    gap: 8
  },
  deselected: {
    width: '18.4%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    backgroundColor: Color.colorDimgray_100,
    width: '18.4%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Color.bALONCESTO,
    borderTopWidth: 3
  },
  iconContainer: {
    width: '18.4%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '100%',
    height: '100%'
  },
  iconActive: {
    marginTop: -5 // Ajusta este valor según sea necesario para elevar la imagen
  }
})

export default NavBarInferior
