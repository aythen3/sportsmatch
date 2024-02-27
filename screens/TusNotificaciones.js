import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const TusNotificaciones = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tusNotificaciones}>
      <View style={styles.cabezeraMenuNotificacion}>
        <View style={styles.cabezera}>
          <View style={styles.cooliconParent}>
            <Pressable
              style={styles.coolicon}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/coolicon3.png")}
              />
            </Pressable>
            <Pressable
              style={styles.tuBuzn}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.tuBuzn1}>Tu Buzón</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.menuNotificaciones, styles.contenidoPosition]}>
          <View style={styles.menuFrame}>
            <View style={styles.menu}>
              <Text style={[styles.mensajes, styles.mensajesTypo]}>
                Mensajes
              </Text>
              <Pressable
                style={styles.notficaciones}
                onPress={() => navigation.navigate("TusNotificaciones")}
              >
                <Text style={[styles.notficaciones1, styles.mensajesTypo]}>
                  Notíficaciones
                </Text>
              </Pressable>
            </View>
            <Image
              style={styles.barraMenuIcon}
              contentFit="cover"
              source={require("../assets/line-6.png")}
            />
          </View>
          <View style={styles.notificaciones}>
            <View>
              <View>
                <View>
                  <View
                    style={[
                      styles.elementosNotificacionParent,
                      styles.avatarTextoLiniaSpaceBlock,
                    ]}
                  >
                    <View style={styles.elementosNotificacion}>
                      <Image
                        style={[styles.avatarIcon, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/avatar.png")}
                      />
                      <View style={styles.textoHoraSeal}>
                        <Image
                          style={styles.sealNotificacionIcon}
                          contentFit="cover"
                          source={require("../assets/ellipse-83.png")}
                        />
                        <View style={styles.textoHora}>
                          <Text
                            style={[styles.teHanSolicitado, styles.textTypo]}
                          >{`¡Te han solicitado un Match!
¡Felicidades! ¡Unió Esportíva Mataró 
se ha interesado por tí! `}</Text>
                          <Text style={[styles.text, styles.textTypo]}>
                            10:34
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.frameChild, styles.childLayout]} />
                  </View>
                  <View
                    style={[styles.elementosLiniasChild, styles.childLayout]}
                  />
                </View>
              </View>
              <View>
                <View>
                  <View style={styles.textoBotonWrapper}>
                    <View style={styles.textoBoton}>
                      <Text
                        style={[styles.joanGirHa, styles.textTypo]}
                      >{`Joan Giró ha comenzado a seguirte
15/04/23`}</Text>
                      <View style={[styles.botonGrupo, styles.fondoLayout]}>
                        <View style={styles.frameBoton}>
                          <View style={[styles.fondo, styles.fondoLayout]}>
                            <View
                              style={[styles.fondoInner, styles.fondoLayout]}
                            >
                              <View
                                style={[styles.groupChild, styles.fondoLayout]}
                              />
                            </View>
                          </View>
                          <View
                            style={[styles.contenido, styles.contenidoPosition]}
                          >
                            <Image
                              style={[
                                styles.pictogramaIcon,
                                styles.iconGroupLayout,
                              ]}
                              contentFit="cover"
                              source={require("../assets/pictograma1.png")}
                            />
                            <View style={styles.texto}>
                              <Text
                                style={[styles.seguir, styles.seguirPosition]}
                              >
                                Seguir
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.childLayout} />
                </View>
              </View>
            </View>
            <View style={styles.notificacion3}>
              <Text style={[styles.joanGirLe, styles.textTypo]}>
                Joan Giró Le gusta tu highlight
              </Text>
              <Text style={[styles.text1, styles.textTypo]}>14/05/23</Text>
            </View>
            <View style={styles.notificacion4}>
              <View style={styles.notificacionFrame}>
                <View
                  style={[
                    styles.avatarTextoLinia,
                    styles.avatarTextoLiniaSpaceBlock,
                  ]}
                >
                  <View style={styles.elementosNotificacion}>
                    <Image
                      style={styles.avatarIcon1}
                      contentFit="cover"
                      source={require("../assets/avatar.png")}
                    />
                    <View style={styles.textoHoraSeal}>
                      <Image
                        style={styles.sealNotificacionIcon}
                        contentFit="cover"
                        source={require("../assets/ellipse-83.png")}
                      />
                      <View style={styles.textoHora}>
                        <Text
                          style={[styles.joanGirHa, styles.textTypo]}
                        >{`¡Te han solicitado un Match!
¡Felicidades! ¡Unió Esportíva Mataró 
se ha interesado por tí! `}</Text>
                        <Text style={[styles.text, styles.textTypo]}>
                          10:34
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameChild, styles.childLayout]} />
                </View>
                <View
                  style={[styles.elementosLiniasChild, styles.childLayout]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupItemPosition}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap1.png")}
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
            source={require("../assets/cellular-connection4.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.menuClubParent, styles.menuPosition2]}>
        <View style={[styles.menuClub, styles.menuPosition2]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupLayout]}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
          <Image
            style={[styles.maskGroupIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
          <View style={[styles.menuClubChild, styles.menuPosition1]} />
          <View style={[styles.menuClubItem, styles.menuPosition]} />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("ExplorarPersonaClubsFiltr")}
          >
            <Image
              style={[styles.icon1, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-535.png")}
            />
          </Pressable>
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupInner, styles.menuPosition1]}
              contentFit="cover"
              source={require("../assets/group-5402.png")}
            />
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-5394.png")}
            />
          </View>
          <Image
            style={[styles.menuClubInner, styles.menuClubInnerLayout]}
            contentFit="cover"
            source={require("../assets/group-593.png")}
          />
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-51.png")}
          />
          <Image
            style={[styles.menuClubChild1, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={[styles.menuClubChild2, styles.menuPosition]}
            contentFit="cover"
            source={require("../assets/line-61.png")}
          />
        </View>
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-83.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.menuClubInnerLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenidoPosition: {
    zIndex: 1,
    position: "absolute",
  },
  mensajesTypo: {
    lineHeight: 12,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  avatarTextoLiniaSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
  },
  iconGroupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  childLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
  },
  fondoLayout: {
    height: 25,
    width: 90,
  },
  seguirPosition: {
    left: "0%",
    position: "absolute",
  },
  groupItemPosition: {
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
  menuPosition2: {
    height: 78,
    left: "50%",
    marginLeft: -195,
    width: 390,
    position: "absolute",
  },
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
  },
  iconPosition: {
    bottom: "33.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuPosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  menuPosition: {
    right: "20.51%",
    width: "19.74%",
    left: "59.74%",
    position: "absolute",
  },
  menuClubInnerLayout: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIconLayout: {
    width: 0,
    top: "0.64%",
    height: "99.36%",
    bottom: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  tuBuzn1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH,
  },
  tuBuzn: {
    marginLeft: 9,
  },
  cooliconParent: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  cabezera: {
    width: 109,
    height: 22,
    zIndex: 0,
  },
  mensajes: {
    width: 175,
    textAlign: "center",
    color: Color.gREY2SPORTSMATCH,
    fontWeight: "700",
  },
  notficaciones1: {
    color: Color.bALONCESTO,
    width: 172,
    textAlign: "center",
    fontWeight: "700",
  },
  notficaciones: {
    marginLeft: 13,
  },
  menu: {
    flexDirection: "row",
  },
  barraMenuIcon: {
    width: 188,
    marginTop: 8,
    maxHeight: "100%",
  },
  menuFrame: {
    alignItems: "flex-end",
  },
  avatarIcon: {
    height: 45,
    flex: 1,
  },
  sealNotificacionIcon: {
    width: 5,
    height: 5,
  },
  teHanSolicitado: {
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
  },
  text: {
    marginLeft: 14,
    color: Color.gREY2SPORTSMATCH,
  },
  textoHora: {
    width: 297,
    marginLeft: 3,
    flexDirection: "row",
  },
  textoHoraSeal: {
    marginLeft: 10,
    flexDirection: "row",
  },
  elementosNotificacion: {
    alignSelf: "stretch",
    alignItems: "flex-end",
    flexDirection: "row",
    zIndex: 0,
  },
  frameChild: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    top: 0,
  },
  elementosNotificacionParent: {
    width: 360,
    height: 62,
  },
  elementosLiniasChild: {
    marginTop: 5,
  },
  joanGirHa: {
    alignSelf: "stretch",
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
    flex: 1,
  },
  groupChild: {
    borderRadius: 81,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fondoInner: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  fondo: {
    zIndex: 0,
  },
  pictogramaIcon: {
    height: 15,
    flex: 1,
  },
  seguir: {
    fontSize: FontSize.t4TEXTMICRO_size,
    top: "0%",
    left: "0%",
    textAlign: "center",
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  texto: {
    width: 36,
    height: 13,
    marginLeft: 8,
  },
  contenido: {
    top: 5,
    width: 55,
    flexDirection: "row",
    left: 16,
  },
  frameBoton: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  botonGrupo: {
    marginLeft: 17,
  },
  textoBoton: {
    width: 356,
    flexDirection: "row",
    flex: 1,
  },
  textoBotonWrapper: {
    height: 55,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
  },
  joanGirLe: {
    color: Color.gREY2SPORTSMATCH,
    fontWeight: "700",
    flex: 1,
  },
  text1: {
    marginLeft: 48,
    color: Color.gREY2SPORTSMATCH,
  },
  notificacion3: {
    width: 357,
    marginTop: 8,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  avatarIcon1: {
    width: 45,
    height: 45,
  },
  avatarTextoLinia: {
    flex: 1,
  },
  notificacionFrame: {
    height: 65,
  },
  notificacion4: {
    marginTop: 8,
  },
  notificaciones: {
    marginTop: 25,
  },
  menuNotificaciones: {
    top: 54,
    left: 0,
  },
  cabezeraMenuNotificacion: {
    top: 60,
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    left: 16,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
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
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupIcon1: {
    top: "21.79%",
    right: "9.74%",
    left: "81.28%",
    width: "8.97%",
    height: "44.87%",
  },
  menuClubChild: {
    right: "0%",
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: "59.74%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  icon1: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "25.9%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    width: "7.69%",
    height: "37.95%",
    position: "absolute",
  },
  groupInner: {
    width: "11.94%",
    right: "88.06%",
    left: "0%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    top: 3,
    left: 234,
    width: 34,
    height: 23,
    position: "absolute",
  },
  groupParent: {
    height: "39.23%",
    width: "68.69%",
    top: "19.74%",
    right: "25.41%",
    bottom: "41.03%",
    left: "5.9%",
    position: "absolute",
  },
  menuClubInner: {
    right: "44.87%",
    left: "46.15%",
  },
  lineIcon: {
    left: "59.74%",
  },
  menuClubChild1: {
    left: "79.62%",
  },
  menuClubChild2: {
    height: "3.85%",
    top: "1.92%",
    bottom: "94.23%",
    left: "59.74%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  menuClub: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
  },
  ellipseIcon: {
    height: "6.41%",
    width: "1.28%",
    top: "60.26%",
    right: "28.97%",
    left: "69.74%",
  },
  maskGroupIcon2: {
    right: "6.15%",
    left: "84.87%",
  },
  menuClubParent: {
    top: 766,
  },
  tusNotificaciones: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default TusNotificaciones;
