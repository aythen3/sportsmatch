import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const PlayingFieldPerfilClub = ({ fieldName, city, country }) => {
  return (
    <View style={styles.moduloCampo}>
      <View style={styles.graficotextoLateral}>
        <Image
          style={styles.graficoTerrenoJuego}
          contentFit="cover"
          source={require('../assets/grafico-terreno-juego.png')}
        />
        <View style={styles.textoLateral}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={[styles.estadio, styles.taxto1Clr]}>Estadio</Text>
          </Pressable>
          <View style={styles.bloqueInformacion}>
            <Text style={styles.nombreDelEstadio}>
              Nombre del estadio o pavellón
            </Text>
            <Text style={styles.secondText}>{fieldName}</Text>
            <Text style={styles.pasEspaaTypo}>Ciudad</Text>
            <Text style={styles.secondText}>{city}</Text>
            <Text style={[styles.pasEspaa, styles.pasEspaaTypo]}>País</Text>
            <Text style={styles.secondText}>{country}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  moduloCampo: {
    marginTop: 29,
    padding: 10,
    backgroundColor: Color.bLACK3SPORTSMATCH
  },
  graficotextoLateral: {
    flexDirection: 'row'
  },
  graficoTerrenoJuego: {
    width: 166,
    height: 240
  },
  textoLateral: {
    marginLeft: 12
  },
  estadio: {
    fontWeight: '500',
    fontSize: FontSize.h2TITLEBIG_size
  },
  taxto1Clr: {
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  bloqueInformacion: {
    marginTop: 15
  },
  nombreDelEstadio: {
    fontSize: 15,
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO,
    width: '60%'
  },
  pasEspaaTypo: {
    marginTop: 13,
    lineHeight: 17,
    fontSize: 15,
    color: Color.bALONCESTO,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pasEspaa: {
    width: 138
  },
  secondText: {
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    marginTop: 5
  }
})

export default PlayingFieldPerfilClub
