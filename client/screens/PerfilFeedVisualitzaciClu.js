import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilFeedVisualitzaciClu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilFeedVisualitzaciClu}>
      <View
        style={[
          styles.hannahRedingKqyboqrw5wUnspParent,
          styles.groupChildLayout,
        ]}
      >
        <Image
          style={[
            styles.hannahRedingKqyboqrw5wUnspParent,
            styles.groupChildLayout,
          ]}
          contentFit="cover"
          source={require("../assets/hannahredingkqyboqrw5wunsplash-12.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        />
      </View>
      <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
        <Pressable
          style={styles.jordiEspeltPvotContainer}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={[styles.jordiEspeltPvotBaloncesto, styles.jugandoAlUniTypo]}
          >{`Jordi Espelt
Pívot
Baloncesto`}</Text>
        </Pressable>
      </View>
      <Text
        style={[styles.jugandoAlUni, styles.seguidoresLayout]}
      >{`Jugando al Unió Esportíva 
de Mataró desde el 2021`}</Text>
      <Image
        style={[
          styles.hannahRedingKqyboqrw5wUnspIcon1,
          styles.basketballLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/imagen-1.png")}
      />
      <Image
        style={[styles.basketballUnsplash1, styles.basketballLayout2]}
        contentFit="cover"
        source={require("../assets/basketball-unsplash-11.png")}
      />
      <Image
        style={[styles.basketballJedVillejo1, styles.basketballLayout2]}
        contentFit="cover"
        source={require("../assets/basketball-jed-villejo-11.png")}
      />
      <Image
        style={[styles.basketballUnsplash31, styles.basketballLayout1]}
        contentFit="cover"
        source={require("../assets/basketball-unsplash-3-11.png")}
      />
      <Image
        style={[styles.basketballTimMossholder1, styles.basketballLayout1]}
        contentFit="cover"
        source={require("../assets/basketball-tim-mossholder-11.png")}
      />
      <Image
        style={[styles.basketballMiraKireeva11, styles.basketballLayout1]}
        contentFit="cover"
        source={require("../assets/basketball-mira-kireeva-1-11.png")}
      />
      <Image
        style={[styles.basketballMiraKireeva1, styles.basketballLayout]}
        contentFit="cover"
        source={require("../assets/basketball-mira-kireeva-11.png")}
      />
      <Image
        style={[styles.basketballUnsplash21, styles.basketballLayout]}
        contentFit="cover"
        source={require("../assets/basketball-unsplash-2-11.png")}
      />
      <Image
        style={[styles.basketballAnthonyTedja1, styles.basketballLayout]}
        contentFit="cover"
        source={require("../assets/basketball-anthony-tedja-11.png")}
      />
      <Image
        style={styles.perfilFeedVisualitzaciCluChild}
        contentFit="cover"
        source={require("../assets/group-516.png")}
      />
      <Image
        style={[styles.perfilFeedVisualitzaciCluItem, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group-5161.png")}
      />
      <Image
        style={styles.perfilFeedVisualitzaciCluInner}
        contentFit="cover"
        source={require("../assets/vector-8.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.groupLayout3]} />
        <View style={[styles.groupInner, styles.groupLayout3]} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <View style={[styles.lineView, styles.borderBorder]} />
      <View style={[styles.rectangleGroup, styles.groupLayout2]}>
        <View style={[styles.groupChild2, styles.groupLayout2]} />
        <Text style={[styles.text, styles.textPosition]}>24</Text>
        <Text style={[styles.seguidores, styles.textPosition]}>Seguidores</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.matchAssetWrapper, styles.matchLayout]}>
          <View style={[styles.matchAsset, styles.matchLayout]}>
            <View style={[styles.matchAssetInner, styles.groupChildPosition]}>
              <View style={[styles.groupChild3, styles.groupChildPosition]} />
            </View>
          </View>
        </View>
        <View style={[styles.matchSolicitadoParent, styles.groupChildPosition]}>
          <Text style={styles.matchSolicitado}>Match solicitado</Text>
          <Image
            style={[styles.groupIcon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-494.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout1]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout1]}>
          <View style={[styles.groupChild4, styles.groupLayout1]} />
        </View>
        <View style={styles.ojeandoParent}>
          <Text style={[styles.ojeando, styles.timeTypo]}>Ojeando</Text>
          <Image
            style={[styles.groupChild5, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-536.png")}
          />
        </View>
      </View>
      <View style={styles.groupGroup}>
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.battery, styles.groupLayout]}>
            <View style={[styles.border, styles.groupLayout]} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
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
          style={[styles.maskGroup, styles.maskGroupPosition]}
          onPress={() => navigation.navigate("PerfilFeedVisualitzaciClu")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ExplorarPersonaClubsFiltr")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-5351.png")}
          />
        </Pressable>
        <View style={styles.groupView}>
          <Image
            style={[styles.groupChild6, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-5402.png")}
          />
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("TusMensajes")}
          >
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/group-5397.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menuClubInner, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <Image
          style={[styles.menuClubChild1, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/line-61.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-83.png")}
        />
      </View>
      <Image
        style={styles.perfilFeedVisualitzaciCluChild1}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 150,
    width: 390,
    top: 0,
    position: "absolute",
  },
  jugandoAlUniTypo: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  seguidoresLayout: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
  },
  basketballLayout2: {
    height: 146,
    width: 117,
    borderBottomLeftRadius: Border.br_10xs,
    borderBottomRightRadius: Border.br_10xs,
    top: 431,
    position: "absolute",
  },
  basketballLayout1: {
    borderRadius: Border.br_10xs,
    top: 581,
    height: 146,
    width: 117,
    position: "absolute",
  },
  basketballLayout: {
    top: 731,
    borderRadius: Border.br_10xs,
    height: 146,
    width: 117,
    position: "absolute",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupLayout3: {
    height: 9,
    width: 9,
    borderWidth: 2,
    borderRadius: Border.br_11xs,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  groupChild1Layout: {
    top: 11,
    height: 9,
    width: 9,
    borderWidth: 2,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  borderBorder: {
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
  },
  groupLayout2: {
    height: 50,
    width: 360,
    position: "absolute",
  },
  textPosition: {
    left: "3.33%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  matchLayout: {
    height: 37,
    width: 173,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    right: "0%",
    position: "absolute",
  },
  groupLayout1: {
    height: 35,
    width: 173,
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
  },
  groupLayout: {
    height: 12,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
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
    left: "80.26%",
    width: "19.74%",
    right: "0%",
    position: "absolute",
  },
  maskGroupPosition: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspParent: {
    left: "50%",
    marginLeft: -195,
    height: 150,
  },
  groupChild: {
    backgroundColor: Color.promocio,
    opacity: 0.5,
    left: 0,
  },
  jordiEspeltPvotBaloncesto: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
    height: "100%",
    width: "100%",
  },
  jordiEspeltPvotContainer: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  jordiEspeltPvotBaloncestoWrapper: {
    height: "7.11%",
    width: "36.92%",
    top: "19.55%",
    right: "27.44%",
    bottom: "73.34%",
    left: "35.64%",
    position: "absolute",
  },
  jugandoAlUni: {
    height: "4.27%",
    width: "60.26%",
    top: "26.9%",
    left: "35.9%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspIcon1: {
    marginLeft: -180,
    left: "50%",
  },
  basketballUnsplash1: {
    left: 136,
  },
  basketballJedVillejo1: {
    left: 257,
  },
  basketballUnsplash31: {
    left: 15,
  },
  basketballTimMossholder1: {
    left: 136,
  },
  basketballMiraKireeva11: {
    left: 257,
  },
  basketballMiraKireeva1: {
    left: 15,
  },
  basketballUnsplash21: {
    left: 136,
  },
  basketballAnthonyTedja1: {
    left: 257,
  },
  perfilFeedVisualitzaciCluChild: {
    top: 148,
    left: 20,
    width: 99,
    height: 106,
    position: "absolute",
  },
  perfilFeedVisualitzaciCluItem: {
    height: "13.03%",
    width: "27.95%",
    top: "16.71%",
    right: "68.21%",
    bottom: "70.26%",
    left: "3.85%",
    maxHeight: "100%",
    position: "absolute",
  },
  perfilFeedVisualitzaciCluInner: {
    top: 402,
    left: 277,
    width: 24,
    height: 14,
    position: "absolute",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 11,
  },
  rectangleView: {
    left: 0,
  },
  groupChild1: {
    left: 11,
  },
  rectangleParent: {
    top: 399,
    left: 92,
    width: 20,
    height: 20,
    position: "absolute",
  },
  lineView: {
    top: 428,
    borderTopWidth: 2,
    width: 175,
    height: 2,
    left: 14,
    position: "absolute",
  },
  groupChild2: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: 0,
    top: 0,
  },
  text: {
    width: "28.33%",
    top: "44%",
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
  },
  seguidores: {
    width: "30.28%",
    top: "10%",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
  },
  rectangleGroup: {
    top: 332,
    left: 15,
  },
  groupChild3: {
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_81xl,
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  matchAssetInner: {
    height: "94.59%",
    top: "2.7%",
    bottom: "2.7%",
    left: "0%",
    width: "100%",
  },
  matchAsset: {
    left: 0,
  },
  matchAssetWrapper: {
    left: 4,
  },
  matchSolicitado: {
    width: "82.49%",
    top: "26.32%",
    fontSize: 15,
    lineHeight: 17,
    color: Color.bALONCESTO,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  groupIcon: {
    width: "21.47%",
    left: "78.53%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    height: "100%",
    top: "0%",
  },
  matchSolicitadoParent: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  groupParent: {
    top: 277,
    left: 199,
    width: 177,
    height: 38,
    opacity: 0.5,
    position: "absolute",
  },
  groupChild4: {
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  ojeando: {
    left: "33.68%",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  groupChild5: {
    width: "27.37%",
    right: "72.63%",
    bottom: "0%",
    maxHeight: "100%",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  ojeandoParent: {
    height: "48.86%",
    width: "54.91%",
    top: "25.71%",
    right: "23.7%",
    bottom: "25.43%",
    left: "21.39%",
    position: "absolute",
  },
  groupContainer: {
    top: 278,
    left: 14,
    opacity: 0.5,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    top: 0,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
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
    right: 0,
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
    top: 7,
    width: 68,
    right: 0,
  },
  time: {
    marginTop: -9.55,
    top: "50%",
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    left: 4,
  },
  starus: {
    height: 24,
    left: 0,
    top: 0,
  },
  groupGroup: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: "absolute",
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
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  menuClubItem: {
    bottom: "0%",
    backgroundColor: Color.bLACK3SPORTSMATCH,
    height: "100%",
    top: "0%",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  maskGroup: {
    left: "84.87%",
    right: "6.15%",
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
  groupChild6: {
    width: "11.94%",
    right: "88.06%",
    bottom: "0%",
    maxHeight: "100%",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  container: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: "absolute",
  },
  groupView: {
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
    height: "99.36%",
    top: "0.64%",
    left: "80.13%",
    width: 0,
    bottom: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  menuClubChild1: {
    height: "3.85%",
    top: "1.92%",
    bottom: "94.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseIcon: {
    height: "6.41%",
    width: "1.28%",
    top: "60.26%",
    right: "28.97%",
    left: "69.74%",
  },
  menuClub: {
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
    marginLeft: -195,
    position: "absolute",
  },
  perfilFeedVisualitzaciCluChild1: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  perfilFeedVisualitzaciClu: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PerfilFeedVisualitzaciClu;
