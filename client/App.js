const Stack = createNativeStackNavigator()
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import LoginSwitch from './screens/LoginSwitch'
import Paso2Jugador from './screens/Paso2Jugador'
import Paso from './screens/Paso'
import Paso4Jugador from './screens/Paso4Jugador'
import Paso3Profesional from './screens/Paso3Profesional'
import Paso4Profesional from './screens/Paso4Profesional'
import EscogerDeporte1 from './screens/EscogerDeporte1'
import EscogerDeporte2 from './screens/EscogerDeporte2'
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
import EditarPerfil from './screens/EditarPerfil/EditarPerfil'
import CerrarSesin from './screens/EditarPerfil/CerrarSesin'
import EliminarCuenta from './screens/EditarPerfil/EliminarCuenta'
import MiSuscripcin from './screens/MiSuscripcin'
import PerfilDatosPropioClub from './screens/PerfilDatosPropioClub'
import PerfilVisualizacinJugador from './screens/PerfilVisualizacinJugador'
import MiPerfil from './screens/MiPerfil'
import PerfilFeedVisualitzaciJug from './screens/PerfilFeedVisualitzaciJug'
import ChatAbierto from './screens/ChatAbierto'
import SiguiendoUsuarios from './screens/SiguiendoUsuarios'
import SiguiendoJugadores from './screens/SiguiendoJugadores'
import OfertasEmitidas from './screens/Ofertas/OfertasEmitidas'
import InscritosAMisOfertas from './screens/InscritosAMisOfertas'
import ExplorarClubs from './screens/ExplorarClubs'
import ExplorarClubsConFiltroPrem from './screens/ExplorarClubsConFiltroPrem'
import PantallaInicio from './screens/Login/PantallaInicio'
import IniciarSesin from './screens/Login/IniciarSesin'
import Registrarse from './screens/Login/Registrarse'
import TusMatchs1 from './screens/TusMatchs1'
import TusMatchsDetalle1 from './screens/TusMatchsDetalle1'
import TusMensajes1 from './screens/TusMensajes1'
import TusNotificaciones1 from './screens/Notificaciones/TusNotificaciones1'
import EliminarOferta from './screens/Ofertas/EliminarOferta'
import ChatAbierto1 from './screens/ChatAbierto1'
import CrearHighlight from './screens/CrearHighlight'
import ConfigurarAnuncio from './screens/ConfigurarAnuncio'
import Premium from './screens/Premium'
import Paso3Jugador from './screens/Paso3Jugador'
import Paso1 from './screens/Paso1'
import DefineTusSkills from './screens/DefineTusSkills'
import CorreoElectrnico from './screens/EditarPerfil/CorreoElectrnico'
import Contrasea from './screens/EditarPerfil/Contrasea'
import NavBarInferior from './components/NavBarInferior'
import StepsClub from './screens/StepsClub'
import StepsJugador from './screens/StepsJugador'
import EditarSkills from './screens/EditarPerfil/EditarSkills'
import DetallesUsuario from './screens/EditarPerfil/DetallesUsuario'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './redux/store'

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

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
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
                    route.name !== 'Paso3Jugador' &&
                    route.name !== 'Paso4Jugador' &&
                    route.name !== 'Paso4Profesional'
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
                name="EditarSkills"
                component={EditarSkills}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DetallesUsuario"
                component={DetallesUsuario}
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
                name="Paso"
                component={Paso}
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
                name="PerfilVisualizacinJugador"
                component={PerfilVisualizacinJugador}
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
                name="SiguiendoUsuarios"
                component={SiguiendoUsuarios}
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
                name="TusMatchs1"
                component={TusMatchs1}
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
                name="Paso3Jugador"
                component={Paso3Jugador}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Paso1"
                component={Paso1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DefineTusSkills"
                component={DefineTusSkills}
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
      </Provider>
    </>
  )
}
export default App
