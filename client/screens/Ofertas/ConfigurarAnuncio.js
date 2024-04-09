import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity,
  Touchable
} from 'react-native'
import {
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily
} from '../../GlobalStyles'
import Input from '../../components/Input'
import { handleSubmit } from './utils/handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomModal from '../../components/modals/CustomModal'
import axiosInstance from '../../utils/apiBackend'
import { getClub } from '../../redux/actions/club'

const ConfigurarAnuncio = () => {
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()

  const { offer } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const { user } = useSelector((state) => state.users)
  const [selectedGender, setSelectedGender] = useState()
  const [showPriorityModal, setShowPriorityModal] = useState()
  const [showRemunerationModal, setShowRemunerationModal] = useState()
  const [selectedRemuneration, setSelectedRemuneration] = useState()
  const { allPositions } = useSelector((state) => state.positions)
  const [selectedPriority, setSelectedPriority] = useState()
  const [showModal, setShowModal] = useState(false)
  const [showGenderModal, setShowGenderModal] = useState(false)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState()
  const [clubPositions, setClubPositions] = useState()
  const [selectedPosition, setSelectedPosition] = useState()
  const [clubData, setClubData] = useState()
  const { editOffer } = route.params || false

  const [values, setValues] = useState({
    sexo: '',
    category: '',
    urgency: '',
    retribution: ''
  })

  const categories = [
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

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const getClubData = async (id) => {
    const { data } = await axiosInstance.get(`club/${id}`)

    setClubData(data)
    return data
  }

  useEffect(() => {
    getClubData(club.id)
  }, [])
  useEffect(() => {
    if (clubData && allPositions) {
      console.log(
        'filteredPos: ',
        allPositions
          .filter(
            (position) => position?.sport?.name === clubData?.sports[0]?.name
          )
          .map((position) => position?.name)
      )
    }
  }, [clubData])
  if (!clubData && allPositions) return null
  return (
    <SafeAreaView style={styles.configurarAnuncio}>
      <View style={styles.contenido}>
        <View style={styles.topContainer}>
          <Text style={styles.configuraTuOferta}>Configura tu oferta</Text>
          <Text
            onPress={() => navigation.goBack()}
            style={styles.configuraTuOferta}
          >
            X
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('setting modal to : ', !showModal)
            setShowModal(!showModal)
          }}
          style={{
            borderWidth: 1,
            position: 'relative',
            borderColor: '#fff',

            borderRadius: 50,
            width: '100%',
            height: 40
          }}
        >
          <Text style={{ color: '#fff' }}>
            {selectedPosition || 'Selecciona una posicion'}
          </Text>
          {showModal && (
            <CustomModal
              closeModal={setShowModal}
              onSelectItem={setSelectedPosition}
              options={allPositions
                .filter(
                  (position) => position.sport.name === clubData.sports[0].name
                )
                .map((position) => {
                  return position.name
                })}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowGenderModal(!showGenderModal)
          }}
          style={{
            borderWidth: 1,
            position: 'relative',
            borderColor: '#fff',

            borderRadius: 50,
            width: '100%',
            height: 40
          }}
        >
          <Text style={{ color: '#fff' }}>
            {selectedGender || 'Selecciona un genero'}
          </Text>
          {showGenderModal && (
            <CustomModal
              closeModal={setShowGenderModal}
              onSelectItem={setSelectedGender}
              options={['Male', 'Female']}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowCategoryModal(!showCategoryModal)
          }}
          style={{
            borderWidth: 1,
            position: 'relative',
            borderColor: '#fff',

            borderRadius: 50,
            width: '100%',
            height: 40
          }}
        >
          <Text style={{ color: '#fff' }}>
            {selectedCategory || 'Selecciona una categoria'}
          </Text>
          {showCategoryModal && (
            <CustomModal
              closeModal={setShowCategoryModal}
              onSelectItem={setSelectedCategory}
              options={categories}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowPriorityModal(!showPriorityModal)
          }}
          style={{
            borderWidth: 1,
            position: 'relative',
            borderColor: '#fff',

            borderRadius: 50,
            width: '100%',
            height: 40
          }}
        >
          <Text style={{ color: '#fff' }}>
            {selectedPriority || 'Seleccione el nivel de urgencia'}
          </Text>
          {showPriorityModal && (
            <CustomModal
              closeModal={setShowPriorityModal}
              onSelectItem={setSelectedPriority}
              options={numbers}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowRemunerationModal(!showRemunerationModal)
          }}
          style={{
            borderWidth: 1,
            position: 'relative',
            borderColor: '#fff',

            borderRadius: 50,
            width: '100%',
            height: 40
          }}
        >
          <Text style={{ color: '#fff' }}>
            {selectedRemuneration || 'Seleccione remuneracion'}
          </Text>
          {showRemunerationModal && (
            <CustomModal
              closeModal={setShowRemunerationModal}
              onSelectItem={setSelectedRemuneration}
              options={['Si', 'No']}
            />
          )}
        </TouchableOpacity>

        <Pressable
          style={styles.botonsOferta}
          onPress={() => navigation.navigate('SiguiendoJugadores')}
        >
          <View>
            <View style={[styles.botonPromocion, styles.boitonCrearFlexBox]}>
              <Text style={[styles.promocionarOferta, styles.ofertaTypo]}>
                Promocionar la oferta
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.boitonCrear, styles.boitonCrearFlexBox]}
              onPress={() =>
                handleSubmit(
                  dispatch,
                  values,
                  navigation,
                  club,
                  offer,
                  editOffer
                )
              }
            >
              <Text style={[styles.crearOferta, styles.ofertaTypo]}>
                {editOffer ? 'Editar oferta' : 'Crear oferta'}
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boitonCrearFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    alignItems: 'center'
  },
  ofertaTypo: {
    fontWeight: '700',
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  configuraTuOferta: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  title: {
    fontSize: FontSize.t2TextSTANDARD_size,
    alignSelf: 'stretch',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  masculino: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  promocionarOferta: {
    color: Color.wHITESPORTSMATCH
  },
  botonPromocion: {
    backgroundColor: Color.colorDimgray_100
  },
  crearOferta: {
    color: Color.bLACK1SPORTSMATCH
  },
  boitonCrear: {
    marginTop: 13,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  botonsOferta: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  contenido: {
    top: '5%',
    marginBottom: '10%'
  },
  configurarAnuncio: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default ConfigurarAnuncio
