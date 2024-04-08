import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import SeleccionProfesional from '../../components/SeleccionProfesional'
import Lines from '../../components/Lines'
import Input from '../../components/Input'
import CustomModal from '../../components/modals/CustomModal'
import Acordeon from '../../components/Acordeon'
import { useDispatch } from 'react-redux'
import { setCity, setProfesionalType } from '../../redux/slices/users.slices'

const Paso3Profesional = ({ setProfesionalValues, profesionalValues }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedProfesional, setSelectedProfesional] = useState(null)
  const [cityModal, setCityModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)

  const opcionesProfesional = ['Entrenador', 'Masajista', 'Ayudante de campo']
  const opcionesResidencia = [
    'Barcelona',
    'Madrid',
    'Sevilla',
    'Valencia',
    'Murcia',
    'Toledo'
  ]

  const openModal = () => {
    setModalVisible(!modalVisible)
  }

  const openCityModal = () => {
    setCityModal(!cityModal)
  }

  const closeModal = () => {
    setModalVisible(false)
    setCityModal(false)
  }

  const handleSelectProfesional = (profesional) => {
    dispatch(setProfesionalType(profesional))
    setSelectedProfesional(profesional)
  }

  const handleSelectCity = (city) => {
    dispatch(setCity(city))
    setSelectedCity(city)
  }

  const handlesValues = (field, value) => {
    setProfesionalValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <View style={styles.paso6}>
      <Acordeon
        title="Tipo de profesional"
        placeholderText={
          selectedProfesional ? selectedProfesional : 'Entrenador'
        }
        isAccordeon={true}
        open={openModal}
      />
      {modalVisible && (
        <CustomModal
          visible={modalVisible}
          closeModal={closeModal}
          onSelectItem={handleSelectProfesional}
          options={opcionesProfesional}
        />
      )}
      <Input
        title="Años en activo"
        placeholderText="+5"
        field="yearsOfExperience"
        onValues={handlesValues}
        value={profesionalValues.yearsOfExperience}
        keyboardType="numeric"
      />
      <Acordeon
        title="Lugar de residencia"
        placeholderText={profesionalValues.city}
        isAccordeon={true}
        open={openCityModal}
      />
      {cityModal && (
        <CustomModal
          visible={cityModal}
          closeModal={closeModal}
          onSelectItem={handleSelectCity}
          title="Selecciona tu opción"
          options={opcionesResidencia}
        />
      )}
      <Input
        title="Club actual"
        placeholderText="Rellena solo si estas en algun club"
        field="actualClub"
        onValues={handlesValues}
        value={profesionalValues.actualClub}
      />
      <Input
        title="Como te defines como profesional"
        placeholderText="Describe tu juego, tu condicion fisica, tu personalidad en el campo"
        isMultiLine={true}
        field="description"
        onValues={handlesValues}
        value={profesionalValues.description}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  jugadorTypo1: {
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  liniaLayout1: {
    height: 3,
    width: '20%',
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid'
  },
  liniaLayout2: {
    height: 3,
    width: '20%',
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.bALONCESTO,
    borderStyle: 'solid'
  },
  imagenDeFondo: {
    position: 'absolute',
    height: '100%',
    width: '110%',
    zIndex: 0
  },
  coolicon: {
    width: 9,
    height: 15
  },
  atrs: {
    color: Color.gREY2SPORTSMATCH,
    marginLeft: 5,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    right: '10%',
    marginBottom: '5%'
  },
  paso1: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
    textAlign: 'center'
  },
  escogeTuRol: {
    alignSelf: 'stretch',
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  linias: {
    padding: Padding.p_3xs,
    marginTop: 20,
    flexDirection: 'row',
    gap: 20
  },
  stepseccion: {
    marginTop: 3,
    alignItems: 'center'
  },
  headerSteps: {
    alignItems: 'flex-end'
  },
  siguiente: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    top: 30,
    width: '90%'
  },
  siguiente1: {
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  paso6: {
    width: '100%'
  }
})

export default Paso3Profesional
