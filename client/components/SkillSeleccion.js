import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView
} from 'react-native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import CustomModal from './modals/CustomModal'
import Acordeon from './Acordeon'
import { setCategory, setPosition } from '../redux/slices/users.slices'
import { updateSportman } from '../redux/actions/sportman'
import ScrollableModal from './modals/ScrollableModal'

const SkillSeleccion = ({ editable, setEditable, setData, data }) => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { sportman } = useSelector((state) => state.sportman)

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategoria, setSelectedCategoria] = useState(null)
  const [positionModalVisible, setPositionModalVisible] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [editData, setEditData] = useState(null)

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
    if (
      key === 'attack' ||
      key === 'defense' ||
      key === 'speed' ||
      key === 'prop1' ||
      key === 'prop2' ||
      key === 'prop3'
    ) {
      // Allow empty string or numbers between 0 and 100
      if (
        value === '' ||
        (/^\d+$/.test(value) &&
          parseInt(value, 10) >= 0 &&
          parseInt(value, 10) <= 100)
      ) {
        if (!editable) {
          const newData = {
            ...data,
            [key]: value
          }
          setData(newData)
        } else {
          setEditData({ ...editData, [key]: value })
        }
      }
      return
    }
    if (!editable) {
      const newData = {
        ...data,
        [key]: value
      }
      setData(newData)
    } else {
      setEditData({ ...editData, [key]: value })
    }
  }

  const handleEdit = () => {
    navigation.navigate('MiPerfil')
    setEditable(false)
    const body = {
      id: sportman?.id,
      newData: editData
    }
    // console.log('body from handleEdit:', body)
    dispatch(updateSportman(body))
  }

  const [categoryTop, setCategoryTop] = useState(0)
  const [positionTop, setPositionTop] = useState(0)
  const [scrolledHeight, setScrolledHeight] = useState(0)

  useEffect(() => {}, [])

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    const height = contentOffset.y // Get the scrolled height
    console.log('height: ', height)
    setScrolledHeight(height)
  }

  return (
    <ScrollView
      onScroll={handleScroll}
      keyboardShouldPersistTaps={'always'}
      style={{
        height: '70%',
        marginTop: -20
      }}
    >
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center'
        }}
      >
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Ataque</Text>
          <View style={styles.rectangulo}>
            <TextInput
              key={'attack'}
              placeholder="0 - 100"
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
              value={data?.attack !== undefined ? String(data?.attack) : editData?.attack ? editData?.attack :''}
              onChangeText={(value) => handleData('attack', value)}
              maxLength={3}
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
              value={data?.defense !== undefined ? String(data?.defense) : editData?.defense ? editData?.defense :''}
              style={styles.textInput}
              onChangeText={(value) => handleData('defense', value)}
              maxLength={3}
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
              value={data?.speed !== undefined ? String(data?.speed) : editData?.speed ? editData?.speed :''}
              onChangeText={(value) => handleData('speed', value)}
              maxLength={3}
            />
          </View>
        </View>
      </View>
      <View style={{ ...styles.formulariosInferiores }}>
        <View
          collapsable={false}
          onLayout={(event) => {
            event.target.measure((x, y, width, height, pageX, pageY) => {
              console.log(pageY)
              setCategoryTop(pageY)
            })
          }}
          style={{ position: 'relative', width: '100%', marginTop: 20 }}
        >
          <Acordeon
            title="Categoría"
            placeholderText={
              selectedCategoria ? selectedCategoria : 'Selecciona tu categoría'
            }
            isAccordeon={true}
            open={openModal}
          />
          {modalVisible && (
            <ScrollableModal
              scrollHeight={scrolledHeight}
              parentTop={categoryTop}
              visible={modalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectCategoria}
              options={opcionesCategoria}
            />
          )}
        </View>
        <View
          collapsable={false}
          onLayout={(event) => {
            event.target.measure((x, y, width, height, pageX, pageY) => {
              console.log(pageY)
              setPositionTop(pageY)
            })
          }}
          style={{ position: 'relative', width: '100%', marginTop: 15 }}
        >
          <Acordeon
            title="Posición Principal"
            placeholderText={
              selectedPosition ? selectedPosition : 'Selecciona tu posición '
            }
            isAccordeon={true}
            open={openPositionModal}
          />
          {positionModalVisible && (
            <ScrollableModal
              scrollHeight={scrolledHeight}
              parentTop={positionTop}
              visible={positionModalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectPosition}
              options={opcionesPosicion}
            />
          )}
        </View>

        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Altura</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder="1.80m"
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
              onChangeText={(value) => handleData('height', value)}
              maxLength={4}
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
              value={data?.prop1 !== undefined ? String(data?.prop1) : editData?.prop1 ? editData?.prop1 : '' }
              onChangeText={(value) => handleData('prop1', value)}
              maxLength={3}
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
              value={data?.prop2 !== undefined ? String(data?.prop2) :editData?.prop2 ? editData?.prop2 : ''}
              onChangeText={(value) => handleData('prop2', value)}
              maxLength={3}
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
              value={data?.prop3 !== undefined ? String(data?.prop3) : editData?.prop3 ? editData?.prop3 : ''}
              keyboardType={'numeric'}
              onChangeText={(value) => handleData('prop3', value)}
              maxLength={3}
            />
          </View>
        </View>
      </View>
      {editable && (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.saveButton} onPress={handleEdit}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
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
