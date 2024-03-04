const Stack = createNativeStackNavigator()
import React from 'react'
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
import ExplorarPersonasClubs from './screens/ExplorarPersonasClubs'
import ExplorarBuscar from './screens/ExplorarBuscar'
import MonetizarOfertaPRO from './screens/MonetizarOfertaPRO'
import BuscarOfertasDeportvas from './screens/BuscarOfertasDeportvas'
import TodasLasOfertas from './screens/TodasLasOfertas'
import MisOfertas from './screens/MisOfertas'
import TusMatchs from './screens/TusMatchs'
import TusMatchsDetalle from './screens/TusMatchsDetalle'
import TusMensajes from './screens/TusMensajes'
import TusNotificaciones from './screens/TusNotificaciones'
import NotificacinMatch from './screens/NotificacinMatch'
import EditarPerfil from './screens/EditarPerfil'
import CerrarSesin from './screens/CerrarSesin'
import EliminarCuenta from './screens/EliminarCuenta'
import MiSuscripcin from './screens/MiSuscripcin'
import MiSuscripcin1 from './screens/MiSuscripcin1'
import SILVER from './screens/SILVER'
import GOLD from './screens/GOLD'
import STAR from './screens/STAR'
import PerfilDatosPropioClub from './screens/PerfilDatosPropioClub'
import PerfilVisualizacinJugador from './screens/PerfilVisualizacinJugador'
import PerfilVisualizacinClubs from './screens/PerfilVisualizacinClubs'
import MiPerfil from './screens/MiPerfil'
import PerfilFeedVisualitzaciJug from './screens/PerfilFeedVisualitzaciJug'
import PN0213202410517AM from './screens/PN0213202410517AM'
import ChatAbierto from './screens/ChatAbierto'
import SiguiendoUsuarios from './screens/SiguiendoUsuarios'
import SiguiendoUsuarios1 from './screens/SiguiendoUsuarios1'
import SiguiendoJugadores from './screens/SiguiendoJugadores'
import OfertasEmitidas from './screens/OfertasEmitidas'
import InscritosAMisOfertas from './screens/InscritosAMisOfertas'
import ExplorarClubs from './screens/ExplorarClubs'
import ExplorarClubsConFiltroPrem from './screens/ExplorarClubsConFiltroPrem'
import LoginSwitch1 from './screens/LoginSwitch1'
import PantallaInicio from './screens/PantallaInicio'
import IniciarSesin from './screens/IniciarSesin'
import Registrarse from './screens/Registrarse'
import TusMatchs1 from './screens/TusMatchs1'
import TusMatchsDetalle1 from './screens/TusMatchsDetalle1'
import TusMensajes1 from './screens/TusMensajes1'
import TusNotificaciones1 from './screens/TusNotificaciones1'
import EliminarOferta from './screens/EliminarOferta'
import EliminarOferta1 from './screens/EliminarOferta1'
import ChatAbierto1 from './screens/ChatAbierto1'
import CrearHighlight from './screens/CrearHighlight'
import PerfilFeedVisualitzaciClu from './screens/PerfilFeedVisualitzaciClu'
import PerfilFeedVisualitzaciClu1 from './screens/PerfilFeedVisualitzaciClu1'
import PerfilFeedVisualitzaciClu2 from './screens/PerfilFeedVisualitzaciClu2'
import Group from './screens/Group'
import Group1 from './screens/Group1'
import ConfigurarAnuncio from './screens/ConfigurarAnuncio'
import Premium from './screens/Premium'
import Paso3Jugador from './screens/Paso3Jugador'
import Paso1 from './screens/Paso1'
import Vector from './screens/Vector'
import PuntoConflictvoEl from './screens/PuntoConflictvoEl'
import CuandoElJugador from './screens/CuandoElJugador'
import LineVector from './screens/LineVector'
import Group2 from './screens/Group2'
import Group3 from './screens/Group3'
import Group4 from './screens/Group4'
import Group5 from './screens/Group5'
import AquSeMonetza from './screens/AquSeMonetza'
import AquSeMonetza1 from './screens/AquSeMonetza1'
import AquSeMonetza2 from './screens/AquSeMonetza2'
import AquSeHace from './screens/AquSeHace'
import AquSeHace1 from './screens/AquSeHace1'
import AquSeMonetza3 from './screens/AquSeMonetza3'
import DetallesDelUsuario from './screens/DetallesDelUsuario'
import DefineTusSkills from './screens/DefineTusSkills'
import CorreoElectrnico from './screens/CorreoElectrnico'
import Contrasea from './screens/Contrasea'
import MENUCLUB from './screens/MENUCLUB'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { View, Text, Pressable, TouchableOpacity } from 'react-native'

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true)

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
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
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
              name="ExplorarPersonasClubs"
              component={ExplorarPersonasClubs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExplorarBuscar"
              component={ExplorarBuscar}
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
              name="MiSuscripcin1"
              component={MiSuscripcin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SILVER"
              component={SILVER}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GOLD"
              component={GOLD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STAR"
              component={STAR}
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
              name="PerfilVisualizacinClubs"
              component={PerfilVisualizacinClubs}
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
              name="PN0213202410517AM"
              component={PN0213202410517AM}
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
              name="SiguiendoUsuarios1"
              component={SiguiendoUsuarios1}
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
              name="LoginSwitch1"
              component={LoginSwitch1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PantallaInicio"
              component={PantallaInicio}
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
              name="EliminarOferta1"
              component={EliminarOferta1}
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
              name="PerfilFeedVisualitzaciClu"
              component={PerfilFeedVisualitzaciClu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilFeedVisualitzaciClu1"
              component={PerfilFeedVisualitzaciClu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilFeedVisualitzaciClu2"
              component={PerfilFeedVisualitzaciClu2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
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
              name="Vector"
              component={Vector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PuntoConflictvoEl"
              component={PuntoConflictvoEl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CuandoElJugador"
              component={CuandoElJugador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LineVector"
              component={LineVector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={Group4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group5"
              component={Group5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AquSeMonetza"
              component={AquSeMonetza}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AquSeMonetza1"
              component={AquSeMonetza1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AquSeMonetza2"
              component={AquSeMonetza2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AquSeHace"
              component={AquSeHace}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AquSeHace1"
              component={AquSeHace1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AquSeMonetza3"
              component={AquSeMonetza3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetallesDelUsuario"
              component={DetallesDelUsuario}
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
            <Stack.Screen
              name="MENUCLUB"
              component={MENUCLUB}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  )
}
export default App
