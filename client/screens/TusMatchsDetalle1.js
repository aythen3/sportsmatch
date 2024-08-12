import * as React from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontSize, Color, FontFamily, Padding, Border } from '../GlobalStyles'
import { Context } from '../context/Context'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

const TusMatchsDetalle1 = ({ onClose, data }) => {
  const navigation = useNavigation()
  const { mainColor } = useSelector((state) => state.users)
  const { getUserAge, generateLowResUrl } = useContext(Context)

  const images = {
    '#6A1C4F': require('../assets/expandedMatchCards/6A1C4F.png'),
    '#E1451E': require('../assets/expandedMatchCards/E1451E.png'),
    '#00FF18': require('../assets/expandedMatchCards/00FF18.png'),
    '#0062FF': require('../assets/expandedMatchCards/0062FF.png'),
    '#E1AA1E': require('../assets/expandedMatchCards/E1AA1E.png'),
    '#A8154A': require('../assets/expandedMatchCards/A8154A.png')
  }
  const imageSource = images[mainColor] || images['#E1451E']

  console.log(data, 'dataa')

  return (
    <View style={styles.tusMatchsDetalle}>
      <View
        style={{
          width: '96%',
          height: '80%',
          borderRadius: 25,
          backgroundColor: data?.sportman?.type !== 'coach' && mainColor,
          overflow: 'hidden'
        }}
      >
        <Image
          style={{
            height: data?.sportman?.type === 'coach' ? '70%' : '100%',
            width: '100%',
            position: 'absolute',
            maxHeight: '100%',
            maxWidth: '100%',
            borderRadius: 25
          }}
          contentFit="cover"
          source={imageSource}
        />
        <Image
          style={[styles.frameItem, styles.iconFrameLayout]}
          contentFit="cover"
          source={require('../assets/group-4141.png')}
        />
        {data?.sportman?.type !== 'coach' && (
          <Image
            style={[styles.frameChild, styles.iconFrameLayout]}
            contentFit="cover"
            source={require('../assets/mask-group16.png')}
          />
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 25,
            marginLeft: 15
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            contentFit="cover"
            source={
              !data?.sportman?.info?.img_perfil ||
              data?.sportman?.info?.img_perfil === ''
                ? require('../assets/whiteSport.png')
                : {
                    uri: generateLowResUrl(data?.sportman?.info?.img_perfil, 70)
                  }
            }
          />
          <Text
            style={{
              color: Color.wHITESPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO,
              fontWeight: '500',
              lineHeight: 22,
              fontSize: FontSize.h3TitleMEDIUM_size
            }}
          >
            {data?.nickname}
          </Text>
        </View>
        <Text style={[styles.masculino, styles.cmTypo]}>
          {data?.sportman?.type === 'coach'
            ? data.sportman.info.yearsOfExperience
            : data?.sportman.info.gender}
        </Text>
        <Text style={[styles.text, styles.cmTypo]}>
          {data?.sportman?.type === 'coach'
            ? data.sportman.info.city || '-'
            : getUserAge(data?.sportman.info.birthdate)}
        </Text>
        <Text style={[styles.snior, styles.cmTypo]}>
          {data?.sportman?.type === 'coach'
            ? data?.sportman?.info?.rol || '-'
            : data?.sportman.info.category}
        </Text>
        {data?.sportman?.type !== 'coach' && (
          <Text style={[styles.pvot, styles.cmTypo]}>
            {data?.sportman.info.position}
          </Text>
        )}
        {data?.sportman?.type !== 'coach' && (
          <Text style={[styles.cm, styles.cmTypo]}>
            {data?.sportman.info.height}
          </Text>
        )}
        {data?.sportman?.type !== 'coach' && (
          <Text style={[styles.matar, styles.cmTypo]}>
            {data?.sportman.info.city}
          </Text>
        )}
        <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
          <Image
            style={[styles.groupChild, styles.childPosition]}
            contentFit="cover"
            source={require('../assets/ellipse-762.png')}
          />
          <Image
            style={[
              styles.logoUem21RemovebgPreview1Icon,
              styles.ellipseParentPosition
            ]}
            contentFit="cover"
            source={require('../assets/logo-uem21removebgpreview-13.png')}
          />
        </View>
        <View
          style={{
            marginTop: data.sportman.type === 'coach' ? 0 : 162.5,
            width: '91.64%',
            right: '3.9%',
            height: 27,
            top: '55%',
            left: '4.46%',
            position: 'absolute'
          }}
        >
          <Pressable
            style={[styles.aceptar, styles.aceptarSpaceBlock]}
            onPress={() => {
              onClose()
              navigation.navigate('ChatAbierto1', {
                receiverId: data?.id,
                receiverName: data?.nickname,
                profilePic: data?.sportman?.info?.img_perfil
              })
            }}
          >
            <Text style={styles.verOferta}>Enviar mensaje</Text>
          </Pressable>
          <TouchableOpacity
            style={[styles.aceptar1, styles.aceptarSpaceBlock]}
            onPress={() =>
              navigation.navigate('PerfilFeedVisualitzaciJug', { author: data })
            }
          >
            <Text style={styles.verOferta}>Ver perfil</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.edad, styles.edadTypo]}>
          {data?.sportman?.type === 'coach' ? 'Lugar de residencia' : 'Edad'}
        </Text>
        <Text style={[styles.categora, styles.edadTypo]}>
          {data?.sportman?.type === 'coach' ? 'Rol' : 'Categoría'}
        </Text>
        {data?.sportman?.type !== 'coach' && (
          <Text style={[styles.posicinPrincipal, styles.edadTypo]}>
            Posición principal
          </Text>
        )}
        {data?.sportman?.type !== 'coach' && (
          <Text style={[styles.altura, styles.edadTypo]}>Altura</Text>
        )}
        <Text style={[styles.sexo, styles.edadTypo]}>
          {data?.sportman?.type === 'coach' ? 'Años de experiencia' : 'Sexo'}
        </Text>
        {data?.sportman?.type !== 'coach' && (
          <Text style={[styles.lugarDeResidencia, styles.edadTypo]}>
            Lugar de residencia
          </Text>
        )}
        <View style={[styles.frameInner, styles.frameChildPosition]} />
        <View style={[styles.lineView, styles.frameChildPosition]} />
        <View style={[styles.frameChild1, styles.frameChildPosition]} />
        {data?.sportman?.type !== 'coach' && (
          <View style={[styles.frameChild2, styles.frameChildPosition]} />
        )}
        {data?.sportman?.type !== 'coach' && (
          <View style={[styles.frameChild3, styles.frameChildPosition]} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  framePosition: {
    top: '0%',
    position: 'absolute'
  },
  iconFrameLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  match1Typo: {
    textAlign: 'left',
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cmTypo: {
    left: '4.18%',
    width: '95.82%',
    height: '4%',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    position: 'absolute'
  },
  ellipseParentPosition: {
    display: 'none',
    position: 'absolute'
  },
  childPosition: {
    bottom: '0%',
    height: '100%',
    top: '0%',
    position: 'absolute'
  },
  aceptarSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Border.br_81xl,
    marginTop: -13.5,
    backgroundColor: Color.wHITESPORTSMATCH,
    top: '50%',
    position: 'absolute'
  },
  edadTypo: {
    fontSize: FontSize.size_smi_9,
    left: '4.18%',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  frameChildPosition: {
    borderTopWidth: 1.1,
    borderColor: Color.wHITESPORTSMATCH,
    left: '3.76%',
    right: '4.01%',
    width: '92.23%',
    height: '0.19%',
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupItemPosition: {
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
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupPosition: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    bottom: '0%',
    maxHeight: '100%',
    height: '100%',
    top: '0%',
    position: 'absolute'
  },
  tusLayout: {
    width: 148,
    left: '50%',
    maxHeight: '100%',
    position: 'absolute'
  },
  match: {
    left: '21.95%'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 40,
    height: 20
  },
  matchParent: {
    height: 40,
    width: '100%'
  },
  frameChild: {
    height: '86.96%',
    bottom: '13.04%',
    right: '0%',
    left: '0%',
    top: '0%',
    position: 'absolute',
    width: '100%'
  },
  frameItem: {
    height: '42.26%',
    bottom: '57.74%',
    right: '0%',
    left: '0%',
    top: '0%',
    position: 'absolute',
    width: '100%'
  },
  uniEsportivaMatar: {
    height: '10.61%',
    width: '51.25%',
    left: '19.22%',
    top: '3.83%',
    position: 'absolute'
  },
  masculino: {
    top: '21%'
  },
  text: {
    top: '30.09%'
  },
  snior: {
    top: '40.4%'
  },
  pvot: {
    top: '49.57%'
  },
  cm: {
    top: '59.3%'
  },
  matar: {
    top: '69.04%'
  },
  groupChild: {
    right: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    left: '0%',
    width: '100%'
  },
  logoUem21RemovebgPreview1Icon: {
    height: '72.44%',
    width: '77.56%',
    top: '13.78%',
    right: '10.67%',
    bottom: '13.78%',
    left: '11.78%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  ellipseParent: {
    height: '7.83%',
    width: '12.53%',
    right: '83.01%',
    bottom: '88.35%',
    left: '4.46%',
    top: '3.83%'
  },
  verOferta: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  aceptar: {
    width: '47.42%',
    right: '52.58%',
    height: 40,
    left: '0%'
  },
  aceptar1: {
    width: '47.72%',
    left: '52.28%',
    height: 40,
    right: '0%'
  },
  aceptarParent: {
    marginTop: 162.5,
    width: '91.64%',
    right: '3.9%',
    height: 27,
    top: '55%',
    left: '4.46%',
    position: 'absolute'
  },
  edad: {
    top: '27.3%',
    width: '100%',
    height: '2.96%',
    fontSize: FontSize.size_smi_9
  },
  categora: {
    top: '36.87%',
    width: '22.28%',
    height: '2.96%',
    fontSize: FontSize.size_smi_9
  },
  posicinPrincipal: {
    top: '46.78%'
  },
  altura: {
    top: '56.52%',
    width: '22.28%',
    height: '2.96%',
    fontSize: FontSize.size_smi_9
  },
  sexo: {
    top: '17.22%',
    width: '100%',
    height: '2.96%',
    fontSize: FontSize.size_smi_9
  },
  lugarDeResidencia: {
    top: '66.26%'
  },
  frameInner: {
    top: '25.65%',
    bottom: '74.16%'
  },
  lineView: {
    top: '35.57%',
    bottom: '64.24%'
  },
  frameChild1: {
    top: '45.3%',
    bottom: '54.5%'
  },
  frameChild2: {
    top: '55.22%',
    bottom: '44.59%'
  },
  frameChild3: {
    top: '64.96%',
    bottom: '34.85%'
  },
  vectorParent: {
    width: '96%',
    height: '80%'
  },
  maskGroupIcon1: {
    height: '5.33%',
    width: '11.54%',
    top: '18.48%',
    right: '80.26%',
    bottom: '76.18%',
    left: '8.21%',
    position: 'absolute'
  },
  groupItem: {
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
    color: Color.wHITESPORTSMATCH,
    width: 61
  },
  starus: {
    top: 10,
    left: 15,
    height: 24
  },
  maskGroupIcon2: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%'
  },
  maskGroupIcon3: {
    top: '21.79%',
    right: '9.74%',
    bottom: '33.33%',
    left: '81.28%'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: '0%',
    left: '0%',
    width: '100%'
  },
  menuClubItem: {
    width: '19.74%',
    right: '59.49%',
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '20.77%'
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
  logoUem21RemovebgPreview1Icon1: {
    height: '72.57%',
    width: '77.43%',
    top: '13.71%',
    right: '10.86%',
    bottom: '13.71%',
    left: '11.71%',
    position: 'absolute'
  },
  ellipseGroup: {
    right: '6.15%',
    left: '84.87%'
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
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild1: {
    left: '40.51%'
  },
  container: {
    right: '88.06%',
    width: '11.94%',
    left: '0%'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frame: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupParent: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  groupIcon: {
    right: '44.87%',
    left: '46.15%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
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
  tusMatchsDetalleChild: {
    height: '0.59%',
    width: '1.28%',
    top: '96.33%',
    right: '28.97%',
    bottom: '3.08%',
    left: '69.74%',
    position: 'absolute'
  },
  tusMatchsDetalleItem: {
    marginLeft: -74,
    top: 831
  },
  tusMatchsDetalleInner: {
    marginLeft: -83,
    top: 85
  },
  tusMatchsDetalle: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default TusMatchsDetalle1
