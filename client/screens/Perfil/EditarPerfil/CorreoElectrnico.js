import React, { useState } from 'react'
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
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../../GlobalStyles'
import Input from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import * as EmailValidator from 'email-validator'
import CustomHeaderBack from '../../../components/CustomHeaderBack'
import axiosInstance from '../../../utils/apiBackend'
import { updateUser } from '../../../redux/slices/users.slices'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CorreoElectrnico = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [emailCheck, setEmailCheck] = useState('')
  const [isEmailValid, setEmailValid] = useState(false)

  const { user, mainColor, allUsers } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const isValidEmail = (email) => {
    const alreadyTaken = allUsers?.map((user) => user?.email).includes(email)
    if (!alreadyTaken) {
      return EmailValidator.validate(email)
    } else {
      return false
    }
  }
  const seterValues = (value) => {
    setEmail(value)
    setEmailValid(isValidEmail(value))
  }

  const submit = async () => {
    if (email === emailCheck && isEmailValid) {
      const res = await axiosInstance.patch(`user/${user.user.id}`, { email })
      console.log(res.data, 'resdata')
      await AsyncStorage.removeItem('userAuth')
      dispatch(updateUser(res.data))
      navigation.goBack()
    } else {
      console.log('no anda')
    }
  }

  return (
    <View style={styles.correoElectrnico}>
      <View style={styles.cabezeraParent}>
        <CustomHeaderBack header={'Cambiar e-mail'}></CustomHeaderBack>
      </View>

      <View style={{ marginTop: 0 }}>
        <Input
          title="E-mail"
          placeholderText={user?.user?.email}
          disable={true}
        />
        <Input
          title="Nuevo e-mail"
          placeholderText={'Nuevo e-mail'}
          setState={(e) => seterValues(e)}
          value={email}
          type={'text'}
          emailcheked={true}
          isEmailValid={isEmailValid}
        />
        <Input
          title="Repetir e-mail"
          value={emailCheck}
          placeholderText={'Repetir e-mail'}
          setState={setEmailCheck}
          emailcheked={true}
          isEmailValid={
            email === emailCheck && email !== '' && emailCheck !== ''
          }
          type={'text'}
        />
      </View>

      <TouchableOpacity onPress={submit} style={styles.boton}>
        <View style={[styles.loremIpsum, styles.loremIpsumFlexBox]}>
          <Text style={styles.aceptar}>Aceptar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  correoLayout: {
    maxHeight: '100%',
    position: 'absolute'
  },
  loremIpsumFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  correoElecrnico1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  emailTypo: {
    height: 23,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  starusPosition: {
    top: 10,
    left: 15
  },
  borderPosition: {
    borderStyle: 'solid',
    top: 0,
    position: 'absolute'
  },
  rectanglePosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  correoElectrnicoChild: {
    height: '112.16%',
    width: '980.1%',
    top: '-9.15%',
    right: '-413.18%',
    bottom: '-3%',
    left: '-466.92%',
    maxWidth: '100%',
    opacity: 0.2,
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  correoElecrnico1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  correoElecrnico: {
    marginLeft: 9
  },

  email1: {
    width: 360
  },
  loremipsumloremipsumcom: {
    color: Color.gREY2SPORTSMATCH,
    width: 313,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  groupChild: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    height: 40,
    borderRadius: Border.br_81xl,
    width: 360,
    left: 0
  },
  loremipsumloremipsumcomParent: {
    alignSelf: 'stretch',
    flex: 1
  },
  emailGroup: {
    height: 63,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  emailInner: {
    height: 63,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  email: {
    height: 63,
    width: 360
  },
  nuevoEmail: {
    alignSelf: 'stretch'
  },
  rectangleWrapper: {
    width: 360,
    flex: 1
  },
  nuevoEmasiol: {
    marginTop: 10,
    height: 63,
    width: 360
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  loremIpsum: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    alignSelf: 'stretch',
    flex: 1
  },
  boton: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 30
  },
  frameParent: {
    marginTop: 64
  },
  cabezeraParent: {
    marginTop: 20
    // left: 15
  },
  correoElectrnicoItem: {
    marginLeft: -74,
    top: 831,
    left: '50%',
    width: 148
  },
  rectangleView: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
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
    height: 12,
    top: 0
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
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: 'absolute'
  },
  time: {
    marginTop: -9.55,
    top: '50%',
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    top: 10,
    left: 15
  },
  correoElectrnico: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default CorreoElectrnico
