import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { StripeProvider } from '@stripe/stripe-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import { Context, ContextProvider } from './context/Context'

import { AppRegistry, SafeAreaView, StatusBar, Text, View } from 'react-native'

import { ToastProvider } from './components/Toast'
import * as Notifications from 'expo-notifications'

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
import ScreenInicio from './screens/ScreenInicio'
import ScreenPrincipal from './screens/ScreenPrincipal'

const Stack = createNativeStackNavigator()

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
              <NavigationContainer theme={{colors:{background:"black"}}} >
                {hideSplashScreen ? (
                 <>
                  <Stack.Navigator
                  initialRouteName="MainTabs"
                  
                  
                    screenOptions={({ route }) => ({
                      cardOverlayEnabled:false,
                      cardStyle:{backgroundColor:"red"},
                      statusBarAnimation:"fade",
                      animation:"none",
                      headerShown: false,
                      
                        animationEnabled: false,
    gestureEnabled: false,  // Desactivar gestos de navegación
    transitionSpec: {
      open: { animation: 'timing', config: { duration: 0 } },
      close: { animation: 'timing', config: { duration: 0 } },
    },
                      
                      
                      // footerShown: setIsFooterShow(
                      //   route.name !== 'PantallaInicio' &&
                      //     route.name !== 'LoginSwitch' &&
                      //     route.name !== 'IniciarSesin' &&
                      //     route.name !== 'stepsClub' &&
                      //     route.name !== 'Registrarse' &&
                      //     route.name !== 'Paso1' &&
                      //     route.name !== 'Paso3Profesional' &&
                      //     route.name !== 'Paso4Jugador' &&
                      //     route.name !== 'Paso4Profesional' &&
                      //     route.name !== 'stepsJugador' &&
                      //     route.name !== 'PostPromocion' &&
                      //     route.name !== 'RecuperarContra' && 
                      //      route.name !== 'ChatAbierto1'
                          
                      // )
                    })}
                  >       
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
