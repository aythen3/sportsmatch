import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setSport } from '../redux/slices/sports.slices'

const DeportesSeleccion = ({ name }) => {
  const dispatch = useDispatch()
  const { sport } = useSelector((state) => state.sports)
  const [selectedImage, setSelectedImage] = useState(null)

  const [selectedSport, setSelectedSport] = useState(null)

  const handleSportSelection = (name) => {
    if (selectedSport === name) {
      setSelectedSport(null) // Deseleccionar si ya está seleccionado
    } else {
      setSelectedSport(name) // Seleccionar si no está seleccionado
      // Aquí también puedes despachar tu acción para actualizar el estado global si es necesario
      // dispatch(setSport(name));
    }
  }

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity onPress={() => handleSportSelection(name)}>
        <View>
          {name === 'Futbol' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={
                selectedSport !== name
                  ? require('../assets/grupo-futbol.png')
                  : require('../assets/group-389.png')
              }
            />
          )}
          {name === 'Basquekball' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={
                selectedSport !== name
                  ? require('../assets/grupo-baloncesto.png')
                  : require('../assets/group-390.png')
              }
            />
          )}
          {name === 'Futbol de Salon' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={
                selectedSport !== name
                  ? require('../assets/grupo-futbol-sala.png')
                  : require('../assets/group-395.png')
              }
            />
          )}
          {name === 'Hockey' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-hockey.png')}
            />
          )}
          {name === 'Voley' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-voleibol.png')}
            />
          )}
          {name === 'Handball' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/grupo-balonmano.png')}
            />
          )}
          {/* {selectedImage === name ? (
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
          )} */}
          <Text style={styles.ftbolTypo}>{name}</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => setSelectedImage('baloncesto')}>
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
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  frameParent: {
    // width: '100%',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center'
    // gap: 18
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
