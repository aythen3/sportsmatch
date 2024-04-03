import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import CustomModal from './modals/CustomModal'
import Acordeon from './Acordeon'
import { setCategory, setPosition } from '../redux/slices/users.slices'

const SkillSeleccion = ({ editable, setEditable, setData, data }) => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

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
    setModalVisible(!modalVisible)
  }

  const openPositionModal = () => {
    setPositionModalVisible(!positionModalVisible)
  }

  const closeModal = () => {
    setModalVisible(false)
    setPositionModalVisible(false)
  }

  const handleSelectCategoria = (edad) => {
    setSelectedCategoria(edad)
    dispatch(setCategory(edad))
  }

  const handleSelectPosition = (posicion) => {
    setSelectedPosition(posicion)
    dispatch(setPosition(posicion))
  }

  const handleData = (key, value) => {
    const newData = {
      ...data,
      [key]: value
    }
    setData(newData)
  }

  return (
    <View style={styles.contenidoFormulariosboton}>
      <View style={styles.campos}>
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Ataque</Text>
          <View style={styles.rectangulo}>
            <TextInput
              key={'attack'}
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={(value) => handleData('attack', value)}
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
              onChangeText={(value) => handleData('defense', value)}
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
              onChangeText={(value) => handleData('speed', value)}
            />
          </View>
        </View>
      </View>
      <View style={styles.formulariosInferiores}>
        <Acordeon
          title="Categoria"
          placeholderText={
            selectedCategoria ? selectedCategoria : 'Selecciona tu categoria'
          }
          isAccordeon={true}
          open={openModal}
        />
        {modalVisible && (
          <CustomModal
            visible={modalVisible}
            closeModal={closeModal}
            onSelectItem={handleSelectCategoria}
            options={opcionesCategoria}
          />
        )}

        <Acordeon
          title="Posicion Principal"
          placeholderText={
            selectedPosition ? selectedPosition : 'Selecciona tu posicion'
          }
          isAccordeon={true}
          open={openPositionModal}
        />
        {positionModalVisible && (
          <CustomModal
            visible={positionModalVisible}
            closeModal={closeModal}
            onSelectItem={handleSelectPosition}
            options={opcionesPosicion}
          />
        )}

        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Altura</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="1.80m"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
              onChangeText={(value) => handleData('height', value)}
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
              onChangeText={(value) => handleData('prop1', value)}
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
              onChangeText={(value) => handleData('prop2', value)}
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
              onChangeText={(value) => handleData('prop3', value)}
            />
          </View>
        </View>
      </View>
      {editable && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.saveButton}
            onPress={() => {
              navigation.navigate('EditarPerfil')
              setEditable(false)
            }}
          >
            <Text style={styles.saveButtonText}>Guardar</Text>
          </Pressable>
        </View>
      )}
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
    gap: 20,
    justifyContent: 'center'
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
    marginTop: 14,
    width: '90%'
  },
  formulariosInferiores: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contenidoFormulariosboton: {
    marginTop: 20
  },
  atributoContainer: {
    width: '26%'
  },
  textInput: {
    left: 10,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '10%'
  },
  saveButton: {
    backgroundColor: Color.wHITESPORTSMATCH,
    width: '90%',
    height: 45,
    borderRadius: Border.br_81xl,
    justifyContent: 'center'
  },
  saveButtonText: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.size_lgi_3,
    color: Color.bLACK3SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700'
  }
})

export default SkillSeleccion
