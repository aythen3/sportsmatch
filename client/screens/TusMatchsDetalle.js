import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'
import MatchDetailsInfo from '../components/MatchDetailsInfo'

const TusMatchsDetalle = ({ onClose, data }) => {
  const navigation = useNavigation()
  console.log('data: ', data)

  return (
    <Pressable style={styles.tusMatchsDetalle}>
      <Image
        style={[styles.fondoColorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require('../assets/fondo-color.png')}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          width: '100%',
          marginLeft: 20
        }}
      >
        <Image
          style={{ width: 45, height: 45, borderRadius: 50 }}
          contentFit="cover"
          source={{ uri: data.img_perfil }}
        />

        <Text style={[styles.uniEsportvaMatar, styles.pasTypo]}>
          {data.name}
        </Text>
      </View>

      <MatchDetailsInfo title="Año de fundación" value={data.year} />
      <MatchDetailsInfo title="Aforo" value={data.capacity} />
      <MatchDetailsInfo
        title="Nombre del estadio o pavellón"
        value={data.field}
      />
      <MatchDetailsInfo title=" Población" value={data.city} />
      <MatchDetailsInfo title=" País" value={data.country} />

      {/* <View style={styles.aoFundacion}>
          <View style={styles.aoDeFundacinParent}>
            <Text style={[styles.aoDeFundacin, styles.aforo1Layout]}>
              Año de fundación
            </Text>
            <Text style={[styles.text, styles.textFlexBox]}>1920</Text>
          </View>
        </View>
        <View style={styles.aforo}>
          <View style={styles.paisItemLayout} />
          <View style={styles.aforoParent}>
            <Text style={[styles.aforo1, styles.textFlexBox]}>Aforo</Text>
            <Text style={[styles.text, styles.textFlexBox]}>300</Text>
          </View>
        </View>
        <View style={styles.aforo}>
          <View style={styles.paisItemLayout} />
          <View style={styles.frameParent}>
            <View>
              <Text style={[styles.nombreDelEstadio, styles.aforo1Layout]}>
                Nombre del estadio o pavellón
              </Text>
            </View>
            <Text style={[styles.text, styles.textFlexBox]}>{`Palau Municipals 
d’Esports Josep Mora`}</Text>
          </View>
        </View>
        <View style={styles.aforo}>
          <View style={styles.paisItemLayout} />
          <View tyle={styles.aforoParent} s>
            <Text style={[styles.nombreDelEstadio, styles.textFlexBox]}>
              Población
            </Text>
            <Text style={[styles.text, styles.textFlexBox]}>Mataró</Text>
          </View>
        </View>
        <View style={styles.aforo}>
          <View style={styles.paisItemLayout} />
          <View style={styles.pasParent}>
            <Text style={[styles.nombreDelEstadio, styles.pasTypo]}>País</Text>
            <Text style={[styles.espaa, styles.textFlexBox]}>España</Text>
          </View>
          <View style={[styles.paisItem, styles.paisItemLayout]} />
        </View> */}
      <Pressable
        style={[styles.aceptar, styles.aceptarFlexBox]}
        onPress={() => {
          onClose()
          navigation.navigate('ChatAbierto1', {
            receiverId: data.id,
            receiverName: data.name,
            profilePic: data.img_perfil
          })
        }}
      >
        <Text style={[styles.verOferta, styles.verTypo]}>Enviar mensaje</Text>
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  pasTypo: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cooliconPosition: {
    left: '0%',
    position: 'absolute'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  itemChildPosition: {
    bottom: '0%',
    height: '100%',
    top: '0%'
  },
  aforo1Layout: {
    height: 17,
    fontSize: FontSize.size_smi_9
  },
  textFlexBox: {
    alignSelf: 'stretch',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  paisItemLayout: {
    height: 1,
    // width: 331,
    borderTopWidth: 1.1,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: 'solid'
  },
  aceptarFlexBox: {
    width: '90%',
    height: 50,
    paddingVertical: Padding.p_8xs,
    alignItems: 'center',
    borderRadius: Border.br_81xl,
    backgroundColor: Color.wHITESPORTSMATCH,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  verTypo: {
    color: Color.bLACK1SPORTSMATCH,
    fontWeight: '700',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupChildPosition: {
    height: 34,
    left: 0,
    width: 390,
    top: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  borderPosition: {
    top: 0,
    height: 12
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%'
  },
  iconPosition: {
    bottom: '33.33%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    bottom: '0%',
    height: '100%',
    top: '0%',
    maxHeight: '100%',
    position: 'absolute'
  },
  menuClubChild2Layout: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  fondoColorIcon: {
    height: '80.24%',
    width: '100%',
    position: 'absolute',
    borderRadius: 8
  },
  tusMatchsDetalleChild: {
    top: 156,
    left: 31,
    position: 'absolute'
  },
  match1: {
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  match: {
    left: '21.95%',
    top: '0%',
    position: 'absolute'
  },
  icon: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  coolicon: {
    top: '18.18%',
    right: '89.27%',
    bottom: '13.64%',
    width: '10.73%',
    height: '68.18%'
  },
  matchParent: {
    width: 82,
    height: 22
  },
  avatarChild: {
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  logoUem21RemovebgPreview1Icon: {
    height: '72.44%',
    width: '77.56%',
    top: '13.78%',
    right: '10.67%',
    bottom: '13.78%',
    left: '11.78%',
    position: 'absolute'
  },
  avatar: {
    width: 45,
    height: 45
  },
  uniEsportvaMatar: {
    width: 184,
    marginLeft: 8,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  nombreClub: {
    flexDirection: 'row'
  },
  aoDeFundacin: {
    width: 126,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  text: {
    fontWeight: '500',
    // lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
    // flex: 1
  },
  aoDeFundacinParent: {
    height: 40
  },
  aoFundacion: {
    justifyContent: 'center'
  },
  aforo1: {
    height: 17,
    fontSize: FontSize.size_smi_9
  },
  aforoParent: {
    marginTop: 8,
    height: 40
  },
  aforo: {
    marginTop: 9
  },
  nombreDelEstadio: {
    width: 344,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  frameParent: {
    height: 62,
    marginTop: 8
  },
  poblacin: {
    fontSize: FontSize.size_smi_9
  },
  pas: {
    width: 80,
    fontSize: FontSize.size_smi_9,
    flex: 1
  },
  espaa: {
    height: 23,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  pasParent: {
    marginTop: 11,
    height: 40
  },
  paisItem: {
    marginTop: 11
  },
  aoFundacionParent: {
    // marginTop: 33,
    // justifyContent: 'center'
  },
  verOferta: {
    textAlign: 'center'
  },
  aceptar: {
    marginTop: 20,
    paddingVertical: Padding.p_8xs,
    alignItems: 'center',
    borderRadius: Border.br_81xl
  },
  verOferta1: {
    textAlign: 'center'
  },

  boton: {
    // width: 327,
    // height: 27,
    // marginTop: 46
  },
  texto: {
    top: 22,
    left: 14,
    height: 455,
    zIndex: 0,
    position: 'absolute'
  },
  textoWrapper: {
    borderRadius: Border.br_3xs,
    marginTop: 52,
    flexDirection: 'row'
  },
  groupParent: {
    top: 60,
    left: 15,
    position: 'absolute'
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    left: 0
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: 'solid',
    position: 'absolute'
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
    left: 4,
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    top: '50%',
    width: 61,
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
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
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
    width: '100%'
  },
  menuClubItem: {
    width: '19.74%',
    right: '59.49%',
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '20.77%',
    position: 'absolute'
  },
  menuClubInner: {
    height: '3.85%',
    width: '20.51%',
    top: '1.92%',
    right: '59.1%',
    bottom: '94.23%',
    left: '20.38%',
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3
  },
  groupIcon: {
    height: '37.95%',
    width: '7.69%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%',
    position: 'absolute'
  },
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild1: {
    left: '40.51%'
  },
  groupItem: {
    width: '11.94%',
    right: '88.06%',
    left: '0%',
    position: 'absolute',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupContainer: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubChild2: {
    right: '44.87%',
    left: '46.15%'
  },
  maskGroupIcon2: {
    right: '6.15%',
    left: '84.87%'
  },
  ellipseIcon: {
    height: '6.41%',
    width: '1.28%',
    top: '60.26%',
    right: '28.97%',
    left: '69.74%'
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    left: '50%',
    position: 'absolute'
  },
  tusMatchsDetalle: {
    padding: 20,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default TusMatchsDetalle
