import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilVisualizacinClubs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilVisualizacinClubs}>
      <Image
        style={styles.ecdima20170918001012IconPosition}
        contentFit="cover"
        source={require("../assets/imagen.png")}
      />
      <View style={styles.uniEsportvaMatarBaloncesWrapper}>
        <Pressable
          style={styles.uniEsportvaMatarContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.uniEsportvaMatarBalonces}>{`Unió Esportíva Mataró
Baloncesto`}</Text>
        </Pressable>
      </View>
      <Text style={styles.presidenteJoanPi}>{`Presidente
Joan Pi `}</Text>
      <Image
        style={styles.perfilVisualizacinClubsChild}
        contentFit="cover"
        source={require("../assets/group-516.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-763.png")}
        />
        <Image
          style={[styles.logoUem21RemovebgPreview1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-uem21removebgpreview-14.png")}
        />
      </View>
      <LinearGradient
        style={[
          styles.perfilVisualizacinClubsItem,
          styles.ecdima20170918001012IconPosition,
        ]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <View style={styles.perfilVisualizacinClubsInner} />
      <Image
        style={[styles.ellipseIcon, styles.groupInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-42.png")}
      />
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupWrapper, styles.groupLayout1]}>
              <Image
                style={[styles.groupWrapper, styles.groupLayout1]}
                contentFit="cover"
                source={require("../assets/ellipse-36.png")}
              />
              <Text style={[styles.fundacin, styles.aforoClr]}>Fundación</Text>
              <Text style={[styles.text, styles.textTypo]}>1920</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.ellipseContainer, styles.ellipseParentLayout]}>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={[styles.ellipseParent1, styles.ellipseParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>300</Text>
          <Text style={[styles.aforo, styles.ellipseParentLayout]}>Aforo</Text>
        </View>
      </View>
      <View style={[styles.ellipseParent2, styles.ellipseParentLayout]}>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-42.png")}
        />
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={[styles.ellipseParent1, styles.ellipseParentLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>4</Text>
          <Text style={[styles.aforo, styles.ellipseParentLayout]}>
            Nº ofertas
          </Text>
        </View>
      </View>
      <Text style={[styles.poblacinMatar, styles.poblacinMatarTypo]}>{`Población
Mataró`}</Text>
      <Text
        style={[styles.nombreDelEstadio, styles.poblacinMatarTypo]}
      >{`Nombre del 
estadio o pavellón
Palau Municipals 
d’Esports Josep Mora`}</Text>
      <Text style={[styles.pasEspaa, styles.pasEspaaTypo]}>{`País
España`}</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-544.png")}
      />
      <Pressable style={styles.estadio} onPress={() => navigation.goBack()}>
        <Text style={[styles.estadio1, styles.textTypo]}>Estadio</Text>
      </Pressable>
      <Text
        style={[
          styles.apasionadoLderCompettvo,
          styles.descripcinDelClubPosition,
        ]}
      >
        Apasionado líder competítívo. Mi carrera en baloncesto refleja
        dedicación, habilidades excepcionales y la capacidad de motívar al
        equipo hacia el éxito. Me dedico a ello desde que tengo 6 años y llevo
        toda la vida en el mismo club, el CF Mataró.
      </Text>
      <Text
        style={[styles.descripcinDelClub, styles.descripcinDelClubPosition]}
      >
        Descripción del club
      </Text>
      <View style={styles.groupParent}>
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
            source={require("../assets/cellular-connection2.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.lineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  ecdima20170918001012IconPosition: {
    height: 150,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    opacity: 0.6,
    height: 110,
    width: 109,
    position: "absolute",
  },
  groupLayout1: {
    width: 109,
    position: "absolute",
  },
  aforoClr: {
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  textTypo: {
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
  },
  ellipseParentLayout: {
    width: 110,
    position: "absolute",
  },
  poblacinMatarTypo: {
    width: 185,
    fontSize: FontSize.t1TextSMALL_size,
    left: 203,
    color: Color.bALONCESTO,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  pasEspaaTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
  },
  descripcinDelClubPosition: {
    color: Color.gREY2SPORTSMATCH,
    left: "3.08%",
    width: "91.54%",
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  groupLayout: {
    height: 12,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  uniEsportvaMatarBalonces: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    height: "100%",
    width: "100%",
  },
  uniEsportvaMatarContainer: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  uniEsportvaMatarBaloncesWrapper: {
    height: "7.52%",
    width: "36.92%",
    top: "20.67%",
    right: "27.44%",
    bottom: "71.81%",
    left: "35.64%",
    position: "absolute",
  },
  presidenteJoanPi: {
    height: "4.51%",
    width: "60.26%",
    top: "28.44%",
    left: "35.9%",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  perfilVisualizacinClubsChild: {
    top: 148,
    left: 20,
    width: 99,
    height: 106,
    position: "absolute",
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  logoUem21RemovebgPreview1Icon: {
    height: "72.58%",
    width: "77.45%",
    top: "13.71%",
    right: "10.82%",
    bottom: "13.71%",
    left: "11.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  ellipseParent: {
    height: "13.78%",
    width: "28.21%",
    top: "17.91%",
    right: "67.95%",
    bottom: "68.31%",
    left: "3.85%",
    position: "absolute",
  },
  perfilVisualizacinClubsItem: {
    opacity: 0.5,
    backgroundColor: Color.promocio,
  },
  perfilVisualizacinClubsInner: {
    top: 419,
    left: 14,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    width: 359,
    height: 260,
    borderStyle: "solid",
    position: "absolute",
  },
  ellipseIcon: {
    left: 15,
    top: 280,
  },
  groupWrapper: {
    height: 110,
    left: 0,
    top: 0,
  },
  fundacin: {
    textAlign: "center",
    top: 81,
    color: Color.bALONCESTO,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    left: 0,
    width: 109,
    position: "absolute",
  },
  text: {
    top: 32,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    textAlign: "center",
    color: Color.bALONCESTO,
    width: 109,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
    left: 0,
  },
  groupView: {
    left: 16,
    height: 110,
    top: 280,
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  ellipseParent1: {
    height: 110,
    left: 0,
    top: 0,
  },
  text1: {
    left: 1,
    top: 32,
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    textAlign: "center",
    color: Color.bALONCESTO,
    width: 109,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  aforo: {
    textAlign: "center",
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
    top: 81,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    left: 0,
  },
  ellipseContainer: {
    left: 140,
    height: 110,
    top: 280,
  },
  ellipseParent2: {
    left: 264,
    height: 110,
    top: 280,
  },
  poblacinMatar: {
    top: 550,
    lineHeight: 17,
  },
  nombreDelEstadio: {
    top: 469,
    lineHeight: 16,
  },
  pasEspaa: {
    top: 593,
    width: 138,
    lineHeight: 17,
    left: 203,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bALONCESTO,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  groupIcon: {
    top: 428,
    left: 24,
    width: 166,
    height: 240,
    position: "absolute",
  },
  estadio1: {
    height: "2.52%",
    width: "29.23%",
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "left",
  },
  estadio: {
    left: "51.79%",
    top: "53.15%",
    position: "absolute",
  },
  apasionadoLderCompettvo: {
    height: "11.34%",
    top: "94.58%",
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
  },
  descripcinDelClub: {
    height: "5.04%",
    top: "88.92%",
    fontWeight: "500",
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
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
    height: 24,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 10,
    right: 15,
    width: 360,
    height: 24,
    position: "absolute",
  },
  lineIcon: {
    marginLeft: -74,
    top: 781,
    left: "50%",
    width: 148,
  },
  perfilVisualizacinClubs: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    height: 794,
    overflow: "hidden",
    width: "100%",
  },
});

export default PerfilVisualizacinClubs;
