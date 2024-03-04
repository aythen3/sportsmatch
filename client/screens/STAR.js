import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const STAR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.star}>
      <View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/color-de-fondo.png")}
        />
        <Text style={[styles.star1, styles.star1Typo]}>{`STAR
`}</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View>
            <View style={styles.mesOTambin165020aoWrapper}>
              <Text style={[styles.mesOTambinContainer, styles.star1Typo]}>
                <Text style={styles.text}>126€</Text>
                <Text style={styles.mes}>{`/mes 
`}</Text>
                <Text style={styles.oTambin165020ao}>
                  o también 1.650,20€/año
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.vectorFlexBox}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/vector-27.png")}
              />
              <Text
                style={[styles.creacinGratisDel, styles.creacinGratisDelLayout]}
              >
                Creación gratis del perfil del club
              </Text>
            </View>
            <View style={styles.frameInner} />
            <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/vector-27.png")}
              />
              <Text
                style={[styles.creacinGratisDel, styles.creacinGratisDelLayout]}
              >
                Acceso al buscador de jugadores/as y profesionales del deporte 
              </Text>
            </View>
            <View style={styles.frameInner} />
            <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/vector-27.png")}
              />
              <Text
                style={[styles.creacinGratisDel, styles.creacinGratisDelLayout]}
              >
                Número ilimitado de Match 
              </Text>
            </View>
            <View style={styles.frameInner} />
            <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/vector-27.png")}
              />
              <Text
                style={[styles.creacinGratisDel, styles.creacinGratisDelLayout]}
              >
                Publicación gratis e ilimitada de anuncios de ofertas
                deportivas 
              </Text>
            </View>
            <View style={styles.frameInner} />
            <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/vector-27.png")}
              />
              <Text style={styles.creacinGratisDelLayout}>
                <Text style={styles.acceso}>Acceso</Text>
                <Text style={styles.ilimitado}> ilimitado</Text>
                <Text style={styles.acceso}>
                  {" "}
                  a las personas inscritas en tu oferta 
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.aceptarParent}>
          <Pressable
            style={[styles.aceptar, styles.aceptarFlexBox]}
            onPress={() => navigation.navigate("ChatAbierto")}
          >
            <Text style={styles.verTypo}>Seleccionar este plan</Text>
          </Pressable>
          <View style={[styles.aceptar1, styles.aceptarFlexBox]}>
            <Text style={[styles.verOferta1, styles.verTypo]}>Ver perfil</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  star1Typo: {
    textAlign: "center",
    lineHeight: 22,
    left: 0,
    position: "absolute",
    fontFamily: FontFamily.t4TEXTMICRO,
    width: 358,
  },
  creacinGratisDelLayout: {
    marginLeft: 5,
    width: 260,
    textAlign: "left",
    color: Color.bLACK1SPORTSMATCH,
    lineHeight: 16,
    fontSize: FontSize.t1TextSMALL_size,
  },
  vectorFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  aceptarFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  verTypo: {
    lineHeight: 17,
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  frameChild: {
    height: 50,
    zIndex: 0,
    width: 358,
  },
  star1: {
    top: 16,
    color: Color.wHITESPORTSMATCH,
    height: 19,
    zIndex: 1,
    fontWeight: "700",
    fontSize: FontSize.h3TitleMEDIUM_size,
  },
  text: {
    fontSize: FontSize.size_21xl,
  },
  mes: {
    fontSize: FontSize.h3TitleMEDIUM_size,
  },
  oTambin165020ao: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.colorDimgray_100,
  },
  mesOTambinContainer: {
    top: 0,
    fontWeight: "600",
  },
  mesOTambin165020aoWrapper: {
    height: 47,
    width: 358,
  },
  frameItem: {
    width: 10,
    height: 7,
  },
  creacinGratisDel: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  frameInner: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderTopWidth: 1,
    width: 305,
    height: 1,
    marginTop: 10,
    borderStyle: "solid",
  },
  vectorContainer: {
    marginTop: 10,
  },
  acceso: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  ilimitado: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  frameContainer: {
    marginTop: 30,
  },
  frameGroup: {
    alignItems: "center",
  },
  aceptar: {
    marginTop: -13.5,
    top: "50%",
    right: "0%",
    left: "0%",
    borderColor: Color.bLACK1SPORTSMATCH,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
  },
  verOferta1: {
    display: "none",
  },
  aceptar1: {
    height: "100%",
    width: "100.64%",
    top: "0%",
    right: "-110.88%",
    bottom: "0%",
    left: "110.24%",
    display: "none",
    backgroundColor: Color.wHITESPORTSMATCH,
  },
  aceptarParent: {
    width: 328,
    height: 27,
    marginTop: 30,
  },
  frameParent: {
    marginTop: 30,
    alignItems: "center",
  },
  star: {
    borderRadius: Border.br_mini,
    flex: 1,
    overflow: "hidden",
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.wHITESPORTSMATCH,
  },
});

export default STAR;
