import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize, FontFamily, Color } from '../../GlobalStyles'
import { useSelector } from 'react-redux'

const EditarPerfil = () => {
  const navigation = useNavigation()
  const { user } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)

  return (
    <View style={styles.editarPerfil}>
      <View style={styles.groupParent}>
        <View style={[styles.cooliconParent, styles.starusPosition]}>
          <Pressable
            style={styles.coolicon}
            onPress={() => {
              console.log('EP')
              navigation.goBack()
            }}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../../assets/coolicon3.png')}
            />
          </Pressable>
          <Pressable
            style={styles.editarPerfil1}
            onPress={() => {
              console.log('EP')
              navigation.goBack()
            }}
          >
            <Text style={styles.editarPerfil2}>Editar perfil</Text>
          </Pressable>
        </View>

        <View style={styles.defineTusSkillsParent}>
          {user.user.type !== 'club' && (
            <Text
              style={[styles.defineTusSkills, styles.eliminarCuentaTypo]}
              onPress={() => navigation.navigate('EditarSkills')}
            >
              Define tus skills
            </Text>
          )}
          <View style={user.user.type !== 'club' && styles.frameChild} />
          <Text
            style={[styles.detallesDelUsuario, styles.eliminarCuentaTypo]}
            onPress={() =>
              navigation.navigate(
                user.user.type === 'club'
                  ? 'ClubDetails'
                  : sportman.type === 'coach'
                    ? 'ProDetails'
                    : 'PlayerDetails'
              )
            }
          >
            {user.user.type === 'club'
              ? 'Detalles del club'
              : sportman.type === 'coach'
                ? 'Detalles del profesional'
                : 'Detalles del usuario'}
          </Text>
          <View style={styles.frameChild} />
          <Text
            style={[styles.detallesDelUsuario, styles.eliminarCuentaTypo]}
            onPress={() => navigation.navigate('Contrasea')}
          >
            Contraseña
          </Text>
          <View style={styles.frameChild} />
          <Text
            style={[styles.detallesDelUsuario, styles.eliminarCuentaTypo]}
            onPress={() => navigation.navigate('CerrarSesin')}
          >
            Cerrar sesión
          </Text>
          <View style={styles.frameChild} />
          <Text
            style={[styles.eliminarCuenta, styles.eliminarCuentaTypo]}
            onPress={() => navigation.navigate('EliminarCuenta')}
          >
            Eliminar cuenta
          </Text>
          <View style={styles.frameChild} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  starusPosition: {
    left: 0,
    top: 0
  },
  eliminarCuentaTypo: {
    height: 23,
    width: 360,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
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
  editarPerfil2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  editarPerfil1: {
    marginLeft: 9
  },
  cooliconParent: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },

  defineTusSkills: {
    color: Color.wHITESPORTSMATCH,
    height: 23
  },
  frameChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    marginTop: 10,
    borderStyle: 'solid'
  },
  detallesDelUsuario: {
    marginTop: 10,
    color: Color.wHITESPORTSMATCH,
    height: 23
  },
  eliminarCuenta: {
    color: '#e74235',
    marginTop: 10
  },
  defineTusSkillsParent: {
    marginTop: 60
  },
  groupParent: {
    top: 60,
    left: 15,
    position: 'absolute'
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    borderStyle: 'solid',
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
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7,
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
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size,
    width: 61,
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    left: 0,
    top: 0
  },
  groupGroup: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: 'absolute'
  },
  editarPerfil: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    width: '100%'
  }
})

export default EditarPerfil
