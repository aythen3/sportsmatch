import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Pressable, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
import axiosInstance from '../../utils/apiBackend'

const Contrasea = () => {
  const {user} = useSelector(state=>state.users)
  const navigation = useNavigation()
  const [password,setPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [repeatNewPassword,setRepeatNewPassword] = useState('')

  const handleChangePassword = () => {
    if(newPassword === repeatNewPassword) {
      const body = {
        email: user.user.email,
        password: password,
        newPassword: newPassword
      }
      axiosInstance.post(`user/change-password/${user.user.id}`,body).then(()=>navigation.navigate('SiguiendoJugadores'))
    }
  }

  return (
    <View style={styles.contrasea}>
      <View style={styles.cabezeraParent}>
        <View style={styles.loremIpsumFlexBox}>
          <Pressable
            style={styles.coolicon}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../../assets/coolicon3.png')}
            />
          </Pressable>
          <Pressable
            style={styles.contrasea1}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.contrasea2, styles.textTypo]}>Contraseña</Text>
          </Pressable>
        </View>
      </View>

      <View View style={{ marginTop: 30 }}>
        <Input state={password} setState={setPassword} type={'password'} title="Contraseña" placeholderText="*****" />
        <Input state={newPassword} setState={setNewPassword}  type={'newPassword'} title="Nueva contraseña" />
        <Input state={repeatNewPassword} setState={setRepeatNewPassword} type={'repeatNewPassword'} title="Repetir nueva contraseña" />
      </View>

      <TouchableOpacity disabled={password.length <= 0 || newPassword.length <= 0 ||repeatNewPassword.length <= 0} onPress={handleChangePassword} style={styles.boton}>
        <View style={[styles.loremIpsum, styles.loremIpsumFlexBox]}>
          <Text style={styles.aceptar}>Aceptar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contraseaLayout: {
    maxHeight: '100%',
    position: 'absolute'
  },
  loremIpsumFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  cabezeraParent: {
    marginTop: 30,
    marginLeft: 15
    // left: 15
  },
  textTypo: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  contraseaTypo: {
    height: 23,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  textPosition: {
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
  contraseaChild: {
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
  contrasea2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  contrasea1: {
    // marginLeft: 9
  },

  contrasea3: {
    width: 360
  },
  text: {
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
  parent: {
    alignSelf: 'stretch',
    flex: 1
  },
  contraseaParent: {
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
  nuevaContrasea: {
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
    marginTop: 60
  },
  frameParent: {
    marginTop: 64
  },

  contraseaItem: {
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
  contrasea: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default Contrasea
