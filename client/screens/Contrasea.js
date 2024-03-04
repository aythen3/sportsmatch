import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Contrasea = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contrasea}>
      <Image
        style={[styles.contraseaChild, styles.contraseaLayout]}
        contentFit="cover"
        source={require("../assets/group-2414.png")}
      />
      <View style={styles.cabezeraParent}>
        <View style={styles.cabezera}>
          <View style={[styles.cooliconParent, styles.loremIpsumFlexBox]}>
            <Pressable
              style={styles.coolicon}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/coolicon3.png")}
              />
            </Pressable>
            <Pressable
              style={styles.contrasea1}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.contrasea2, styles.textTypo]}>
                Contraseña
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View>
            <View style={styles.email}>
              <View style={styles.emailInner}>
                <View style={styles.contraseaParent}>
                  <Text style={[styles.contrasea3, styles.contraseaTypo]}>
                    Contraseña
                  </Text>
                  <View style={styles.parent}>
                    <Text style={[styles.text, styles.textPosition]}>
                      **************
                    </Text>
                    <View style={[styles.groupChild, styles.borderPosition]} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.nuevoEmasiol}>
              <View style={styles.emailInner}>
                <View style={styles.contraseaParent}>
                  <Text style={[styles.nuevaContrasea, styles.contraseaTypo]}>
                    Nueva contraseña
                  </Text>
                  <View style={styles.rectangleWrapper}>
                    <View style={[styles.groupChild, styles.borderPosition]} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.nuevoEmasiol}>
              <View style={styles.emailInner}>
                <View style={styles.contraseaParent}>
                  <Text style={[styles.contrasea3, styles.contraseaTypo]}>
                    Repetir Nueva contraseña
                  </Text>
                  <View style={styles.parent}>
                    <View style={[styles.groupChild, styles.borderPosition]} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boton}>
            <View style={[styles.loremIpsum, styles.loremIpsumFlexBox]}>
              <Text style={styles.aceptar}>Aceptar</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.contraseaItem, styles.contraseaLayout]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
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
            source={require("../assets/cellular-connection1.png")}
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
  contraseaLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  loremIpsumFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  contraseaTypo: {
    height: 23,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  textPosition: {
    top: 10,
    left: 15,
  },
  borderPosition: {
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
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
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  contraseaChild: {
    height: "112.16%",
    width: "980.1%",
    top: "-9.15%",
    right: "-413.18%",
    bottom: "-3%",
    left: "-466.92%",
    maxWidth: "100%",
    opacity: 0.2,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  contrasea2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
  },
  contrasea1: {
    marginLeft: 9,
  },
  cooliconParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  cabezera: {
    width: 134,
    height: 22,
  },
  contrasea3: {
    width: 360,
  },
  text: {
    color: Color.gREY2SPORTSMATCH,
    width: 313,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    height: 40,
    borderRadius: Border.br_81xl,
    width: 360,
    left: 0,
  },
  parent: {
    alignSelf: "stretch",
    flex: 1,
  },
  contraseaParent: {
    height: 63,
    left: 0,
    top: 0,
    position: "absolute",
  },
  emailInner: {
    height: 63,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  email: {
    height: 63,
    width: 360,
  },
  nuevaContrasea: {
    alignSelf: "stretch",
  },
  rectangleWrapper: {
    width: 360,
    flex: 1,
  },
  nuevoEmasiol: {
    marginTop: 10,
    height: 63,
    width: 360,
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loremIpsum: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
    flex: 1,
  },
  boton: {
    marginTop: 355,
    width: 360,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 64,
  },
  cabezeraParent: {
    top: 60,
    left: 15,
    position: "absolute",
  },
  contraseaItem: {
    marginLeft: -74,
    top: 831,
    left: "50%",
    width: 148,
  },
  rectangleView: {
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
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    height: 24,
    top: 10,
    left: 15,
  },
  contrasea: {
    borderRadius: Border.br_21xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Contrasea;
