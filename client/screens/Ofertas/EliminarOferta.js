import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding
} from '../../GlobalStyles'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/core'
import { deleteOffer, getAllOffers } from '../../redux/actions/offers'

const EliminarOferta = () => {
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()
  const { allUsers } = useSelector((state) => state.users)

  const { offer, offers } = useSelector((state) => state.offers)

  const [color, setColor] = useState(false)
  const [color2, setColor2] = useState(false)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const filteredOffer = offers?.filter(
    (offer) => offer.id === route.params.offerId
  )

  const offerIncriptions = filteredOffer[0]?.inscriptions || []

  const handleDelete = async () => {
    await dispatch(deleteOffer(route.params.offerId))
    await dispatch(getAllOffers())
    navigation.goBack()
  }

  return (
    <View
      style={{
        backgroundColor: '#1D1D1D',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 21,
            lineHeight: 21,
            fontWeight: '500',
            textAlign: 'center',
            fontFamily: FontFamily.t4TEXTMICRO,
            color: Color.wHITESPORTSMATCH
          }}
        >{`¿Estás seguro de que quieres 
eliminar esta oferta?`}</Text>

        {offerIncriptions.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30
            }}
          >
            <Text
              onPress={() => {
                setColor2(false)
                setColor(!color)
              }}
              style={{
                height: 40,
                lineHeight: 40,
                color: Color.gREY2SPORTSMATCH,
                paddingHorizontal: 15,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontSize: 15,
                borderWidth: 1,
                width: '95%',
                alignSelf: 'center',
                borderColor: Color.gREY2SPORTSMATCH,
                borderStyle: 'solid',
                borderRadius: Border.br_81xl,
                textAlign: 'center',
                backgroundColor: color ? Color.colorGainsboro : 'transparent'
              }}
            >
              "Sí, he encontrado a mi jugador/a o profesional."
            </Text>
          </View>
        )}

        {color && (
          <View
            style={{
              marginTop: 22,
              width: '100%'
            }}
          >
            <View>
              <Text
                style={{
                  color: Color.gREY2SPORTSMATCH,
                  alignSelf: 'stretch',
                  textAlign: 'left',
                  lineHeight: 17,
                  fontSize: FontSize.t1TextSMALL_size,
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                Indícanos con quién has llegado a un acuerdo.
              </Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  marginTop: 5,
                  maxHeight: 200,
                  width: Dimensions.get('screen').width - 25
                }}
              >
                <View
                  style={{
                    flex: 1
                  }}
                >
                  {allUsers
                    .filter((user) => user.type === 'sportman' && user.sportman)
                    .map((player, index) => (
                      <View key={index}>
                        <View style={styles.imageContainer}>
                          <View style={styles.imageName}>
                            <Image
                              style={styles.image}
                              source={{ uri: player.sportman.info.img_perfil }}
                            />
                            <Text
                              style={[styles.carlesMir, styles.carlesMirTypo]}
                            >
                              {player.nickname}
                            </Text>
                          </View>
                          <Pressable
                            style={[
                              styles.circle,
                              check1 === index && styles.checkedCircle
                            ]}
                            onPress={() => setCheck1(index)}
                          >
                            {check1 === index && (
                              <Ionicons
                                name="checkmark"
                                size={10}
                                color="white"
                              />
                            )}
                          </Pressable>
                        </View>

                        {index !== allUsers.length - 1 && (
                          <View style={styles.line} />
                        )}
                      </View>
                    ))}
                </View>
              </ScrollView>
            </View>
          </View>
        )}

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}
        >
          <Text
            onPress={() => {
              setColor(false)
              setCheck1()
              setColor2(!color2)
            }}
            style={{
              height: 40,
              lineHeight: 40, // Igual al height
              color: Color.gREY2SPORTSMATCH,
              paddingHorizontal: 15,
              fontFamily: FontFamily.t4TEXTMICRO,
              fontSize: 15,
              borderWidth: 1,
              width: '95%',
              alignSelf: 'center',
              borderColor: Color.gREY2SPORTSMATCH,
              borderStyle: 'solid',
              borderRadius: Border.br_81xl,
              textAlign: 'center',
              backgroundColor: color2 ? Color.colorGainsboro : 'transparent'
            }}
          >
            "Sí, he cubierto la vacante fuera de la app."
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 50
        }}
      >
        <TouchableOpacity
          style={{
            width: '95%',
            marginTop: 30,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 100
          }}
          onPress={handleDelete}
        >
          <Text style={{ color: '#000', fontWeight: 600, fontSize: 18 }}>
            Eliminar la oferta
          </Text>
        </TouchableOpacity>
        <Text
          style={[styles.cerrar, styles.cerrarTypo]}
          onPress={() => navigation.goBack()}
        >
          Cerrar
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkedCircle: {
    backgroundColor: 'grey'
  },
  carlesMir: {
    // width: 79,
    marginLeft: 15,
    color: Color.wHITESPORTSMATCH,
    fontWeight: '700'
  },

  imagenIconLayout: {
    maxWidth: '100%',
    overflow: 'hidden'
  },
  botonLayout: {
    width: 360,
    height: 40
  },
  rectanguloLayout: {},

  cerrarTypo: {
    fontWeight: '700',
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  sYaHe: {
    width: 354
  },
  boton1: {
    height: 40
  },
  sHeCubierto: {
    width: 355
  },
  boton2: {
    marginTop: 20,
    height: 40
  },
  botones: {
    marginTop: 94
  },
  contenidoFrame: {
    alignItems: 'center'
  },
  textoBoton: {
    color: Color.bLACK1SPORTSMATCH,
    flex: 1
  },
  botonEliminarOferta2: {
    backgroundColor: Color.wHITESPORTSMATCH,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Border.br_81xl,
    width: 360
  },
  botonEliminarOferta1: {
    right: '0%',
    left: '0%',
    flexDirection: 'row',
    width: '100%'
  },
  cerrar: {
    top: 25,
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.button_size
  },
  botonesInferiores: {
    height: 72,
    marginTop: 250,
    alignItems: 'center'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  imageName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Color.gREY2SPORTSMATCH,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }
})

export default EliminarOferta
