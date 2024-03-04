import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const SILVER = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.silver}>
      <View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-259.png")}
        />
        <Text style={[styles.silver1, styles.silver1Typo]}>SILVER</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameWrapper}>
            <View style={styles.gratuitoWrapper}>
              <Text style={[styles.gratuito, styles.silver1Typo]}>{`Gratuito
`}</Text>
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
                <Text
                  style={styles.accesoLimitadoA}
                >{`Acceso limitado a las personas inscritas en tu oferta: `}</Text>
                <Text style={styles.perfiles}>3 perfiles </Text>
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
  silver1Typo: {
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
  silver1: {
    top: 16,
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH,
    height: 19,
    zIndex: 1,
    fontWeight: "700",
  },
  gratuito: {
    top: 0,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
  },
  gratuitoWrapper: {
    height: 47,
    width: 358,
  },
  frameWrapper: {
    height: 22,
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
  accesoLimitadoA: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  perfiles: {
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
  silver: {
    borderRadius: Border.br_mini,
    flex: 1,
    overflow: "hidden",
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.wHITESPORTSMATCH,
  },
});

export default SILVER;
