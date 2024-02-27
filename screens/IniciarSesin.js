import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const IniciarSesin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iniciarSesin}>
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
          <View style={styles.formulario}>
            <View style={styles.formularioFrame}>
              <View>
                <View style={styles.titularcampos}>
                  <Text style={styles.titular}>Inicia sesión</Text>
                  <View style={styles.campos}>
                    <View style={styles.campoLayout}>
                      <View style={[styles.campo1Frame, styles.framePosition]}>
                        <Image
                          style={styles.vectorIcon}
                          contentFit="cover"
                          source={require("../assets/vector4.png")}
                        />
                        <Text style={[styles.eMail, styles.eMailTypo]}>
                          oriol@b-bruce.com
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.campo2, styles.campoLayout]}>
                      <View style={styles.framePosition}>
                        <Image
                          style={styles.simboloIcon1}
                          contentFit="cover"
                          source={require("../assets/simbolo3.png")}
                        />
                        <Text style={[styles.contrasea, styles.contraseaClr]}>
                          Contraseña
                        </Text>
                      </View>
                      <Image
                        style={styles.ojoIcon}
                        contentFit="cover"
                        source={require("../assets/ojo1.png")}
                      />
                    </View>
                  </View>
                </View>
                <Text style={[styles.hasOlvidadoTu, styles.contraseaClr]}>
                  ¿Has olvidado tu contraseña? Clica aquí
                </Text>
              </View>
              <View style={styles.botonIniciaSesin}>
                <View style={[styles.botonGrupo, styles.botonPosition]}>
                  <View
                    style={[styles.botonIniciaSesin1, styles.botonPosition]}
                  >
                    <View style={styles.botonIniciaSesin2}>
                      <Text style={styles.aceptar}>Inicia sesión</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.noTenesUnaContainer}
              onPress={() => navigation.navigate("Registrarse")}
            >
              <Text
                style={[styles.noTenesUnaCuentaRegstra, styles.contraseaClr]}
              >
                ¿No tíenes una cuenta? Regístrate
              </Text>
            </Pressable>
          </View>
          <Text
            style={[styles.alContnuarAceptas, styles.contraseaClr]}
          >{`Al contínuar, aceptas automátícamente nuestras Condiciones, 
Polítíca de privacidad y Polítíca de cookies`}</Text>
        </View>
      </View>
      <Image
        style={styles.fondoIcon}
        contentFit="cover"
        source={require("../assets/fondo1.png")}
      />
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
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
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
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
  },
  framePosition: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_12xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    top: 0,
    height: 38,
    width: 360,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  eMailTypo: {
    width: 313,
    textAlign: "left",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  campoLayout: {
    height: 38,
    width: 360,
  },
  contraseaClr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  botonPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iphonePosition: {
    height: 34,
    top: 0,
    width: 390,
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
  },
  titular: {
    fontSize: FontSize.h1TitleHUGE_size,
    lineHeight: 40,
    fontWeight: "500",
    width: 390,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  vectorIcon: {
    width: 21,
    height: 16,
  },
  eMail: {
    marginLeft: 10,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  campo1Frame: {
    alignItems: "flex-end",
  },
  simboloIcon1: {
    width: 14,
    height: 18,
  },
  contrasea: {
    marginLeft: 14,
    width: 313,
    textAlign: "left",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  ojoIcon: {
    height: "47.37%",
    width: "6.72%",
    top: "28.95%",
    right: "3.11%",
    bottom: "23.68%",
    left: "90.17%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  campo2: {
    marginTop: 15,
  },
  campos: {
    marginTop: 34,
  },
  titularcampos: {
    alignItems: "center",
  },
  hasOlvidadoTu: {
    marginTop: 18,
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  botonIniciaSesin2: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    width: 360,
    alignItems: "center",
    flexDirection: "row",
  },
  botonIniciaSesin1: {
    right: "0%",
    left: "0%",
    flexDirection: "row",
    width: "100%",
  },
  botonGrupo: {
    width: "92.31%",
    right: "3.85%",
    left: "3.85%",
  },
  botonIniciaSesin: {
    marginTop: 37,
    alignSelf: "stretch",
    flex: 1,
  },
  formularioFrame: {
    alignItems: "center",
    flex: 1,
  },
  noTenesUnaCuentaRegstra: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  noTenesUnaContainer: {
    marginTop: 27,
  },
  formulario: {
    flex: 1,
  },
  alContnuarAceptas: {
    fontSize: FontSize.t4TEXTMICRO_size,
    marginTop: 153,
    alignSelf: "stretch",
    textAlign: "center",
  },
  formulariotextoLegal: {
    marginTop: 73,
    flex: 1,
  },
  contenido: {
    top: 207,
    height: 593,
    left: 0,
    position: "absolute",
  },
  fondoIcon: {
    top: -180,
    left: -451,
    width: 1105,
    height: 415,
    position: "absolute",
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
    borderStyle: "solid",
    top: 0,
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
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: "absolute",
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
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  iniciarSesin: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default IniciarSesin;
