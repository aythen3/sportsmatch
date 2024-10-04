import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import { useFonts } from 'expo-font'
import LoginSwitch from './screens/Login/LoginSwitch'
import Paso2Jugador from './screens/Pasos/Paso2Jugador'
import Paso4Jugador from './screens/Pasos/Paso4Jugador'
import Paso3Profesional from './screens/Pasos/Paso3Profesional'
import Paso4Profesional from './screens/Pasos/Paso4Profesional'
import EscogerDeporte1 from './screens/Pasos/EscogerDeporte1'
import EscogerDeporte2 from './screens/Pasos/EscogerDeporte2'
import ExplorarPersonaClubsFiltr from './screens/ExplorarPersonaClubsFiltr'
import MonetizarOfertaPRO from './screens/MonetizarOfertaPRO'
import BuscarOfertasDeportvas from './screens/BuscarOfertasDeportvas'
import TodasLasOfertas from './screens/TodasLasOfertas'
import MisOfertas from './screens/Ofertas/MisOfertas'
import TusMatchs from './screens/Match/TusMatchs'
import TusMatchsDetalle from './screens/TusMatchsDetalle'
import TusMensajes from './screens/TusMensajes'
import TusNotificaciones from './screens/TusNotificaciones'
import NotificacinMatch from './screens/NotificacinMatch'
import EditarPerfil from './screens/Perfil/EditarPerfil/EditarPerfil'
import CerrarSesin from './screens/Perfil/EditarPerfil/CerrarSesin'
import EliminarCuenta from './screens/Perfil/EditarPerfil/EliminarCuenta'
import MiSuscripcin from './screens/Perfil/Suscription/MiSuscripcin'
import PerfilDatosPropioClub from './screens/PerfilDatosPropioClub'
import MiPerfil from './screens/Perfil/MiPerfil'
import PerfilFeedVisualitzaciJug from './screens/PerfilFeedVisualitzaciJug'
import ChatAbierto from './screens/ChatAbierto'
import SiguiendoJugadores from './screens/Muro/SiguiendoJugadores'
import OfertasEmitidas from './screens/Ofertas/OfertasEmitidas'
import InscritosAMisOfertas from './screens/InscritosAMisOfertas'
import ExplorarClubs from './screens/Explorar/ExplorarClubs'
import ExplorarClubsConFiltroPrem from './screens/Explorar/ExplorarClubsConFiltroPrem'
import PantallaInicio from './screens/Login/PantallaInicio'
import IniciarSesin from './screens/Login/IniciarSesin'
import Registrarse from './screens/Login/Registrarse'
import TusMatchsDetalle1 from './screens/TusMatchsDetalle1'
import TusMensajes1 from './screens/TusMensajes1'
import TusNotificaciones1 from './screens/Notificaciones/TusNotificaciones1'
import EliminarOferta from './screens/Ofertas/EliminarOferta'
import ChatAbierto1 from './screens/ChatAbierto1'
import CrearHighlight from './screens/Muro/CrearPost/CrearHighlight'
import SeleccionarImagen from './screens/Muro/CrearPost/SeleccionarImagen'
import ConfigurarAnuncio from './screens/Ofertas/ConfigurarAnuncio'
import Premium from './screens/Premium'
import Paso1 from './screens/Pasos/Paso1'
import CorreoElectrnico from './screens/Perfil/EditarPerfil/CorreoElectrnico'
import Contrasea from './screens/Perfil/EditarPerfil/Contrasea'
import StepsClub from './screens/Pasos/StepsClub'
import StepsJugador from './screens/Pasos/StepsJugador'
import EditarSkills from './screens/Perfil/EditarPerfil/jugador/EditarSkills'
import DetallesUsuario from './screens/Perfil/EditarPerfil/jugador/DetallesUsuario'
import { StripeProvider } from '@stripe/stripe-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import { Context, ContextProvider } from './context/Context'
import ClubDetails from './screens/Perfil/EditarPerfil/club/ClubDetails'
import PlayerDetails from './screens/Perfil/EditarPerfil/jugador/PlayerDetails'
import { AppRegistry, SafeAreaView, StatusBar, Text, View } from 'react-native'
import ClubProfile from './screens/Pasos/ClubProfile'
import ProDetails from './screens/Perfil/EditarPerfil/profesional/ProDetails'
import Post from './screens/Perfil/EditarPerfil/Post'
import PromocionarPost from './screens/Pasos/PromocionarPost'
import Notificaciones from './screens/Perfil/EditarPerfil/Notificaciones'
import UserFollowers from './screens/Explorar/UserFollowers'
import { ToastProvider } from './components/Toast'
import * as Notifications from 'expo-notifications'

import RecuperarContra from './screens/Login/RecuperarContra'
import OfertaCreada from './screens/Ofertas/OfertaCreada'
import SuscriptionChange from './screens/SuscriptionChange'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic
} from '@expo-google-fonts/poppins'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getSportman } from './redux/actions/sportman'
import DiarySVG from './components/svg/footerSVG/DiarySVG'
import LensSVG from './components/svg/footerSVG/LensSVG'
import MessageSVG from './components/svg/footerSVG/MessageSVG'
import NavBarInferior2 from './components/NavBarInferior'
import ScreenInicio from './screens/ScreenInicio'
import ScreenPrincipal from './screens/ScreenPrincipal'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

if (__DEV__) {
  require('./ReactotronConfig')
}
const App = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  })
  const [hideSplashScreen, setHideSplashScreen] = useState(true)
  const [isFooterShow, setIsFooterShow] = useState(null)
 /* eslint-disable */
  let [fontsLoaded,error] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });


  if (!fontsLoaded && !error) {
    return null
  }
  // ======================= CHAT RELATED STUFF ============================

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000'
      }}
    >
      <ToastProvider>
        <StripeProvider
          publishableKey="pk_test_51OocYQGmE60O5ob7ydu8u1BLMhlWf9F5C6TCuSu75y47X5yBRO8wcbIssEjFc95AferGwyiHNkNGwT25ywIoZahB009vDgPuYd"
          urlScheme="com.android.app" // required for 3D Secure and bank redirects
          merchantIdentifier="merchant.com.app" // required for Apple Pay
        >
          <StatusBar barStyle={'light-content'} backgroundColor="#000" />
          <Provider store={store}>
            <ContextProvider>
              <NavigationContainer >
                {hideSplashScreen ? (
                 <>
                  <Stack.Navigator
                  initialRouteName="MainTabs"
                    screenOptions={({ route }) => ({
                      headerShown: false,
                      
                      
                      footerShown: setIsFooterShow(
                        route.name !== 'PantallaInicio' &&
                          route.name !== 'LoginSwitch' &&
                          route.name !== 'IniciarSesin' &&
                          route.name !== 'stepsClub' &&
                          route.name !== 'Registrarse' &&
                          route.name !== 'Paso1' &&
                          route.name !== 'Paso3Profesional' &&
                          route.name !== 'Paso4Jugador' &&
                          route.name !== 'Paso4Profesional' &&
                          route.name !== 'stepsJugador' &&
                          route.name !== 'PostPromocion' &&
                          route.name !== 'RecuperarContra' && 
                           route.name !== 'ChatAbierto1'
                          
                      )
                    })}
                  >
  

                    {/* <Stack.Screen
                      name="PantallaInicio"
                      component={PantallaInicio}
                      options={{ headerShown: false }}
                    /> */}
                  
  <Stack.Screen
                      name="ScreenInicio"
                      component={ScreenInicio}
                      options={{ headerShown: false }}
                    />
                      <Stack.Screen
                      name="ScreenPrincipal"
                      component={ScreenPrincipal}
                      options={{ headerShown: false }}
                    />
        
                  </Stack.Navigator>
                 </>
                ) : null}
                {/* {isFooterShow && <NavBarInferior2 />} */}
              </NavigationContainer>
            </ContextProvider>
          </Provider>
        </StripeProvider>
      </ToastProvider>
    </SafeAreaView>
  )
}
export default App
