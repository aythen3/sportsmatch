import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DetallesDelUsuario = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detallesDelUsuario}>
      <View style={styles.groupParent}>
        <View style={styles.sexoParent}>
          <Text style={[styles.sexo, styles.sexoTypo]}>Sexo</Text>
          <View style={[styles.masculinoParent, styles.parentBorder]}>
            <Text style={[styles.masculino, styles.textTypo]}>Masculino</Text>
            <Image
              style={styles.cooliconLayout}
              contentFit="cover"
              source={require("../assets/coolicon5.png")}
            />
          </View>
        </View>
        <View style={styles.aoDeNacimientoParent}>
          <Text style={styles.sexoTypo}>Año de nacimiento</Text>
          <View style={[styles.frameWrapper, styles.frameFlexBox]}>
            <View style={[styles.wrapper, styles.parentBorder]}>
              <Text style={styles.textTypo}>2000</Text>
            </View>
          </View>
        </View>
        <View style={styles.lugarDeResidenciaParent}>
          <Text style={styles.sexoTypo}>{`Lugar de residencia `}</Text>
          <View style={[styles.barcelonaParent, styles.parentBorder]}>
            <Text style={styles.textTypo}>Barcelona</Text>
            <Image
              style={[styles.coolicon1, styles.cooliconLayout]}
              contentFit="cover"
              source={require("../assets/coolicon5.png")}
            />
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={[styles.clubActualParent, styles.parentPosition]}>
            <Text style={styles.sexoTypo}>Club actual</Text>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={[styles.wrapper, styles.parentBorder]}>
                <Text style={styles.textTypo}>
                  Escribe solo si estás en algún club
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.comoTeDefinesComoJugadorParent}>
          <Text
            style={[styles.sexo, styles.sexoTypo]}
          >{`Como te defines como jugador `}</Text>
          <View style={[styles.frameView, styles.parentPosition]}>
            <View style={styles.describeTuJuegoTuCondiciWrapper}>
              <Text
                style={styles.textTypo}
              >{`Describe tu juego, tu condición física, 
tu personalidad en el campo...`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.boto}>
          <View style={styles.loremIpsum}>
            <Text style={styles.aceptar}>Aceptar</Text>
          </View>
        </View>
      </View>
      <View style={styles.cabezeraParent}>
        <View style={styles.cabezera}>
          <View style={[styles.cooliconParent, styles.parentPosition]}>
            <Pressable
              style={styles.coolicon2}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/coolicon3.png")}
              />
            </Pressable>
            <Pressable
              style={styles.detallesDelUsuarioContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.detallesDelUsuario1}>
                Detalles del usuario
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameWrapper1}>
          <View style={styles.fotoPerfilParent}>
            <View style={styles.fotoPerfilParent}>
              <View style={styles.fotoPerfilParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/circulo.png")}
                />
                <View
                  style={[
                    styles.subirFotoDePerfilWrapper,
                    styles.frameParentSpaceBlock,
                  ]}
                >
                  <Text style={[styles.subirFotoDe, styles.timeClr]}>
                    Subir foto de perfil
                  </Text>
                </View>
              </View>
              <Text style={[styles.max1mbJpeg, styles.timeClr]}>
                Max 1mb, jpeg
              </Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={styles.frameItem} />
              <View style={styles.frameParentSpaceBlock}>
                <View
                  style={[
                    styles.subirFotoDePortadaWrapper,
                    styles.subirWrapperFlexBox,
                  ]}
                >
                  <Text style={[styles.subirFotoDe, styles.timeClr]}>
                    Subir foto de portada
                  </Text>
                </View>
                <Text style={[styles.max1mbJpeg, styles.timeClr]}>
                  Max 1mb, jpeg
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
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
  sexoTypo: {
    height: 23,
    width: 360,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  parentBorder: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.gREY2SPORTSMATCH,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  frameFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  cooliconLayout: {
    height: 7,
    width: 12,
  },
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  frameParentSpaceBlock: {
    marginTop: 15,
    alignItems: "center",
  },
  timeClr: {
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
  },
  subirWrapperFlexBox: {
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  groupPosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
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
  sexo: {
    left: 1,
    top: 0,
    position: "absolute",
  },
  masculino: {
    width: 313,
  },
  masculinoParent: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
    top: 23,
  },
  sexoParent: {
    height: 61,
    width: 361,
  },
  wrapper: {
    height: 38,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    width: 361,
    position: "absolute",
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  aoDeNacimientoParent: {
    marginTop: 28,
    alignSelf: "stretch",
    alignItems: "center",
    height: 61,
  },
  coolicon1: {
    marginLeft: 237,
  },
  barcelonaParent: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
  },
  lugarDeResidenciaParent: {
    marginTop: 28,
  },
  clubActualParent: {
    top: 0,
    height: 61,
    width: 361,
  },
  frameContainer: {
    marginTop: 28,
    alignSelf: "stretch",
  },
  describeTuJuegoTuCondiciWrapper: {
    borderRadius: Border.br_3xs,
    height: 148,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    overflow: "hidden",
  },
  frameView: {
    width: 358,
    top: 23,
    left: 0,
  },
  comoTeDefinesComoJugadorParent: {
    height: 171,
    marginTop: 28,
    width: 361,
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loremIpsum: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    backgroundColor: Color.wHITESPORTSMATCH,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    width: 360,
  },
  boto: {
    marginTop: 28,
    flexDirection: "row",
  },
  groupParent: {
    top: 532,
    left: 14,
    height: 595,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  coolicon2: {
    width: 9,
    height: 15,
  },
  detallesDelUsuario1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  detallesDelUsuarioContainer: {
    marginLeft: 9,
  },
  cooliconParent: {
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  cabezera: {
    width: 211,
    height: 22,
  },
  frameChild: {
    width: 117,
    height: 117,
  },
  subirFotoDe: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  subirFotoDePerfilWrapper: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  fotoPerfilParent: {
    alignItems: "center",
  },
  max1mbJpeg: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    marginTop: 7,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  frameItem: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro,
    width: 359,
    height: 138,
  },
  subirFotoDePortadaWrapper: {
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
  },
  rectangleParent: {
    marginTop: 21,
    alignItems: "center",
  },
  frameWrapper1: {
    marginTop: 52,
    alignItems: "center",
  },
  cabezeraParent: {
    top: 60,
    left: 16,
    position: "absolute",
  },
  groupChild: {
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
    borderStyle: "solid",
    top: 0,
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
    width: 18,
    backgroundColor: Color.wHITESPORTSMATCH,
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
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    width: 61,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  detallesDelUsuario: {
    borderRadius: Border.br_21xl,
    height: 1172,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default DetallesDelUsuario;
