import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CuandoElJugador = () => {
  return (
    <Text style={styles.cuandoElJugador}>
      Cuando el jugador contacta con el club, el club debe lanzar un match (y es
      aceptado automátícamente) para empezar a hablar. Pago por match? En
      principio no.
    </Text>
  );
};

const styles = StyleSheet.create({
  cuandoElJugador: {
    fontSize: FontSize.size_31xl,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.colorDarkturquoise,
    textAlign: "left",
    width: 1016,
    height: 189,
  },
});

export default CuandoElJugador;
