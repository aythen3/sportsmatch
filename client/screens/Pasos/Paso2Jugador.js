import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import DeportesSeleccion from '../../components/DeportesSeleccion'
import { useSelector } from 'react-redux'

const Paso2Jugador = ({ selectedSport, setSelectedSport }) => {
  const handleSportSelection = (sport) => {
    setSelectedSport(sport)
  }
  const sports = [
    { name: 'Hockey' },
    { name: 'Fútbol Sala' },
    { name: 'Baloncesto' },
    { name: 'Fútbol' },
    { name: 'Voley' },
    { name: 'Handball' }
  ]

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        gap: 15
      }}
    >
      {sports.map(
        (sport) =>
          sport.name === 'Fútbol' && (
            <DeportesSeleccion
              key={sport.id}
              sport={sport}
              selectedSport={selectedSport}
              onSelect={handleSportSelection}
            />
          )
      )}
      {sports.map(
        (sport) =>
          sport.name === 'Fútbol Sala' && (
            <DeportesSeleccion
              key={sport.id}
              sport={sport}
              selectedSport={selectedSport}
              onSelect={handleSportSelection}
            />
          )
      )}
      {sports.map(
        (sport) =>
          sport.name === 'Baloncesto' && (
            <DeportesSeleccion
              key={sport.id}
              sport={sport}
              selectedSport={selectedSport}
              onSelect={handleSportSelection}
            />
          )
      )}
      {sports.map(
        (sport) =>
          sport.name === 'Hockey' && (
            <DeportesSeleccion
              key={sport.id}
              sport={sport}
              selectedSport={selectedSport}
              onSelect={handleSportSelection}
            />
          )
      )}
      {sports.map(
        (sport) =>
          sport.name === 'Handball' && (
            <DeportesSeleccion
              key={sport.id}
              sport={sport}
              selectedSport={selectedSport}
              onSelect={handleSportSelection}
            />
          )
      )}
      {sports.map(
        (sport) =>
          sport.name === 'Voley' && (
            <DeportesSeleccion
              key={sport.id}
              sport={sport}
              selectedSport={selectedSport}
              onSelect={handleSportSelection}
            />
          )
      )}
    </View>
  )
}

export default Paso2Jugador
