import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Paso3Jugador = () => {
  return (
    <View style={styles.paso3Jugador}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require("../assets/imagen-de-fondo2.png")}
      />
      <View style={[styles.contenido, styles.atributoPosition]}>
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
              <Text style={styles.paso3}>Paso 3</Text>
              <Text style={styles.defineTusSkills}>Define tus skills</Text>
            </View>
            <View style={styles.linias}>
              <View style={[styles.linia1, styles.liniaLayout1]} />
              <View style={[styles.linia2, styles.liniaLayout]} />
              <View style={[styles.linia3, styles.liniaLayout]} />
              <View style={[styles.linia4, styles.liniaLayout1]} />
            </View>
          </View>
        </View>
        <View style={styles.contenidoFormulariosboton}>
          <View style={[styles.formulariosCabezera, styles.atributosFlexBox]}>
            <View style={styles.atributosFlexBox}>
              <Text
                style={[styles.ataque, styles.atributoTypo]}
              >{`Ataque `}</Text>
              <Text style={[styles.defensa, styles.defensaFlexBox]}>
                Defensa
              </Text>
              <Text style={[styles.defensa, styles.defensaFlexBox]}>
                Velocidad
              </Text>
            </View>
            <View style={styles.campos}>
              <View style={styles.campoAtaque}>
                <Text style={styles.text}>50</Text>
                <View style={[styles.rectangulo, styles.atributo4Position]} />
              </View>
              <View style={styles.defensaFlexBox}>
                <Text style={styles.text}>30</Text>
                <View style={[styles.rectangulo, styles.atributo4Position]} />
              </View>
              <View style={styles.defensaFlexBox}>
                <Text style={styles.text}>80</Text>
                <View style={[styles.rectangulo, styles.atributo4Position]} />
              </View>
            </View>
            <Text style={[styles.valorEntre0, styles.valorTypo]}>
              Valor entre 0 y 100
            </Text>
            <Text style={[styles.valorEntre0, styles.valorTypo]}>
              Valor entre 0 y 100
            </Text>
            <Text style={[styles.valorEntre0, styles.valorTypo]}>
              Valor entre 0 y 100
            </Text>
          </View>
          <View style={styles.formulariosInferiores}>
            <View style={styles.formularioCategoria}>
              <View style={[styles.campo, styles.atributoPosition]}>
                <View style={styles.campoAtaque}>
                  <Image
                    style={styles.flechaIcon}
                    contentFit="cover"
                    source={require("../assets/flecha4.png")}
                  />
                  <Text style={[styles.textoCampo, styles.starusPosition]}>
                    50
                  </Text>
                  <View style={[styles.rectangulo3, styles.rectanguloBorder]} />
                </View>
              </View>
              <Text style={[styles.atributo, styles.atributoTypo]}>
                Categoría
              </Text>
            </View>
            <View style={styles.posicionPrincipal}>
              <View style={[styles.campo, styles.atributoPosition]}>
                <View style={styles.campoAtaque}>
                  <Image
                    style={styles.flechaIcon}
                    contentFit="cover"
                    source={require("../assets/flecha4.png")}
                  />
                  <Text style={[styles.textoCampo, styles.starusPosition]}>
                    50
                  </Text>
                  <View style={[styles.rectangulo3, styles.rectanguloBorder]} />
                </View>
              </View>
              <Text
                style={[styles.atributo1, styles.atributoTypo]}
              >{`Posición principal
`}</Text>
            </View>
            <View style={styles.posicionPrincipal}>
              <View style={[styles.campo, styles.atributoPosition]}>
                <View style={styles.campoAtaque}>
                  <Text style={[styles.textoCampo, styles.starusPosition]}>
                    50
                  </Text>
                  <View style={[styles.rectangulo3, styles.rectanguloBorder]} />
                </View>
              </View>
              <Text style={[styles.valorEntre03, styles.capacityPosition]}>
                Valor entre 0 y 100
              </Text>
              <Text style={[styles.atributo2, styles.atributoTypo]}>
                Altura
              </Text>
            </View>
            <View style={styles.posicionPrincipal}>
              <View style={[styles.campo, styles.atributoPosition]}>
                <View style={styles.campoAtaque}>
                  <Text style={[styles.textoCampo, styles.starusPosition]}>
                    50
                  </Text>
                  <View style={[styles.rectangulo3, styles.rectanguloBorder]} />
                </View>
              </View>
              <Text style={[styles.valorEntre03, styles.capacityPosition]}>
                Valor entre 0 y 100
              </Text>
              <Text style={[styles.atributo2, styles.atributoTypo]}>Bote</Text>
            </View>
            <View style={styles.posicionPrincipal}>
              <View style={[styles.campo, styles.atributoPosition]}>
                <View style={styles.campoAtaque}>
                  <Text style={[styles.textoCampo, styles.starusPosition]}>
                    50
                  </Text>
                  <View style={[styles.rectangulo3, styles.rectanguloBorder]} />
                </View>
              </View>
              <Text style={[styles.valorEntre03, styles.capacityPosition]}>
                Valor entre 0 y 100
              </Text>
              <Text style={[styles.atributo4, styles.atributo4Position]}>
                Lanzamiento
              </Text>
            </View>
            <View style={styles.posicionPrincipal}>
              <View style={[styles.campo, styles.atributoPosition]}>
                <View style={styles.campoAtaque}>
                  <Text style={[styles.textoCampo, styles.starusPosition]}>
                    50
                  </Text>
                  <View style={[styles.rectangulo3, styles.rectanguloBorder]} />
                </View>
              </View>
              <Text style={[styles.valorEntre03, styles.capacityPosition]}>
                Valor entre 0 y 100
              </Text>
              <Text style={[styles.atributo5, styles.atributoTypo]}>
                Dribling
              </Text>
            </View>
          </View>
          <View style={styles.botonSiguiente}>
            <View style={styles.boton}>
              <Text style={styles.siguiente}>Siguiente</Text>
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
            <View style={[styles.capacity, styles.capacityPosition]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection4.png")}
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
  atributoPosition: {
    left: 0,
    position: "absolute",
  },
  atrsTypo: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  liniaLayout1: {
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  liniaLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    borderStyle: "solid",
    top: -1,
    position: "absolute",
  },
  atributosFlexBox: {
    flexWrap: "wrap",
    width: 363,
    flexDirection: "row",
  },
  atributoTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  defensaFlexBox: {
    marginLeft: 15,
    alignSelf: "stretch",
    flex: 1,
  },
  atributo4Position: {
    width: 111,
    top: 0,
    left: 0,
    position: "absolute",
  },
  valorTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  starusPosition: {
    left: 15,
    top: 10,
  },
  rectanguloBorder: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    height: 40,
    borderStyle: "solid",
  },
  capacityPosition: {
    top: 2,
    position: "absolute",
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
    top: -38,
    left: -229,
    width: 956,
    height: 956,
    opacity: 0.2,
    position: "absolute",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  atrs: {
    marginLeft: 5,
    textAlign: "center",
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  paso3: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  defineTusSkills: {
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  linia1: {
    left: -1,
    zIndex: 0,
  },
  linia2: {
    left: 93,
    zIndex: 1,
    borderColor: Color.colorDimgray_100,
    width: 81,
  },
  linia3: {
    left: 187,
    borderColor: Color.bALONCESTO,
    zIndex: 2,
  },
  linia4: {
    left: 282,
    zIndex: 3,
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
  ataque: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    alignSelf: "stretch",
    fontFamily: FontFamily.t4TEXTMICRO,
    flex: 1,
  },
  defensa: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  text: {
    left: 13,
    width: 97,
    top: 10,
    textAlign: "left",
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: "absolute",
  },
  rectangulo: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    height: 40,
    borderStyle: "solid",
  },
  campoAtaque: {
    alignSelf: "stretch",
    flex: 1,
  },
  campos: {
    marginLeft: 19,
    height: 40,
    width: 363,
    flexDirection: "row",
  },
  valorEntre0: {
    width: 105,
    marginLeft: 19,
    textAlign: "left",
  },
  formulariosCabezera: {
    alignItems: "flex-end",
  },
  flechaIcon: {
    height: "17.5%",
    width: "3.33%",
    top: "45%",
    right: "4.44%",
    bottom: "37.5%",
    left: "92.22%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textoCampo: {
    width: 313,
    height: 18,
    textAlign: "left",
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: "absolute",
  },
  rectangulo3: {
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
  },
  campo: {
    top: 23,
    width: 360,
    height: 40,
  },
  atributo: {
    top: 0,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 0,
    position: "absolute",
  },
  formularioCategoria: {
    height: 63,
    width: 360,
  },
  atributo1: {
    width: 206,
    height: 13,
    top: 0,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 0,
    position: "absolute",
  },
  posicionPrincipal: {
    marginTop: 10,
    height: 63,
    alignSelf: "stretch",
  },
  valorEntre03: {
    left: 260,
    textAlign: "right",
    width: 99,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  atributo2: {
    width: 44,
    top: 0,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 0,
    position: "absolute",
  },
  atributo4: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  atributo5: {
    width: 120,
    top: 0,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 0,
    position: "absolute",
  },
  formulariosInferiores: {
    marginTop: 26,
    alignItems: "flex-end",
  },
  siguiente: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  boton: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 360,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  botonSiguiente: {
    marginTop: 26,
    flexDirection: "row",
  },
  contenidoFormulariosboton: {
    marginTop: 20,
    alignItems: "center",
  },
  contenido: {
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
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
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
    height: 24,
    left: 15,
    top: 10,
  },
  paso3Jugador: {
    borderRadius: Border.br_21xl,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Paso3Jugador;
