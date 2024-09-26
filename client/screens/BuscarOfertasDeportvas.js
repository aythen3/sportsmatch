import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import { FontSize, FontFamily, Color } from '../GlobalStyles'

const BuscarOfertasDeportvas = () => {
  return (
    <Text style={styles.buscarOfertasDeportvas}>Buscar ofertas deportívas</Text>
  )
}

const styles = StyleSheet.create({
  buscarOfertasDeportvas: {
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left'
  }
})

export default BuscarOfertasDeportvas
