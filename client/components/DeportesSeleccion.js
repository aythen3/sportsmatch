import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
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
          {sport?.name === 'Futbol' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-futbol.png')
                  : require('../assets/group-389.png')
              }
            />
          )}
          {sport?.name === 'Basquetbol' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-baloncesto.png')
                  : require('../assets/group-390.png')
              }
            />
          )}
          {sport?.name === 'Futbol de Salon' && (
            <Image
              style={styles.frameChild}
              contentFit="cover"
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
              contentFit="cover"
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
              contentFit="cover"
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
              contentFit="cover"
              source={
                selectedSport?.name !== sport.name
                  ? require('../assets/grupo-balonmano.png')
                  : require('../assets/group-394.png')
              }
            />
          )}
          <Text style={styles.ftbolTypo}>{sport?.name}</Text>
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
