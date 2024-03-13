import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import CustomModal from './modals/CustomModal'

const SkillSeleccion = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategoria, setSelectedCategoria] = useState(null)
  const [positionModalVisible, setPositionModalVisible] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)

  const opcionesCategoria = [
    'Escuela (4-6 años)',
    'Prebenjamín (6-8 años)',
    'Benjamín (8-10 años)',
    'Alevín (10-12 años)',
    'Infantil (12-14 años)',
    'Cadete (14-16 años)',
    'Juvenil (16-18 años)',
    'Senior (+18 años)',
    'Veteranos (+30 años)'
  ]
  const opcionesPosicion = ['Pase', 'Resistencia', 'Disparo', 'Regate']

  const openModal = () => {
    setModalVisible(true)
  }

  const openPositionModal = () => {
    setPositionModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setPositionModalVisible(false)
  }

  const handleSelectCategoria = (edad) => {
    setSelectedCategoria(edad)
  }

  const handleSelectPosition = (posicion) => {
    setSelectedPosition(posicion)
  }

  return (
    <View style={styles.contenidoFormulariosboton}>
      <View style={styles.campos}>
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Ataque</Text>
          <View style={styles.rectangulo}>
            <TextInput
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Defensa</Text>
          <View style={styles.rectangulo}>
            <TextInput
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Velocidad</Text>
          <View style={styles.rectangulo}>
            <TextInput
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.formulariosInferiores}>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Categoría</Text>
          <Pressable onPress={openModal} style={styles.rectanguloBorder}>
            <CustomModal
              visible={modalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectCategoria}
              title="Selecciona tu opción"
              options={opcionesCategoria}
            />
            {selectedCategoria && (
              <Text style={styles.atributoInner}>{selectedCategoria}</Text>
            )}
          </Pressable>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Posición Principal</Text>
          <Pressable
            onPress={openPositionModal}
            style={styles.rectanguloBorder}
          >
            <CustomModal
              visible={positionModalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectPosition}
              title="Selecciona tu opción"
              options={opcionesPosicion}
            />
            {selectedPosition && (
              <Text style={styles.atributoInner}>{selectedPosition}</Text>
            )}
          </Pressable>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Altura</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="1.80m"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Bote</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Lanzamiento</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Dribling</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rectanguloBorder: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    height: 45,
    borderStyle: 'solid',
    justifyContent: 'center'
  },
  defensa: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    marginBottom: '5%'
  },
  rectangulo: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    height: 40,
    borderStyle: 'solid',
    justifyContent: 'center'
  },
  campos: {
    height: 40,
    flexDirection: 'row',
    gap: 20
  },
  atributo: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    marginBottom: 5
  },
  atributoInner: {
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: '5%'
  },
  formularioCategoria: {
    // height: 70,
    marginTop: 14
  },
  formulariosInferiores: {
    marginTop: '5%'
    // left: 5
  },
  contenidoFormulariosboton: {
    marginTop: 20
  },
  atributoContainer: {
    width: '28%',
    justifyContent: 'center'
  },
  textInput: {
    left: 10,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  }
})

export default SkillSeleccion
