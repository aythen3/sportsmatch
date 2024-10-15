import React, { useContext } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { getSportById } from '../redux/actions/sports'
import { Context } from '../context/Context'

const DeportesSeleccion = ({ sport, selectedSport, onSelect }) => {
  const dispatch = useDispatch()
  const handlePress = () => {
    onSelect(sport)
    dispatch(getSportById(sport.id))
  }
  const { scalableFontSize } = useContext(Context)

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity
        style={{ width: '100%', height: '100%' }}
        onPress={handlePress}
      >
        <View
          style={{
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%'
          }}
        >
          {sport?.name === 'Fútbol' && (
            <Image
              style={styles.frameChild}
              resizeMode="contain"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-futbol.png')
                  : require('../assets/group-389.png')
              }
            />
          )}
          {sport?.name === 'Baloncesto' && (
            <Image
              style={styles.frameChild}
              resizeMode="contain"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-baloncesto.png')
                  : require('../assets/group-390.png')
              }
            />
          )}
          {sport?.name === 'Fútbol Sala' && (
            <Image
              style={styles.frameChild}
              resizeMode="contain"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-futbol-sala.png')
                  : require('../assets/group-395.png')
              }
            />
          )}
          {sport?.name === 'Hockey' && (
            <Image
              style={styles.frameChild}
              resizeMode="contain"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-hockey.png')
                  : require('../assets/group-391.png')
              }
            />
          )}
          {sport?.name === 'Voley' && (
            <Image
              style={styles.frameChild}
              resizeMode="contain"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-voleibol.png')
                  : require('../assets/group-393.png')
              }
            />
          )}
          {sport?.name === 'Handball' && (
            <Image
              style={styles.frameChild}
              resizeMode="contain"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-balonmano.png')
                  : require('../assets/group-394.png')
              }
            />
          )}
          <Text style={{ ...styles.ftbolTypo, fontSize: scalableFontSize(12) }}>
            {sport?.name === 'Baloncesto'
              ? 'Baloncesto'
              : sport?.name === 'Fútbol de salón'
                ? 'Futbol sala'
                : sport?.name === 'Handball'
                  ? 'Balonmano'
                  : sport?.name === 'Voley'
                    ? 'Voleibol'
                    : sport.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '48%', // Ocupa el 48% del ancho del contenedor padre
    height: '32%'
  },
  frameChild: {
    width: '80%', // Ocupa el 80% del ancho disponible,
    height: '80%'
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
