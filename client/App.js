import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
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
import NavBarInferior from './components/NavBarInferior'
import StepsClub from './screens/Pasos/StepsClub'
import StepsJugador from './screens/Pasos/StepsJugador'
import EditarSkills from './screens/Perfil/EditarPerfil/jugador/EditarSkills'
import DetallesUsuario from './screens/Perfil/EditarPerfil/jugador/DetallesUsuario'
import { StripeProvider } from '@stripe/stripe-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ContextProvider } from './context/Context'
import ClubDetails from './screens/Perfil/EditarPerfil/club/ClubDetails'
import PlayerDetails from './screens/Perfil/EditarPerfil/jugador/PlayerDetails'
import { StatusBar, View } from 'react-native'
import ClubProfile from './screens/Pasos/ClubProfile'
import ProDetails from './screens/Perfil/EditarPerfil/profesional/ProDetails'
import Post from './screens/Perfil/EditarPerfil/Post'
import PromocionarPost from './screens/Pasos/PromocionarPost'
import Notificaciones from './screens/Perfil/EditarPerfil/Notificaciones'
import UserFollowers from './screens/Explorar/UserFollowers'
import RecuperarContra from './screens/Login/RecuperarContra'
const Stack = createNativeStackNavigator()
if (__DEV__) {
  require('./ReactotronConfig')
}
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true)
  const [isFooterShow, setIsFooterShow] = useState(null)

  const [fontsLoaded, error] = useFonts({
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf')
  })

  if (!fontsLoaded && !error) {
    return null
  }

  // ======================= CHAT RELATED STUFF ============================

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000'
      }}
    >
      <StripeProvider
        publishableKey="pk_test_51OocYQGmE60O5ob7ydu8u1BLMhlWf9F5C6TCuSu75y47X5yBRO8wcbIssEjFc95AferGwyiHNkNGwT25ywIoZahB009vDgPuYd"
        urlScheme="com.android.app" // required for 3D Secure and bank redirects
        merchantIdentifier="merchant.com.app" // required for Apple Pay
      >
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
        <Provider store={store}>
          <ContextProvider>
            <NavigationContainer children={NavBarInferior}>
              {hideSplashScreen ? (
                <Stack.Navigator
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
                        route.name !== 'RecuperarContra'
                    )
                  })}
                >
                  <Stack.Screen
                    name="PantallaInicio"
                    component={PantallaInicio}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="LoginSwitch"
                    component={LoginSwitch}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Paso2Jugador"
                    component={Paso2Jugador}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="RecuperarContra"
                    component={RecuperarContra}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EditarSkills"
                    component={EditarSkills}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PlayerDetails"
                    component={PlayerDetails}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ProDetails"
                    component={ProDetails}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ClubDetails"
                    component={ClubDetails}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ClubProfile"
                    component={ClubProfile}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="UserFollowers"
                    component={UserFollowers}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="DetallesUsuario"
                    component={DetallesUsuario}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Post"
                    component={Post}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PostPromocion"
                    component={PromocionarPost}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="ExplorarPersonaClubsFiltr"
                    component={ExplorarPersonaClubsFiltr}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MonetizarOfertaPRO"
                    component={MonetizarOfertaPRO}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Notificaciones"
                    component={Notificaciones}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="BuscarOfertasDeportvas"
                    component={BuscarOfertasDeportvas}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TodasLasOfertas"
                    component={TodasLasOfertas}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MisOfertas"
                    component={MisOfertas}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusMatchs"
                    component={TusMatchs}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusMatchsDetalle"
                    component={TusMatchsDetalle}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusMensajes"
                    component={TusMensajes}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusNotificaciones"
                    component={TusNotificaciones}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="NotificacinMatch"
                    component={NotificacinMatch}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EditarPerfil"
                    component={EditarPerfil}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="CerrarSesin"
                    component={CerrarSesin}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EliminarCuenta"
                    component={EliminarCuenta}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MiSuscripcin"
                    component={MiSuscripcin}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PerfilDatosPropioClub"
                    component={PerfilDatosPropioClub}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="stepsClub"
                    component={StepsClub}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="stepsJugador"
                    component={StepsJugador}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Paso4Jugador"
                    component={Paso4Jugador}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Paso3Profesional"
                    component={Paso3Profesional}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Paso4Profesional"
                    component={Paso4Profesional}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EscogerDeporte1"
                    component={EscogerDeporte1}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EscogerDeporte2"
                    component={EscogerDeporte2}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MiPerfil"
                    component={MiPerfil}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PerfilFeedVisualitzaciJug"
                    component={PerfilFeedVisualitzaciJug}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ChatAbierto"
                    component={ChatAbierto}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SiguiendoJugadores"
                    component={SiguiendoJugadores}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="OfertasEmitidas"
                    component={OfertasEmitidas}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="InscritosAMisOfertas"
                    component={InscritosAMisOfertas}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ExplorarClubs"
                    component={ExplorarClubs}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ExplorarClubsConFiltroPrem"
                    component={ExplorarClubsConFiltroPrem}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="IniciarSesin"
                    component={IniciarSesin}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Registrarse"
                    component={Registrarse}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusMatchsDetalle1"
                    component={TusMatchsDetalle1}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusMensajes1"
                    component={TusMensajes1}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="TusNotificaciones1"
                    component={TusNotificaciones1}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EliminarOferta"
                    component={EliminarOferta}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ChatAbierto1"
                    component={ChatAbierto1}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="CrearHighlight"
                    component={CrearHighlight}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SeleccionarImagen"
                    component={SeleccionarImagen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ConfigurarAnuncio"
                    component={ConfigurarAnuncio}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Premium"
                    component={Premium}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Paso1"
                    component={Paso1}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="CorreoElectrnico"
                    component={CorreoElectrnico}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Contrasea"
                    component={Contrasea}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              ) : null}
              {isFooterShow && <NavBarInferior />}
            </NavigationContainer>
          </ContextProvider>
        </Provider>
      </StripeProvider>
    </View>
  )
}
export default App
