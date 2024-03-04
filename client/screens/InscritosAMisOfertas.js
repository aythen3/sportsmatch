import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const InscritosAMisOfertas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inscritosAMisOfertas}>
      <View style={styles.contenido}>
        <View>
          <View>
            <View style={styles.frameGroup}>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.maskGroupIcon}
                  contentFit="cover"
                  source={require("../assets/mask-group13.png")}
                />
                <Pressable
                  style={[
                    styles.jordiEspeltWrapper,
                    styles.groupFrameSpaceBlock,
                  ]}
                  onPress={() => navigation.navigate("ChatAbierto1")}
                >
                  <Text
                    style={[styles.jordiEspelt, styles.carlesMirTypo]}
                  >{`Jordi Espelt
`}</Text>
                </Pressable>
              </View>
              <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                <View
                  style={[styles.frameContainer, styles.groupWrapperLayout]}
                >
                  <View style={styles.groupParent}>
                    <View
                      style={[styles.matchAssetWrapper, styles.matchLayout]}
                    >
                      <View style={[styles.matchAsset, styles.matchLayout]}>
                        <View
                          style={[
                            styles.matchAssetInner,
                            styles.groupInnerPosition,
                          ]}
                        >
                          <View style={styles.groupChild} />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.match, styles.timeTypo]}>Match</Text>
                  </View>
                  <View style={[styles.frameWrapper, styles.frameLayout]}>
                    <View style={styles.groupContainer}>
                      <Image
                        style={[styles.frameChild, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/group-433.png")}
                      />
                      <Image
                        style={[styles.groupIcon, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/group8.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameItem, styles.frameItemLayout]} />
            <View style={styles.frameView}>
              <View style={styles.frameGroup}>
                <Image
                  style={styles.maskGroupIcon}
                  contentFit="cover"
                  source={require("../assets/mask-group14.png")}
                />
                <View style={[styles.groupFrame, styles.groupFrameSpaceBlock]}>
                  <View style={[styles.groupView, styles.groupPosition]}>
                    <View style={[styles.groupView, styles.groupPosition]}>
                      <Text style={[styles.carlesMir, styles.carlesMirTypo]}>
                        Carles Mir
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                <View
                  style={[styles.frameContainer, styles.groupWrapperLayout]}
                >
                  <View style={styles.groupParent}>
                    <View
                      style={[styles.matchAssetWrapper, styles.matchLayout]}
                    >
                      <View style={[styles.matchAsset, styles.matchLayout]}>
                        <View
                          style={[
                            styles.matchAssetInner,
                            styles.groupInnerPosition,
                          ]}
                        >
                          <View style={styles.groupChild} />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.match, styles.timeTypo]}>Match</Text>
                  </View>
                  <View style={[styles.frameWrapper, styles.frameLayout]}>
                    <View style={styles.groupContainer}>
                      <Image
                        style={[styles.frameChild, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/group-4331.png")}
                      />
                      <Image
                        style={[styles.groupIcon, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/group9.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameItem, styles.frameItemLayout]} />
          </View>
          <View style={styles.groupParent3}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-815.png")}
            />
            <View style={styles.groupWrapper2}>
              <View style={[styles.groupView, styles.groupPosition]}>
                <View style={[styles.groupView, styles.groupPosition]}>
                  <Text style={[styles.carlesMir, styles.carlesMirTypo]}>
                    + 4 inscripciones más
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.perfilesChild, styles.frameItemLayout]} />
        </View>
        <View style={[styles.footerPremium, styles.textoSpaceBlock]}>
          <View style={styles.footerPremiumFrame}>
            <Image
              style={styles.simboloIcon}
              contentFit="cover"
              source={require("../assets/simbolo.png")}
            />
            <Text
              style={[styles.texto1, styles.textoSpaceBlock]}
            >{`Con tu modelo de suscripción no puedes 
visualizar todas las inscripciones`}</Text>
            <Text
              style={[styles.texto2, styles.textoSpaceBlock]}
            >{`¡Sube de nivel en tu cuenta para 
visualizar todas las inscripciones!`}</Text>
            <View style={[styles.botonPremium, styles.capacityBg]}>
              <Text style={styles.textoBoton}>Hazte premium</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.inscritosAMisOfertasChild, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <View style={[styles.menuClub, styles.menuClubPosition]}>
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <View style={[styles.menuClubChild, styles.groupPosition]} />
        <View style={[styles.menuClubItem, styles.groupPosition]} />
        <View style={[styles.menuClubInner, styles.borderBorder]} />
        <Pressable
          style={[styles.ellipseParent, styles.ellipseParentPosition]}
          onPress={() => navigation.navigate("PerfilDatosPropioClub")}
        >
          <Image
            style={[styles.groupInner, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-765.png")}
          />
          <Image
            style={[
              styles.logoUem21RemovebgPreview1Icon,
              styles.iconGroupLayout,
            ]}
            contentFit="cover"
            source={require("../assets/logo-uem21removebgpreview-16.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ExplorarClubs")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-5351.png")}
          />
        </Pressable>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Image
          style={[styles.menuClubChild1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <View style={styles.groupParent4}>
          <Pressable
            style={[styles.container, styles.groupPosition]}
            onPress={() => navigation.navigate("InscritosAMisOfertas")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-5404.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate("TusMensajes1")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-5391.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menuClubChild2, styles.ellipseParentPosition]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
      </View>
      <Image
        style={[styles.inscritosAMisOfertasItem, styles.menuClubPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={styles.inscritosParent}>
        <Pressable
          style={[styles.inscritos, styles.carlesMirPosition]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.inscritos1, styles.carlesMirTypo]}>
            Inscritos
          </Text>
        </Pressable>
        <Pressable style={styles.coolicon} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/coolicon4.png")}
          />
        </Pressable>
      </View>
      <View style={styles.iphonePosition}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityBg]} />
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
  groupFrameSpaceBlock: {
    marginLeft: 15,
    width: 79,
  },
  carlesMirTypo: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  groupWrapperLayout: {
    height: 38,
    width: 101,
  },
  matchLayout: {
    height: 37,
    width: 101,
  },
  groupInnerPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
  },
  frameLayout: {
    width: 38,
    height: 38,
  },
  iconGroupLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frameItemLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.bLACK3SPORTSMATCH,
    width: 360,
    borderStyle: "solid",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textoSpaceBlock: {
    marginTop: 9,
    width: 390,
  },
  capacityBg: {
    backgroundColor: Color.wHITESPORTSMATCH,
    position: "absolute",
  },
  menuClubPosition: {
    left: "50%",
    position: "absolute",
  },
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  ellipseParentPosition: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
  },
  lineIconLayout: {
    width: 0,
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  carlesMirPosition: {
    top: "0%",
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
  maskGroupIcon: {
    width: 45,
    height: 45,
  },
  jordiEspelt: {
    fontWeight: "700",
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    left: "0%",
    top: "0%",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  jordiEspeltWrapper: {
    height: 16,
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupChild: {
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_81xl,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  matchAssetInner: {
    height: "94.59%",
    top: "2.7%",
    bottom: "2.7%",
    position: "absolute",
  },
  matchAsset: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  matchAssetWrapper: {
    zIndex: 0,
  },
  match: {
    top: "27.03%",
    left: "43.56%",
    color: Color.bALONCESTO,
    zIndex: 1,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    lineHeight: 17,
    position: "absolute",
  },
  groupParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  groupIcon: {
    height: "55%",
    width: "71.32%",
    top: "23.68%",
    right: "15%",
    bottom: "21.32%",
    left: "13.68%",
    opacity: 0.9,
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  groupContainer: {
    top: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameWrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameContainer: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginLeft: 118,
  },
  frameItem: {
    marginTop: 11,
  },
  carlesMir: {
    fontWeight: "700",
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    textAlign: "left",
  },
  groupView: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  groupFrame: {
    height: 17,
  },
  frameView: {
    marginTop: 11,
    flexDirection: "row",
  },
  frameChild1: {
    width: 52,
    height: 49,
  },
  groupWrapper2: {
    width: 266,
    marginLeft: 11,
    height: 17,
  },
  groupParent3: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  perfilesChild: {
    marginTop: 10,
  },
  simboloIcon: {
    width: 46,
    height: 46,
    zIndex: 0,
  },
  texto1: {
    color: Color.gREY2SPORTSMATCH,
    zIndex: 1,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  texto2: {
    zIndex: 2,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
  },
  textoBoton: {
    fontSize: FontSize.button_size,
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  botonPremium: {
    top: 144,
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    zIndex: 3,
    left: 15,
    width: 360,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    alignItems: "center",
  },
  footerPremiumFrame: {
    top: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  footerPremium: {
    height: 134,
  },
  contenido: {
    top: 109,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  inscritosAMisOfertasChild: {
    height: "0.59%",
    width: "1.28%",
    top: "91.11%",
    right: "28.97%",
    bottom: "8.29%",
    left: "69.74%",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupIcon2: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
  },
  maskGroupIcon3: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: "0%",
    left: "0%",
    width: "100%",
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    width: 81,
    left: 0,
  },
  menuClubInner: {
    height: "3.85%",
    width: "21.54%",
    top: "1.92%",
    right: "78.85%",
    bottom: "94.23%",
    left: "-0.38%",
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
  },
  groupInner: {
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  logoUem21RemovebgPreview1Icon: {
    height: "72.57%",
    width: "77.43%",
    top: "13.71%",
    right: "10.86%",
    bottom: "13.71%",
    left: "11.71%",
    maxHeight: "100%",
    position: "absolute",
  },
  ellipseParent: {
    right: "6.15%",
    left: "84.87%",
  },
  icon: {
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
  lineIcon: {
    left: "20.77%",
  },
  menuClubChild1: {
    left: "40.51%",
  },
  container: {
    right: "88.06%",
    width: "11.94%",
    left: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  frame: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: "absolute",
  },
  groupParent4: {
    height: "39.23%",
    width: "68.69%",
    top: "19.74%",
    right: "25.41%",
    bottom: "41.03%",
    left: "5.9%",
    position: "absolute",
  },
  menuClubChild2: {
    right: "44.87%",
    left: "46.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    left: "50%",
  },
  inscritosAMisOfertasItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
  },
  inscritos1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
  },
  inscritos: {
    left: "17.48%",
  },
  coolicon: {
    top: "18.18%",
    right: "91.46%",
    bottom: "13.64%",
    width: "8.54%",
    height: "68.18%",
    left: "0%",
    position: "absolute",
  },
  inscritosParent: {
    height: "2.61%",
    width: "26.41%",
    top: "7.11%",
    right: "69.49%",
    bottom: "90.28%",
    left: "4.1%",
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
    top: 0,
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
    top: 10,
    height: 24,
    left: 15,
  },
  inscritosAMisOfertas: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default InscritosAMisOfertas;
