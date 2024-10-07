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
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EditarPerfil from '../screens/Perfil/EditarPerfil/EditarPerfil'
import TodasLasOfertas from '../screens/TodasLasOfertas'
import OfertasEmitidas from '../screens/Ofertas/OfertasEmitidas'
import TusMatchs from '../screens/Match/TusMatchs'
import PerfilFeedVisualitzaciJug from '../screens/PerfilFeedVisualitzaciJug'
import ClubProfile from '../screens/Pasos/ClubProfile'
import Post from '../screens/Perfil/EditarPerfil/Post'
import * as NavigationBar from 'expo-navigation-bar'
import ChatAbierto1 from '../screens/ChatAbierto1'
import UserFollowers from '../screens/Explorar/UserFollowers'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const NavBarInferior2 = () => {
  useEffect(() => {
    // Establece el color marrón de la barra de navegación nativa
    NavigationBar.setBackgroundColorAsync(Color.bLACK2SPORTMATCH)
  }, [])
  const {
    generateLowResUrl,
    setActiveIcon,
    notReaded
    // user
  } = useContext(Context)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [sportColor, setSportColor] = useState('#E1451E')
  const { isSportman, mainColor } = useSelector((state) => state.users)
  const { userNotifications } = useSelector((state) => state.notifications)
  const { user, showNavBar } = useSelector((state) => state.users)
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
      screenOptions={({ route }) => {
        // console.log(route, 'tour')
        return {
          lazy: true,
          tabBarShowLabel: false, // Ocultar los nombres de las pestañas
          tabBarStyle: {
            backgroundColor: Color.bLACK2SPORTMATCH,
            borderTopWidth: 0,
            height: 50,
            display:
              route.name === 'SeleccionarImagen' || !showNavBar
                ? 'none'
                : 'flex' // Ocultar las tabs en "SeleccionarImagen"
          },
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
                    {/* {userNotifications.length > 0 &&
                      userNotifications
                        ?.filter((notification) => {
                          if (user?.user?.type === 'club') {
                            if (notification.receiverId === user.user.club?.id)
                              return true
                          } else if (notification.receiverId === userId) {
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
                      )} */}
                    {/* {notReaded > 0 && (
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
                    )} */}
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
        }
      }}
    >
      <Tab.Screen name="SiguiendoJugadores" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator screenOptions={{ animationEnabled: true }}>
            <Stack.Screen
              name="SiguiendoJugadores1"
              options={{ headerShown: false }}
              component={SiguiendoJugadores}
            />
            <Stack.Screen
              name="TodasLasOfertas"
              options={{ headerShown: false }}
              component={TodasLasOfertas}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="OfertasEmitidas"
              component={OfertasEmitidas}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="TusMatchs"
              component={TusMatchs}
            />

            <Stack.Screen
              name="PerfilFeedVisualitzaciJug"
              component={PerfilFeedVisualitzaciJug}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Post"
              component={Post}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="ExplorarClubs" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            <Stack.Screen
              name="ExplorarClubs1"
              options={{ headerShown: false }}
              component={ExplorarClubs}
            />
            <Stack.Screen
              name="PerfilFeedVisualitzaciJug"
              component={PerfilFeedVisualitzaciJug}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClubProfile"
              component={ClubProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Post"
              component={Post}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="SeleccionarImagen"
        options={{
          headerShown: false
        }}
        component={
          user?.user?.type !== 'club' ? SeleccionarImagen : ConfigurarAnuncio
        }
      />
      <Tab.Screen
        name="TusNotificaciones1"
        options={{
          headerShown: false,
          tabBarBadge:
            userNotifications.filter((n) => !n.read).length > 0 &&
            userNotifications.filter((n) => !n.read).length,
          tabBarBadgeStyle: {
            backgroundColor:
              userNotifications.filter((n) => !n.read).length > 0
                ? mainColor
                : 'transparent'
          }
        }}
      >
        {() => (
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            <Stack.Screen
              name="TusNotificaciones11"
              options={{ headerShown: false }}
              component={TusNotificaciones1}
            />
            <Stack.Screen
              name="PerfilFeedVisualitzaciJug"
              component={PerfilFeedVisualitzaciJug}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClubProfile"
              component={ClubProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatAbierto1"
              component={ChatAbierto1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{ headerShown: false }} name="MiPerfil">
        {() => (
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            <Stack.Screen
              name="MiPerfil"
              component={
                user?.user?.type !== 'club' ? MiPerfil : PerfilDatosPropioClub
              }
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditarPerfil"
              component={EditarPerfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserFollowers"
              options={{ headerShown: false }}
              component={UserFollowers}
            />
            <Stack.Screen
              name="PerfilFeedVisualitzaciJug"
              component={PerfilFeedVisualitzaciJug}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClubProfile"
              component={ClubProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Post"
              component={Post}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      {/* <Tab.Screen name="MiPerfil" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator screenOptions={{ animationEnabled: false }}>
            <Stack.Screen
              name="MiPerfil"
              options={{ headerShown: false }}
              component={
                user?.user?.type !== 'club' ? MiPerfil : PerfilDatosPropioClub
              }
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EditarPerfil"
              component={EditarPerfil}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen> */}
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
