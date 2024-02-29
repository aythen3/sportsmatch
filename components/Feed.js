import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Border } from '../GlobalStyles'

const Feed = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.fila1}>
        <View style={[styles.imagen1pin, styles.fila2Layout]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/imagen-1.png')}
          />
        </View>
        <View style={[styles.imagen2pin, styles.fila2Layout]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/imagen-2.png')}
          />
        </View>
        <View style={[styles.imagen2pin, styles.fila2Layout]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/imagen-3.png')}
          />
        </View>
      </View>
      <View style={[styles.fila2, styles.fila2Layout]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require('../assets/imagen-4.png')}
        />
        <Image
          style={[styles.imagen5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require('../assets/imagen-5.png')}
        />
        <Image
          style={[styles.imagen5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require('../assets/imagen-6.png')}
        />
      </View>
      <View style={[styles.fila2, styles.fila2Layout]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require('../assets/imagen-7.png')}
        />
        <Image
          style={[styles.imagen5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require('../assets/imagen-8.png')}
        />
        <Image
          style={[styles.imagen5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require('../assets/imagen-9.png')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
  fila1: {
    flexDirection: 'row'
  },
  imagen1pin: {
    width: 117,
    height: 146
  },
  fila2Layout: {
    height: 146,
    flexDirection: 'row'
  },
  imagen2pin: {
    marginLeft: 4,
    width: 117,
    height: 146
  },
  fila2: {
    marginTop: 2,
    width: 359
  },
  imagen5Icon: {
    marginLeft: 4
  },
  iconLayout: {
    borderRadius: Border.br_10xs,
    maxHeight: '100%',
    alignSelf: 'stretch',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Feed
