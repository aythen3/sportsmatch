import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import CustomModal from './modals/CustomModal'
import AñoNacimientoModal from './modals/AñoNacimientoModal'
import Acordeon from './Acordeon'
import { useDispatch } from 'react-redux'
import { setBirthdate, setCity, setGender } from '../redux/slices/users.slices'

const SkillSeleccion = ({
  editable,
  setEditable,
  sportmanValues,
  setSportmanValues
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedGenero, setSelectedGenero] = useState()
  const [añoNacimientoModalVisible, setAñoNacimientoModalVisible] =
    useState(false)
  const [selectedAñoNacimiento, setSelectedAñoNacimiento] = useState()
  const [cityModal, setCityModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState()

  const opcionesGenero = ['Masculino', 'Femenino', 'Otro']
  const opcionesResidencia = [
    'Barcelona',
    'Madrid',
    'Sevilla',
    'Valencia',
    'Murcia'
  ]

  const openAñoNacimientoModal = () => {
    setAñoNacimientoModalVisible(true)
  }

  const closeAñoNacimientoModal = () => {
    setAñoNacimientoModalVisible(false)
  }

  const handleSelectAñoNacimiento = (año) => {
    dispatch(setBirthdate(año))
    setSelectedAñoNacimiento(año)
  }

  const openModal = () => {
    setModalVisible(!modalVisible)
  }

  const closeModal = () => {
    setModalVisible(false)
    setCityModal(false)
  }

  const handleSelectGenero = (genero) => {
    dispatch(setGender(genero))
    setSelectedGenero(genero)
  }

  const openCityModal = () => {
    setCityModal(!cityModal)
  }
  const handleSelectCity = (city) => {
    dispatch(setCity(city))
    setSelectedCity(city)
  }

  const descriptionSportMan = (field, value) => {
    setSportmanValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <View style={styles.formulariosInferiores}>
      <View
        style={{
          position: 'relative',
          width: '100%',
          marginTop: 10,
          zIndex: 5000
        }}
      >
        <Acordeon
          title="Sexo"
          placeholderText={
            selectedGenero ? selectedGenero : 'Selecciona tu sexo'
          }
          isAccordeon={true}
          open={openModal}
        />
        {modalVisible && (
          <CustomModal
            visible={modalVisible}
            closeModal={closeModal}
            onSelectItem={handleSelectGenero}
            options={opcionesGenero}
          />
        )}
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

          <Text style={styles.atributoInner}>
            {selectedAñoNacimiento && selectedAñoNacimiento > 1933
              ? selectedAñoNacimiento
              : 'Selecciona año de nacimiento'}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          position: 'relative',
          width: '100%',
          marginTop: 10
        }}
      >
        <Acordeon
          title="Lugar de residencia"
          placeholderText={selectedCity ? selectedCity : 'Lugar de residencia'}
          isAccordeon={true}
          open={openCityModal}
        />
        {cityModal && (
          <CustomModal
            visible={cityModal}
            closeModal={closeModal}
            onSelectItem={handleSelectCity}
            options={opcionesResidencia}
          />
        )}
      </View>

      <View style={styles.formularioCategoria}>
        <Text style={styles.atributo}>Club actual</Text>
        <View style={styles.rectanguloBorder}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe sólo si estas en algún club"
            placeholderTextColor={'#999'}
            value={sportmanValues?.actualClub}
            onChangeText={(value) => descriptionSportMan('actualClub', value)}
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
            value={sportmanValues?.description}
            onChangeText={(value) => descriptionSportMan('description', value)}
          />
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
    height: 40,
    borderStyle: 'solid',
    justifyContent: 'center'
    // width: '96%'
  },
  rectanguloBorder2: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_3xs,
    height: 100,
    borderStyle: 'solid'
    // width: '100%'
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
    width: '90%',
    zIndex: -1000
  },
  formulariosInferiores: {
    marginTop: 20,
    width: '100%',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contenidoFormulariosboton: {
    marginTop: 20
  },
  atributoContainer: {
    width: '28%'
    // justifyContent: 'center'
  },
  textInput: {
    left: 10,
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    width: '90%',
    height: 50
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '10%',
    width: 350
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
