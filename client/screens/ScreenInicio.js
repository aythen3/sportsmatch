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

const Stack = createNativeStackNavigator()

const ScreenInicio = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="PantallaInicio" component={PantallaInicio} />
        <Stack.Screen name="stepsClub" component={StepsClub} />
        <Stack.Screen name="LoginSwitch" component={LoginSwitch} />
        <Stack.Screen name="IniciarSesin" component={IniciarSesin} />
        <Stack.Screen name="Registrarse" component={Registrarse} />
        <Stack.Screen name="Paso1" component={Paso1} />
        <Stack.Screen name="Paso3Profesional" component={Paso3Profesional} />
        <Stack.Screen name="Paso4Jugador" component={Paso4Jugador} />
        <Stack.Screen name="Paso4Profesional" component={Paso4Profesional} />
        <Stack.Screen name="stepsJugador" component={StepsJugador} />
        <Stack.Screen name="PostPromocion" component={PromocionarPost} />
        <Stack.Screen name="RecuperarContra" component={RecuperarContra} />
      </Stack.Navigator>
    </>
  )
}

export default ScreenInicio
