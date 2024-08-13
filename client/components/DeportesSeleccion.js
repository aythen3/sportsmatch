import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { getSportById } from '../redux/actions/sports'

const DeportesSeleccion = ({ sport, selectedSport, onSelect }) => {
  const dispatch = useDispatch()
  const handlePress = () => {
    onSelect(sport)
    dispatch(getSportById(sport.id))
  }

  return (
    <View style={styles.frameParent}>
      <TouchableOpacity onPress={handlePress}>
        <View>
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
          {sport?.name === 'Básquetbol' && (
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
          <Text style={styles.ftbolTypo}>
            {sport?.name === 'Básquetbol'
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
    alignItems: 'center'
  },
  frameChild: {
    height: 160,
    width: Dimensions.get('screen').width / 2.6
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
