import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const DefineTusSkills = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.defineTusSkills}>
      <Image
        style={[styles.defineTusSkillsChild, styles.defineLayout]}
        contentFit="cover"
        source={require("../assets/group-2413.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.frameWrapper}>
          <View style={[styles.cooliconParent, styles.frameParentPosition]}>
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
              style={styles.defineTusSkillsContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.defineTusSkills1, styles.ataqueTypo]}>
                Define tus skills
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.frameParent}>
            <View>
              <View style={styles.groupView}>
                <View style={[styles.frameGroup, styles.frameParentPosition]}>
                  <View style={[styles.ataqueParent, styles.frameViewLayout]}>
                    <Text
                      style={[styles.ataque, styles.timeTypo]}
                    >{`Ataque `}</Text>
                    <Text style={[styles.defensa, styles.timeTypo]}>
                      Defensa
                    </Text>
                    <Text style={[styles.velocidad, styles.timeTypo]}>
                      Velocidad
                    </Text>
                    <View style={[styles.frameView, styles.frameViewLayout]}>
                      <View style={styles.parent}>
                        <Text style={[styles.text, styles.textTypo]}>50</Text>
                        <View
                          style={[styles.groupChild, styles.groupChildBorder]}
                        />
                      </View>
                      <View style={styles.group}>
                        <Text style={[styles.text, styles.textTypo]}>50</Text>
                        <View
                          style={[styles.groupChild, styles.groupChildBorder]}
                        />
                      </View>
                      <View style={styles.group}>
                        <Text style={[styles.text, styles.textTypo]}>50</Text>
                        <View
                          style={[styles.groupChild, styles.groupChildBorder]}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.valorTypo}>Valor entre 0 y 100</Text>
                  <Text style={[styles.valorEntre01, styles.valorTypo]}>
                    Valor entre 0 y 100
                  </Text>
                  <Text style={[styles.valorEntre01, styles.valorTypo]}>
                    Valor entre 0 y 100
                  </Text>
                </View>
              </View>
              <View style={styles.groupParent1}>
                <View style={styles.groupParent2}>
                  <View
                    style={[styles.frameWrapper1, styles.frameParentPosition]}
                  >
                    <View
                      style={[
                        styles.categoraParent,
                        styles.frameParentPosition,
                      ]}
                    >
                      <Text style={styles.categoraTypo}>Categoría</Text>
                      <View style={styles.jniorParent}>
                        <Text style={[styles.jnior, styles.jniorPosition]}>
                          Júnior
                        </Text>
                        <View
                          style={[
                            styles.rectangleView,
                            styles.groupChildBorder,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <Image
                    style={[styles.coolicon1, styles.cooliconPosition]}
                    contentFit="cover"
                    source={require("../assets/coolicon2.png")}
                  />
                </View>
                <View style={styles.groupParent3}>
                  <View style={styles.posicinPrincipalParent}>
                    <Text
                      style={[styles.posicinPrincipal, styles.categoraTypo]}
                    >
                      Posición principal
                    </Text>
                    <View
                      style={[styles.baseParent, styles.frameParentPosition]}
                    >
                      <Text style={[styles.jnior, styles.jniorPosition]}>
                        Base
                      </Text>
                      <View
                        style={[styles.rectangleView, styles.groupChildBorder]}
                      />
                    </View>
                  </View>
                  <Image
                    style={[styles.coolicon2, styles.cooliconPosition]}
                    contentFit="cover"
                    source={require("../assets/coolicon2.png")}
                  />
                </View>
                <View style={styles.frameWrapper2}>
                  <View
                    style={[styles.frameParent1, styles.frameParentPosition]}
                  >
                    <View style={styles.alturaParent}>
                      <Text style={[styles.altura, styles.timeTypo]}>
                        Altura
                      </Text>
                      <Text
                        style={[styles.valorEntre03, styles.capacityPosition]}
                      >
                        Valor entre 0 y 100
                      </Text>
                    </View>
                    <View style={styles.groupWrapper}>
                      <View style={styles.jniorParent}>
                        <Text style={[styles.jnior, styles.jniorPosition]}>
                          50
                        </Text>
                        <View
                          style={[
                            styles.rectangleView,
                            styles.groupChildBorder,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.frameWrapper2}>
                  <View
                    style={[styles.frameParent1, styles.frameParentPosition]}
                  >
                    <View style={styles.alturaParent}>
                      <Text style={[styles.altura, styles.timeTypo]}>Bote</Text>
                      <Text
                        style={[styles.valorEntre03, styles.capacityPosition]}
                      >
                        Valor entre 0 y 100
                      </Text>
                    </View>
                    <View style={styles.groupWrapper}>
                      <View style={styles.jniorParent}>
                        <Text style={[styles.jnior, styles.jniorPosition]}>
                          50
                        </Text>
                        <View
                          style={[
                            styles.rectangleView,
                            styles.groupChildBorder,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.frameWrapper2}>
                  <View
                    style={[styles.frameParent1, styles.frameParentPosition]}
                  >
                    <View style={styles.alturaParent}>
                      <Text style={[styles.altura, styles.timeTypo]}>
                        Lanzamiento
                      </Text>
                      <Text
                        style={[styles.valorEntre03, styles.capacityPosition]}
                      >
                        Valor entre 0 y 100
                      </Text>
                    </View>
                    <View style={styles.groupWrapper1}>
                      <View style={styles.parent3}>
                        <Text style={[styles.jnior, styles.jniorPosition]}>
                          50
                        </Text>
                        <View
                          style={[
                            styles.rectangleView,
                            styles.groupChildBorder,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.frameWrapper2}>
                  <View
                    style={[styles.frameParent1, styles.frameParentPosition]}
                  >
                    <View style={styles.alturaParent}>
                      <Text style={[styles.altura, styles.timeTypo]}>
                        Dribling
                      </Text>
                      <Text
                        style={[styles.valorEntre03, styles.capacityPosition]}
                      >
                        Valor entre 0 y 100
                      </Text>
                    </View>
                    <View style={styles.groupWrapper}>
                      <View style={styles.jniorParent}>
                        <Text style={[styles.jnior, styles.jniorPosition]}>
                          50
                        </Text>
                        <View
                          style={[
                            styles.rectangleView,
                            styles.groupChildBorder,
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.boto}>
              <View style={styles.loremIpsum}>
                <Text style={styles.aceptar}>Aceptar</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.defineTusSkillsItem, styles.defineLayout]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={styles.groupChild6Position}>
        <View style={[styles.groupChild6, styles.groupChild6Position]} />
        <View style={styles.group1}>
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
  defineLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },
  ataqueTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  frameViewLayout: {
    width: 363,
    flexDirection: "row",
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  textTypo: {
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  valorTypo: {
    marginLeft: 19,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  jniorPosition: {
    left: 15,
    top: 10,
  },
  cooliconPosition: {
    bottom: "23.81%",
    top: "65.08%",
    height: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  categoraTypo: {
    height: 23,
    width: 360,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  capacityPosition: {
    top: 2,
    position: "absolute",
  },
  groupChild6Position: {
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
  defineTusSkillsChild: {
    height: "113.22%",
    width: "980.1%",
    top: "-9.24%",
    right: "-413.18%",
    bottom: "-3.98%",
    left: "-466.92%",
    opacity: 0.2,
    maxWidth: "100%",
    maxHeight: "100%",
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
  defineTusSkills1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
    textAlign: "left",
  },
  defineTusSkillsContainer: {
    marginLeft: 9,
  },
  cooliconParent: {
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  frameWrapper: {
    width: 170,
    height: 22,
  },
  ataque: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    flex: 1,
  },
  defensa: {
    marginLeft: 15,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    flex: 1,
  },
  velocidad: {
    marginLeft: 15,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    height: 22,
    flex: 1,
  },
  text: {
    left: 13,
    width: 97,
    top: 10,
    color: Color.gREY2SPORTSMATCH,
  },
  groupChild: {
    width: 111,
  },
  parent: {
    width: 111,
    alignSelf: "stretch",
  },
  group: {
    marginLeft: 15,
    alignSelf: "stretch",
    flex: 1,
  },
  frameView: {
    height: 40,
    marginLeft: 15,
  },
  ataqueParent: {
    flexWrap: "wrap",
  },
  valorEntre01: {
    flex: 1,
  },
  frameGroup: {
    alignItems: "flex-end",
    flexWrap: "wrap",
    width: 361,
    flexDirection: "row",
    top: 0,
  },
  groupView: {
    height: 81,
    alignSelf: "stretch",
  },
  jnior: {
    width: 313,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  rectangleView: {
    width: 360,
  },
  jniorParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  categoraParent: {
    height: 63,
    top: 0,
  },
  frameWrapper1: {
    height: 63,
    width: 360,
    top: 0,
  },
  coolicon1: {
    width: "3.33%",
    right: "4.44%",
    left: "92.22%",
  },
  groupParent2: {
    height: 63,
    width: 360,
  },
  posicinPrincipal: {
    left: 1,
    top: 0,
    position: "absolute",
  },
  baseParent: {
    top: 23,
    width: 360,
    height: 40,
  },
  posicinPrincipalParent: {
    zIndex: 0,
    height: 63,
    width: 361,
  },
  coolicon2: {
    width: "3.32%",
    right: "4.71%",
    left: "91.97%",
    zIndex: 1,
  },
  groupParent3: {
    marginTop: 10,
  },
  altura: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 0,
    position: "absolute",
    top: 0,
  },
  valorEntre03: {
    left: 260,
    textAlign: "right",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    top: 2,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  alturaParent: {
    width: 350,
    height: 18,
  },
  groupWrapper: {
    marginTop: 5,
    width: 360,
    height: 40,
  },
  frameParent1: {
    top: 0,
  },
  frameWrapper2: {
    marginTop: 10,
    height: 63,
    width: 360,
  },
  parent3: {
    width: 360,
    height: 40,
  },
  groupWrapper1: {
    marginTop: 5,
  },
  groupParent1: {
    marginTop: 25,
    alignItems: "flex-end",
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
    paddingHorizontal: 145,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  boto: {
    marginTop: 27,
    flexDirection: "row",
  },
  frameParent: {
    alignItems: "center",
  },
  frameContainer: {
    marginTop: 64,
    alignItems: "center",
  },
  groupParent: {
    top: 60,
    left: 14,
    position: "absolute",
  },
  defineTusSkillsItem: {
    marginLeft: -74,
    top: 831,
    left: "50%",
    width: 148,
  },
  groupChild6: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390,
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
  group1: {
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
    left: 15,
    top: 10,
  },
  defineTusSkills: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default DefineTusSkills;
