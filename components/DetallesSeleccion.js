import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import GeneroModal from './modals/GeneroModal'
import AñoNacimientoModal from './modals/AñoNacimientoModal'
import LugarDeResidenciaModal from './modals/LugarDeResidenciaModal'

const SkillSeleccion = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedGenero, setSelectedGenero] = useState(null)
  const [añoNacimientoModalVisible, setAñoNacimientoModalVisible] =
    useState(false)
  const [selectedAñoNacimiento, setSelectedAñoNacimiento] = useState(null)
  const [lugarDeResidenciaModalVisible, setLugarDeResidenciaModalVisible] =
    useState(false)
  const [selectedLugarDeResidencia, setSelectedLugarDeResidencia] =
    useState(null)

  const openAñoNacimientoModal = () => {
    setAñoNacimientoModalVisible(true)
  }

  const closeAñoNacimientoModal = () => {
    setAñoNacimientoModalVisible(false)
  }

  const handleSelectAñoNacimiento = (año) => {
    setSelectedAñoNacimiento(año)
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleSelectGenero = (genero) => {
    setSelectedGenero(genero)
  }

  const openLugarDeResidenciaModal = () => {
    setLugarDeResidenciaModalVisible(true)
  }

  const closeLugarDeResidenciaModal = () => {
    setLugarDeResidenciaModalVisible(false)
  }

  const handleSelectLugarDeResidencia = (lugar) => {
    setSelectedLugarDeResidencia(lugar)
  }

  return (
    <View style={styles.formulariosInferiores}>
      <View style={styles.formularioCategoria}>
        <Text style={styles.atributo}>Sexo</Text>
        <Pressable onPress={openModal} style={styles.rectanguloBorder}>
          <GeneroModal
            visible={modalVisible}
            closeModal={closeModal}
            onSelectGenero={handleSelectGenero}
          />
          {selectedGenero && (
            <Text style={styles.atributoInner}>{selectedGenero}</Text>
          )}
        </Pressable>
      </View>
      <View style={styles.formularioCategoria}>
        <Text style={styles.atributo}>Año de Nacimiento</Text>
        <Pressable
          onPress={openAñoNacimientoModal}
          style={styles.rectanguloBorder}
        >
          <AñoNacimientoModal
            visible={añoNacimientoModalVisible}
            closeModal={closeAñoNacimientoModal}
            onSelectAñoNacimiento={handleSelectAñoNacimiento}
          />
          {selectedAñoNacimiento && (
            <Text style={styles.atributoInner}>{selectedAñoNacimiento}</Text>
          )}
        </Pressable>
      </View>
      <View style={styles.formularioCategoria}>
        <Text style={styles.atributo}>Lugar de residencia</Text>
        <Pressable
          onPress={openLugarDeResidenciaModal}
          style={styles.rectanguloBorder}
        >
          <LugarDeResidenciaModal
            visible={lugarDeResidenciaModalVisible}
            closeModal={closeLugarDeResidenciaModal}
            onSelectCiudad={handleSelectLugarDeResidencia}
          />
          {selectedLugarDeResidencia && (
            <Text style={styles.atributoInner}>
              {selectedLugarDeResidencia}
            </Text>
          )}
        </Pressable>
      </View>
      <View style={styles.formularioCategoria}>
        <Text style={styles.atributo}>Club actual</Text>
        <View style={styles.rectanguloBorder}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe sólo si estas en algún club"
            placeholderTextColor={'#999'}
          />
        </View>
      </View>
      <View style={styles.formularioCategoria}>
        <Text style={styles.atributo}>Como te defines como jugador</Text>
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
    left: 5,
    width: '100%',
    gap: 20
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
    width: '90%',
    height: 50
  }
})

export default SkillSeleccion
