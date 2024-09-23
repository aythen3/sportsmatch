import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import axiosInstance from '../utils/apiBackend'
import { deletePost, getAllPosts } from '../redux/actions/post'
import { useDispatch } from 'react-redux'

const ModalOptionOffers = ({
  onClose,
  offerId,
  post,
  postId,
  data,
  offerData,
  setShowDeletePostModal,
  setBannedModal,
  post_ext
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  console.log(post_ext, 'post2')

  if (post_ext) {
    return (
      <View style={[styles.despliegueOpciones, styles.pausarFlexBox]}>
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            onClose()
          }}
        >
          <View>
            <Text style={styles.editar}>Reportar</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={() => {
            setBannedModal(true)
            onClose()
          }}
        >
          <Text style={styles.editar}>Bloquear usuario</Text>
        </TouchableOpacity>
      </View>
    )
  }
  if (post)
    return (
      <View style={[styles.despliegueOpciones, styles.pausarFlexBox]}>
        {!data.prop1 || data?.prop1?.pined === false ? (
          <Pressable
            onPress={() => {
              onClose()
              console.log('Fijando post...')
              axiosInstance
                .patch(`post/${postId}`, { prop1: { pined: true } })
                .then((res) => dispatch(getAllPosts()))
            }}
          >
            <View>
              <Text style={styles.editar}>Fijar post</Text>
            </View>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              onClose()
              console.log('Quitando post fijo...')
              axiosInstance
                .patch(`post/${postId}`, { prop1: { pined: false } })
                .then((res) => dispatch(getAllPosts()))
            }}
          >
            <View>
              <Text style={styles.editar}>Quitar post fijo</Text>
            </View>
          </Pressable>
        )}

        <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
        <Pressable
          onPress={() => {
            onClose()
            navigation.navigate('PostPromocion', data)
          }}
        >
          <Text style={styles.editar2}>Promocionar</Text>
        </Pressable>

        <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
        <Pressable
          onPress={() => {
            onClose()
            setShowDeletePostModal(true)
          }}
        >
          <Text style={styles.editar}>Eliminar</Text>
        </Pressable>
      </View>
    )

  return (
    <View style={[styles.despliegueOpciones, styles.pausarFlexBox]}>
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => {
          onClose()
          navigation.navigate('ConfigurarAnuncio', {
            editOffer: true,
            offerId,
            offerData
          })
        }}
      >
        <View>
          <Text style={styles.editar}>Editar</Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => {
          onClose()
          navigation.navigate('EliminarOferta', { offerId })
        }}
      >
        <Text style={styles.editar}>Eliminar</Text>
      </TouchableOpacity>

      <View style={[styles.despliegueOpcionesChild, styles.childLayout]} />
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => {
          onClose()
          navigation.navigate('PostPromocion', {
            fromOffer: true,
            oferta: {
              offerData: { ...offerData }
            }
          })
        }}
      >
        <Text style={styles.editar2}>Promocionar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  despliegueOpciones: {
    paddingVertical: 20,
    width: 150,
    marginTop: 30,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: 'space-around',
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
    marginVertical: 10,
    width: '100%',
    borderColor: Color.colorDimgray_100
  }
})

export default ModalOptionOffers
