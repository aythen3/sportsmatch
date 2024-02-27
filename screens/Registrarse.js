import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

const Registrarse = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.registrarse}>
      <View style={styles.contenido}>
        <View style={styles.botonAtrasFrame}>
          <Image
            style={styles.simboloIcon}
            contentFit="cover"
            source={require("../assets/coolicon3.png")}
          />
          <Pressable style={styles.atrs} onPress={() => navigation.goBack()}>
            <Text style={[styles.atrs1, styles.timeTypo]}>Atrás</Text>
          </Pressable>
        </View>
        <View style={styles.formulariotextoLegal}>
          <View>
            <View style={styles.formularioFrame}>
              <View style={styles.camposFormulario}>
                <View style={styles.titularcampos}>
                  <Text style={[styles.titular, styles.titularLayout]}>
                    Regístrate
                  </Text>
                  <View style={styles.campos}>
                    <View style={styles.campo1}>
                      <View style={styles.campo1Frame}>
                        <Image
                          style={styles.simboloIcon1}
                          contentFit="cover"
                          source={require("../assets/simbolo4.png")}
                        />
                        <Text style={[styles.nombre, styles.eMailSpaceBlock]}>
                          nombre
                        </Text>
                      </View>
                    </View>
                    <View style={styles.campo2}>
                      <View style={[styles.campo2Frame, styles.framePosition]}>
                        <Image
                          style={styles.vectorIcon}
                          contentFit="cover"
                          source={require("../assets/vector4.png")}
                        />
                        <Text style={[styles.eMail, styles.eMailTypo]}>
                          E-mail
                        </Text>
                      </View>
                    </View>
                    <View style={styles.campo3}>
                      <View style={[styles.campo3Frame, styles.framePosition]}>
                        <View style={styles.contraseaFrame}>
                          <Image
                            style={styles.simboloIcon2}
                            contentFit="cover"
                            source={require("../assets/simbolo3.png")}
                          />
                          <Text style={[styles.texto, styles.eMailTypo]}>
                            Contraseña
                          </Text>
                        </View>
                        <Image
                          style={styles.ojoIcon}
                          contentFit="cover"
                          source={require("../assets/ojo2.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.debeContenerAl}>
                  Debe contener al menos 9 carácteres
                </Text>
              </View>
              <View style={styles.botonRegistrate}>
                <View style={styles.loremPosition}>
                  <View style={[styles.loremIpsum, styles.loremPosition]}>
                    <View style={styles.loremIpsum1}>
                      <Text style={styles.aceptar}>Regístrate</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.yaTenesUnaContainer}
              onPress={() => navigation.navigate("IniciarSesin")}
            >
              <Text style={[styles.yaTenesUnaCuentaIniciaS, styles.eMailTypo]}>
                ¿Ya tíenes una cuenta? Inicia sesión
              </Text>
            </Pressable>
          </View>
          <View style={styles.textoLegal}>
            <View style={styles.textoLegalFrame}>
              <Text
                style={[styles.texto1, styles.textoTypo]}
              >{`Estoy de acuerdo en recibir información promocional 
y publicitaria a través del correo electrónico`}</Text>
              <View style={[styles.rectangulo, styles.capacityPosition]} />
            </View>
            <Text
              style={[styles.textoInferior, styles.textoTypo]}
            >{`Al contínuar, aceptas automátícamente nuestras Condiciones, 
Polítíca de privacidad y Polítíca de cookies`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.fondoIcon}
        contentFit="cover"
        source={require("../assets/fondo2.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  titularLayout: {
    width: 390,
    textAlign: "center",
  },
  eMailSpaceBlock: {
    marginLeft: 10,
    width: 313,
    textAlign: "left",
  },
  framePosition: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    top: 0,
    flexDirection: "row",
    left: 0,
    overflow: "hidden",
  },
  eMailTypo: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  loremPosition: {
    height: "100%",
    width: "100%",
  },
  textoTypo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    width: 393,
  },
  capacityPosition: {
    top: 2,
  },
  iphonePosition: {
    height: 34,
    top: 0,
    width: 390,
    left: 0,
  },
  batteryPosition: {
    right: 0,
  },
  timeLayout: {
    width: 61,
  },
  simboloIcon: {
    width: 9,
    height: 15,
  },
  atrs1: {
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  atrs: {
    marginLeft: 5,
  },
  botonAtrasFrame: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    height: 18,
    width: 393,
  },
  titular: {
    fontSize: FontSize.h1TitleHUGE_size,
    lineHeight: 40,
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  simboloIcon1: {
    width: 20,
    height: 21,
  },
  nombre: {
    height: 19,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  campo1Frame: {
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_2xs,
    paddingRight: Padding.p_12xs,
    paddingLeft: Padding.p_mini,
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    top: 0,
    flexDirection: "row",
    left: 0,
    overflow: "hidden",
  },
  campo1: {
    width: 359,
    height: 43,
  },
  vectorIcon: {
    width: 21,
    height: 16,
  },
  eMail: {
    marginLeft: 10,
    width: 313,
    textAlign: "left",
  },
  campo2Frame: {
    paddingRight: Padding.p_12xs,
  },
  campo2: {
    height: 38,
    marginTop: 15,
    width: 360,
  },
  simboloIcon2: {
    width: 14,
    height: 18,
  },
  texto: {
    marginLeft: 14,
    textAlign: "left",
    color: Color.gREY2SPORTSMATCH,
  },
  contraseaFrame: {
    alignItems: "center",
    flexDirection: "row",
  },
  ojoIcon: {
    width: 24,
    height: 18,
  },
  campo3Frame: {
    height: 39,
    paddingRight: 23,
    width: 360,
  },
  campo3: {
    alignSelf: "stretch",
    marginTop: 15,
    flex: 1,
  },
  campos: {
    marginTop: 34,
    flex: 1,
  },
  titularcampos: {
    alignItems: "center",
    flex: 1,
  },
  debeContenerAl: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.colorDimgray_100,
    marginTop: 18,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    width: 393,
  },
  camposFormulario: {
    height: 259,
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loremIpsum1: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 360,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  loremIpsum: {
    flexDirection: "row",
  },
  botonRegistrate: {
    height: 40,
    marginTop: 36,
    width: 360,
  },
  formularioFrame: {
    alignItems: "center",
  },
  yaTenesUnaCuentaIniciaS: {
    width: 390,
    textAlign: "center",
  },
  yaTenesUnaContainer: {
    marginTop: 27,
  },
  texto1: {
    lineHeight: 14,
    zIndex: 0,
  },
  rectangulo: {
    left: 40,
    borderColor: "#717171",
    width: 10,
    height: 10,
    zIndex: 1,
    borderWidth: 1,
    top: 2,
    borderStyle: "solid",
  },
  textoLegalFrame: {
    flexDirection: "row",
  },
  textoInferior: {
    marginTop: 9,
  },
  textoLegal: {
    marginTop: 92,
  },
  formulariotextoLegal: {
    marginTop: 45,
  },
  contenido: {
    height: 597,
    left: 0,
  },
  fondoIcon: {
    width: 1105,
    height: 424,
  },
  uxIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: "solid",
    top: 0,
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
    right: 0,
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
  },
  time: {
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  registrarse: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Registrarse;
