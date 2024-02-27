import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TusMensajes1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tusMensajes}>
      <View style={styles.tuBuznParent}>
        <Pressable style={styles.tuBuzn} onPress={() => navigation.goBack()}>
          <Text style={[styles.tuBuzn1, styles.buscarTypo]}>Tu Buzón</Text>
        </Pressable>
        <Pressable style={styles.coolicon} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/coolicon4.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.tusMensajesChild, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Text style={[styles.mensajes, styles.matchTypo]}>Mensajes</Text>
      <Pressable
        style={[styles.notficaciones, styles.mensajesPosition]}
        onPress={() => navigation.navigate("TusNotificaciones1")}
      >
        <Text style={[styles.notficaciones1, styles.carlesMirYoTypo]}>
          Notíficaciones
        </Text>
      </Pressable>
      <View style={styles.ellipseParentPosition}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-762.png")}
        />
        <Image
          style={[styles.logoUem21RemovebgPreview1Icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/logo-uem21removebgpreview-13.png")}
        />
      </View>
      <Pressable
        style={styles.jordiEspeltPerfectoQuedamoParent}
        onPress={() => navigation.navigate("ChatAbierto1")}
      >
        <Text
          style={[styles.jordiEspeltPerfecto, styles.textLayout]}
        >{`Jordi Espelt
Perfecto! Quedamos así pues, muchas...`}</Text>
        <Text style={[styles.text, styles.textLayout]}>10:33</Text>
      </Pressable>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text1, styles.textLayout]}>09:42</Text>
        <View style={[styles.groupWrapper, styles.groupChildPosition]}>
          <View
            style={[
              styles.carlesMirYoTengoUnPerfilParent,
              styles.groupChildPosition,
            ]}
          >
            <Text style={[styles.carlesMirYo, styles.textLayout]}>{`Carles Mir
    Yo tengo un perfil más de atacante...`}</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-4541.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.tusMensajesInner, styles.parentLayout]}>
        <View
          style={[
            styles.carlesMirYoTengoUnPerfilParent,
            styles.groupChildPosition,
          ]}
        >
          <View
            style={[
              styles.carlesMirYoTengoUnPerfilParent,
              styles.groupChildPosition,
            ]}
          >
            <Text
              style={[styles.carlaPrezPdele, styles.textLayout]}
            >{`Carla Pérez 
Pídele un match para hablar`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.tusMensajesItem, styles.tusLayout]} />
      <View style={[styles.lineView, styles.tusLayout]} />
      <View style={[styles.tusMensajesChild1, styles.tusLayout]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <View style={[styles.search, styles.searchPosition]}>
        <View
          style={[
            styles.carlesMirYoTengoUnPerfilParent,
            styles.groupChildPosition,
          ]}
        >
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
        </View>
        <Image
          style={[styles.searchChild, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-428.png")}
        />
        <Text style={[styles.buscar, styles.buscarTypo]}>Buscar</Text>
      </View>
      <Image
        style={[styles.tusMensajesChild2, styles.tusChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <Image
        style={[styles.tusMensajesChild3, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupLayout1]}
        contentFit="cover"
        source={require("../assets/mask-group15.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout1]}
        contentFit="cover"
        source={require("../assets/mask-group17.png")}
      />
      <Image
        style={[styles.maskGroupIcon2, styles.ellipseParentPosition]}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.frameParent, styles.groupViewLayout]}>
          <View style={styles.groupParent}>
            <View style={[styles.matchAssetWrapper, styles.matchLayout]}>
              <View style={[styles.matchAsset, styles.matchLayout]}>
                <View style={[styles.matchAssetInner, styles.childPosition1]}>
                  <View
                    style={[styles.rectangleView, styles.groupInnerPosition]}
                  />
                </View>
              </View>
            </View>
            <Text style={[styles.match, styles.textLayout]}>Match</Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-494.png")}
          />
        </View>
      </View>
      <View style={styles.groupChild1Position}>
        <View style={[styles.groupChild1, styles.groupChild1Position]} />
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
            source={require("../assets/cellular-connection3.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={styles.menuClub}>
        <Image
          style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon4, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.menuClubChild, styles.groupChildPosition]} />
        <View style={[styles.menuClubItem, styles.menuPosition]} />
        <Pressable
          style={[styles.ellipseGroup, styles.ellipseGroupPosition]}
          onPress={() => navigation.navigate("PerfilDatosPropioClub")}
        >
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-765.png")}
          />
          <Image
            style={[
              styles.logoUem21RemovebgPreview1Icon1,
              styles.iconGroupLayout,
            ]}
            contentFit="cover"
            source={require("../assets/logo-uem21removebgpreview-17.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ExplorarClubs")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-535.png")}
          />
        </Pressable>
        <View style={styles.groupParent1}>
          <Pressable
            style={[styles.container, styles.groupChildPosition]}
            onPress={() => navigation.navigate("SiguiendoJugadores")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-5402.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupChild3, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/group-5396.png")}
          />
        </View>
        <Image
          style={[styles.menuClubInner, styles.ellipseGroupPosition]}
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
        style={[styles.tusMensajesChild4, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <Image
        style={[styles.tusMensajesChild5, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buscarTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "left",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  matchTypo: {
    color: Color.bALONCESTO,
    textAlign: "center",
    fontWeight: "700",
  },
  mensajesPosition: {
    top: "13.51%",
    position: "absolute",
  },
  carlesMirYoTypo: {
    fontWeight: "700",
    fontSize: FontSize.t1TextSMALL_size,
  },
  groupChildPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  textLayout: {
    lineHeight: 17,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  parentLayout: {
    height: "4.03%",
    position: "absolute",
  },
  tusLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    left: 14,
    borderStyle: "solid",
    position: "absolute",
  },
  searchPosition: {
    left: "50%",
    position: "absolute",
  },
  groupInnerPosition: {
    borderRadius: Border.br_81xl,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  tusChildLayout: {
    top: 111,
    height: 5,
    width: 5,
  },
  childPosition: {
    left: 234,
    position: "absolute",
  },
  maskGroupLayout1: {
    right: "84.36%",
    width: "11.54%",
    height: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "4.1%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseParentPosition: {
    bottom: "69.55%",
    top: "25.12%",
    right: "84.36%",
    width: "11.54%",
    height: "5.33%",
    left: "4.1%",
    position: "absolute",
  },
  groupViewLayout: {
    height: 38,
    width: 101,
    position: "absolute",
  },
  matchLayout: {
    height: 37,
    width: 101,
  },
  childPosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild1Position: {
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
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
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
  ellipseGroupPosition: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
  },
  lineIconLayout: {
    width: 0,
    top: "0.64%",
    height: "99.36%",
    bottom: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  tuBuzn1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
  },
  tuBuzn: {
    left: "16.51%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  coolicon: {
    top: "18.18%",
    right: "91.93%",
    bottom: "13.64%",
    width: "8.07%",
    height: "68.18%",
    left: "0%",
    position: "absolute",
  },
  tuBuznParent: {
    height: "2.61%",
    width: "27.95%",
    top: "7.11%",
    right: "67.95%",
    bottom: "90.28%",
    left: "4.1%",
    position: "absolute",
  },
  tusMensajesChild: {
    height: "0.36%",
    width: "48.21%",
    top: "15.88%",
    right: "51.79%",
    bottom: "83.77%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
  },
  mensajes: {
    width: "44.87%",
    left: "3.59%",
    textAlign: "center",
    lineHeight: 12,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    top: "13.51%",
    position: "absolute",
  },
  notficaciones1: {
    width: "44.1%",
    color: Color.gREY2SPORTSMATCH,
    textAlign: "center",
    lineHeight: 12,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  notficaciones: {
    left: "51.79%",
  },
  groupChild: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  jordiEspeltPerfecto: {
    width: "84.41%",
    fontWeight: "700",
    fontSize: FontSize.t1TextSMALL_size,
    left: "0%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    top: "0%",
  },
  text: {
    left: "88.47%",
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
    top: "0%",
  },
  jordiEspeltPerfectoQuedamoParent: {
    height: "6.04%",
    width: "75.64%",
    top: "25.83%",
    bottom: "68.13%",
    left: "20.26%",
    right: "4.1%",
    position: "absolute",
  },
  text1: {
    left: "87.5%",
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
    top: "0%",
  },
  carlesMirYo: {
    width: "99.63%",
    left: "0.37%",
    fontWeight: "700",
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    top: "0%",
  },
  groupItem: {
    top: 22,
    width: 11,
    height: 8,
    left: 0,
    position: "absolute",
  },
  carlesMirYoTengoUnPerfilParent: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    width: "90.2%",
    right: "9.8%",
    left: "0%",
    position: "absolute",
  },
  parent: {
    width: "75.9%",
    top: "34.36%",
    bottom: "61.61%",
    left: "20%",
    right: "4.1%",
  },
  carlaPrezPdele: {
    fontWeight: "700",
    fontSize: FontSize.t1TextSMALL_size,
    left: "0%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    top: "0%",
    width: "100%",
    lineHeight: 17,
  },
  tusMensajesInner: {
    width: "68.21%",
    top: "43.25%",
    right: "11.54%",
    bottom: "52.73%",
    left: "20.26%",
  },
  tusMensajesItem: {
    top: 344,
  },
  lineView: {
    top: 419,
  },
  tusMensajesChild1: {
    top: 271,
  },
  ellipseIcon: {
    top: 224,
    left: 332,
    height: 5,
    width: 5,
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderStyle: "solid",
  },
  searchChild: {
    height: "42.86%",
    width: "3.58%",
    top: "31.43%",
    right: "92.79%",
    bottom: "25.71%",
    left: "3.63%",
    maxHeight: "100%",
    position: "absolute",
  },
  buscar: {
    height: "45.14%",
    width: "70.45%",
    top: "25.14%",
    left: "9.44%",
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.gREY2SPORTSMATCH,
    textAlign: "left",
    position: "absolute",
  },
  search: {
    marginLeft: -179,
    top: 156,
    width: 358,
    height: 35,
  },
  tusMensajesChild2: {
    left: 63,
    position: "absolute",
  },
  tusMensajesChild3: {
    top: 111,
    height: 5,
    width: 5,
  },
  maskGroupIcon: {
    top: "33.65%",
    bottom: "61.02%",
  },
  maskGroupIcon1: {
    top: "42.54%",
    bottom: "52.13%",
  },
  maskGroupIcon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleView: {
    backgroundColor: Color.colorMaroon,
  },
  matchAssetInner: {
    height: "94.59%",
    top: "2.7%",
    bottom: "2.7%",
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
    zIndex: 1,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
    color: Color.bALONCESTO,
    fontWeight: "700",
  },
  groupParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    width: "37.62%",
    right: "62.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    position: "absolute",
  },
  frameParent: {
    top: 0,
    left: 0,
  },
  groupView: {
    top: 363,
    left: 274,
  },
  groupChild1: {
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
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  maskGroupIcon3: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
  },
  maskGroupIcon4: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: "59.74%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  logoUem21RemovebgPreview1Icon1: {
    height: "72.57%",
    width: "77.43%",
    top: "13.71%",
    right: "10.86%",
    bottom: "13.71%",
    left: "11.71%",
    maxHeight: "100%",
    position: "absolute",
  },
  ellipseGroup: {
    right: "6.15%",
    left: "84.87%",
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
  container: {
    right: "88.06%",
    width: "11.94%",
    left: "0%",
    position: "absolute",
  },
  groupChild3: {
    top: 3,
    width: 34,
    height: 23,
  },
  groupParent1: {
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    position: "absolute",
  },
  tusMensajesChild4: {
    height: "0.59%",
    width: "1.28%",
    top: "96.33%",
    right: "28.97%",
    bottom: "3.08%",
    left: "69.74%",
    maxHeight: "100%",
    position: "absolute",
  },
  tusMensajesChild5: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
  },
  tusMensajes: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default TusMensajes1;
