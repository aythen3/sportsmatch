import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PuntoConflictvoEl = () => {
  return (
    <Text style={styles.puntoConflictvoEl}>
      Punto conflictívo. El jugador pagará por inscripciones y el club paga para
      verlas. Si el club no paga se creará un vacío de servicio. Valorar.
    </Text>
  );
};

const styles = StyleSheet.create({
  puntoConflictvoEl: {
    fontSize: FontSize.size_31xl,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.colorDarkturquoise,
    textAlign: "left",
    width: 800,
    height: 235,
  },
});

export default PuntoConflictvoEl;
