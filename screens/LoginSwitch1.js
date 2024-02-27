import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginSwitch1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginSwitch}>
      <View style={styles.contenido}>
        <View style={styles.contebidoFormulario1}>
          <View>
            <View style={styles.contebidoFormulario1}>
              <View style={styles.contebidoFormulario1}>
                <View style={styles.contebidoFormulario1}>
                  <View style={styles.contebidoFormulario1}>
                    <View>
                      <Pressable
                        style={[styles.switchGrupo, styles.starusPosition]}
                        onPress={() => navigation.navigate("LoginSwitch1")}
                      >
                        <Image
                          style={styles.icon}
                          contentFit="cover"
                          source={require("../assets/group-205.png")}
                        />
                      </Pressable>
                      <View style={styles.switchFrameChild} />
                    </View>
                    <Text style={styles.entrenadoraPreparadoraFs}>{`
(*) Entrenador/a, preparador/a físico/a, analista tècnic, psicólogo/a, fisioterapeuta, nutricionista.`}</Text>
                  </View>
                  <Text style={[styles.regstrate, styles.regstrateTypo]}>
                    Regístrate
                  </Text>
                </View>
                <View style={styles.campos}>
                  <View style={styles.campoFlexBox}>
                    <View
                      style={[styles.rectangulo, styles.rectanguloPosition]}
                    />
                    <Text style={[styles.club, styles.clubTypo]}>
                      Unió Esportíva Mataró
                    </Text>
                    <Image
                      style={[styles.simboloIcon, styles.simboloIconLayout]}
                      contentFit="cover"
                      source={require("../assets/simbolo1.png")}
                    />
                  </View>
                  <View style={[styles.campo2, styles.campoFlexBox]}>
                    <View
                      style={[styles.rectangulo, styles.rectanguloPosition]}
                    />
                    <Text style={[styles.eMail, styles.clubTypo]}>E-mail</Text>
                    <Image
                      style={[styles.simboloIcon1, styles.simboloIconLayout]}
                      contentFit="cover"
                      source={require("../assets/simbolo2.png")}
                    />
                  </View>
                  <View style={[styles.campo2, styles.campoFlexBox]}>
                    <View style={styles.rectanguloPosition}>
                      <Text style={[styles.eMail, styles.clubTypo]}>
                        Contraseña
                      </Text>
                      <View
                        style={[styles.rectangulo, styles.rectanguloPosition]}
                      />
                      <Image
                        style={[styles.vectorIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector3.png")}
                      />
                    </View>
                    <Image
                      style={[styles.ojoIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/ojo.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.debeContenerAl, styles.regstrateTypo]}>
              Debe contener al menos 9 carácteres
            </Text>
          </View>
          <Pressable
            style={styles.yaTenesUnaContainer}
            onPress={() => navigation.navigate("IniciarSesin")}
          >
            <Text style={[styles.yaTenesUnaCuentaIniciaS, styles.titularTypo]}>
              ¿Ya tíenes una cuenta? Inicia sesión
            </Text>
          </Pressable>
        </View>
        <Text
          style={[styles.alContnuarAceptas, styles.regstrateTypo]}
        >{`Al contínuar, aceptas automátícamente nuestras Condiciones, 
Polítíca de privacidad y Polítíca de cookies`}</Text>
      </View>
      <Text style={[styles.titular, styles.titularTypo]}>{`¿Eres jugador 
o un club?`}</Text>
      <Image
        style={[styles.logotipoIcon, styles.simboloIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={styles.fondoIcon}
        contentFit="cover"
        source={require("../assets/fondo.png")}
      />
      <View style={styles.iphonePosition}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
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
  starusPosition: {
    top: 10,
    left: 15,
  },
  regstrateTypo: {
    width: 393,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  rectanguloPosition: {
    left: 0,
    top: 0,
    width: 360,
    height: 40,
    position: "absolute",
  },
  clubTypo: {
    height: 18,
    width: 313,
    textAlign: "left",
    left: 46,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    top: 10,
    position: "absolute",
  },
  simboloIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  campoFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconLayout: {
    height: "45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titularTypo: {
    width: 390,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  iphonePosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    height: 12,
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  switchGrupo: {
    width: 329,
    height: 20,
    zIndex: 0,
    position: "absolute",
  },
  switchFrameChild: {
    width: 359,
    zIndex: 1,
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
  },
  entrenadoraPreparadoraFs: {
    fontSize: FontSize.bodyBodyXS_size,
    lineHeight: 14,
    width: 271,
    textAlign: "center",
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  contebidoFormulario1: {
    alignItems: "center",
  },
  regstrate: {
    height: 25,
    marginTop: 20,
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  rectangulo: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    left: 0,
    borderStyle: "solid",
  },
  club: {
    color: Color.wHITESPORTSMATCH,
  },
  simboloIcon: {
    height: "50%",
    width: "5.56%",
    right: "90%",
    bottom: "25%",
    left: "4.44%",
    top: "25%",
  },
  eMail: {
    color: Color.gREY2SPORTSMATCH,
  },
  simboloIcon1: {
    height: "40%",
    width: "5.92%",
    top: "32.5%",
    right: "89.92%",
    left: "4.17%",
    bottom: "27.5%",
  },
  campo2: {
    marginTop: 10,
  },
  vectorIcon: {
    width: "3.92%",
    right: "91.03%",
    bottom: "30%",
    left: "5.06%",
    top: "25%",
  },
  ojoIcon: {
    width: "6.67%",
    top: "27.5%",
    right: "3.89%",
    left: "89.44%",
    bottom: "27.5%",
  },
  campos: {
    height: 140,
    width: 360,
    marginTop: 10,
  },
  debeContenerAl: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.colorDimgray_100,
    marginTop: 28,
  },
  yaTenesUnaCuentaIniciaS: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.gREY2SPORTSMATCH,
  },
  yaTenesUnaContainer: {
    marginTop: 60,
  },
  alContnuarAceptas: {
    fontSize: FontSize.t4TEXTMICRO_size,
    marginTop: 72,
    color: Color.gREY2SPORTSMATCH,
  },
  contenido: {
    top: 307,
    left: -1,
    position: "absolute",
  },
  titular: {
    marginLeft: -195,
    top: 203,
    left: "50%",
    fontSize: FontSize.h1TitleHUGE_size,
    lineHeight: 40,
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
    position: "absolute",
  },
  logotipoIcon: {
    height: "4.81%",
    width: "44.1%",
    top: "16%",
    right: "52.05%",
    bottom: "79.19%",
    left: "3.85%",
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
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
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
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
  },
  starus: {
    height: 24,
    top: 10,
    left: 15,
  },
  loginSwitch: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default LoginSwitch1;
