import * as React from 'react'
import { Text, StyleSheet, Pressable, View } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'

const MisOfertas = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.misOfertas}>
      <View style={styles.todasLaOfertasParent}>
        <Pressable onPress={() => navigation.navigate('TusMensajes')}>
          <Text style={[styles.todasLaOfertas, styles.ofertasTypo1]}>
            Todas la ofertas
          </Text>
        </Pressable>
        <View style={styles.ofertasFavoritasParent}>
          <Text style={[styles.ofertasFavoritas, styles.ofertasTypo1]}>
            Ofertas favoritas
          </Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../../assets/line-6.png')}
          />
        </View>
      </View>
      <View style={styles.component17}>
        <View style={[styles.component17Inner, styles.groupChildPosition]}>
          <View style={[styles.component17Inner, styles.groupChildPosition]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout2]}
              contentFit="cover"
              source={require('../../assets/group-4892.png')}
            />
            <Text style={[styles.pvot, styles.ofertasTypo]}>Pívot</Text>
            <Text style={[styles.posicin, styles.ofertasTypo]}>Posición</Text>
          </View>
        </View>
        <View style={[styles.component17Child, styles.groupChildLayout1]} />
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Masculino</Text>
          <Text style={styles.sexo}>Sexo</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Sénior</Text>
          <Text style={styles.sexo}>Categoría</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.sexo}>Urgencia</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require('../../assets/group-691.png')}
          />
          <Text style={styles.sexo}>Retribución</Text>
        </View>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.pvot1, styles.pvot1Typo]}>Pívot</Text>
          <Text style={[styles.maresme, styles.pvot1Typo]}>Maresme</Text>
          <Text style={[styles.posicin1, styles.comarcaLayout]}>Posición</Text>
          <Text style={[styles.comarca, styles.comarcaLayout]}>Comarca</Text>
        </View>
        <View style={[styles.component17Item, styles.itemBg]} />
        <View style={[styles.aceptarWrapper, styles.aceptarLayout1]}>
          <View style={[styles.aceptar, styles.aceptarFlexBox]}>
            <Text
              style={[styles.verOferta, styles.ofertasTypo1]}
            >{`Inscríbete a la oferta `}</Text>
          </View>
        </View>
        <Image
          style={[styles.component17Child1, styles.groupIconLayout]}
          contentFit="cover"
          source={require('../../assets/group-692.png')}
        />
      </View>
      <View style={[styles.misOfertasChild, styles.menuClubLayout]} />
      <View style={styles.groupChild4Position}>
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require('../../assets/cap.png')}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require('../../assets/wifi1.png')}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require('../../assets/cellular-connection2.png')}
          />
        </View>
        <View style={styles.starus}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.misOfertasInner}>
        <View style={[styles.cooliconParent, styles.aceptarFlexBox]}>
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
          <Pressable style={styles.ofertas} onPress={() => navigation.goBack()}>
            <Text style={[styles.ofertas1, styles.ofertasTypo]}>Ofertas</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View
          style={[
            styles.buscarOfertasDeportvasParent,
            styles.groupChildPosition
          ]}
        >
          <Text style={[styles.buscarOfertasDeportvas, styles.timeTypo]}>
            Buscar ofertas deportívas
          </Text>
          <View style={[styles.groupChild5, styles.aceptarLayout]} />
        </View>
        <Image
          style={[styles.groupIcon1, styles.groupChildLayout2]}
          contentFit="cover"
          source={require('../../assets/pictograma-filtros.png')}
        />
      </View>
      <View style={[styles.menuClub, styles.menuClubLayout]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require('../../assets/mask-group7.png')}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require('../../assets/mask-group7.png')}
        />
        <View style={[styles.menuClubChild, styles.groupChildPosition]} />
        <View style={styles.menuClubItem} />
        <View style={[styles.menuClubInner, styles.borderBorder]} />
        <Image
          style={[styles.menuClubChild1, styles.groupChildLayout2]}
          contentFit="cover"
          source={require('../../assets/group-535.png')}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require('../../assets/line-5.png')}
        />
        <Image
          style={[styles.menuClubChild2, styles.lineIconLayout]}
          contentFit="cover"
          source={require('../../assets/line-5.png')}
        />
        <View style={styles.groupParent1}>
          <Image
            style={[styles.groupChild6, styles.groupChildLayout2]}
            contentFit="cover"
            source={require('../../assets/group-5401.png')}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate('TusMensajes')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../../assets/group-5391.png')}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menuClubChild3, styles.menuClubChild3Layout]}
          contentFit="cover"
          source={require('../../assets/group-593.png')}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.menuClubChild3Layout]}
          contentFit="cover"
          source={require('../../assets/mask-group7.png')}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require('../../assets/ellipse-83.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ofertasTypo1: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700',
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center'
  },
  groupChildPosition: {
    bottom: '0%',
    top: '0%',
    left: '0%',
    height: '100%'
  },
  groupChildLayout2: {
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  ofertasTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupChildLayout1: {
    borderWidth: 1,
    borderStyle: 'solid',
    left: '0%',
    right: '0%',
    width: '100%'
  },
  rectanglePosition: {
    bottom: '69.7%',
    top: '6.06%',
    width: '41.67%',
    height: '24.24%',
    position: 'absolute'
  },
  itemBg: {
    opacity: 0.5,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: 'absolute'
  },
  groupPosition: {
    left: '52.78%',
    right: '5.56%'
  },
  groupViewPosition: {
    bottom: '9.09%',
    top: '66.67%',
    width: '41.67%',
    height: '24.24%',
    position: 'absolute'
  },
  groupIconLayout: {
    height: 18,
    width: 122,
    position: 'absolute'
  },
  groupChildLayout: {
    width: '46.73%',
    opacity: 0.5,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid',
    borderRadius: Border.br_8xs,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  pvot1Typo: {
    top: '42.5%',
    width: '46.73%',
    lineHeight: 20,
    fontSize: FontSize.button_size,
    height: '22.5%',
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  comarcaLayout: {
    width: '44.55%',
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    top: '5%',
    height: '21.25%',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  aceptarLayout1: {
    width: 179,
    left: '50%'
  },
  aceptarFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  menuClubLayout: {
    width: 390,
    position: 'absolute'
  },
  groupChild4Position: {
    height: 34,
    width: 390,
    top: 0,
    left: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    position: 'absolute'
  },
  aceptarLayout: {
    borderRadius: Border.br_81xl,
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%'
  },
  iconPosition: {
    bottom: '33.33%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  lineIconLayout: {
    width: 0,
    bottom: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    position: 'absolute'
  },
  menuClubChild3Layout: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  todasLaOfertas: {
    width: 175,
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    lineHeight: 12,
    fontWeight: '700',
    fontSize: FontSize.t1TextSMALL_size
  },
  ofertasFavoritas: {
    color: Color.bALONCESTO,
    width: 172,
    textAlign: 'center',
    lineHeight: 12,
    fontWeight: '700',
    fontSize: FontSize.t1TextSMALL_size
  },
  frameChild: {
    width: 188,
    marginTop: 8,
    maxHeight: '100%'
  },
  ofertasFavoritasParent: {
    marginLeft: 13
  },
  todasLaOfertasParent: {
    top: 160,
    flexDirection: 'row',
    left: 14,
    position: 'absolute'
  },
  groupChild: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    right: '0%',
    width: '100%'
  },
  pvot: {
    height: '7.88%',
    width: '46.44%',
    top: '81.27%',
    fontSize: FontSize.size_lgi_3,
    lineHeight: 21,
    display: 'none',
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    textAlign: 'left',
    left: '53.56%',
    position: 'absolute'
  },
  posicin: {
    height: '5%',
    width: '16.22%',
    top: '70.55%',
    fontSize: FontSize.size_smi_9,
    display: 'none',
    color: Color.wHITESPORTSMATCH,
    left: '53.56%',
    position: 'absolute'
  },
  component17Inner: {
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
    top: '0%'
  },
  component17Child: {
    borderColor: Color.colorDimgray_100,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  groupItem: {
    borderWidth: 1,
    borderStyle: 'solid',
    left: '0%',
    right: '0%',
    width: '100%',
    borderColor: Color.colorDimgray_100,
    borderRadius: Border.br_8xs,
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  masculino: {
    top: '40%',
    lineHeight: 20,
    fontSize: FontSize.button_size,
    height: '22.5%',
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    left: '0%',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute',
    width: '100%'
  },
  sexo: {
    width: '95.33%',
    left: '4.67%',
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    top: '5%',
    height: '21.25%',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  rectangleParent: {
    left: '5.56%',
    right: '52.78%'
  },
  rectangleGroup: {
    bottom: '69.7%',
    top: '6.06%',
    width: '41.67%',
    height: '24.24%',
    position: 'absolute'
  },
  rectangleContainer: {
    left: '5.56%',
    right: '52.78%'
  },
  groupIcon: {
    top: 31,
    left: 14,
    height: 18,
    width: 122
  },
  groupView: {
    left: '52.78%',
    right: '5.56%'
  },
  groupChild2: {
    right: '53.27%',
    left: '0%'
  },
  groupChild3: {
    right: '0.31%',
    left: '52.96%'
  },
  pvot1: {
    left: '0%'
  },
  maresme: {
    left: '53.27%'
  },
  posicin1: {
    left: '2.18%'
  },
  comarca: {
    left: '55.14%'
  },
  rectangleParent1: {
    width: '89.17%',
    top: '36.36%',
    right: '5.28%',
    bottom: '39.39%',
    left: '5.56%',
    height: '24.24%',
    position: 'absolute'
  },
  component17Item: {
    top: 330,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 70,
    left: 0,
    display: 'none',
    width: 360
  },
  verOferta: {
    lineHeight: 17,
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: FontSize.t1TextSMALL_size
  },
  aceptar: {
    marginLeft: -89.5,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    bottom: '0%',
    top: '0%',
    height: '100%',
    width: 179,
    left: '50%'
  },
  aceptarWrapper: {
    height: '8.18%',
    marginLeft: -89,
    top: '106.97%',
    bottom: '-15.15%',
    display: 'none',
    position: 'absolute'
  },
  component17Child1: {
    top: 256,
    left: 34
  },
  component17: {
    marginLeft: -180,
    top: 202,
    height: 330,
    width: 360,
    left: '50%',
    position: 'absolute'
  },
  misOfertasChild: {
    height: 100,
    top: 0,
    left: 0,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  groupChild4: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    top: 0
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
    width: 61,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
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
  ofertas1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    textAlign: 'left'
  },
  ofertas: {
    marginLeft: 9
  },
  cooliconParent: {
    top: 0,
    left: 0
  },
  misOfertasInner: {
    top: 60,
    left: 16,
    width: 92,
    height: 22,
    position: 'absolute'
  },
  buscarOfertasDeportvas: {
    height: '45.14%',
    width: '84.63%',
    top: '25.14%',
    left: '9.36%',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.gREY2SPORTSMATCH
  },
  groupChild5: {
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderStyle: 'solid',
    left: '0%',
    right: '0%',
    width: '100%',
    position: 'absolute'
  },
  buscarOfertasDeportvasParent: {
    width: '89.87%',
    right: '10.13%',
    left: '0%',
    position: 'absolute'
  },
  groupIcon1: {
    height: '47.43%',
    width: '6.4%',
    top: '25.71%',
    bottom: '26.86%',
    left: '93.6%',
    right: '0%'
  },
  groupContainer: {
    height: '4.15%',
    width: '89.31%',
    top: '12.09%',
    right: '5.82%',
    bottom: '83.77%',
    left: '4.87%',
    position: 'absolute'
  },
  maskGroupIcon: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
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
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
    top: '0%'
  },
  menuClubItem: {
    width: '19.74%',
    right: '59.49%',
    left: '20.77%',
    backgroundColor: Color.bLACK3SPORTSMATCH,
    bottom: '0%',
    top: '0%',
    height: '100%',
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
  menuClubChild1: {
    height: '37.95%',
    width: '7.69%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%'
  },
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild2: {
    left: '40.51%'
  },
  groupChild6: {
    width: '11.94%',
    right: '88.06%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupParent1: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubChild3: {
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
    left: '50%'
  },
  misOfertas: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default MisOfertas
