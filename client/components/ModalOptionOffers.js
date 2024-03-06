import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const ModalOptionOffers = ({ onClose }) => {
  const navigation = useNavigation()

  return (
    <View style={[styles.despliegueOpciones, styles.pausarFlexBox]}>
      <Pressable onPress={() => navigation.navigate('ConfigurarAnuncio')}>
        <View>
          <Text style={styles.editar}>Editar</Text>
        </View>
      </Pressable>
      <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
      <Pressable onPress={onClose}>
        <Text style={styles.editar}>Eliminar</Text>
      </Pressable>
      <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
      <Pressable onPress={onClose}>
        <Text style={styles.editar}>Promocionar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  despliegueOpciones: {
    height: 110,
    width: 150,
    marginTop: 30,
    backgroundColor: Color.colorDimgray_100,
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
  despliegueOpcionesChild: {
    marginTop: 8,
    borderTopWidth: 1,
    width: '100%',
    borderColor: Color.colorDimgray_100
  }
})

export default ModalOptionOffers
