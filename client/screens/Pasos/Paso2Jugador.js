import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DeportesSeleccion from '../../components/DeportesSeleccion'
import { useSelector } from 'react-redux'

const Paso2Jugador = () => {
  const { sports } = useSelector((state) => state.sports)

  const [selectedSport, setSelectedSport] = useState(null)

  const handleSportSelection = (sport) => {
    setSelectedSport(sport)
  }

  return (
    <View style={styles.paso6}>
      {sports.map((sport) => (
        <DeportesSeleccion
          key={sport.id}
          sport={sport}
          selectedSport={selectedSport}
          onSelect={handleSportSelection}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  paso6: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15
  }
})

export default Paso2Jugador
