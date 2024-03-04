import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PerfilVisualizacinJugador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilVisualizacinJugador}>
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
        style={styles.perfilVisualizacinJugadorChild}
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
          styles.perfilVisualizacinJugadorItem,
          styles.ecdima20170918001012IconPosition,
        ]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <View style={[styles.groupParent, styles.groupLayout2]}>
        <View style={[styles.groupWrapper, styles.groupLayout2]}>
          <View style={[styles.groupWrapper, styles.groupLayout2]}>
            <View style={[styles.groupItem, styles.groupLayout2]} />
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.mensajeWrapper, styles.groupChildPosition]}>
            <Text style={[styles.mensaje, styles.timeTypo]}>Mensaje</Text>
          </View>
        </View>
      </View>
      <View style={styles.perfilVisualizacinJugadorInner} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-42.png")}
      />
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupFrame, styles.groupLayout1]}>
          <View style={[styles.groupFrame, styles.groupLayout1]}>
            <View style={[styles.groupFrame, styles.groupLayout1]}>
              <Image
                style={[styles.groupFrame, styles.groupLayout1]}
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
          style={[styles.groupChild1, styles.ellipseIconLayout]}
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
          style={[styles.groupChild1, styles.ellipseIconLayout]}
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
        source={require("../assets/line-91.png")}
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
  groupLayout2: {
    height: 35,
    width: 360,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  ellipseIconLayout: {
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
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    height: "100%",
    width: "100%",
  },
  uniEsportvaMatarContainer: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  uniEsportvaMatarBaloncesWrapper: {
    height: "7.09%",
    width: "36.92%",
    top: "19.49%",
    right: "27.44%",
    bottom: "73.42%",
    left: "35.64%",
    position: "absolute",
  },
  presidenteJoanPi: {
    height: "4.25%",
    width: "60.26%",
    top: "26.82%",
    left: "35.9%",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  perfilVisualizacinJugadorChild: {
    top: 148,
    left: 20,
    width: 99,
    height: 106,
    position: "absolute",
  },
  groupChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    bottom: "0%",
    right: "0%",
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
    height: "12.99%",
    width: "28.21%",
    top: "16.89%",
    right: "67.95%",
    bottom: "70.12%",
    left: "3.85%",
    position: "absolute",
  },
  perfilVisualizacinJugadorItem: {
    opacity: 0.5,
    backgroundColor: Color.promocio,
  },
  groupItem: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  mensaje: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    height: "100%",
    fontSize: FontSize.t2TextSTANDARD_size,
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  mensajeWrapper: {
    position: "absolute",
  },
  groupContainer: {
    height: "48.57%",
    width: "35.83%",
    top: "25.71%",
    right: "31.81%",
    bottom: "25.71%",
    left: "32.36%",
    position: "absolute",
  },
  groupParent: {
    top: 276,
    left: 15,
  },
  perfilVisualizacinJugadorInner: {
    top: 482,
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
    top: 343,
    left: 15,
  },
  groupFrame: {
    height: 110,
    left: 0,
    top: 0,
  },
  fundacin: {
    top: 81,
    color: Color.bALONCESTO,
    textAlign: "center",
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
    color: Color.bALONCESTO,
    width: 109,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
    left: 0,
  },
  groupView: {
    left: 16,
    height: 110,
    top: 343,
  },
  groupChild1: {
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
    color: Color.bALONCESTO,
    width: 109,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  aforo: {
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
    top: 81,
    textAlign: "center",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    left: 0,
  },
  ellipseContainer: {
    left: 140,
    height: 110,
    top: 343,
  },
  ellipseParent2: {
    left: 264,
    height: 110,
    top: 343,
  },
  poblacinMatar: {
    top: 613,
    lineHeight: 17,
  },
  nombreDelEstadio: {
    top: 532,
    lineHeight: 16,
  },
  pasEspaa: {
    top: 656,
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
    top: 491,
    left: 24,
    width: 166,
    height: 240,
    position: "absolute",
  },
  estadio1: {
    height: "2.38%",
    width: "29.23%",
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "left",
  },
  estadio: {
    left: "51.79%",
    top: "57.6%",
    position: "absolute",
  },
  apasionadoLderCompettvo: {
    height: "10.69%",
    top: "95.13%",
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
  },
  descripcinDelClub: {
    height: "4.75%",
    top: "89.79%",
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
  lineIcon: {
    marginLeft: -74,
    top: 829,
    left: "50%",
    width: 148,
  },
  perfilVisualizacinJugador: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    height: 842,
    overflow: "hidden",
    width: "100%",
  },
});

export default PerfilVisualizacinJugador;
