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

const SkillSeleccion = ({
  editable,
  setEditable,
  setData,
  data,
  selectedSport,
  selectPosition,
  setSelectPosition
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { sportman } = useSelector((state) => state.sportman)

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategoria, setSelectedCategoria] = useState(null)

  const [positionModalVisible, setPositionModalVisible] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedOptionsCategoria, setSelectedOptionsCategoria] = useState([])

  const [selectedOptionsInputs, setSelectedOptionsInputs] = useState('')

  const [editData, setEditData] = useState(null)

  console.log(selectedSport, "selectedsport")

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

  useEffect(() => {
    if (selectedSport?.name === 'Fútbol') setSelectedOptionsCategoria(opcionesCategoria2.futbol)
    if (selectedSport?.name === 'Fútbol Sala') setSelectedOptionsCategoria(opcionesCategoria2.futbolSala)
    if (selectedSport?.name === 'Voley') setSelectedOptionsCategoria(opcionesCategoria2.voleibol)
    if (selectedSport?.name === 'Hockey') setSelectedOptionsCategoria(opcionesCategoria2.hockey)
    if (selectedSport?.name === 'Básquetbol') setSelectedOptionsCategoria(opcionesCategoria2.baloncesto)
    if (selectedSport?.name === 'Handball') setSelectedOptionsCategoria(opcionesCategoria2.handball)

    if (sportman?.info?.sport === 'Fútbol') setSelectedOptionsCategoria(opcionesCategoria2.futbol)
    if (sportman?.info?.sport === 'Fútbol Sala') setSelectedOptionsCategoria(opcionesCategoria2.futbolSala)
    if (sportman?.info?.sport === 'Voley') setSelectedOptionsCategoria(opcionesCategoria2.voleibol)
    if (sportman?.info?.sport === 'Hockey') setSelectedOptionsCategoria(opcionesCategoria2.hockey)
    if (sportman?.info?.sport === 'Básquetbol') setSelectedOptionsCategoria(opcionesCategoria2.baloncesto)
    if (sportman?.info?.sport === 'Handball') setSelectedOptionsCategoria(opcionesCategoria2.handball)

  }, [selectedSport, sportman?.info?.sport])


  const opcionesCategoria2 = {
    futbol: [
      "Escuela (4-6 años)",
      "Pre benjamin (6-8 años)",
      "Benjamin (8-10 años)",
      "Alevin (10-12 años)",
      "Infantil (12-14 años)",
      "Cadete (14-16 años)",
      "Juvenil (16-18 años)",
      "Senior (+18 años)",
      "Veteranos (+30 años)"],
    baloncesto: [
      "Minibasket (4-5 años)",
      "Pre benjamin (6-8 años)",
      "Benjamin (8-10 años)",
      "Alevin (10-12 años)",
      "Infantil (12-14 años)",
      "Cadete (14-16 años)",
      "Junior (16-18 años)",
      "Sub 23 (18 a 23 años)",
      "Senior (+23 años)",
      "Veteranos (+30 años)"
    ],
    futbolSala: [
      "Escuela (4-6 años)",
      "Pre benjamin (6-8 años)",
      "Benjamin (8-10 años)",
      "Alevin (10-12 años)",
      "Infantil (12-14 años)",
      "Cadete (14-15 años)",
      "Juvenil (16-18 años)",
      "Senior (+18 años)",
      "Veteranos (+30 años)"
    ],
    hockey: [
      "Minihoquei (4-6 años)",
      "Pre benjamin (6-8 años)",
      "Benjamin (8-10 años)",
      "Alevin (10-12 años)",
      "Infantil (12-14 años)",
      "Juvenil (14-16 años)",
      "Junior (16-18 años)",
      "Senior (+18 años)",
      "Veteranos (+30 años)"
    ],
    voleibol: [
      "Pre benjamin (6-8 años)",
      "Benjamin (8-10 años)",
      "Alevin (10-12 años)",
      "Infantil (12-14 años)",
      "Cadete (14-16 años)",
      "Juvenil (16-18 años)",
      "Senior (+18 años)",
      "Veteranos (+30 años)"
    ],
    handball: [
      "Escuela (4-6 años)",
      "Pre benjamin (6-8 años)",
      "Benjamin (8-10 años)",
      "Alevin (10-12 años)",
      "Infantil (12-14 años)",
      "Cadete (14-16 años)",
      "Juvenil (16-18 años)",
      "Senior (+18 años)",
      "Veteranos (+30 años)"
    ]
  }


  const opcionesPosicion = ['Pase', 'Resistencia', 'Disparo', 'Regate']
  const opcionesPosicionBaloncesto = [
    'Altura',
    'Bote',
    'Lanzamiento',
    'Dribling'
  ]
  const opcionesPosicionFutbolSala = [
    'Pase',
    'Resistencia',
    'Disparo',
    'Regate'
  ]
  const opcionesPosicionHockey = ['Pase', 'Resistencia', 'Disparo', 'Regate']

  const opciones = {
    futbol: [
      "Portero",
      "Lateral",
      "Central",
      "Mediocentro",
      "Interior",
      "Extremo",
      "Mediapunta",
      "Delantero centro"
    ],
    baloncesto: [
      "Base",
      "Escolta",
      "Alero",
      "Ala-pivot",
      "Pivot"
    ],
    futbolSala: [
      "Portero",
      "Cierre",
      "Ala",
      "Pivot"
    ],
    hockey: [
      "Portero",
      "Jugador"
    ],
    voleibol: [
      "Colocador",
      "Rematador externo",
      "Rematador opuesto",
      "Central",
      "Libero",
      "Receptor/zaguero"
    ],
    handball: [
      "Portero",
      "Central",
      "Ala derecha",
      "Ala izquierda",
      "Pivot",
      "Extremo derecho",
      "Extremo izquierdo"
    ]
  }

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
    setSelectedPosition(posicion)
    setEditData({ ...editData, position: posicion })
  }

  const handleData = (key, value) => {
    if (
      key === 'attack' ||
      key === 'defense' ||
      key === 'speed' ||
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

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    const height = contentOffset.y // Get the scrolled height
    setScrolledHeight(height)
  }
  const selectores = () => {
    if (selectedSport?.name == "Fútbol" || sportman.info?.sport == "Fútbol") setSelectedOptions(opciones.futbol)
    if (selectedSport?.name == "Fútbol Sala" || sportman.info?.sport == "Fútbol Sala") setSelectedOptions(opciones.futbolSala)
    if (selectedSport?.name == "Básquetbol" || sportman.info?.sport == "Básquetbol") setSelectedOptions(opciones.baloncesto)
    if (selectedSport?.name == "Hockey" || sportman.info?.sport == "Hockey") setSelectedOptions(opciones.hockey)
    if (selectedSport?.name == "Handball" || sportman.info?.sport == "Handball") setSelectedOptions(opciones.handball)
    if (selectedSport?.name == "Voley" || sportman.info?.sport == "Voley") setSelectedOptions(opciones.voleibol)
  }
  useEffect(() => {
    selectores()
  }, [selectedSport])

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
          gap: 20,
          justifyContent: 'center'
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
              options={selectedOptionsCategoria}
            />
          )}
        </View>

        {/* <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>Posición Principal</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder={
                selectPosition
                  ? selectPosition
                  : sportman?.info?.position?.toString() ||
                    'Selecciona tu posición '
              }
              placeholderTextColor={'#999'}
              onChangeText={(e) => {
                const newData = {
                  ...data,
                  position: e
                }
                setSelectedOptionsInputs(e)
              }}
              maxLength={40}
            />
          </View>
        </View> */}
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
            placeholderText={
              selectedPosition
                ? selectedPosition
                : sportman?.info?.position?.toString() ||
                'Selecciona tu posición '
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
              options={sportman.info?.sport == "Fútbol" && opciones.futbol || selectedSport?.name == "Fútbol" && opciones.futbol ||
                sportman.info?.sport == "Fútbol Sala" && opciones.futbolSala || selectedSport?.name == "Fútbol Sala" && opciones.futbolSala ||
                selectedSport?.name == "Básquetbol" && opciones.baloncesto || sportman.info?.sport == "Básquetbol" && opciones.baloncesto ||
                selectedSport?.name == "Hockey" && opciones.hockey || sportman.info?.sport == "Hockey" && opciones.hockey ||
                selectedSport?.name == "Voley" && opciones.voleibol || sportman.info?.sport == "Voley" && opciones.voleibol ||
                selectedSport?.name == "Handball" && opciones.handball || sportman.info?.sport == "Handball" && opciones.handball
              }
            />
          )}
        </View>


        {selectedOptions.length > 0 && selectedOptions.map((opt, i) =>
        (<View key={i} style={styles.formularioCategoria}>
          <Text style={styles.atributo}>{opt}</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder={ sportman?.info?.[`prop${i + 1}`].toString() || '0 - 100'}
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
        </View>)
        )}

        {/* <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>{selectedOptions[0]}</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder={sportman?.info?.height?.toString() || '0 - 100'}
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
              onChangeText={(value) => handleData('height', value)}
              maxLength={4}
            />
          </View>
        </View>
        <View style={styles.formularioCategoria}>
          <Text style={styles.atributo}>{selectedOptions[1]}</Text>
          <View style={styles.rectanguloBorder}>
            <TextInput
              style={styles.textInput}
              placeholder={sportman?.info?.prop1?.toString() || '0 - 100'}
              placeholderTextColor={'#999'}
              keyboardType={'numeric'}
              value={
                data?.prop1 !== undefined
                  ? String(data?.prop1)
                  : editData?.prop1
                    ? editData?.prop1
                    : ''
              }
              onChangeText={(value) => handleData('prop1', value)}
              maxLength={3}
            />
          </View>
        </View> */}
        {/* {selectedSport?.name !== 'Hockey' && (
          <>
            <View style={styles.formularioCategoria}>
              <Text style={styles.atributo}>{selectedOptions[2]}</Text>
              <View style={styles.rectanguloBorder}>
                <TextInput
                  style={styles.textInput}
                  placeholder={sportman?.info?.prop2?.toString() || '0 - 100'}
                  placeholderTextColor={'#999'}
                  keyboardType={'numeric'}
                  value={
                    data?.prop2 !== undefined
                      ? String(data?.prop2)
                      : editData?.prop2
                        ? editData?.prop2
                        : ''
                  }
                  onChangeText={(value) => handleData('prop2', value)}
                  maxLength={3}
                />
              </View>
            </View>
            <View style={styles.formularioCategoria}>
              <Text style={styles.atributo}>{selectedOptions[3]}</Text>
              <View style={styles.rectanguloBorder}>
                <TextInput
                  style={styles.textInput}
                  placeholder={sportman?.info?.prop3?.toString() || '0 - 100'}
                  placeholderTextColor={'#999'}
                  value={
                    data?.prop3 !== undefined
                      ? String(data?.prop3)
                      : editData?.prop3
                        ? editData?.prop3
                        : ''
                  }
                  keyboardType={'numeric'}
                  onChangeText={(value) => handleData('prop3', value)}
                  maxLength={3}
                />
              </View>
            </View>
          </>
        )} */}
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
