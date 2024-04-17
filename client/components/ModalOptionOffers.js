import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const ModalOptionOffers = ({ onClose, offerId }) => {
  const navigation = useNavigation()

  return (
    <View style={[styles.despliegueOpciones, styles.pausarFlexBox]}>
      <Pressable
        onPress={() => {
          onClose()
          navigation.navigate('ConfigurarAnuncio', { editOffer: true })
        }}
      >
        <View>
          <Text style={styles.editar}>Editar</Text>
        </View>
      </Pressable>

      <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
      <Pressable
        onPress={() => {
          onClose()
          navigation.navigate('EliminarOferta', { offerId })
        }}
      >
        <Text style={styles.editar}>Eliminar</Text>
      </Pressable>

      <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
      <Pressable onPress={onClose}>
        <Text style={styles.editar2}>Promocionar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  despliegueOpciones: {
    height: 110,
    width: 150,
    marginTop: 30,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: 'center',
    borderRadius: Border.br_8xs
  },
  pausarFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  editar: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    width: '100%',
    fontSize: FontSize.t1TextSMALL_size
  },
  editar2: {
    textAlign: 'center',
    color: Color.colorGoldenrod,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    width: '100%',
    fontSize: FontSize.t1TextSMALL_size
  },
  despliegueOpcionesChild: {
    borderTopWidth: 1,
    marginVertical: 5,
    width: '100%',
    borderColor: Color.colorDimgray_100
  }
})

export default ModalOptionOffers
