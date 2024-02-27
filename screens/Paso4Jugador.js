import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Paso4Jugador = () => {
  return (
    <View style={[styles.paso4Jugador, styles.flechaIconFlexBox]}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require("../assets/imagen-de-fondo1.png")}
      />
      <View style={[styles.contenidoPaso4, styles.comoTeDefinesPosition]}>
        <View style={styles.headersubirImagenesPerfil}>
          <View style={styles.headerSteps}>
            <View style={styles.botonAtras}>
              <Image
                style={styles.coolicon}
                contentFit="cover"
                source={require("../assets/coolicon1.png")}
              />
              <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
            </View>
            <View style={styles.stepseccion}>
              <View>
                <Text style={[styles.paso4, styles.paso4Typo]}>Paso 4</Text>
                <Text style={[styles.unosDetallesSobre, styles.atrsTypo]}>
                  Unos detalles sobre tí
                </Text>
              </View>
              <View style={styles.linias}>
                <View style={[styles.linia1, styles.liniaLayout1]} />
                <View style={[styles.linia2, styles.liniaLayout]} />
                <View style={[styles.linia3, styles.liniaLayout]} />
                <View style={[styles.linia4, styles.liniaLayout1]} />
              </View>
            </View>
          </View>
          <View style={styles.imagenesPerfil}>
            <View style={styles.headersubirImagenesPerfil}>
              <View style={styles.headersubirImagenesPerfil}>
                <Image
                  style={styles.circuloIcon}
                  contentFit="cover"
                  source={require("../assets/circulo.png")}
                />
                <View
                  style={[
                    styles.botonSubirImagen,
                    styles.botonpesoMaximoSpaceBlock,
                  ]}
                >
                  <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
                    Subir foto de perfil
                  </Text>
                </View>
              </View>
              <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
                Max 1mb, jpeg
              </Text>
            </View>
            <View style={styles.rectangulobotonpesoMaximo}>
              <View style={styles.rectangulo} />
              <View style={styles.botonpesoMaximoSpaceBlock}>
                <View style={[styles.boton, styles.botonFlexBox]}>
                  <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
                    Subir foto de portada
                  </Text>
                </View>
                <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
                  Max 1mb, jpeg
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.formulario}>
          <View style={styles.formularioSexo}>
            <View style={[styles.campoFormulario, styles.boton1Layout]}>
              <Text style={[styles.masculino, styles.sexoTypo]}>Masculino</Text>
              <Image
                style={[styles.flechaIcon, styles.flechaIconFlexBox]}
                contentFit="cover"
                source={require("../assets/flecha.png")}
              />
            </View>
            <Text style={[styles.sexo, styles.sexoTypo]}>Sexo</Text>
          </View>
          <View style={styles.formularioNacimiento}>
            <View style={[styles.campoFormulario, styles.boton1Layout]}>
              <Text style={[styles.masculino, styles.sexoTypo]}>2000</Text>
              <Image
                style={[styles.flechaIcon, styles.flechaIconFlexBox]}
                contentFit="cover"
                source={require("../assets/flecha1.png")}
              />
            </View>
            <Text style={[styles.sexo, styles.sexoTypo]}>
              Año de nacimiento
            </Text>
          </View>
          <View style={styles.formularioNacimiento}>
            <View style={[styles.campoFormulario, styles.boton1Layout]}>
              <Text style={[styles.masculino, styles.sexoTypo]}>Barcelona</Text>
              <Image
                style={styles.flechaIcon2}
                contentFit="cover"
                source={require("../assets/flecha2.png")}
              />
            </View>
            <Text
              style={[styles.sexo, styles.sexoTypo]}
            >{`Lugar de residencia `}</Text>
          </View>
          <View style={styles.formularioNacimiento}>
            <View style={[styles.campoFormulario, styles.boton1Layout]}>
              <Text style={[styles.masculino, styles.sexoTypo]}>
                Escribe solo si estás en algún club
              </Text>
            </View>
            <Text style={[styles.sexo, styles.sexoTypo]}>Club actual</Text>
          </View>
          <View style={styles.definicionJugador}>
            <View style={[styles.campoFormulario4, styles.campoBorder]}>
              <Text
                style={[styles.describeTuJuego, styles.sexoTypo]}
              >{`Describe tu juego, tu condición física, 
tu personalidad en el campo...`}</Text>
            </View>
            <Text
              style={[styles.comoTeDefines, styles.sexoTypo]}
            >{`Como te defines como jugador `}</Text>
          </View>
          <View style={styles.botonSiguiente}>
            <View style={[styles.boton1, styles.boton1Layout]}>
              <Text style={[styles.aceptar, styles.atrsTypo]}>Siguiente</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iphonePosition}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flechaIconFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  comoTeDefinesPosition: {
    left: 0,
    position: "absolute",
  },
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "center",
  },
  paso4Typo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  liniaLayout1: {
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: -1,
    borderStyle: "solid",
    position: "absolute",
  },
  liniaLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    top: -1,
    position: "absolute",
  },
  botonpesoMaximoSpaceBlock: {
    marginTop: 15,
    alignItems: "center",
  },
  botonFlexBox: {
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  boton1Layout: {
    paddingVertical: Padding.p_3xs,
    width: 360,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  sexoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  campoBorder: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphonePosition: {
    height: 34,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  imagenDeFondo: {
    left: -229,
    width: 956,
    height: 956,
    opacity: 0.2,
    top: 10,
    position: "absolute",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  atrs: {
    marginLeft: 5,
    textAlign: "center",
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  paso4: {
    color: Color.bALONCESTO,
    width: 393,
  },
  unosDetallesSobre: {
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
    alignSelf: "stretch",
    textAlign: "center",
  },
  linia1: {
    left: -1,
    zIndex: 0,
    borderColor: Color.colorDimgray_100,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: -1,
  },
  linia2: {
    left: 93,
    zIndex: 1,
  },
  linia3: {
    left: 187,
    zIndex: 2,
  },
  linia4: {
    left: 282,
    borderColor: Color.bALONCESTO,
    zIndex: 3,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: -1,
  },
  linias: {
    padding: Padding.p_3xs,
    marginTop: 20,
    flexDirection: "row",
  },
  stepseccion: {
    marginTop: 3,
    alignItems: "center",
  },
  headerSteps: {
    alignItems: "flex-end",
  },
  circuloIcon: {
    width: 117,
    height: 117,
  },
  subirFotoDe: {
    color: Color.wHITESPORTSMATCH,
  },
  botonSubirImagen: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  headersubirImagenesPerfil: {
    alignItems: "center",
  },
  pesoMaximo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
  },
  rectangulo: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro,
    width: 359,
    flex: 1,
  },
  boton: {
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
  },
  rectangulobotonpesoMaximo: {
    height: 199,
    marginTop: 21,
    alignItems: "center",
  },
  imagenesPerfil: {
    marginTop: 39,
    alignItems: "center",
  },
  masculino: {
    width: 313,
    color: Color.gREY2SPORTSMATCH,
  },
  flechaIcon: {
    maxWidth: "100%",
    height: 7,
  },
  campoFormulario: {
    top: 22,
    height: 36,
    paddingHorizontal: Padding.p_lg,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  sexo: {
    left: 1,
    height: 22,
    top: 0,
    width: 359,
    color: Color.wHITESPORTSMATCH,
    position: "absolute",
  },
  formularioSexo: {
    alignSelf: "stretch",
    flex: 1,
  },
  formularioNacimiento: {
    marginTop: 28,
    alignSelf: "stretch",
    flex: 1,
  },
  flechaIcon2: {
    width: 12,
    height: 7,
  },
  describeTuJuego: {
    color: Color.gREY2SPORTSMATCH,
  },
  campoFormulario4: {
    top: 33,
    borderRadius: Border.br_3xs,
    width: 358,
    height: 148,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_6xs,
    flexDirection: "row",
  },
  comoTeDefines: {
    height: 23,
    top: 0,
    width: 360,
    color: Color.wHITESPORTSMATCH,
    left: 0,
    position: "absolute",
  },
  definicionJugador: {
    height: 181,
    marginTop: 28,
    width: 360,
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
  },
  boton1: {
    paddingHorizontal: Padding.p_81xl,
    backgroundColor: Color.wHITESPORTSMATCH,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
  },
  botonSiguiente: {
    marginTop: 28,
    flexDirection: "row",
  },
  formulario: {
    height: 595,
    marginTop: 3,
  },
  contenidoPaso4: {
    top: 77,
    alignItems: "center",
  },
  uxIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    backgroundColor: Color.wHITESPORTSMATCH,
    height: 7,
    position: "absolute",
  },
  battery: {
    width: 25,
    height: 12,
    top: 0,
  },
  wifiIcon: {
    width: 16,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: "absolute",
  },
  time: {
    marginTop: -9.55,
    top: "50%",
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    left: 15,
    height: 24,
    top: 10,
  },
  paso4Jugador: {
    borderRadius: Border.br_21xl,
    width: "100%",
    height: 1245,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Paso4Jugador;
