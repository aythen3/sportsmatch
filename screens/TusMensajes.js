import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const TusMensajes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tusMensajes}>
      <View style={styles.grupoBloquesClub}>
        <View style={[styles.rBloqueClub, styles.bloqueFlexBox]}>
          <View style={styles.avatarClub}>
            <Image
              style={[styles.avatarClubChild, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-762.png")}
            />
            <Image
              style={[
                styles.logoUem21RemovebgPreview1Icon,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/logo-uem21removebgpreview-13.png")}
            />
          </View>
          <View style={[styles.textoMensajeFrame, styles.textoFlexBox]}>
            <Pressable
              style={styles.textoFlexBox}
              onPress={() => navigation.navigate("ChatAbierto")}
            >
              <Text style={[styles.uniEsportvaMatarContainer, styles.textTypo]}>
                <Text style={styles.uniEsportvaMatar}>{`Unió Esportíva Mataró
`}</Text>
                <Text style={styles.perfectoQuedamosAs}>
                  Perfecto! Quedamos así pues, muchas...
                </Text>
              </Text>
            </Pressable>
          </View>
          <Text style={[styles.text, styles.textTypo]}>10:33</Text>
        </View>
        <View style={styles.grupoBloquesClubChild} />
        <View style={[styles.rBloqueClub1, styles.bloqueFlexBox]}>
          <View style={styles.avatarClub}>
            <Image
              style={[styles.avatarClubChild, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-762.png")}
            />
            <Image
              style={[
                styles.logoUem21RemovebgPreview1Icon,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/logo-uem21removebgpreview-13.png")}
            />
          </View>
          <View style={[styles.textoMensajeFrame, styles.textoFlexBox]}>
            <Pressable
              style={styles.textoFlexBox}
              onPress={() => navigation.navigate("ChatAbierto")}
            >
              <Text style={[styles.uniEsportvaMatarContainer, styles.textTypo]}>
                <Text style={styles.uniEsportvaMatar}>{`Unió Esportíva Mataró
`}</Text>
                <Text style={styles.perfectoQuedamosAs}>
                  Perfecto! Quedamos así pues, muchas...
                </Text>
              </Text>
            </Pressable>
          </View>
          <Text style={[styles.text, styles.textTypo]}>10:33</Text>
        </View>
        <View style={styles.grupoBloquesClubChild} />
        <View style={[styles.rBloqueClub1, styles.bloqueFlexBox]}>
          <View style={styles.avatarClub}>
            <Image
              style={[styles.avatarClubChild, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-762.png")}
            />
            <Image
              style={[
                styles.logoUem21RemovebgPreview1Icon,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/logo-uem21removebgpreview-13.png")}
            />
          </View>
          <View style={[styles.textoMensajeFrame, styles.textoFlexBox]}>
            <Pressable
              style={styles.textoFlexBox}
              onPress={() => navigation.navigate("ChatAbierto")}
            >
              <Text style={[styles.uniEsportvaMatarContainer, styles.textTypo]}>
                <Text style={styles.uniEsportvaMatar}>{`Unió Esportíva Mataró
`}</Text>
                <Text style={styles.perfectoQuedamosAs}>
                  Perfecto! Quedamos así pues, muchas...
                </Text>
              </Text>
            </Pressable>
          </View>
          <Text style={[styles.text, styles.textTypo]}>10:33</Text>
        </View>
        <View style={styles.grupoBloquesClubChild} />
      </View>
      <Image
        style={[
          styles.notificacionBloqueClub,
          styles.notificacionBloqueClubLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <View style={styles.search}>
        <View style={styles.searchInner}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Image
          style={[styles.searchChild, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-428.png")}
        />
        <Text style={styles.buscar}>Buscar</Text>
      </View>
      <Image
        style={[
          styles.alertasNotificacionesIcon,
          styles.notificacionBloqueClubLayout,
        ]}
        contentFit="cover"
        source={require("../assets/alertas-notificaciones.png")}
      />
      <View style={[styles.menuFrame, styles.framePosition]}>
        <View style={styles.menu}>
          <Text style={[styles.mensajes, styles.mensajesTypo]}>Mensajes</Text>
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
      <View style={styles.cabezera}>
        <View style={[styles.frameCabezera, styles.framePosition]}>
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
          <Pressable style={styles.tuBuzn} onPress={() => navigation.goBack()}>
            <Text style={styles.tuBuzn1}>Tu Buzón</Text>
          </Pressable>
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
            source={require("../assets/cellular-connection4.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.menuClubParent, styles.menuPosition1]}>
        <View style={[styles.menuClub, styles.menuPosition1]}>
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
          <View style={[styles.menuClubChild, styles.groupChildPosition]} />
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
              style={[styles.groupInner, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-5402.png")}
            />
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-5393.png")}
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
  bloqueFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  textoFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  textTypo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
  },
  notificacionBloqueClubLayout: {
    height: 5,
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  mensajesTypo: {
    lineHeight: 12,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    fontSize: FontSize.t1TextSMALL_size,
  },
  groupItemPosition: {
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
  menuPosition1: {
    height: 78,
    marginLeft: -195,
    width: 390,
    left: "50%",
    position: "absolute",
  },
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
  },
  iconPosition: {
    bottom: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIconLayout: {
    width: 0,
    top: "0.64%",
    height: "99.36%",
    maxHeight: "100%",
    bottom: "0%",
    position: "absolute",
  },
  avatarClubChild: {
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  logoUem21RemovebgPreview1Icon: {
    height: "72.44%",
    width: "77.56%",
    top: "13.78%",
    right: "10.67%",
    bottom: "13.78%",
    left: "11.78%",
    maxHeight: "100%",
    position: "absolute",
  },
  avatarClub: {
    width: 45,
    height: 45,
  },
  uniEsportvaMatar: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  perfectoQuedamosAs: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  uniEsportvaMatarContainer: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    fontSize: FontSize.t1TextSMALL_size,
  },
  textoMensajeFrame: {
    marginLeft: 18,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  text: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "left",
    marginLeft: 18,
  },
  rBloqueClub: {
    width: 358,
  },
  grupoBloquesClubChild: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    marginTop: 20,
    borderStyle: "solid",
  },
  rBloqueClub1: {
    marginTop: 20,
    width: 358,
  },
  grupoBloquesClub: {
    top: 213,
    left: 14,
    alignItems: "flex-end",
    position: "absolute",
  },
  notificacionBloqueClub: {
    top: 214,
    left: 332,
    width: 5,
  },
  groupChild: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  searchInner: {
    height: 35,
    zIndex: 0,
    width: 358,
  },
  searchChild: {
    height: "42.86%",
    width: "3.58%",
    top: "31.43%",
    right: "92.79%",
    bottom: "25.71%",
    left: "3.63%",
    zIndex: 1,
    maxHeight: "100%",
    position: "absolute",
  },
  buscar: {
    height: "45.14%",
    width: "70.45%",
    top: "25.14%",
    left: "9.44%",
    zIndex: 2,
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "left",
    position: "absolute",
  },
  search: {
    marginLeft: -179,
    top: 156,
    left: "50%",
    position: "absolute",
  },
  alertasNotificacionesIcon: {
    top: 111,
    left: 48,
    width: 177,
  },
  mensajes: {
    color: Color.bALONCESTO,
    width: 175,
    textAlign: "center",
  },
  notficaciones1: {
    width: 172,
    textAlign: "center",
    color: Color.gREY2SPORTSMATCH,
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
    top: 114,
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
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
  },
  tuBuzn: {
    marginLeft: 9,
  },
  frameCabezera: {
    alignItems: "center",
    top: 0,
    flexDirection: "row",
  },
  cabezera: {
    top: 60,
    left: 16,
    width: 109,
    height: 22,
    position: "absolute",
  },
  groupItem: {
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
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    backgroundColor: Color.bLACK2SPORTMATCH,
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: "59.74%",
    bottom: "0%",
    top: "0%",
    right: "20.51%",
    width: "19.74%",
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
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    bottom: "0%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  tusMensajes: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default TusMensajes;
