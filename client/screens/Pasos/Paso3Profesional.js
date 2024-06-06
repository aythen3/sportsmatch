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

const Paso3Profesional = ({ setProfesionalValues, profesionalValues, selectedCity, setSelectedCity}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedProfesional, setSelectedProfesional] = useState(null)
  const [cityModal, setCityModal] = useState(false)

  const [cityTop, setCityTop] = useState(0)
  const [pickedCity, setPickedCity] = useState()

  const opcionesProfesional = ['Entrenador/a', 'Preparador/a físico/a', 'Analista técnico/a','Psicologo/a','Fisioterapeuta','Nutricionista']
  const opcionesResidencia = cities.map((city) => city.city).sort()

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
    console.log('city: ', city)
    setSelectedCity(city)
    setPickedCity(city)
    dispatch(setCity(city))
  }

  const [scrolledHeight, setScrolledHeight] = useState(0)

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    const height = contentOffset.y 
    console.log('height: ', height)
    setScrolledHeight(height)
  }

  const handlesValues = (field, value) => {
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
        placeholderText={
          selectedProfesional ? selectedProfesional : 'Entrenador'
        }
        isAccordeon={true}
        open={openModal}
      />
      {/* {modalVisible && (
        <CustomModal
          visible={modalVisible}
          closeModal={closeModal}
          onSelectItem={handleSelectProfesional}
          options={opcionesProfesional}
        />
      )} */}
      {modalVisible && (
        <ScrollableModal
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
       <Input
        title="Lugar de residencia"
        placeholderText="Lugar de residencia"
        field="city"
        onValues={handlesValues}
        value={profesionalValues.city}
      />
      {/* <View
        collapsable={false}
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            console.log(pageY)
            setCityTop(pageY)
          })
        }}
        style={{
          position: 'relative',
          width: '100%'
        }}
      >
        <Acordeon
          title="Lugar de residencia"
          placeholderText={pickedCity ? pickedCity : 'Lugar de residencia'}
          isAccordeon={true}
          open={openCityModal}
        />
        {cityModal && (
          <ScrollableModal
            scrollHeight={scrolledHeight}
            parentTop={cityTop}
            visible={cityModal}
            closeModal={closeModal}
            onSelectItem={handleSelectCity}
            options={opcionesResidencia}
          />
        )}
      </View> */}
      <Input
        title="Club actual"
        placeholderText="Rellena sólo si estas en algún club"
        field="actualClub"
        onValues={handlesValues}
        value={profesionalValues.actualClub}
      />
      <Input
        title="¿Cómo te defines como profesional?"
        placeholderText="Describe tu juego, tu condición física, tu personalidad en el campo"
        isMultiLine={true}
        field="description"
        onValues={handlesValues}
        value={profesionalValues.description}
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
