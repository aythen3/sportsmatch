import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const EliminarOferta = () => {
  return (
    <View style={styles.eliminarOferta3}>
      <View style={styles.fondoPopup} />
      <View style={[styles.contenido, styles.contenidoPosition]}>
        <View style={styles.contenidoFrame}>
          <Text style={styles.estsSeguroDe}>{`¿Estás seguro de que quieres 
eliminar esta oferta?`}</Text>
          <View style={styles.botones}>
            <View style={[styles.boton1, styles.botonLayout]}>
              <Text style={[styles.sYaHe, styles.sYaHeTypo]}>
                Sí, ya he encontrado mi jugador/a o profesional.
              </Text>
              <View style={[styles.rectangulo, styles.rectanguloLayout]} />
            </View>
            <View style={[styles.boton2, styles.botonLayout]}>
              <Text style={[styles.sHeCubierto, styles.sYaHeTypo]}>
                Sí, he cubierto la vacante fuera de la app.
              </Text>
              <View style={[styles.rectangulo, styles.rectanguloLayout]} />
            </View>
          </View>
        </View>
        <View style={styles.botonesInferiores}>
          <View style={styles.botonEliminarOferta}>
            <View style={[styles.botonGrupo, styles.botonPosition]}>
              <View style={[styles.botonEliminarOferta1, styles.botonPosition]}>
                <View
                  style={[styles.botonEliminarOferta2, styles.rectanguloLayout]}
                >
                  <Text style={[styles.textoBoton, styles.cerrarTypo]}>
                    Eliminar la oferta
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.cerrar, styles.cerrarTypo]}>Cerrar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenidoPosition: {
    left: 0,
    position: "absolute",
  },
  botonLayout: {
    width: 360,
    height: 40,
  },
  sYaHeTypo: {
    color: Color.gREY2SPORTSMATCH,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    left: 3,
    top: 11,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  rectanguloLayout: {
    borderRadius: Border.br_81xl,
    width: 360,
  },
  botonPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  cerrarTypo: {
    fontWeight: "700",
    fontSize: FontSize.button_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  fondoPopup: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    height: 843,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  estsSeguroDe: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 26,
    fontWeight: "500",
    height: 22,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH,
    width: 390,
  },
  sYaHe: {
    width: 354,
  },
  rectangulo: {
    borderStyle: "solid",
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    height: 40,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_81xl,
  },
  boton1: {
    height: 40,
  },
  sHeCubierto: {
    width: 355,
  },
  boton2: {
    marginTop: 20,
    height: 40,
  },
  botones: {
    marginTop: 94,
  },
  contenidoFrame: {
    alignItems: "center",
  },
  textoBoton: {
    color: Color.bLACK1SPORTSMATCH,
    flex: 1,
  },
  botonEliminarOferta2: {
    backgroundColor: Color.wHITESPORTSMATCH,
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  botonEliminarOferta1: {
    right: "0%",
    left: "0%",
    flexDirection: "row",
    width: "100%",
  },
  botonGrupo: {
    width: "654.55%",
    right: "-277.27%",
    left: "-277.27%",
  },
  botonEliminarOferta: {
    alignSelf: "stretch",
    flex: 1,
  },
  cerrar: {
    marginTop: 12,
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.button_size,
  },
  botonesInferiores: {
    height: 72,
    marginTop: 250,
    alignItems: "center",
  },
  contenido: {
    top: 239,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  eliminarOferta3: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default EliminarOferta;
