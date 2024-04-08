import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, Padding, FontFamily, Border, FontSize } from '../GlobalStyles'

const ExplorarPersonaClubsFiltr = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.explorarPersonaClubsFiltr}>
      <View style={styles.gridImagenes}>
        <View style={[styles.gridSuperior, styles.gridLayout]}>
          <View style={styles.hannahRedingKqyboqrw5wUnspParent}>
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon,
                styles.groupIconLayout
              ]}
              contentFit="cover"
              source={require('../assets/hannahredingkqyboqrw5wunsplash-1.png')}
            />
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon1,
                styles.groupIconLayout
              ]}
              contentFit="cover"
              source={require('../assets/hannahredingkqyboqrw5wunsplash-2.png')}
            />
          </View>
          <Image
            style={[
              styles.nickFithenBuuGssofvoUnsplaIcon,
              styles.groupIconLayout
            ]}
            contentFit="cover"
            source={require('../assets/nickfithenbuugssofvounsplash-1.png')}
          />
        </View>
        <View style={[styles.gridInferior, styles.gridLayout]}>
          <View style={styles.hannahRedingKqyboqrw5wUnspParent}>
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon,
                styles.groupIconLayout
              ]}
              contentFit="cover"
              source={require('../assets/hannahredingkqyboqrw5wunsplash-11.png')}
            />
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon1,
                styles.groupIconLayout
              ]}
              contentFit="cover"
              source={require('../assets/hannahredingkqyboqrw5wunsplash-21.png')}
            />
          </View>
          <Image
            style={[
              styles.nickFithenBuuGssofvoUnsplaIcon,
              styles.groupIconLayout
            ]}
            contentFit="cover"
            source={require('../assets/nickfithenbuugssofvounsplash-11.png')}
          />
        </View>
      </View>
      <View style={[styles.menuClub, styles.menuPosition]}>
        <Image
          style={styles.menuClubChild}
          contentFit="cover"
          source={require('../assets/line-9.png')}
        />
        <View style={[styles.menuClub1, styles.menuPosition]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupLayout]}
            contentFit="cover"
            source={require('../assets/mask-group1.png')}
          />
          <Image
            style={[styles.maskGroupIcon1, styles.iconPosition1]}
            contentFit="cover"
            source={require('../assets/mask-group1.png')}
          />
          <View style={[styles.menuClubItem, styles.groupChildPosition]} />
          <View style={[styles.menuClubInner, styles.lineIconPosition]} />
          <View style={styles.lineView} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require('../assets/group-535.png')}
          />
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            contentFit="cover"
            source={require('../assets/line-5.png')}
          />
          <Image
            style={[styles.menuClubChild1, styles.iconPosition]}
            contentFit="cover"
            source={require('../assets/line-5.png')}
          />
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              contentFit="cover"
              source={require('../assets/group-540.png')}
            />
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate('TusMensajes')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/group-539.png')}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.menuClubChild2, styles.menuClubChild2Layout]}
            contentFit="cover"
            source={require('../assets/group-593.png')}
          />
          <Image
            style={[styles.maskGroupIcon2, styles.menuClubChild2Layout]}
            contentFit="cover"
            source={require('../assets/mask-group1.png')}
          />
          <Image
            style={[styles.ellipseIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require('../assets/ellipse-83.png')}
          />
        </View>
      </View>
      <View style={styles.cabezeraBuscarFiltros}>
        <View style={styles.cabezera}>
          <Pressable
            style={styles.logo}
            onPress={() => navigation.navigate('LoginSwitch')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/logo.png')}
            />
          </Pressable>
          <View style={[styles.superior, styles.superiorLayout]}>
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.iphoneParentPosition]}
                contentFit="cover"
                source={require('../assets/ellipse-81.png')}
              />
              <Text style={[styles.text, styles.textFlexBox]}>2</Text>
            </View>
            <View style={styles.iphoneParentPosition}>
              <Image
                style={[styles.frameChild, styles.superiorLayout]}
                contentFit="cover"
                source={require('../assets/rectangle-176.png')}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require('../assets/group4.png')}
              />
              <Image
                style={[styles.frameItem, styles.capacityPosition]}
                contentFit="cover"
                source={require('../assets/line-21.png')}
              />
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require('../assets/group-658.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.buscarFiltroDesplegable}>
          <View style={styles.buscarFiltrosDespliegue}>
            <View style={styles.buscarPictograma}>
              <View style={[styles.frameParent, styles.iphoneParentPosition]}>
                <View
                  style={[
                    styles.groupContainer,
                    styles.groupContainerSpaceBlock
                  ]}
                >
                  <Image
                    style={styles.frameChild1}
                    contentFit="cover"
                    source={require('../assets/group-428.png')}
                  />
                  <Text
                    style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo]}
                  >
                    Posicón de juego, población, club...
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon2}
                  contentFit="cover"
                  source={require('../assets/group5.png')}
                />
              </View>
            </View>
            <View style={styles.despliegue}>
              <View
                style={[
                  styles.filtrosSugeridosParent,
                  styles.groupContainerSpaceBlock
                ]}
              >
                <Text
                  style={[styles.filtrosSugeridos, styles.posicnDeJuegoTypo]}
                >
                  Filtros sugeridos
                </Text>
                <View style={[styles.frameChild2, styles.frameChildBorder]} />
                <View style={styles.porProximidadPicto}>
                  <View style={styles.porProximidadPicto1}>
                    <Image
                      style={styles.porProximidadPictoChild}
                      contentFit="cover"
                      source={require('../assets/vector-16.png')}
                    />
                    <View style={styles.porProximidadParent}>
                      <Text
                        style={[styles.porProximidad, styles.posicnDeJuegoTypo]}
                      >
                        Por proximidad
                      </Text>
                      <Image
                        style={[styles.pictogramaIcon, styles.iconPosition]}
                        contentFit="cover"
                        source={require('../assets/pictograma.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.frameChild3, styles.frameChildBorder]} />
                <View style={styles.porProximidadPicto}>
                  <View style={styles.groupGroup}>
                    <Image
                      style={[styles.groupIcon3, styles.iconPosition]}
                      contentFit="cover"
                      source={require('../assets/group6.png')}
                    />
                    <Text
                      style={[styles.porProximidad, styles.posicnDeJuegoTypo]}
                    >
                      Por relevancia
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.uxIphone, styles.iphoneParentPosition]}>
        <View style={[styles.uxIphoneChild, styles.iphoneParentPosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require('../assets/cap.png')}
            />
            <View style={[styles.capacity, styles.capacityPosition]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require('../assets/wifi2.png')}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require('../assets/cellular-connection.png')}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gridLayout: {
    width: 360,
    flexDirection: 'row'
  },
  groupIconLayout: {
    maxWidth: '100%',
    overflow: 'hidden'
  },
  menuPosition: {
    height: 78,
    marginLeft: -195,
    width: 390,
    left: '50%',
    position: 'absolute'
  },
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%'
  },
  iconPosition1: {
    bottom: '33.33%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupChildPosition: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  lineIconPosition: {
    left: '20.77%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  iconPosition: {
    bottom: '0%',
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
  superiorLayout: {
    height: 45,
    width: 120
  },
  groupItemLayout: {
    height: 14,
    width: 14
  },
  iphoneParentPosition: {
    left: 0,
    top: 0,
    position: 'absolute'
  },
  textFlexBox: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  capacityPosition: {
    top: 2,
    position: 'absolute'
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    overflow: 'hidden'
  },
  posicnDeJuegoTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    marginTop: 10,
    borderStyle: 'solid'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  hannahRedingKqyboqrw5wUnspIcon: {
    maxHeight: '100%',
    borderRadius: Border.br_10xs,
    alignSelf: 'stretch',
    maxWidth: '100%',
    width: '100%',
    flex: 1
  },
  hannahRedingKqyboqrw5wUnspIcon1: {
    marginTop: 3,
    maxHeight: '100%',
    borderRadius: Border.br_10xs,
    alignSelf: 'stretch',
    maxWidth: '100%',
    width: '100%',
    flex: 1
  },
  hannahRedingKqyboqrw5wUnspParent: {
    width: 117,
    height: 296
  },
  nickFithenBuuGssofvoUnsplaIcon: {
    marginLeft: 3,
    maxHeight: '100%',
    borderRadius: Border.br_10xs,
    alignSelf: 'stretch',
    maxWidth: '100%',
    width: '100%',
    flex: 1
  },
  gridSuperior: {
    flexDirection: 'row'
  },
  gridInferior: {
    marginTop: 3,
    flexDirection: 'row'
  },
  gridImagenes: {
    top: 169,
    left: 15,
    position: 'absolute'
  },
  menuClubChild: {
    marginLeft: -74,
    top: 65,
    width: 148,
    left: '50%',
    maxHeight: '100%',
    position: 'absolute'
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
  menuClubItem: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: '0%',
    width: '100%',
    left: '0%'
  },
  menuClubInner: {
    width: '19.74%',
    right: '59.49%',
    backgroundColor: Color.bLACK3SPORTSMATCH
  },
  lineView: {
    height: '3.85%',
    width: '20.51%',
    top: '1.92%',
    right: '59.1%',
    bottom: '94.23%',
    left: '20.38%',
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupIcon: {
    height: '37.95%',
    width: '7.69%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%',
    maxHeight: '100%',
    position: 'absolute'
  },
  lineIcon: {
    width: 0,
    maxHeight: '100%'
  },
  menuClubChild1: {
    left: '40.51%',
    width: 0,
    top: '0%',
    bottom: '0%',
    height: '100%'
  },
  groupChild: {
    width: '11.94%',
    right: '88.06%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    left: 234,
    width: 34,
    height: 23,
    top: 3,
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
  menuClub1: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0
  },
  menuClub: {
    top: 766
  },
  logo: {
    width: 186,
    height: 44
  },
  groupItem: {
    height: 14,
    width: 14
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    fontWeight: '700',
    height: 7,
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center',
    left: 0,
    width: 14,
    top: 3,
    position: 'absolute'
  },
  ellipseParent: {
    left: 100,
    top: 2,
    position: 'absolute'
  },
  frameChild: {
    zIndex: 0
  },
  groupIcon1: {
    height: '57.11%',
    width: '27.75%',
    top: '24.44%',
    right: '11.17%',
    bottom: '18.44%',
    left: '61.08%',
    zIndex: 1,
    maxHeight: '100%',
    position: 'absolute'
  },
  frameItem: {
    left: 61,
    zIndex: 2,
    height: 44,
    width: 0
  },
  frameInner: {
    top: 8,
    left: 16,
    width: 31,
    height: 31,
    zIndex: 3,
    position: 'absolute'
  },
  superior: {
    marginLeft: 69
  },
  cabezera: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  frameChild1: {
    width: 13,
    height: 15
  },
  posicnDeJuego: {
    width: 265,
    height: 16,
    marginLeft: 6,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  groupContainer: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderStyle: 'solid',
    flexDirection: 'row'
  },
  groupIcon2: {
    marginLeft: 20,
    height: 17,
    width: 22
  },
  frameParent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  buscarPictograma: {
    width: 348,
    height: 34
  },
  filtrosSugeridos: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left'
  },
  frameChild2: {
    marginTop: 10,
    width: 175
  },
  porProximidadPictoChild: {
    width: 10,
    height: 7
  },
  porProximidad: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    left: '0%',
    top: '0%',
    position: 'absolute'
  },
  pictogramaIcon: {
    width: '10.49%',
    left: '89.51%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    height: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  porProximidadParent: {
    width: 130,
    height: 17,
    marginLeft: 6
  },
  porProximidadPicto1: {
    width: 146,
    alignItems: 'center',
    flexDirection: 'row'
  },
  porProximidadPicto: {
    marginTop: 10,
    alignItems: 'center'
  },
  frameChild3: {
    width: 176,
    marginTop: 10
  },
  groupIcon3: {
    height: '84.21%',
    width: '12.03%',
    top: '15.79%',
    left: '87.97%',
    right: '0%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  groupGroup: {
    width: 133,
    height: 19
  },
  filtrosSugeridosParent: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: 0,
    alignItems: 'center',
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: Color.bLACK3SPORTSMATCH
  },
  despliegue: {
    height: 108,
    marginTop: 9,
    width: 175
  },
  buscarFiltrosDespliegue: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buscarFiltroDesplegable: {
    height: 146,
    marginTop: 24
  },
  cabezeraBuscarFiltros: {
    top: 52,
    left: 15,
    position: 'absolute'
  },
  uxIphoneChild: {
    height: 34,
    width: 390,
    left: 0,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    opacity: 0.35,
    height: 12,
    width: 22,
    borderStyle: 'solid',
    top: 0,
    position: 'absolute'
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
  },
  capacity: {
    right: 4,
    borderRadius: 2,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7
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
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
  },
  uxIphone: {
    height: 34,
    width: 390,
    left: 0
  },
  explorarPersonaClubsFiltr: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: 'hidden',
    flex: 1,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default ExplorarPersonaClubsFiltr
