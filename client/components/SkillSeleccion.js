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
import { opciones_categoria, opciones_posicion, opciones_skills , categorias_deporte } from '../utils/SkillUserLocal'



const SkillSeleccion = ({
  editable,
  setEditable,
  setData,
  data,
  selectedSport,
  selectPosition,
  setSelectPosition
}) => {


  const { sportman } = useSelector((state) => state.sportman)

  const [categoryTop, setCategoryTop] = useState(0)
  const [positionTop, setPositionTop] = useState(0)
  const [scrolledHeight, setScrolledHeight] = useState(0)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategoria, setSelectedCategoria] = useState(null)
  const [positionModalVisible, setPositionModalVisible] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedOptionsCategoria, setSelectedOptionsCategoria] = useState([])
  const [selectedOptionsInputs, setSelectedOptionsInputs] = useState('')
  const [editData, setEditData] = useState(null)


  useEffect(() => {
    const selectedSportName = selectedSport?.name;
    const sportmanSportName = sportman?.info?.sport;
  
    if (categorias_deporte[selectedSportName]) {
      setSelectedOptionsCategoria(categorias_deporte[selectedSportName]);
    } else if (categorias_deporte[sportmanSportName]) {
      setSelectedOptionsCategoria(categorias_deporte[sportmanSportName]);
    }

  }, [selectedSport, sportman?.info?.sport]);


  useEffect(() => {
    if (setData) {
      const newData = {
        ...data,
        position: selectedOptionsInputs
      }
      setData(newData)
    }
  }, [selectedOptionsInputs])

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
    setEditData({ ...editData, category: edad })
    dispatch(setCategory(edad))
  }

  const handleSelectPosition = (posicion) => {
    if (!editable) {
      console.log('setting position to ', posicion)
      setSelectPosition(posicion)
      return
    }
    setSelectedPosition(posicion)
    setEditData({ ...editData, position: posicion })
  }

  const handleData = (key, value) => {
    if (
      key === 'attack' ||
      key === 'defense' ||
      key === 'speed' ||
      key === 'height' ||
      key === 'prop1' ||
      key === 'prop2' ||
      key === 'prop3' ||
      key === 'prop4' ||
      key === 'prop5' ||
      key === 'prop6' ||
      key === 'prop7' ||
      key === 'prop8'
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
      } if(
        value === '' ||
        (/^\d+$/.test(value) &&
          parseInt(value, 10) >= 0 &&
          parseInt(value, 10) <= 250)
      ){
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

    dispatch(updateSportman(body))
  }

  

  const selectores = () => {
    if (selectedSport?.name == 'Fútbol' || sportman.info?.sport == 'Fútbol')
      setSelectedOptions(opciones_skills.futbol)
    if (
      selectedSport?.name == 'Fútbol Sala' ||
      sportman.info?.sport == 'Fútbol Sala'
    )
      setSelectedOptions(opciones_skills.futbolSala)
    if (
      selectedSport?.name == 'Básquetbol' ||
      sportman.info?.sport == 'Básquetbol'
    )
      setSelectedOptions(opciones_skills.baloncesto)
    if (selectedSport?.name == 'Hockey' || sportman.info?.sport == 'Hockey')
      setSelectedOptions(opciones_skills.hockey)
    if (selectedSport?.name == 'Handball' || sportman.info?.sport == 'Handball')
      setSelectedOptions(opciones_skills.handball)
    if (selectedSport?.name == 'Voley' || sportman.info?.sport == 'Voley')
      setSelectedOptions(opciones_skills.voleibol)
  }


  useEffect(() => {
    selectores()
  }, [selectedSport])


  const placeholderText =
    editable === false && selectPosition.length > 0
      ? selectPosition
      : selectedPosition
        ? selectedPosition
        : sportman?.info?.position?.toString() || 'Selecciona tu posición'

  return (
    <ScrollView
      // onScroll={handleScroll}
      keyboardShouldPersistTaps={'always'}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal:14,
          marginBottom:7
        }}
      >
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Ataque</Text>
          <View style={styles.rectangulo}>
            <TextInput
              key={'attack'}
              placeholder={sportman?.info?.attack?.toString() || '0 - 100'}
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
              value={
                data?.attack !== undefined
                  ? String(data?.attack)
                  : editData?.attack
                    ? editData?.attack
                    : ''
              }
              onChangeText={(value) => handleData('attack', value)}
              maxLength={3}
            />
          </View>
          <Text style={{fontSize:10,color:"gray",width:"100%",marginTop:3}}>Valor entre 0 y 100</Text>
        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Defensa</Text>
          <View style={styles.rectangulo}>
            <TextInput
              placeholder={sportman?.info?.defense?.toString() || '0 - 100'}
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              value={
                data?.defense !== undefined
                  ? String(data?.defense)
                  : editData?.defense
                    ? editData?.defense
                    : ''
              }
              style={styles.textInput}
              onChangeText={(value) => handleData('defense', value)}
              maxLength={3}
            />
          </View>
          <Text style={{fontSize:10,color:"gray",width:"100%",marginTop:3}}>Valor entre 0 y 100</Text>

        </View>
        <View style={styles.atributoContainer}>
          <Text style={styles.defensa}>Velocidad</Text>
          <View style={styles.rectangulo}>
            <TextInput
              placeholder={sportman?.info?.speed?.toString() || '0 - 100'}
              placeholderTextColor={'#999'}
              keyboardType="numeric"
              style={styles.textInput}
              value={
                data?.speed !== undefined
                  ? String(data?.speed)
                  : editData?.speed
                    ? editData?.speed
                    : ''
              }
              onChangeText={(value) => handleData('speed', value)}
              maxLength={3}
            />
          </View>
          <Text style={{fontSize:10,color:"gray",width:"100%",marginTop:3}}>Valor entre 0 y 100</Text>

        </View>
        
      </View>
      <View style={{ ...styles.formulariosInferiores }}>
        <View
          collapsable={false}
          onLayout={(event) => {
            event.target.measure((x, y, width, height, pageX, pageY) => {
              setCategoryTop(pageY)
            })
          }}
          style={{ position: 'relative', width: '100%', marginTop: 20 }}
        >
          <Acordeon
            title="Categoría"
            placeholderText={
              selectedCategoria
                ? selectedCategoria
                : sportman?.info?.category?.toString() ||
                'Selecciona tu categoría'
            }
            isAccordeon={modalVisible}
            open={openModal}
          />
          {modalVisible && (
            <ScrollableModal
              scrollHeight={scrolledHeight}
              parentTop={categoryTop}
              visible={modalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectCategoria}
              options={selectedOptionsCategoria}
            />
          )}
        </View>

        <View
          collapsable={false}
          onLayout={(event) => {
            event.target.measure((x, y, width, height, pageX, pageY) => {
              setPositionTop(pageY)
            })
          }}
          style={{ position: 'relative', width: '100%', marginTop: 15 }}
        >
          <Acordeon
            title="Posición Principal"
            placeholderText={placeholderText}
            isAccordeon={positionModalVisible}
            open={openPositionModal}
          />

          {positionModalVisible && (
            <ScrollableModal
              scrollHeight={scrolledHeight}
              parentTop={positionTop}
              visible={positionModalVisible}
              closeModal={closeModal}
              onSelectItem={handleSelectPosition}
              options={
                (sportman.info?.sport == 'Fútbol' && opciones_posicion.futbol) ||
                (selectedSport?.name == 'Fútbol' && opciones_posicion.futbol) ||
                (sportman.info?.sport == 'Fútbol Sala' &&
                  opciones_posicion.futbolSala) ||
                (selectedSport?.name == 'Fútbol Sala' && opciones_posicion.futbolSala) ||
                (selectedSport?.name == 'Básquetbol' && opciones_posicion.baloncesto) ||
                (sportman.info?.sport == 'Básquetbol' && opciones_posicion.baloncesto) ||
                (selectedSport?.name == 'Hockey' && opciones_posicion.hockey) ||
                (sportman.info?.sport == 'Hockey' && opciones_posicion.hockey) ||
                (selectedSport?.name == 'Voley' && opciones_posicion.voleibol) ||
                (sportman.info?.sport == 'Voley' && opciones_posicion.voleibol) ||
                (selectedSport?.name == 'Handball' && opciones_posicion.handball) ||
                (sportman.info?.sport == 'Handball' && opciones_posicion.handball)
              }
            />
          )}
        </View>
        <View style={styles.formularioCategoria}>
        <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <Text style={styles.atributo}>Altura</Text>
             <Text style={{...styles.atributo,fontSize:10,color:"gray"}}>{`Valor en centimetros (P.ej: 180)`}</Text>
             </View>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder={sportman?.info?.height?.toString() || '0 - 250'}
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
              value={
                data?.height !== undefined
                  ? String(data?.height)
                  : editData?.height
                    ? editData?.height
                    : ''
              }
              onChangeText={(value) => handleData(`height`, value)}
              maxLength={3}
            />
          </View>
        </View>

        {selectedOptions.length > 0 &&
          selectedOptions.map((opt, i) => (
            <View key={i} style={styles.formularioCategoria}>
             <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <Text style={styles.atributo}>{opt}</Text>
             <Text style={{...styles.atributo,fontSize:10,color:"gray"}}>Valor entre 0 y 100</Text>
             </View>
              <View style={styles.rectanguloBorder}>
                <TextInput
                  style={styles.textInput}
                  placeholder={
                    sportman?.info?.[`prop${i + 1}`]?.toString() || '0 - 100'
                  }
                  placeholderTextColor={'#999'}
                  keyboardType={'numeric'}
                  value={
                    data?.[`prop${i + 1}`] !== undefined
                      ? String(data?.[`prop${i + 1}`])
                      : editData?.[`prop${i + 1}`]
                        ? editData?.[`prop${i + 1}`]
                        : ''
                  }
                  onChangeText={(value) => handleData(`prop${i + 1}`, value)}
                  maxLength={3}
                />
              </View>
            </View>
          ))}


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
