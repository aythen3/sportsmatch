import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DeportesSeleccion from '../../components/DeportesSeleccion'
import { useSelector } from 'react-redux'

const Paso2Jugador = ({ selectedSport, setSelectedSport }) => {
  const handleSportSelection = (sport) => {
    setSelectedSport(sport)
  }
  const sports = [
    { name: 'Hockey', id: 1 },
    { name: 'Fútbol Sala', id: 2 },
    { name: 'Baloncesto', id: 3 },
    { name: 'Fútbol', id: 4 },
    { name: 'Voley', id: 5 },
    { name: 'Handball', id: 6 }
  ]

  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Espacio entre los elementos

    paddingHorizontal: 20,
    gap: 8,
    flex: 1
  },
  deporteItem: {
    marginBottom: 15, // Margen inferior para separar las filas
    flexShrink: 0 // Evita que los elementos se encogen
  }
})
export default Paso2Jugador
