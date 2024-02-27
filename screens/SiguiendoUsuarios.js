import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const SiguiendoUsuarios = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.siguiendoUsuarios}>
      <View style={styles.menuClub}>
        <Image
          style={[styles.maskGroupIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.menuClubChild, styles.childPosition]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ExplorarPersonaClubsFiltr")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-5351.png")}
          />
        </Pressable>
        <View style={[styles.menuClubItem, styles.childPosition]} />
        <Image
          style={[styles.menuClubInner, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <View style={[styles.lineView, styles.borderBorder]} />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/group-5403.png")}
          />
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("TusMensajes")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-5395.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-83.png")}
        />
      </View>
      <View style={styles.cabezeraContenido}>
        <View style={styles.cabezeraSuperior}>
          <Pressable
            style={styles.logo}
            onPress={() => navigation.navigate("LoginSwitch")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/logo2.png")}
            />
          </Pressable>
          <View style={[styles.superior, styles.superiorLayout]}>
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.postPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-81.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>2</Text>
            </View>
            <View style={[styles.vectorParent, styles.postPosition]}>
              <Image
                style={[styles.frameChild, styles.superiorLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-176.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group4.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                contentFit="cover"
                source={require("../assets/line-21.png")}
              />
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/group-6581.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.contenido}>
          <View style={styles.postLayout}>
            <View style={[styles.textoPost, styles.postPosition]}>
              <Text
                style={[styles.jordiEspeltMireu, styles.jordiTypo]}
              >{`Jordi Espelt Mireu quina jugada vaig fer l’altre dia 
entrenant al camp del meu poble. Toooop!...  más`}</Text>
              <Text style={[styles.verLos24, styles.verLos24Typo]}>
                Ver los 24 comentarios
              </Text>
              <Text style={[styles.alexMijaresPedazo, styles.verLos24Typo]}>
                Alex Mijares Pedazo de jugada crack! Graaan!
              </Text>
            </View>
            <View style={[styles.contenidoPost, styles.postPosition]}>
              <Image
                style={[styles.imagenIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/imagen4.png")}
              />
              <View style={styles.footerPost}>
                <View style={styles.likesBullets}>
                  <Text style={[styles.likes, styles.jordiTypo]}>
                    236 likes
                  </Text>
                  <View style={styles.bulletsSlider}>
                    <View style={styles.bullets}>
                      <View style={styles.component6}>
                        <Image
                          style={styles.component6Layout}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-83.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <Image
                  style={styles.botonesInteraccionIcon}
                  contentFit="cover"
                  source={require("../assets/buttons-interection.png")}
                />
              </View>
            </View>
            <View style={[styles.usuario, styles.postPosition]}>
              <View style={[styles.avatarNombre, styles.imagenIconFlexBox]}>
                <Image
                  style={[styles.avatarIcon, styles.childPosition]}
                  contentFit="cover"
                  source={require("../assets/mask-group1.png")}
                />
                <Text
                  style={[styles.jordiEspelt, styles.jordiTypo]}
                >{`Jordi Espelt  `}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.segundoPost, styles.postLayout]}>
            <View style={[styles.textoPost, styles.postPosition]}>
              <Text
                style={[styles.jordiEspeltMireu, styles.jordiTypo]}
              >{`Jordi Espelt Mireu quina jugada vaig fer l’altre dia 
entrenant al camp del meu poble. Toooop!...  más`}</Text>
              <Text style={[styles.verLos24, styles.verLos24Typo]}>
                Ver los 24 comentarios
              </Text>
              <Text style={[styles.alexMijaresPedazo, styles.verLos24Typo]}>
                Alex Mijares Pedazo de jugada crack! Graaan!
              </Text>
            </View>
            <View style={[styles.contenidoPost, styles.postPosition]}>
              <Image
                style={[styles.imagenIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/imagen4.png")}
              />
              <View style={styles.footerPost}>
                <View style={styles.likesBullets}>
                  <Text style={[styles.likes, styles.jordiTypo]}>
                    236 likes
                  </Text>
                  <View style={styles.bulletsSlider}>
                    <View style={styles.bullets}>
                      <View style={styles.component6}>
                        <Image
                          style={styles.component6Layout}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-83.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/ellipse-85.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <Image
                  style={styles.botonesInteraccionIcon}
                  contentFit="cover"
                  source={require("../assets/buttons-interection.png")}
                />
              </View>
            </View>
            <View style={[styles.usuario, styles.postPosition]}>
              <View style={[styles.avatarNombre, styles.imagenIconFlexBox]}>
                <Image
                  style={[styles.avatarIcon, styles.childPosition]}
                  contentFit="cover"
                  source={require("../assets/mask-group1.png")}
                />
                <Text
                  style={[styles.jordiEspelt, styles.jordiTypo]}
                >{`Jordi Espelt  `}</Text>
              </View>
            </View>
          </View>
        </View>
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
            <View style={[styles.capacity, styles.textLayout]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
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
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  frameItemLayout: {
    width: 0,
    position: "absolute",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  groupIconLayout: {
    bottom: "38.46%",
    top: "16.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
    overflow: "hidden",
  },
  superiorLayout: {
    height: 45,
    width: 120,
  },
  groupItemLayout: {
    height: 14,
    width: 14,
  },
  postPosition: {
    left: 0,
    position: "absolute",
  },
  textLayout: {
    height: 7,
    position: "absolute",
  },
  jordiTypo: {
    textAlign: "left",
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  verLos24Typo: {
    marginTop: 2,
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  component6Layout: {
    height: 5,
    width: 5,
  },
  imagenIconFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  postLayout: {
    height: 620,
    width: 360,
  },
  iphonePosition: {
    height: 34,
    left: 0,
    top: 0,
    width: 390,
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
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    width: "8.97%",
    height: "44.87%",
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
    width: "100%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  menuClubItem: {
    width: "19.74%",
    right: "80.26%",
    backgroundColor: Color.bLACK3SPORTSMATCH,
  },
  menuClubInner: {
    height: "99.36%",
    top: "0.64%",
    left: "19.87%",
    bottom: "0%",
    width: 0,
    maxHeight: "100%",
  },
  lineView: {
    height: "3.85%",
    width: "20.51%",
    top: "1.92%",
    right: "79.87%",
    bottom: "94.23%",
    left: "-0.38%",
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
  },
  groupChild: {
    width: "11.94%",
    right: "88.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  container: {
    left: 234,
    width: 34,
    height: 23,
    top: 3,
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
  groupIcon: {
    right: "44.87%",
    left: "46.15%",
  },
  maskGroupIcon2: {
    right: "6.15%",
    left: "84.87%",
  },
  ellipseIcon: {
    height: "6.41%",
    width: "1.28%",
    top: "60.26%",
    right: "28.97%",
    left: "69.74%",
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    display: "none",
    width: 390,
    position: "absolute",
  },
  logo: {
    width: 186,
    height: 44,
  },
  groupItem: {
    top: 0,
    height: 14,
    width: 14,
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    height: 7,
    left: 0,
    width: 14,
    top: 3,
  },
  ellipseParent: {
    left: 100,
    top: 2,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  groupIcon1: {
    height: "57.11%",
    width: "27.75%",
    top: "24.44%",
    right: "11.17%",
    bottom: "18.44%",
    left: "61.08%",
    zIndex: 1,
    position: "absolute",
  },
  frameItem: {
    left: 61,
    zIndex: 2,
    top: 2,
    height: 44,
  },
  frameInner: {
    top: 8,
    left: 16,
    width: 31,
    height: 31,
    zIndex: 3,
    position: "absolute",
  },
  vectorParent: {
    top: 0,
  },
  superior: {
    marginLeft: 69,
  },
  cabezeraSuperior: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  jordiEspeltMireu: {
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.t1TextSMALL_size,
  },
  verLos24: {
    color: Color.gREY2SPORTSMATCH,
  },
  alexMijaresPedazo: {
    color: Color.wHITESPORTSMATCH,
    marginTop: 2,
    fontWeight: "700",
  },
  textoPost: {
    top: 548,
  },
  imagenIcon: {
    borderRadius: Border.br_10xs,
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  likes: {
    textAlign: "left",
    fontSize: FontSize.t1TextSMALL_size,
  },
  component6Item: {
    marginLeft: 4,
  },
  component6: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexDirection: "row",
  },
  bullets: {
    flexDirection: "row",
  },
  bulletsSlider: {
    padding: Padding.p_3xs,
    marginLeft: 71,
  },
  likesBullets: {
    width: 210,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  botonesInteraccionIcon: {
    width: 152,
    height: 35,
  },
  footerPost: {
    marginTop: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  contenidoPost: {
    top: 45,
    width: 362,
    height: 495,
  },
  avatarIcon: {
    width: "16.43%",
    right: "83.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  jordiEspelt: {
    width: "79.81%",
    top: "28.57%",
    left: "20.19%",
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.t1TextSMALL_size,
    position: "absolute",
  },
  avatarNombre: {
    alignSelf: "stretch",
  },
  usuario: {
    width: 213,
    height: 35,
    top: 0,
  },
  segundoPost: {
    marginTop: 20,
  },
  contenido: {
    marginTop: 20,
  },
  cabezeraContenido: {
    top: 52,
    left: 15,
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
    right: 4,
    borderRadius: 2,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    top: 2,
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
    height: 24,
    left: 15,
  },
  siguiendoUsuarios: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default SiguiendoUsuarios;
