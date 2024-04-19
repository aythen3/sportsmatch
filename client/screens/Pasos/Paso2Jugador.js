import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import DeportesSeleccion from '../../components/DeportesSeleccion'
import { useSelector } from 'react-redux'

const Paso2Jugador = () => {
  const { sports } = useSelector((state) => state.sports)

  useEffect(() => {
    console.log('sports: ', sports)
  }, [])

  const [selectedSport, setSelectedSport] = useState(null)

  const handleSportSelection = (sport) => {
    setSelectedSport(sport)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 15,
        gap: 15
      }}
    >
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

export default Paso2Jugador
