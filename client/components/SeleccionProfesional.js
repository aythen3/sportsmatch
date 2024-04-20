import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import CustomModal from './modals/CustomModal'

const SeleccionProfesional = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedProfesional, setSelectedProfesional] = useState(null)
  const [cityModal, setCityModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)

  const opcionesProfesional = ['Entrenador']
  const opcionesResidencia = [
    'Barcelona',
    'Madrid',
    'Sevilla',
    'Valencia',
    'Murcia',
    'Toledo'
  ]

  const openModal = () => {
    setModalVisible(true)
  }

  const openCityModal = () => {
    setCityModal(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setCityModal(false)
  }

  const handleSelectProfesional = (profesional) => {
    setSelectedProfesional(profesional)
  }

  const handleSelectCity = (city) => {
    setSelectedCity(city)
  }

  return (
    <View style={styles.contenidoFormulariosboton}>
      <View style={styles.formulariosInferiores}>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Tipo de profesional</Text>
          <Pressable onPress={openModal} style={styles.rectanguloBorder}>
            <CustomModal
              visible={modalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectProfesional}
              title="Selecciona tu opción"
              options={opcionesProfesional}
            />
            {selectedProfesional && (
              <Text style={styles.atributoInner}>{selectedProfesional}</Text>
            )}
          </Pressable>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Años en activo</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="2000"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Lugar de Residencia</Text>
          <Pressable onPress={openCityModal} style={styles.rectanguloBorder}>
            <CustomModal
              visible={cityModal}
              closeModal={closeModal}
              onSelectItem={handleSelectCity}
              title="Selecciona tu opción"
              options={opcionesResidencia}
            />
            {selectedCity && (
              <Text style={styles.atributoInner}>{selectedCity}</Text>
            )}
          </Pressable>
        </View>

        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Club actual</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="Rellena sólo si estás en algún club"
              placeholderTextColor={'#999'}
            />
          </View>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Cómo te defines como profesional</Text>
          <View style={styles.rectanguloBorder2}>
            <TextInput
              style={styles.textInput}
              placeholder="Describe tu juego, tu condición física, 
              tu personalidad en el campo..."
              placeholderTextColor={'#999'}
              multiline={true}
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
    height: 40,
    borderStyle: 'solid',
    justifyContent: 'center',
    width: '96%'
  },
  rectanguloBorder2: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_3xs,
    height: 100,
    borderStyle: 'solid',
    width: '96%'
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
    fontSize: FontSize.t2TextSTANDARD_size
  },
  atributoInner: {
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: '5%'
  },
  formularioCategoria: {
    height: 63
  },
  formulariosInferiores: {
    marginTop: '10%',
    left: 5
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
    fontFamily: FontFamily.t4TEXTMICRO,
    height: 50
  }
})

export default SeleccionProfesional
