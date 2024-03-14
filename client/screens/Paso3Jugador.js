import React from 'react'
import { StyleSheet, View } from 'react-native'
import SkillSeleccion from '../components/SkillSeleccion'

const Paso3Jugador = () => {
  return (
    <View style={styles.paso6}>
      <View>
        <SkillSeleccion />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paso6: {
    width: '100%'
  }
})

export default Paso3Jugador
