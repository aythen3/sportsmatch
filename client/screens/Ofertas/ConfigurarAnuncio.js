import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity
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

const ConfigurarAnuncio = () => {
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()

  const { offer } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const { editOffer } = route.params || false

  const [values, setValues] = useState({
    sexo: '',
    category: '',
    urgency: '',
    retribution: ''
  })

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <ScrollView style={styles.configurarAnuncio}>
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

        <Input
          title="Sexo"
          placeholderText={offer && offer.sexo ? offer.sexo : 'Masculino'}
          isAccordeon={true}
          onValues={handleChange}
          value={values.sexo}
          field="sexo"
        />
        <Input
          title="Categoria"
          placeholderText={offer && offer.category ? offer.category : 'Sénior'}
          isAccordeon={true}
          onValues={handleChange}
          value={values.category}
          field="category"
        />
        {/* <Input title="Posicion" placeholderText="Pívot" isAccordeon={true} /> */}
        <Input
          title="Urgencia"
          placeholderText={
            offer && offer.urgency ? offer.urgency.toString() : '0-10'
          }
          isAccordeon={true}
          onValues={handleChange}
          value={values.urgency}
          keyboardType={'numeric'}
          field="urgency"
        />
        <Input
          title="Retribucion"
          placeholderText={
            offer && offer.retribution !== undefined ? 'Si' : 'No'
          }
          isAccordeon={true}
          onValues={handleChange}
          value={values.retribution}
          field="retribution"
        />

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
    </ScrollView>
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
