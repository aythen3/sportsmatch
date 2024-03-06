import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import HeaderPerfil from '../components/HeaderPerfil'
import { FontFamily, FontSize, Padding, Border, Color } from '../GlobalStyles'

const PerfilDatosPropioClub = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.perfilDatosPropioClub}>
      <View>
        <HeaderPerfil
          name="Club Atletico Boca Juniors"
          description="Presidente: Cristian Perez"
          club={true}
        />
        {/* <View style={styles.headercirculosSuperioresParent}>
          <View>
            <View style={styles.headerBotones}>
              <View style={styles.header}>
                <Image
                  style={[styles.avatarIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/avatar1.png")}
                />
                <View style={styles.descripcionClub}>
                  <View style={styles.nombreClub}>
                    <Pressable
                      style={styles.uniEsportvaMatarContainer}
                      onPress={() => navigation.goBack()}
                    >
                      <Text
                        style={[
                          styles.uniEsportvaMatarBalonces,
                          styles.editarPerfilTypo,
                        ]}
                      >{`Unió Esportíva Mataró
Baloncesto`}</Text>
                    </Pressable>
                  </View>
                  <Text
                    style={[styles.textoInferior, styles.textoLayout]}
                  >{`Presidente
Joan Pi `}</Text>
                </View>
              </View>
              <View style={styles.botones}>
                <View style={[styles.botonEditarPerfil, styles.botonFlexBox]}>
                  <Text style={[styles.editarPerfil, styles.timeTypo]}>
                    Editar perfil
                  </Text>
                </View>
                <View style={[styles.botonMiSuscripcion, styles.botonFlexBox]}>
                  <Text style={[styles.miSuscripcin, styles.timeTypo]}>
                    Mi suscripción
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.circulosSuperiores}>
              <View style={styles.circulo1}>
                <View style={styles.circuloFrame}>
                  <Image
                    style={[styles.circuloIcon, styles.circuloIconFlexBox]}
                    contentFit="cover"
                    source={require("../assets/circulo1.png")}
                  />
                  <View style={styles.textoFrame}>
                    <Text style={[styles.taxto1, styles.taxto1Clr]}>1920</Text>
                    <Text style={[styles.texto2, styles.taxto1Clr]}>
                      Fundación
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.circulo2}>
                <View style={styles.circuloFrame}>
                  <Image
                    style={[styles.circuloIcon, styles.circuloIconFlexBox]}
                    contentFit="cover"
                    source={require("../assets/circulo2.png")}
                  />
                  <View style={styles.textoFrame}>
                    <Text style={[styles.taxto1, styles.taxto1Clr]}>1920</Text>
                    <Text style={[styles.texto2, styles.taxto1Clr]}>
                      Fundación
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.circulo2}>
                <View style={styles.circuloFrame}>
                  <Image
                    style={[styles.circuloIcon, styles.circuloIconFlexBox]}
                    contentFit="cover"
                    source={require("../assets/circulo3.png")}
                  />
                  <View style={styles.textoFrame}>
                    <Text style={[styles.taxto1, styles.taxto1Clr]}>1920</Text>
                    <Text style={[styles.texto2, styles.taxto1Clr]}>
                      Fundación
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.moduloCampo, styles.circuloIconFlexBox]}>
            <View style={[styles.fondoModulo, styles.borderBorder]} />
            <View style={[styles.graficotextoLateral, styles.uxIphonePosition]}>
              <Image
                style={styles.graficoTerrenoJuego}
                contentFit="cover"
                source={require("../assets/grafico-terreno-juego.png")}
              />
              <View style={styles.textoLateral}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Text style={[styles.estadio, styles.taxto1Clr]}>
                    Estadio
                  </Text>
                </Pressable>
                <View style={styles.bloqueInformacion}>
                  <Text style={styles.nombreDelEstadio}>{`Nombre del 
estadio o pavellón
Palau Municipals 
d’Esports Josep Mora`}</Text>
                  <Text
                    style={[styles.poblacinMatar, styles.pasEspaaTypo]}
                  >{`Población
Mataró`}</Text>
                  <Text style={[styles.pasEspaa, styles.pasEspaaTypo]}>{`País
España`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.descripcionDelClub}>
          <Text
            style={[styles.descripcinDelClub, styles.descripcinDelClubTypo]}
          >
            Descripción del club
          </Text>
          <Text
            style={[
              styles.apasionadoLderCompettvo,
              styles.descripcinDelClubTypo,
            ]}
          >
            Apasionado líder competítívo. Mi carrera en baloncesto refleja
            dedicación, habilidades excepcionales y la capacidad de motívar al
            equipo hacia el éxito. Me dedico a ello desde que tengo 6 años y
            llevo toda la vida en el mismo club, el CF Mataró.
          </Text>
        </View>
      </View>
      <View style={styles.opacidadPosition}>
        <Image
          style={styles.opacidadPosition}
          contentFit="cover"
          source={require("../assets/imagen.png")}
        />
        <LinearGradient
          style={[styles.opacidad, styles.opacidadPosition]}
          locations={[0, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        />
      </View>
      <View style={[styles.uxIphone, styles.uxIphonePosition]}>
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.battery, styles.groupLayout]}>
            <View style={[styles.border, styles.groupLayout]} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection2.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: '100%',
    overflow: 'hidden'
  },
  editarPerfilTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  textoLayout: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  botonFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: 'center',
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  circuloIconFlexBox: {
    alignSelf: 'stretch',
    flex: 1
  },
  taxto1Clr: {
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  borderBorder: {
    borderStyle: 'solid',
    top: 0
  },
  uxIphonePosition: {
    top: 10,
    position: 'absolute'
  },
  pasEspaaTypo: {
    marginTop: 13,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bALONCESTO,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  descripcinDelClubTypo: {
    width: 357,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  opacidadPosition: {
    height: 150,
    width: 390,
    top: 0,
    left: 0,
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
  avatarIcon: {
    height: 112,
    flex: 1,
    maxWidth: '100%'
  },
  uniEsportvaMatarBalonces: {
    height: '100%',
    fontSize: FontSize.button_size,
    lineHeight: 20,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    width: '100%'
  },
  uniEsportvaMatarContainer: {
    left: '0%',
    top: '0%',
    position: 'absolute'
  },
  nombreClub: {
    width: 144,
    height: 60
  },
  textoInferior: {
    width: 235,
    height: 36,
    marginTop: 2,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  descripcionClub: {
    height: 86,
    marginLeft: 14
  },
  header: {
    width: 359,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  editarPerfil: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  botonEditarPerfil: {
    backgroundColor: Color.colorDimgray_100,
    width: 173
  },
  miSuscripcin: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  botonMiSuscripcion: {
    width: 177,
    marginLeft: 10,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  botones: {
    width: 356,
    marginTop: 22,
    flexDirection: 'row'
  },
  headerBotones: {
    alignItems: 'center'
  },
  circuloIcon: {
    maxHeight: '100%',
    zIndex: 0,
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  taxto1: {
    fontWeight: '500',
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    width: 109,
    textAlign: 'center'
  },
  texto2: {
    marginTop: 9,
    width: 109,
    textAlign: 'center',
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  textoFrame: {
    top: 32,
    zIndex: 1,
    left: 0,
    position: 'absolute'
  },
  circuloFrame: {
    height: 110,
    width: 109,
    flexDirection: 'row'
  },
  circulo1: {
    flexDirection: 'row'
  },
  circulo2: {
    marginLeft: 14,
    flexDirection: 'row'
  },
  circulosSuperiores: {
    marginTop: 32,
    flexDirection: 'row'
  },
  fondoModulo: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    width: 358,
    height: 260,
    left: 0,
    position: 'absolute'
  },
  graficoTerrenoJuego: {
    width: 166,
    height: 240
  },
  estadio: {
    width: 114,
    height: 20,
    fontWeight: '500',
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    textAlign: 'left'
  },
  nombreDelEstadio: {
    lineHeight: 16,
    width: 170,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bALONCESTO,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  poblacinMatar: {
    width: 185
  },
  pasEspaa: {
    width: 138
  },
  bloqueInformacion: {
    marginTop: 27
  },
  textoLateral: {
    marginLeft: 12
  },
  graficotextoLateral: {
    left: 10,
    width: 349,
    height: 240,
    flexDirection: 'row'
  },
  moduloCampo: {
    marginTop: 29
  },
  headercirculosSuperioresParent: {
    height: 600,
    alignItems: 'flex-end'
  },
  descripcinDelClub: {
    height: 40,
    fontWeight: '500',
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size
  },
  apasionadoLderCompettvo: {
    height: 90,
    marginTop: 5,
    lineHeight: 17,
    width: 357,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size
  },
  descripcionDelClub: {
    marginTop: 14
  },
  contenido: {
    top: 142,
    left: 12,
    position: 'absolute'
  },
  opacidad: {
    opacity: 0.5,
    backgroundColor: Color.promocio
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    borderStyle: 'solid',
    top: 0
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
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    top: 0,
    left: 0
  },
  uxIphone: {
    right: 15,
    width: 360,
    height: 24
  },
  perfilDatosPropioClub: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 844,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default PerfilDatosPropioClub
