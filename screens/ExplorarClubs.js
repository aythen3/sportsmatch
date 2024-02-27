import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const ExplorarClubs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explorarClubs}>
      <Image
        style={styles.hannahRedingKqyboqrw5wUnspIcon}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[styles.hannahRedingKqyboqrw5wUnspIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[
          styles.hannahRedingKqyboqrw5wUnspIcon2,
          styles.hannahIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[
          styles.nickFithenBuuGssofvoUnsplaIcon,
          styles.gridImagenesPosition,
        ]}
        contentFit="cover"
        source={require("../assets/nickfithenbuugssofvounsplash-12.png")}
      />
      <View style={[styles.gridImagenes, styles.gridImagenesPosition]}>
        <View style={[styles.gridSuperior, styles.gridLayout]}>
          <View style={styles.hannahRedingKqyboqrw5wUnspParent}>
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon3,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
            />
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon4,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/hannahredingkqyboqrw5wunsplash-2.png")}
            />
          </View>
          <Image
            style={[
              styles.nickFithenBuuGssofvoUnsplaIcon1,
              styles.iconGroupLayout,
            ]}
            contentFit="cover"
            source={require("../assets/nickfithenbuugssofvounsplash-1.png")}
          />
        </View>
        <View style={[styles.gridInferior, styles.gridLayout]}>
          <View style={styles.hannahRedingKqyboqrw5wUnspParent}>
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon3,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/hannahredingkqyboqrw5wunsplash-11.png")}
            />
            <Image
              style={[
                styles.hannahRedingKqyboqrw5wUnspIcon4,
                styles.iconGroupLayout,
              ]}
              contentFit="cover"
              source={require("../assets/hannahredingkqyboqrw5wunsplash-21.png")}
            />
          </View>
          <Image
            style={[
              styles.nickFithenBuuGssofvoUnsplaIcon1,
              styles.iconGroupLayout,
            ]}
            contentFit="cover"
            source={require("../assets/nickfithenbuugssofvounsplash-11.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.menuClubLayout]}>
        <View style={[styles.groupChild, styles.menuClubLayout]} />
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
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection2.png")}
          />
        </View>
        <View style={styles.starus}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.explorarClubsChild, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <View style={[styles.menuClub, styles.menuClubLayout]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <View style={[styles.menuClubChild, styles.groupItemPosition]} />
        <View style={[styles.menuClubItem, styles.menuClubItemBg]} />
        <View style={styles.menuClubInner} />
        <Pressable
          style={[styles.ellipseParent, styles.groupIconPosition]}
          onPress={() => navigation.navigate("PerfilDatosPropioClub")}
        >
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
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
            source={require("../assets/group-535.png")}
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
        <View style={styles.groupParent}>
          <Pressable
            style={[styles.container, styles.groupItemPosition]}
            onPress={() => navigation.navigate("SiguiendoJugadores")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-5401.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate("TusMensajes1")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/group-5391.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
      </View>
      <Image
        style={styles.explorarClubsItem}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={[styles.cabezeraBuscarFiltros, styles.gridImagenesPosition]}>
        <View style={styles.cabezera}>
          <Pressable
            style={styles.logo}
            onPress={() => navigation.navigate("LoginSwitch")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/logo3.png")}
            />
          </Pressable>
          <View style={[styles.superior, styles.superiorLayout]}>
            <View style={[styles.ellipseGroup, styles.groupLayout]}>
              <Image
                style={[styles.groupInner, styles.groupLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-81.png")}
              />
              <Text style={styles.text}>2</Text>
            </View>
            <View style={[styles.vectorParent, styles.groupParentPosition]}>
              <Image
                style={[styles.frameChild, styles.superiorLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-176.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group10.png")}
              />
              <Image
                style={[styles.frameItem, styles.lineIconLayout]}
                contentFit="cover"
                source={require("../assets/line-211.png")}
              />
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/group-6583.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buscarFiltroDesplegable}>
          <View style={styles.buscarFiltrosDespliegue}>
            <View style={styles.buscarPictograma}>
              <View style={[styles.frameParent, styles.groupParentPosition]}>
                <View
                  style={[
                    styles.groupContainer,
                    styles.groupContainerSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.frameChild1}
                    contentFit="cover"
                    source={require("../assets/group-428.png")}
                  />
                  <Text
                    style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo]}
                  >
                    Posicón de juego, población, club...
                  </Text>
                </View>
                <Image
                  style={styles.groupIcon2}
                  contentFit="cover"
                  source={require("../assets/group5.png")}
                />
              </View>
            </View>
            <View style={styles.despliegue}>
              <View
                style={[
                  styles.filtrosSugeridosParent,
                  styles.groupContainerSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.filtrosSugeridos, styles.posicnDeJuegoTypo]}
                >
                  Filtros sugeridos
                </Text>
                <View style={[styles.lineView, styles.lineViewBorder]} />
                <View style={styles.porProximidadPicto}>
                  <View style={styles.porProximidadPicto1}>
                    <Image
                      style={styles.porProximidadPictoChild}
                      contentFit="cover"
                      source={require("../assets/vector-161.png")}
                    />
                    <View style={styles.porProximidadParent}>
                      <Text
                        style={[styles.porProximidad, styles.posicnDeJuegoTypo]}
                      >
                        Por proximidad
                      </Text>
                      <Image
                        style={[
                          styles.pictogramaIcon,
                          styles.groupIconPosition1,
                        ]}
                        contentFit="cover"
                        source={require("../assets/pictograma2.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.frameChild2, styles.lineViewBorder]} />
                <View style={styles.porProximidadPicto}>
                  <View style={styles.groupGroup}>
                    <Image
                      style={[styles.groupIcon3, styles.groupIconPosition1]}
                      contentFit="cover"
                      source={require("../assets/group11.png")}
                    />
                    <Text
                      style={[styles.porProximidad, styles.posicnDeJuegoTypo]}
                    >
                      Por relevancia
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 1056,
    borderRadius: Border.br_10xs,
  },
  hannahIconPosition: {
    marginLeft: 63,
    height: 146,
    width: 117,
    left: "50%",
    position: "absolute",
  },
  gridImagenesPosition: {
    left: 15,
    position: "absolute",
  },
  gridLayout: {
    width: 360,
    flexDirection: "row",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuClubLayout: {
    width: 390,
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
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  menuClubItemBg: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: "absolute",
  },
  groupIconPosition: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
  },
  lineIconLayout: {
    width: 0,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  superiorLayout: {
    height: 45,
    width: 120,
  },
  groupLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    top: 0,
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
  },
  posicnDeJuegoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    marginTop: 10,
    borderStyle: "solid",
  },
  groupIconPosition1: {
    right: "0%",
    bottom: "0%",
  },
  hannahRedingKqyboqrw5wUnspIcon: {
    marginLeft: -180,
    top: 909,
    height: 146,
    width: 117,
    borderRadius: Border.br_10xs,
    left: "50%",
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspIcon1: {
    marginLeft: 63,
    height: 146,
    width: 117,
    left: "50%",
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspIcon2: {
    top: 1205,
    borderRadius: Border.br_10xs,
  },
  nickFithenBuuGssofvoUnsplaIcon: {
    width: 240,
    height: 295,
    top: 1056,
    borderRadius: Border.br_10xs,
  },
  hannahRedingKqyboqrw5wUnspIcon3: {
    maxHeight: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
    borderRadius: Border.br_10xs,
    width: "100%",
    flex: 1,
  },
  hannahRedingKqyboqrw5wUnspIcon4: {
    marginTop: 3,
    maxHeight: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
    borderRadius: Border.br_10xs,
    width: "100%",
    flex: 1,
  },
  hannahRedingKqyboqrw5wUnspParent: {
    height: 296,
    width: 117,
  },
  nickFithenBuuGssofvoUnsplaIcon1: {
    marginLeft: 3,
    maxHeight: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
    borderRadius: Border.br_10xs,
    width: "100%",
    flex: 1,
  },
  gridSuperior: {
    flexDirection: "row",
  },
  gridInferior: {
    marginTop: 3,
    flexDirection: "row",
  },
  gridImagenes: {
    top: 169,
  },
  groupChild: {
    height: 34,
    left: 0,
    top: 0,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    opacity: 0.35,
    width: 22,
    borderStyle: "solid",
    height: 12,
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
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7,
    top: 2,
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
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    width: 61,
    position: "absolute",
  },
  starus: {
    top: 10,
    height: 24,
    width: 61,
    left: 15,
    position: "absolute",
  },
  rectangleParent: {
    height: 34,
    left: 0,
    top: 0,
  },
  explorarClubsChild: {
    height: "0.59%",
    width: "1.28%",
    top: "96.33%",
    right: "28.97%",
    bottom: "3.08%",
    left: "69.74%",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
  },
  maskGroupIcon1: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  menuClubItem: {
    width: "19.74%",
    right: "59.49%",
    left: "20.77%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  menuClubInner: {
    height: "3.85%",
    width: "20.51%",
    top: "1.92%",
    right: "59.1%",
    bottom: "94.23%",
    left: "20.38%",
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  groupItem: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    height: "100%",
    maxHeight: "100%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
  },
  menuClubChild1: {
    left: "40.51%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
  },
  container: {
    right: "88.06%",
    width: "11.94%",
    bottom: "0%",
    height: "100%",
  },
  icon2: {
    height: "100%",
  },
  frame: {
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
    left: "50%",
  },
  explorarClubsItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  logo: {
    width: 186,
    height: 44,
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    fontWeight: "700",
    fontFamily: FontFamily.t4TEXTMICRO,
    width: 14,
    top: 3,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    height: 7,
    left: 0,
    position: "absolute",
  },
  ellipseGroup: {
    left: 100,
    top: 2,
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
    maxHeight: "100%",
    position: "absolute",
  },
  frameItem: {
    left: 61,
    zIndex: 2,
    height: 44,
    top: 2,
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
    position: "absolute",
  },
  superior: {
    marginLeft: 69,
  },
  cabezera: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameChild1: {
    width: 13,
    height: 15,
  },
  posicnDeJuego: {
    width: 265,
    height: 16,
    marginLeft: 6,
    color: Color.gREY2SPORTSMATCH,
    textAlign: "left",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  groupContainer: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderStyle: "solid",
    flexDirection: "row",
  },
  groupIcon2: {
    marginLeft: 20,
    height: 17,
    width: 22,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buscarPictograma: {
    width: 348,
    height: 34,
  },
  filtrosSugeridos: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    color: Color.gREY2SPORTSMATCH,
    textAlign: "left",
  },
  lineView: {
    marginTop: 10,
    width: 175,
  },
  porProximidadPictoChild: {
    width: 10,
    height: 7,
  },
  porProximidad: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    left: "0%",
    top: "0%",
    position: "absolute",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
  },
  pictogramaIcon: {
    width: "10.49%",
    left: "89.51%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  porProximidadParent: {
    width: 130,
    height: 17,
    marginLeft: 6,
  },
  porProximidadPicto1: {
    width: 146,
    alignItems: "center",
    flexDirection: "row",
  },
  porProximidadPicto: {
    marginTop: 10,
    alignItems: "center",
  },
  frameChild2: {
    width: 176,
    marginTop: 10,
  },
  groupIcon3: {
    height: "84.21%",
    width: "12.03%",
    top: "15.79%",
    left: "87.97%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupGroup: {
    width: 133,
    height: 19,
  },
  filtrosSugeridosParent: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: 0,
    alignItems: "center",
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: "absolute",
    left: 0,
    top: 0,
  },
  despliegue: {
    height: 108,
    marginTop: 9,
    width: 175,
  },
  buscarFiltrosDespliegue: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buscarFiltroDesplegable: {
    marginTop: 24,
    height: 146,
  },
  cabezeraBuscarFiltros: {
    top: 52,
  },
  explorarClubs: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default ExplorarClubs;
