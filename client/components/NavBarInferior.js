import React, { useContext, useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import DiarySVG from './svg/footerSVG/DiarySVG'
import LensSVG from './svg/footerSVG/LensSVG'
import HomeSVG from './svg/footerSVG/HomeSVG'
import MessageSVG from './svg/footerSVG/MessageSVG'
import { Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { getSportman } from '../redux/actions/sportman'
import { Context } from '../context/Context'
import { getNotificationsByUserId } from '../redux/actions/notifications'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import SiguiendoJugadores from '../screens/Muro/SiguiendoJugadores'
import ExplorarClubs from '../screens/Explorar/ExplorarClubs'
import SeleccionarImagen from '../screens/Muro/CrearPost/SeleccionarImagen'
import TusNotificaciones1 from '../screens/Notificaciones/TusNotificaciones1'
import MiPerfil from '../screens/Perfil/MiPerfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PantallaInicio from '../screens/Login/PantallaInicio'
import PerfilDatosPropioClub from '../screens/PerfilDatosPropioClub'
import ConfigurarAnuncio from '../screens/Ofertas/ConfigurarAnuncio'
const Tab = createBottomTabNavigator()
const NavBarInferior2 = () => {
  const {
    activeIcon,
    generateLowResUrl,
    setActiveIcon,
    getUsersMessages,
    notReaded
    // user
  } = useContext(Context)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [sportColor, setSportColor] = useState('#E1451E')
  const { isSportman, mainColor } = useSelector((state) => state.users)
  const { userNotifications } = useSelector((state) => state.notifications)
  const { user } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)
  const userId = user?.user?.id
  useEffect(() => {
    if (Object.keys(sportman).length === 0) {
      dispatch(getSportman(user?.user?.sportman?.id))
    }
    console.log(user, 'esto enfo en user')
  }, [])
  const imgPerfil =
    user?.user?.type !== 'club'
      ? sportman?.info?.img_perfil
      : user?.user?.club?.img_perfil
  const handleNavigation = () => {
    if (sportman?.type == 'invitado') {
      return navigation.navigate('Paso1')
    }
    if (user?.user?.type !== 'club') {
      navigation.navigate('MiPerfil')
    } else {
      navigation.navigate('PerfilDatosPropioClub')
    }
    return setActiveIcon('profile')
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false, // Ocultar los nombres de las pestañas
        tabBarStyle: {
          backgroundColor: Color.bLACK2SPORTMATCH,
          borderTopWidth: 0,
          height: 50
        },
        animationEnabled: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'SiguiendoJugadores') {
            return (
              <View
                style={
                  focused
                    ? [styles.selected, { borderTopColor: mainColor }]
                    : styles.deselected
                }
              >
                <DiarySVG isActive={focused === 'diary'} />
              </View>
            )
          } else if (route.name === 'ExplorarClubs') {
            return (
              <View
                style={
                  focused
                    ? [styles.selected, { borderTopColor: mainColor }]
                    : styles.deselected
                }
              >
                <LensSVG isActive={focused === 'lens'} />
              </View>
            )
          } else if (route.name === 'SeleccionarImagen') {
            return (
              <View
                style={{
                  width: '18.4%',
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <View
                  style={{
                    width: 37,
                    height: 37,
                    backgroundColor: mainColor,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 28, bottom: 2 }}>
                    +
                  </Text>
                </View>
              </View>
            )
          } else if (route.name === 'TusNotificaciones1') {
            return (
              <View
                style={
                  focused
                    ? [styles.selected, { borderTopColor: mainColor }]
                    : styles.deselected
                }
              >
                <View style={styles.iconContainer}>
                  <MessageSVG
                    isActive={focused}
                    style={[styles.icon, focused && styles.iconActive]}
                  />
                  {userNotifications.length > 0 &&
                    userNotifications
                      ?.filter((notification) => {
                        if (user?.user?.type === 'club') {
                          notification.recipientId === user.user.club?.id
                          return true
                        } else if (notification.recipientId === userId) {
                          return true
                        } else {
                          return false
                        }
                      })
                      .filter((notif) => !notif.read).length > 0 && (
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          backgroundColor: mainColor,
                          borderRadius: 100,
                          position: 'absolute',
                          top: 50,
                          right: 4
                        }}
                      ></View>
                    )}
                  {notReaded > 0 && (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: mainColor,
                        borderRadius: 100,
                        position: 'absolute',
                        top: 10,
                        right: -20,
                        zIndex: 800
                      }}
                    >
                      <Text style={{ color: 'white', textAlign: 'center' }}>
                        {notReaded}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )
          } else if (route.name === 'MiPerfil') {
            return (
              <View
                // onPress={() => handleNavigation()}
                style={
                  focused
                    ? [styles.selected, { borderTopColor: mainColor }]
                    : styles.deselected
                }
              >
                {imgPerfil && imgPerfil !== '' && (
                  <Image
                    style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
                    contentFit="cover"
                    source={{ uri: generateLowResUrl(imgPerfil, 90) }}
                  />
                )}
                {!sportman?.info?.img_front && !imgPerfil && (
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 100,
                      backgroundColor: mainColor
                    }}
                    contentFit="cover"
                    source={require('../assets/whiteSport.png')}
                  />
                )}
              </View>
            )
          }
        }
      })}
    >
      <Tab.Screen
        name="SiguiendoJugadores"
        component={SiguiendoJugadores}
        options={{ headerShown: false }}
        listeners={{
          tabPress: () => setActiveIcon('diary')
        }}
      />
      <Tab.Screen
        name="ExplorarClubs"
        options={{ headerShown: false }}
        component={ExplorarClubs}
        listeners={{
          tabPress: () => setActiveIcon('lens')
        }}
      />
      <Tab.Screen
        name="SeleccionarImagen"
        options={{ headerShown: false }}
        component={
          user?.user?.type !== 'club' ? SeleccionarImagen : ConfigurarAnuncio
        }
      />
      <Tab.Screen
        name="TusNotificaciones1"
        options={{ headerShown: false }}
        component={TusNotificaciones1}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="MiPerfil"
        component={
          user?.user?.type !== 'club' ? MiPerfil : PerfilDatosPropioClub
        }
        listeners={{
          tabPress: () => handleNavigation()
        }}
      />
    </Tab.Navigator>
  )
}

const NavBarInferior = () => {
  const {
    activeIcon,
    generateLowResUrl,
    setActiveIcon,
    getUsersMessages,
    notReaded
  } = useContext(Context)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [sportColor, setSportColor] = useState('#E1451E')
  const { isSportman, mainColor } = useSelector((state) => state.users)
  const { userNotifications } = useSelector((state) => state.notifications)
  const { user } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)
  const userId = user?.user?.id

  useEffect(() => {
    getUsersMessages()
    if (Object.keys(sportman).length === 0) {
      dispatch(getSportman(user?.user?.sportman?.id))
    }
  }, [])

  useEffect(() => {
    console.log('notReaded changed', notReaded)
  }, [notReaded])

  // console.log('=========== USER.USER ============', user.user)
  // console.log('=========== SPORTMAN ============', sportman)
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
          return navigation.navigate('Paso1')
        }
        if (user.user.club) {
          return navigation.navigate('ConfigurarAnuncio')
        } else {
          navigation.navigate('SeleccionarImagen')
        }
        break
      case 'message':
        if (sportman.type == 'invitado') {
          return navigation.navigate('Paso1')
        } else {
          return navigation.navigate('TusNotificaciones1')
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
    return setActiveIcon('profile')
  }

  const imgPerfil =
    user?.user?.type !== 'club'
      ? sportman?.info?.img_perfil
      : user?.user?.club?.img_perfil

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          getUsersMessages()
          if (user.user.type == 'club') {
            dispatch(getNotificationsByUserId(user.user.club.id))
          } else {
            dispatch(getNotificationsByUserId(user.user.id))
          }
          handleIconPress('diary')
        }}
        style={
          activeIcon === 'diary'
            ? [styles.selected, { borderTopColor: mainColor }]
            : styles.deselected
        }
      >
        <DiarySVG isActive={activeIcon === 'diary'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleIconPress('lens')}
        style={
          activeIcon === 'lens'
            ? [styles.selected, { borderTopColor: mainColor }]
            : styles.deselected
        }
      >
        <LensSVG isActive={activeIcon === 'lens'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleIconPress('post')}
        style={{
          width: '18.4%',
          height: 70,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            width: 37,
            height: 37,
            backgroundColor: mainColor,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#fff', fontSize: 28, bottom: 2 }}>+</Text>
        </View>
        {/* <HomeSVG sportColor={mainColor} isActive={activeIcon === 'post'} /> */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleIconPress('message')}
        style={
          activeIcon === 'message'
            ? [styles.selected, { borderTopColor: mainColor }]
            : styles.deselected
        }
      >
        <View style={styles.iconContainer}>
          <MessageSVG
            isActive={activeIcon === 'message'}
            style={[styles.icon, activeIcon === 'message' && styles.iconActive]}
          />
          {userNotifications.length > 0 &&
            userNotifications
              ?.filter((notification) => {
                if (user?.user?.type === 'club') {
                  notification.recipientId === user.user.club?.id
                  return true
                } else if (notification.recipientId === userId) {
                  return true
                } else {
                  return false
                }
              })
              .filter((notif) => !notif.read).length > 0 && (
              <View
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: mainColor,
                  borderRadius: 100,
                  position: 'absolute',
                  top: 50,
                  right: 4
                }}
              ></View>
            )}
          {notReaded > 0 && (
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: mainColor,
                borderRadius: 100,
                position: 'absolute',
                top: 10,
                right: -20,
                zIndex: 800
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>
                {notReaded}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigation()}
        style={
          activeIcon === 'profile'
            ? [styles.selected, { borderTopColor: mainColor }]
            : styles.deselected
        }
      >
        {imgPerfil && imgPerfil !== '' && (
          <Image
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
            contentFit="cover"
            source={{ uri: generateLowResUrl(imgPerfil, 90) }}
          />
        )}
        {!sportman?.info?.img_front && !imgPerfil && (
          <Image
            style={{
              width: 35,
              height: 35,
              borderRadius: 100,
              backgroundColor: mainColor
            }}
            contentFit="cover"
            source={require('../assets/whiteSport.png')}
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
    width: '100%',
    height: 50,
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

export default NavBarInferior2
