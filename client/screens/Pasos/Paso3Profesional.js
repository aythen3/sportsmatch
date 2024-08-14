import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
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
import { cities } from '../../utils/cities'
import ScrollableModal from '../../components/modals/ScrollableModal'

const Paso3Profesional = ({
  setProfesionalValues,
  profesionalValues,
  selectedCity,
  setSelectedCity,
  setSelectedProfesional,
  selectedProfesional
}) => {
  const ROL = profesionalValues?.rol
  const CITY = profesionalValues?.city
  const ACTUAL_CLUB = profesionalValues?.actualClub

  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const [cityModal, setCityModal] = useState(false)

  const opcionesProfesional = [
    'Entrenador/a',
    'Preparador/a físico/a',
    'Analista técnico/a',
    'Psicólogo/a',
    'Fisioterapeuta',
    'Nutricionista'
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
    setSelectedProfesional(profesional)
    dispatch(setProfesionalType(profesional))
  }

  const handleSelectCity = (city) => {
    setSelectedCity(city)
    setPickedCity(city)
    dispatch(setCity(city))
  }

  const [scrolledHeight, setScrolledHeight] = useState(0)

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    const height = contentOffset.y
    setScrolledHeight(height)
  }

  const handlesValues = (field, value) => {
    if (field === 'yearsOfExperience' && value > 80) return
    setProfesionalValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <ScrollView onScroll={handleScroll}>
      <View style={styles.paso6}>
        <Acordeon
          title="Tipo de profesional"
          placeholderText={ROL ? ROL : 'Entrenador'}
          isAccordeon={modalVisible}
          open={openModal}
        />

        {modalVisible && (
          <ScrollableModal
            visible={modalVisible}
            closeModal={closeModal}
            onSelectItem={(e) =>
              setProfesionalValues((prev) => {
                return {
                  ...prev,
                  rol: e
                }
              })
            }
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
        <Input
          title="Lugar de residencia"
          placeholderText="Lugar de residencia"
          field="city"
          onValues={handlesValues}
          value={CITY}
        />
        <Input
          title="Club actual"
          placeholderText="Rellena sólo si estas en algún club"
          field="actualClub"
          onValues={handlesValues}
          value={ACTUAL_CLUB}
        />
        <Input
          title="¿Cómo te defines como profesional?"
          placeholderText="Describe tu juego, tu condición física, tu personalidad en el campo"
          isMultiLine={true}
          field="description"
          onValues={handlesValues}
          value={profesionalValues.description}
          maxLength={200}
        />
      </View>
    </ScrollView>
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
