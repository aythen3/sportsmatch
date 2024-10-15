import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PantallaInicio from './Login/PantallaInicio'
import LoginSwitch from './Login/LoginSwitch'
import IniciarSesin from './Login/IniciarSesin'
import StepsClub from './Pasos/StepsClub'
import Registrarse from './Login/Registrarse'
import Paso1 from './Pasos/Paso1'
import Paso3Profesional from './Pasos/Paso3Profesional'
import Paso4Jugador from './Pasos/Paso4Jugador'
import Paso4Profesional from './Pasos/Paso4Profesional'
import StepsJugador from './Pasos/StepsJugador'
import PromocionarPost from './Pasos/PromocionarPost'
import RecuperarContra from './Login/RecuperarContra'
import NavBarInferior2 from '../components/NavBarInferior'
import EditarSkills from './Perfil/EditarPerfil/jugador/EditarSkills'
import PlayerDetails from './Perfil/EditarPerfil/jugador/PlayerDetails'
import ClubDetails from './Perfil/EditarPerfil/club/ClubDetails'
import ClubProfile from './Pasos/ClubProfile'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import { useFonts } from 'expo-font'
import Paso2Jugador from './Pasos/Paso2Jugador'
import ProDetails from './Perfil/EditarPerfil/profesional/ProDetails'

import EscogerDeporte1 from './Pasos/EscogerDeporte1'
import EscogerDeporte2 from './Pasos/EscogerDeporte2'
import ExplorarPersonaClubsFiltr from './ExplorarPersonaClubsFiltr'
import MonetizarOfertaPRO from './MonetizarOfertaPRO'
import BuscarOfertasDeportvas from './BuscarOfertasDeportvas'
import TodasLasOfertas from './Ofertas/TodasLasOfertas'
import MisOfertas from './Ofertas/MisOfertas'
import TusMatchs from './Match/TusMatchs'
import TusMatchsDetalle from './TusMatchsDetalle'
import TusMensajes from './TusMensajes'
import TusNotificaciones from './TusNotificaciones'
import NotificacinMatch from './NotificacinMatch'
import EditarPerfil from './Perfil/EditarPerfil/EditarPerfil'
import CerrarSesin from './Perfil/EditarPerfil/CerrarSesin'
import EliminarCuenta from './Perfil/EditarPerfil/EliminarCuenta'
import MiSuscripcin from './Perfil/Suscription/MiSuscripcin'
import PerfilDatosPropioClub from './PerfilDatosPropioClub'
import MiPerfil from './Perfil/MiPerfil'
import PerfilFeedVisualitzaciJug from './PerfilFeedVisualitzaciJug'
import ChatAbierto from './ChatAbierto'
import SiguiendoJugadores from './Muro/SiguiendoJugadores'
import OfertasEmitidas from './Ofertas/OfertasEmitidas'
import InscritosAMisOfertas from './InscritosAMisOfertas'
import ExplorarClubs from './Explorar/ExplorarClubs'
import ExplorarClubsConFiltroPrem from './Explorar/ExplorarClubsConFiltroPrem'
import TusMatchsDetalle1 from './TusMatchsDetalle1'
import TusMensajes1 from './TusMensajes1'
import TusNotificaciones1 from './Notificaciones/TusNotificaciones1'
import EliminarOferta from './Ofertas/EliminarOferta'
import ChatAbierto1 from './ChatAbierto1'
import CrearHighlight from './Muro/CrearPost/CrearHighlight'
import SeleccionarImagen from './Muro/CrearPost/SeleccionarImagen'
import ConfigurarAnuncio from './Ofertas/ConfigurarAnuncio'
import Premium from './Premium'
import CorreoElectrnico from './Perfil/EditarPerfil/CorreoElectrnico'
import Contrasea from './Perfil/EditarPerfil/Contrasea'
import DetallesUsuario from './Perfil/EditarPerfil/jugador/DetallesUsuario'
import Notificaciones from './Perfil/EditarPerfil/Notificaciones'
import SuscriptionChange from './SuscriptionChange'
import UserFollowers from './Explorar/UserFollowers'
import Post from './Perfil/EditarPerfil/Post'
import OfertaCreada from './Ofertas/OfertaCreada'
const Stack = createNativeStackNavigator()

const ScreenPrincipal = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          statusBarTranslucent: true,

          cardOverlayEnabled: false,
          cardStyle: { backgroundColor: 'red' }
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="Nav"
            component={NavBarInferior2}
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
            name="UserFollowers"
            component={UserFollowers}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetallesUsuario"
            component={DetallesUsuario}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Post"
            component={Post}
            options={{ headerShown: false }}
          /> */}
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
          {/* <Stack.Screen
          name="MisOfertas"
          component={MisOfertas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TusMatchs"
          component={TusMatchs}
          options={{ headerShown: false }}
        /> */}
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
          {/* <Stack.Screen
                      name="MiPerfil"
                      component={MiPerfil}
                      options={{ headerShown: false }}
                    /> */}

          <Stack.Screen
            name="ChatAbierto"
            component={ChatAbierto}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
          name="SiguiendoJugadores"
          component={SiguiendoJugadores}
          options={{ headerShown: false }}
        /> */}
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
          {/* <Stack.Screen
                      name="ExplorarClubs"
                      component={ExplorarClubs}
                      options={{ headerShown: false }}
                    /> */}
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
          {/* <Stack.Screen
                      name="TusNotificaciones1"
                      component={TusNotificaciones1}
                      options={{ headerShown: false }}
                    /> */}
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
            name="SuscriptionChange"
            component={SuscriptionChange}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OfertaCreada"
            component={OfertaCreada}
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
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="EditarSkills"
            component={EditarSkills}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Contrasea"
            component={Contrasea}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  )
}

export default ScreenPrincipal
