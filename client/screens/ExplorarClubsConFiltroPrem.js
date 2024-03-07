import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Padding, Border, Color } from '../GlobalStyles'
import { Ionicons } from '@expo/vector-icons'

const ExplorarClubsConFiltroPrem = ({ onClose }) => {
  const navigation = useNavigation()

  const [checkedAttack, setCheckedAttack] = useState(false)
  const [checkedSpeed, setCheckedSpeed] = useState(false)
  const [checkedDefense, setCheckedDefense] = useState(false)

  return (
    <View style={styles.explorarClubsConFiltroPrem}>
      <View>
        <View style={styles.cerrarFiltros}>
          <Image
            style={styles.cerrarFiltrosChild}
            contentFit="cover"
            source={require('../assets/line-66.png')}
          />
          <Text
            style={[styles.cerrarFiltros1, styles.sexoTypo]}
            onPress={onClose}
          >
            Cerrar filtros
          </Text>
        </View>
        <View style={styles.camposIniciales}>
          <View style={styles.campo1}>
            <Text style={[styles.sexo, styles.sexoTypo]}>Sexo</Text>
            <View style={[styles.campoFrame, styles.aplicarFlexBox]}>
              <Text style={[styles.masculino, styles.sexoTypo]}>Masculino</Text>
              <Image
                style={styles.coolicon}
                contentFit="cover"
                source={require('../assets/coolicon5.png')}
              />
            </View>
          </View>
          <View style={styles.campo2}>
            <Text style={[styles.sexo, styles.sexoTypo]}>Categoría</Text>
            <View style={[styles.campoFrame, styles.aplicarFlexBox]}>
              <Text style={[styles.snior, styles.sexoTypo]}>Sénior</Text>
              <Image
                style={styles.coolicon}
                contentFit="cover"
                source={require('../assets/coolicon2.png')}
              />
            </View>
          </View>
          <View style={styles.campo2}>
            <Text style={[styles.sexo, styles.sexoTypo]}>
              Posición principal
            </Text>
            <View style={[styles.campoFrame, styles.aplicarFlexBox]}>
              <Text style={[styles.snior, styles.sexoTypo]}>Pívot</Text>
              <Image
                style={styles.coolicon}
                contentFit="cover"
                source={require('../assets/coolicon2.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.campoAtaque}>
          <View style={styles.ataqueFrame}>
            <Text style={[styles.ataque, styles.sexoTypo]}>Ataque</Text>
            <Pressable
              style={[styles.circle, checkedAttack && styles.checkedCircle]}
              onPress={() => setCheckedAttack(!checkedAttack)}
            >
              {checkedAttack && (
                <Ionicons name="checkmark" size={10} color="white" />
              )}
            </Pressable>
          </View>
        </View>
        <View style={styles.campoAtaque}>
          <View style={styles.ataqueFrame}>
            <Text style={[styles.ataque, styles.sexoTypo]}>Defensa</Text>
            <Pressable
              style={[styles.circle, checkedDefense && styles.checkedCircle]}
              onPress={() => setCheckedDefense(!checkedDefense)}
            >
              {checkedDefense && (
                <Ionicons name="checkmark" size={10} color="white" />
              )}
            </Pressable>
          </View>
        </View>
        <View style={styles.campoAtaque}>
          <View style={styles.ataqueFrame}>
            <Text style={[styles.ataque, styles.sexoTypo]}>Velocidad</Text>
            <Pressable
              style={[styles.circle, checkedSpeed && styles.checkedCircle]}
              onPress={() => setCheckedSpeed(!checkedSpeed)}
            >
              {checkedSpeed && (
                <Ionicons name="checkmark" size={10} color="white" />
              )}
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.botonesInferiores}>
        <View style={[styles.aplicar, styles.aplicarBg]}>
          <Text style={[styles.aceptar, styles.clubs1Typo]}>Aplicar</Text>
        </View>

        <Text style={[styles.quitarFiltros, styles.clubs1Typo]}>
          Quitar filtros
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameIconLayout: {
    maxWidth: '100%',
    overflow: 'hidden'
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkedCircle: {
    backgroundColor: 'green'
  },
  fondoLayout: {
    height: 583,
    width: 390
  },
  groupIconPosition: {
    zIndex: 1,
    position: 'absolute'
  },
  sexoTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  aplicarFlexBox: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    left: 0,
    flexDirection: 'row'
  },
  aplicarBg: {
    backgroundColor: Color.wHITESPORTSMATCH
    // position: 'absolute'
  },
  clubs1Typo: {
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  rectangleParentPosition: {
    left: '50%',
    position: 'absolute'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  groupLayout: {
    width: 390,
    top: 0
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  superiorLayout: {
    height: 45,
    width: 120
  },
  groupItemLayout: {
    height: 14,
    width: 14,
    position: 'absolute'
  },
  campoFrameBorder: {
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  hannahRedingKqyboqrw5wUnspIcon: {
    maxHeight: '100%',
    borderRadius: Border.br_10xs,
    maxWidth: '100%',
    alignSelf: 'stretch',
    width: '100%',
    flex: 1
  },
  hannahRedingKqyboqrw5wUnspIcon1: {
    marginTop: 3,
    maxHeight: '100%',
    borderRadius: Border.br_10xs,
    maxWidth: '100%',
    alignSelf: 'stretch',
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
    maxWidth: '100%',
    alignSelf: 'stretch',
    width: '100%',
    flex: 1
  },
  gridSuperior: {
    flexDirection: 'row',
    width: 360
  },
  gridInferior: {
    marginTop: 3,
    flexDirection: 'row',
    width: 360
  },
  gridImagenes: {
    top: 169,
    left: 15,
    position: 'absolute'
  },
  fondoChild: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    top: 0,
    left: 0,
    position: 'absolute'
  },
  fondo: {
    zIndex: 0
  },
  cerrarFiltrosChild: {
    width: 50,
    maxHeight: '100%'
  },
  cerrarFiltros1: {
    lineHeight: 17,
    width: 378,
    marginTop: 18,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontWeight: '700'
  },
  cerrarFiltros: {
    alignItems: 'center'
  },
  sexo: {
    left: 1,
    height: 23,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    top: 0,
    width: 360,
    position: 'absolute'
  },
  masculino: {
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    flex: 1,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  coolicon: {
    width: 12,
    height: 7
  },
  campoFrame: {
    top: 23,
    borderColor: Color.gREY2SPORTSMATCH,
    paddingHorizontal: Padding.p_lg,
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
    width: 361,
    position: 'absolute'
  },
  campo1: {
    height: 61,
    width: 361
  },
  snior: {
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    alignSelf: 'stretch',
    fontFamily: FontFamily.t4TEXTMICRO,
    flex: 1
  },
  campo2: {
    height: 50,
    marginTop: 21,
    width: 361
  },
  camposIniciales: {
    marginTop: 30,
    alignItems: 'center'
  },
  ataque: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    zIndex: 0
  },
  ataqueFrameChild: {
    right: 14,
    left: 348,
    height: 15,
    top: 2,
    maxWidth: '100%',
    overflow: 'hidden'
  },
  ataqueFrame: {
    // width: 377,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  campoAtaque: {
    marginTop: 30
  },
  aceptar: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700'
  },
  aplicar: {
    paddingHorizontal: 50,
    // justifyContent: 'center',
    // width: 173,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl
    // alignItems: 'center',
    // left: 0,
    // flexDirection: 'row'
    // top: 0
  },
  quitarFiltros: {
    width: 175,
    marginLeft: 13,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700'
  },
  botonesInferiores: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  contenidoFiltros: {
    top: 14,
    left: 12,
    alignItems: 'center'
  },
  filtro: {
    top: 261,
    left: 0,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: Color.bLACK3SPORTSMATCH
  },
  frameChild: {
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    position: 'absolute',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  clubs1: {
    lineHeight: 20,
    fontWeight: '500',
    display: 'none',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH
  },
  clubs: {
    left: '8.21%',
    top: '62.39%',
    position: 'absolute'
  },
  frameItem: {
    height: '4.59%',
    width: '2.56%',
    top: '69.72%',
    right: '93.08%',
    bottom: '25.69%',
    left: '4.36%',
    display: 'none',
    maxHeight: '100%',
    position: 'absolute'
  },
  rectangleParent: {
    marginLeft: -195,
    height: 109,
    top: 0,
    width: 390
  },
  groupChild: {
    height: 34,
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    opacity: 0.35,
    width: 22,
    height: 12,
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
    width: 18,
    top: 2,
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
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    width: 61
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
  },
  rectangleGroup: {
    height: 34,
    top: 0,
    left: 0,
    position: 'absolute'
  },
  explorarClubsConFiltroPremChild: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: '100%'
  },
  logo: {
    width: 186,
    height: 44
  },
  groupItem: {
    top: 0,
    left: 0
  },
  text: {
    top: 3,
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    width: 14,
    height: 7,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700',
    left: 0,
    position: 'absolute'
  },
  ellipseParent: {
    left: 100,
    top: 2
  },
  frameInner: {
    zIndex: 0
  },
  groupIcon: {
    height: '57.11%',
    width: '27.75%',
    top: '24.44%',
    right: '11.17%',
    bottom: '18.44%',
    left: '61.08%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  lineIcon: {
    left: 61,
    width: 0,
    zIndex: 2,
    height: 44,
    top: 2,
    position: 'absolute'
  },
  frameChild1: {
    top: 8,
    left: 16,
    width: 31,
    height: 31,
    zIndex: 3,
    position: 'absolute'
  },
  vectorParent: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  superior: {
    marginLeft: 69
  },
  cabezera: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  frameChild2: {
    width: 13,
    height: 15
  },
  posicnDeJuego: {
    width: 265,
    height: 16,
    marginLeft: 6,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left'
  },
  groupParent: {
    borderColor: Color.wHITESPORTSMATCH,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    flexDirection: 'row'
  },
  groupIcon1: {
    height: 17,
    marginLeft: 20,
    width: 22
  },
  frameParent: {
    alignItems: 'center',
    top: 0,
    left: 0,
    flexDirection: 'row',
    position: 'absolute'
  },
  buscarPictograma: {
    width: 348,
    height: 34
  },
  buscarFiltrosDespliegue: {
    alignItems: 'flex-end',
    justifyContent: 'center'
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
  explorarClubsConFiltroPrem: {
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    // height: 844,
    // overflow: 'hidden',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    // flex: 1,
    backgroundColor: Color.bLACK3SPORTSMATCH
  }
})

export default ExplorarClubsConFiltroPrem
