import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const EliminarOferta1 = () => {
  return (
    <View style={styles.eliminarOferta4}>
      <View style={[styles.fondo, styles.fondoPosition]} />
      <View style={styles.botonesInferiores}>
        <View style={styles.botonLayout}>
          <View style={styles.botonPosition}>
            <View style={[styles.botonElinarOferta, styles.botonPosition]}>
              <View style={[styles.botonEliminarOferta1, styles.botonFlexBox]}>
                <Text style={[styles.textoBoton, styles.cerrarTypo]}>
                  Eliminar la oferta
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.cerrar, styles.cerrarTypo]}>Cerrar</Text>
      </View>
      <View style={[styles.contenido, styles.fondoPosition]}>
        <View style={styles.bloqueInformacion}>
          <Text
            style={[styles.estsSeguroDe, styles.cerrarTypo]}
          >{`¿Estás seguro de que quieres 
eliminar esta oferta?`}</Text>
          <View style={styles.contenidoFrame}>
            <View style={styles.boton1Parent}>
              <View style={[styles.boton1, styles.boton1Border]}>
                <Text style={[styles.sYaHe, styles.sYaHeTypo]}>
                  Sí, ya he encontrado mi jugador/a o profesional.
                </Text>
              </View>
              <View style={styles.opcionesPerfilesFrame}>
                <View style={styles.textoperfiles}>
                  <Text style={[styles.indcanosConQuin, styles.carlesMirTypo]}>
                    Indícanos con quién has llegado a un acuerdo.
                  </Text>
                  <View style={styles.perfilesFrame}>
                    <View style={styles.botonFlexBox}>
                      <View
                        style={[
                          styles.avatarnombre,
                          styles.avatarnombreFlexBox,
                        ]}
                      >
                        <View style={styles.mascaraImagen}>
                          <Text
                            style={[styles.jordiEspelt, styles.carlesMirTypo]}
                          >{`Jordi Espelt
`}</Text>
                          <Image
                            style={[styles.imagenIcon, styles.imagenIconLayout]}
                            contentFit="cover"
                            source={require("../assets/imagen6.png")}
                          />
                        </View>
                      </View>
                      <Image
                        style={styles.redondaIcon}
                        contentFit="cover"
                        source={require("../assets/redonda.png")}
                      />
                    </View>
                    <View style={styles.linia} />
                    <View style={styles.perfil2}>
                      <View style={styles.avatarnombreFlexBox}>
                        <Image
                          style={[
                            styles.mascaraImagenIcon,
                            styles.imagenIconLayout,
                          ]}
                          contentFit="cover"
                          source={require("../assets/mask-group14.png")}
                        />
                        <Text style={[styles.carlesMir, styles.carlesMirTypo]}>
                          Carles Mir
                        </Text>
                      </View>
                      <Image
                        style={styles.redondaIcon}
                        contentFit="cover"
                        source={require("../assets/redonda1.png")}
                      />
                    </View>
                    <View style={styles.linia} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.boton2, styles.botonLayout]}>
          <View
            style={[styles.sHeCubiertoLaVacanteFueParent, styles.botonLayout]}
          >
            <Text style={[styles.sHeCubierto, styles.sYaHeTypo]}>
              Sí, he cubierto la vacante fuera dela app.
            </Text>
            <View style={[styles.groupChild, styles.boton1Border]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fondoPosition: {
    left: 0,
    position: "absolute",
  },
  botonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  botonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cerrarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  boton1Border: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
  },
  sYaHeTypo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  carlesMirTypo: {
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  avatarnombreFlexBox: {
    width: 139,
    flexDirection: "row",
    alignItems: "center",
  },
  imagenIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  botonLayout: {
    height: 40,
    width: 360,
  },
  fondo: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    height: 843,
    width: 390,
    top: 0,
    left: 0,
  },
  textoBoton: {
    color: Color.bLACK1SPORTSMATCH,
    fontWeight: "700",
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  botonEliminarOferta1: {
    backgroundColor: Color.wHITESPORTSMATCH,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    flex: 1,
  },
  botonElinarOferta: {
    flexDirection: "row",
  },
  cerrar: {
    marginTop: 12,
    color: Color.wHITESPORTSMATCH,
    fontWeight: "700",
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  botonesInferiores: {
    top: 730,
    left: 14,
    alignItems: "center",
    position: "absolute",
  },
  estsSeguroDe: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 26,
    fontWeight: "500",
    height: 22,
    color: Color.wHITESPORTSMATCH,
    width: 390,
  },
  sYaHe: {
    color: Color.bLACK1SPORTSMATCH,
  },
  boton1: {
    backgroundColor: Color.gREY2SPORTSMATCH,
    width: 359,
    paddingHorizontal: 3,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  indcanosConQuin: {
    color: Color.gREY2SPORTSMATCH,
    alignSelf: "stretch",
  },
  jordiEspelt: {
    height: "35.56%",
    width: "56.83%",
    top: "32.22%",
    left: "43.17%",
    color: Color.wHITESPORTSMATCH,
    fontWeight: "700",
    position: "absolute",
  },
  imagenIcon: {
    height: "160%",
    width: "34.68%",
    top: "-0.67%",
    right: "65.54%",
    bottom: "-59.33%",
    left: "-0.22%",
    maxHeight: "100%",
    position: "absolute",
  },
  mascaraImagen: {
    alignSelf: "stretch",
    flex: 1,
  },
  avatarnombre: {
    height: 45,
  },
  redondaIcon: {
    width: 15,
    height: 15,
    marginLeft: 203,
  },
  linia: {
    borderTopWidth: 1,
    marginTop: 11,
    alignSelf: "stretch",
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    flex: 1,
  },
  mascaraImagenIcon: {
    height: 45,
    flex: 1,
  },
  carlesMir: {
    width: 79,
    marginLeft: 15,
    color: Color.wHITESPORTSMATCH,
    fontWeight: "700",
  },
  perfil2: {
    marginTop: 11,
    flexDirection: "row",
    alignItems: "center",
  },
  perfilesFrame: {
    marginTop: 14,
    flex: 1,
  },
  textoperfiles: {
    height: 154,
  },
  opcionesPerfilesFrame: {
    marginTop: 22,
  },
  boton1Parent: {
    alignItems: "flex-end",
  },
  contenidoFrame: {
    marginTop: 71,
  },
  bloqueInformacion: {
    alignItems: "center",
  },
  sHeCubierto: {
    top: 11,
    left: 3,
    width: 355,
    color: Color.gREY2SPORTSMATCH,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 360,
    left: 0,
    position: "absolute",
    top: 0,
  },
  sHeCubiertoLaVacanteFueParent: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  boton2: {
    marginTop: 30,
  },
  contenido: {
    top: 239,
    alignItems: "center",
  },
  eliminarOferta4: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default EliminarOferta1;
