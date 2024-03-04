import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const DeportesSeleccion = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity onPress={() => setSelectedImage('futbol')}>
        <View>
          {selectedImage === 'futbol' ? (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-389.png')}
            />
          ) : (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-futbol.png')}
            />
          )}
          <Text style={styles.ftbolTypo}>Fútbol</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedImage('baloncesto')}>
        <View>
          {selectedImage === 'baloncesto' ? (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-390.png')}
            />
          ) : (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-baloncesto.png')}
            />
          )}
          <Text style={styles.ftbolTypo}>Baloncesto</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedImage('hockey')}>
        <View>
          {selectedImage === 'hockey' ? (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-391.png')}
            />
          ) : (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-hockey.png')}
            />
          )}
          <Text style={styles.ftbolTypo}>Hockey</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedImage('futbolSala')}>
        <View>
          {selectedImage === 'futbolSala' ? (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-395.png')}
            />
          ) : (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-futbol-sala.png')}
            />
          )}
          <Text style={styles.ftbolTypo}>Fútbol sala</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedImage('voleibol')}>
        <View>
          {selectedImage === 'voleibol' ? (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-393.png')}
            />
          ) : (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-voleibol.png')}
            />
          )}
        </View>
        <Text style={styles.ftbolTypo}>Vóleibol</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedImage('handball')}>
        <View>
          {selectedImage === 'handball' ? (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-394.png')}
            />
          ) : (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-balonmano.png')}
            />
          )}
          <Text style={styles.ftbolTypo}>Handball</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParent: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18
    // top: '10%'
  },
  frameChild: {
    height: 131,
    width: 130
  },
  ftbolTypo: {
    marginTop: 7,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size
  }
})

export default DeportesSeleccion
