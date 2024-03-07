import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const PlayingFieldPerfilClub = () => {
  return (
    <View style={styles.moduloCampo}>
      {/* <View style={[styles.fondoModulo, styles.borderBorder]} /> */}
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
            <Text style={styles.nombreDelEstadio}>{`Nombre del 
estadio o pavellón
Palau Municipals 
d’Esports Josep Mora`}</Text>
            <Text
              style={[styles.poblacinMatar, styles.pasEspaaTypo]}
            >{`Población
Mataró`}</Text>
            <Text style={[styles.pasEspaa, styles.pasEspaaTypo]}>{`País
España`}</Text>
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
    marginTop: 27
  },
  nombreDelEstadio: {
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  poblacinMatar: {
    width: 185
  },
  pasEspaaTypo: {
    marginTop: 13,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bALONCESTO,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pasEspaa: {
    width: 138
  }
})

export default PlayingFieldPerfilClub
