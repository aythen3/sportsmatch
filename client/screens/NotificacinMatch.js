import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, Pressable, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Padding, Border } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { updateMatchById } from '../redux/actions/matchs'
import {
  getAllNotifications,
  removeNotification
} from '../redux/actions/notifications'
import { Context } from '../context/Context'
import { getUserData } from '../redux/actions/users'

const NotificacinMatch = ({ onClose, data }) => {
  const { getUserMatches } = useContext(Context)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { allUsers, mainColor, user } = useSelector((state) => state.users)
  const { allNotifications } = useSelector((state) => state.notifications)

  useEffect(() => {}, [allNotifications])

  return (
    <View
      style={{
        borderRadius: Border.br_mini,
        backgroundColor: mainColor,
        paddingVertical: 35,
        width: '100%'
      }}
    >
      <View style={styles.informacionFlexBox}>
        <Text style={[styles.cerrar, styles.hanTypo]} onPress={onClose}>
          Cerrar
        </Text>
        <View style={[styles.textoCuerpo, styles.informacionFlexBox]}>
          <Text
            style={[styles.teHanSolicitado3, styles.seguirTypo]}
          >{`¡Te han solicitado un Match!`}</Text>
          <Text
            style={[styles.pareceQueUni, styles.seguirTypo1]}
          >{`¡Parece que ${data?.user?.club?.name} se interesa por ti! `}</Text>
        </View>

        <View style={[styles.botones, styles.botonesLayout]}>
          <View style={styles.botonesLayout}>
            <View>
              <Pressable
                style={styles.aceptarFlexBox}
                onPress={async () => {
                  onClose()
                  try {
                    await dispatch(
                      updateMatchById({
                        id: data?.prop1?.matchId,
                        body: { status: 'success' }
                      })
                    ).then(() => {
                      dispatch(getUserData(user?.user?.id))
                    })
                    await dispatch(removeNotification(data.id))
                    await dispatch(getAllNotifications())
                    getUserMatches()
                    navigation.navigate('TusMatchs')
                  } catch (error) {
                    console.log(
                      'Error updating match',
                      data?.prop1?.matchId,
                      error
                    )
                  }
                }}
              >
                <Text style={[styles.verOferta, styles.hanTypo]}>
                  Aceptar Match
                </Text>
              </Pressable>
              <Pressable
                style={[styles.verPerfil, styles.aceptarFlexBox]}
                onPress={() => {
                  onClose()

                  navigation.navigate('ClubProfile', {
                    author: data.user
                  })
                }}
              >
                <Text style={[styles.verOferta, styles.hanTypo]}>
                  Ver perfil
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuChildPosition: {
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  tuBuznPosition: {
    top: '0%',
    position: 'absolute'
  },
  seguirTypo1: {
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  iconGroupLayout: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  mensajesPosition: {
    top: '13.51%',
    position: 'absolute'
  },
  seguirTypo: {
    fontWeight: '700',
    textAlign: 'center'
  },
  hanTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  joanTypo: {
    left: '4.62%',
    lineHeight: 17,
    width: '63.85%',
    fontWeight: '700',
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  textTypo1: {
    top: '19.67%',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  textTypo: {
    left: '80.77%',
    lineHeight: 17,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  groupChildLayout1: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid',
    left: 14,
    position: 'absolute'
  },
  groupLayout2: {
    height: 45,
    width: 45,
    left: 16,
    position: 'absolute'
  },
  ellipseIconLayout: {
    height: 5,
    width: 5,
    position: 'absolute'
  },
  groupChildLayout: {
    top: 111,
    height: 5,
    width: 5
  },
  groupChildPosition: {
    left: 234,
    position: 'absolute'
  },
  groupLayout1: {
    height: 25,
    width: 90,
    position: 'absolute'
  },

  groupChild10Position: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  groupLayout: {
    height: 12,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  menuLayout: {
    height: 78,
    left: '50%',
    marginLeft: -195,
    width: 390
  },
  targetaShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute'
  },
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%'
  },
  groupPosition: {
    bottom: '33.33%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  childBg: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    position: 'absolute'
  },
  menuPosition: {
    right: '20.51%',
    width: '19.74%',
    left: '59.74%',
    position: 'absolute'
  },
  menuClubInnerLayout: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  lineIconLayout: {
    width: 0,
    top: '0.64%',
    height: '99.36%',
    maxHeight: '100%',
    bottom: '0%',
    position: 'absolute'
  },
  informacionFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17
  },
  botonesLayout: {},
  aceptarFlexBox: {
    paddingVertical: 7,
    width: '100%',
    borderRadius: Border.br_81xl,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.wHITESPORTSMATCH
  },
  tuBuzn1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  tuBuzn: {
    left: '16.51%'
  },
  icon: {
    maxHeight: '100%',
    height: '100%',
    maxWidth: '100%',
    width: '100%'
  },
  coolicon: {
    top: '18.18%',
    right: '91.93%',
    bottom: '13.64%',
    width: '8.07%',
    height: '68.18%',
    left: '0%',
    position: 'absolute'
  },
  tuBuznParent: {
    height: '2.61%',
    width: '27.95%',
    top: '7.11%',
    right: '67.95%',
    bottom: '90.28%',
    left: '4.1%',
    position: 'absolute'
  },
  groupChild: {
    height: '0.36%',
    top: '15.88%',
    bottom: '83.77%',
    width: 188,
    right: 0,
    maxHeight: '100%',
    position: 'absolute'
  },
  mensajes1: {
    width: '44.87%',
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    lineHeight: 12,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  mensajes: {
    left: '3.59%'
  },
  notficaciones: {
    width: '44.1%',
    left: '51.79%',
    color: Color.bALONCESTO,
    textAlign: 'center',
    lineHeight: 12,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO,
    top: '13.51%',
    position: 'absolute'
  },
  teHanSolicitado: {
    left: '20.26%',
    width: '63.85%',
    height: '7.35%',
    fontWeight: '700',
    top: '49.05%',
    lineHeight: 17,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    position: 'absolute'
  },
  teHanSolicitado1: {
    top: '27.96%',
    left: '20.26%',
    width: '63.85%',
    height: '7.35%',
    fontWeight: '700',
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    position: 'absolute'
  },
  joanGirHa: {
    top: '36.26%',
    height: '7.35%',
    left: '4.62%',
    color: Color.wHITESPORTSMATCH
  },
  joanGirLe: {
    height: '2.13%',
    top: '42.54%',
    color: Color.gREY2SPORTSMATCH
  },
  ayer: {
    left: '88.46%',
    top: '49.05%',
    lineHeight: 17,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    position: 'absolute'
  },
  teHanSolicitado2: {
    left: '20.26%',
    width: '63.85%',
    height: '7.35%',
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  text: {
    left: '87.69%',
    color: Color.gREY2SPORTSMATCH
  },
  text1: {
    top: '27.96%'
  },
  text2: {
    top: '42.65%'
  },
  groupItem: {
    top: 475
  },
  groupInner: {
    top: 417
  },
  lineView: {
    top: 157
  },
  groupChild1: {
    top: 229
  },
  groupIcon: {
    top: 171
  },
  ellipseIcon: {
    top: 172,
    left: 71
  },
  groupChild2: {
    top: 313,
    left: 10
  },
  groupChild3: {
    top: 298
  },
  groupChild4: {
    top: 350
  },
  groupChild5: {
    top: 404
  },
  groupChild6: {
    top: 239
  },
  groupChild7: {
    left: 63,
    position: 'absolute'
  },
  groupChild8: {
    top: 111,
    height: 5,
    width: 5
  },
  rectangleView: {
    borderRadius: 81,
    backgroundColor: Color.colorDimgray_100,
    height: 25,
    width: 90,
    position: 'absolute'
  },
  groupWrapper: {
    height: 25,
    width: 90,
    position: 'absolute'
  },
  seguir: {
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: '0%',
    top: '0%',
    position: 'absolute'
  },
  seguirWrapper: {
    height: '52%',
    width: '40%',
    top: '21.2%',
    right: '20.56%',
    bottom: '26.8%',
    left: '39.44%',
    position: 'absolute'
  },
  groupChild9: {
    top: 6,
    width: 11,
    height: 15,
    left: 16,
    position: 'absolute'
  },
  groupContainer: {
    top: 308,
    left: 284
  },
  groupChild10: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    top: 0,
    borderStyle: 'solid',
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
    top: 0,
    right: 0
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
    width: 68
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
    top: 10,
    left: 15,
    height: 24
  },
  maskGroupIcon: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute'
  },
  maskGroupIcon1: {
    top: '21.79%',
    right: '9.74%',
    left: '81.28%',
    width: '8.97%',
    height: '44.87%'
  },
  menuClubChild: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    right: '0%',
    width: '100%'
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '59.74%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  wrapper: {
    left: '25.9%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    width: '7.69%',
    height: '37.95%',
    position: 'absolute'
  },
  groupChild11: {
    width: '11.94%',
    right: '88.06%',
    maxHeight: '100%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  groupChild12: {
    top: 3,
    width: 34,
    height: 23
  },
  groupView: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubInner: {
    right: '44.87%',
    left: '46.15%'
  },
  lineIcon: {
    left: '59.74%'
  },
  menuClubChild1: {
    left: '79.62%'
  },
  menuClubChild2: {
    height: '3.85%',
    top: '1.92%',
    bottom: '94.23%',
    left: '59.74%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  menuClub: {
    height: 78,
    left: '50%',
    marginLeft: -195,
    width: 390,
    top: 0
  },
  groupChild13: {
    height: '6.41%',
    width: '1.28%',
    top: '60.26%',
    right: '28.97%',
    left: '69.74%'
  },
  maskGroupIcon2: {
    right: '6.15%',
    left: '84.87%'
  },
  menuClubParent: {
    top: 766,
    position: 'absolute'
  },
  fondo: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    width: '100%',
    position: 'absolute'
  },
  fondoChild: {
    opacity: 0.95,
    width: 390,
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: 0,
    top: 0,
    height: 844
  },
  cerrar: {
    textAlign: 'center',
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  teHanSolicitado3: {
    fontSize: FontSize.h2TITLEBIG_size,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pareceQueUni: {
    fontSize: FontSize.button_size,
    marginTop: 11,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  textoCuerpo: {
    marginTop: 20
  },
  texto: {
    alignItems: 'center'
  },
  verOferta: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700'
  },
  verPerfil: {
    marginTop: 7
  },
  botones: {
    marginTop: 20
  },
  grupo: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.promocio,
    paddingVertical: 50,
    width: '100%'
  },
  targeta: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)'
  },
  notificacinMatch: {
    // borderRadius: Border.br_21xl,
    flex: 1,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default NotificacinMatch
