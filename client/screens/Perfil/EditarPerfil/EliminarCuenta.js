import React, { useContext } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding
} from '../../../GlobalStyles'
import CustomHeaderBack from '../../../components/CustomHeaderBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import axiosInstance from '../../../utils/apiBackend'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { cleanSportman } from '../../../redux/slices/sportman.slices'
import { cleanUser } from '../../../redux/slices/users.slices'
import { cleanPost } from '../../../redux/slices/post.slices'
import { cleanClub } from '../../../redux/slices/club.slices'
import { resetChatsSlices } from '../../../redux/slices/chats.slices'
import { resetCommentsSlices } from '../../../redux/slices/comments.slices'
import { resetMatchsSlices } from '../../../redux/slices/matchs.slices'
import { resetMuroSlices } from '../../../redux/slices/muro.slices'
import { resetNotificationsSlices } from '../../../redux/slices/notifications.slices'
import { cleanOffers } from '../../../redux/slices/offers.slices'
import { cleanPosition } from '../../../redux/slices/positions.slices'
import { cleanSports } from '../../../redux/slices/sports.slices'
import { Context } from '../../../context/Context'

const EliminarCuenta = () => {
  const navigation = useNavigation()
  const { user, allUsers, mainColor } = useSelector((state) => state.users)
  const firebaseLogout = () => {
    signOut(auth)
  }
  const dispatch = useDispatch()
  const { setUsersWithMessages } = useContext(Context)

  return (
    <SafeAreaView style={styles.cerrarSesin}>
      <CustomHeaderBack header={'Eliminar Cuenta'}></CustomHeaderBack>
      <View style={styles.cabezera}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'stretch',
            height: '100%'
          }}
        >
          <View style={styles.texto}>
            <Text style={styles.estsSeguroQueContainer}>
              <Text style={styles.estsSeguroQue}>
                ¿Estás seguro que quieres eliminar definitivamente tu cuenta de
                SpotsMatch?
              </Text>
            </Text>
            <TouchableOpacity
              onPress={async () => {
                console.log('eeeeeeeeeeeeeeeaaaaaaa')
                try {
                  await axiosInstance
                    .delete(`user/${user?.user?.id}`)
                    .then(async (e) => {
                      setUsersWithMessages([])
                      await AsyncStorage.removeItem('userAuth')
                      await AsyncStorage.removeItem('googleAuth')
                      await AsyncStorage.removeItem('facebookAuth')
                      await AsyncStorage.removeItem('appleUserAuth')
                      await AsyncStorage.removeItem('@user')
                      await dispatch(cleanSportman())
                      await dispatch(cleanUser())
                      await dispatch(cleanPost())
                      await dispatch(cleanClub())
                      await dispatch(resetChatsSlices())
                      await dispatch(resetCommentsSlices())
                      await dispatch(resetMatchsSlices())
                      await dispatch(resetMuroSlices())
                      await dispatch(resetNotificationsSlices())
                      await dispatch(cleanOffers())
                      await dispatch(cleanPosition())
                      await dispatch(cleanSports())
                      await firebaseLogout()
                      navigation.reset({
                        index: 0,
                        history: false,
                        routes: [{ name: 'ScreenInicio' }]
                      })
                    })
                } catch (error) {
                  console.log(error, 'aaaaaaaaaaaa')
                }
              }}
              style={styles.boton}
            >
              <View style={[styles.loremIpsum, styles.loremIpsumFlexBox]}>
                <Text style={[styles.aceptar, styles.cerrarTypo]}>
                  Eliminar cuenta
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cerrarSesin2Typo: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH
  },
  cerrarTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupLayout: {
    height: 12,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  cerrarSesin2: {
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cerrarSesin1: {
    marginLeft: 9
  },
  cooliconParent: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  cabezera1: {
    justifyContent: 'center',
    marginTop: 30
  },
  estsSeguroQue: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  estsSeguroQueContainer: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.h3TitleMEDIUM_size,
    paddingHorizontal: '5%'
  },
  aceptar: {
    fontSize: FontSize.button_size,
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center'
  },
  loremIpsum: {
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  boton: {
    flexDirection: 'row',
    marginTop: 60,
    padding: '4%'
  },
  texto: {
    // height: 398,
    alignItems: 'center'
  },
  cabezera: {
    // marginLeft: -180,
    // top: 60
    // left: '50%',
    // width: 360,
    // position: 'absolute'
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    top: 0,
    height: 12
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: 'absolute'
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  battery: {
    width: 25,
    right: 0,
    top: 0,
    height: 12
  },
  wifiIcon: {
    width: 16,
    height: 11
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11
  },
  group: {
    top: 7,
    width: 68,
    right: 0
  },
  time: {
    marginTop: -9.55,
    top: '50%',
    left: 4,
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    left: 0,
    top: 0
  },
  groupParent: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: 'absolute'
  },
  cerrarSesin: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: '100%',
    flex: 1
  }
})

export default EliminarCuenta
