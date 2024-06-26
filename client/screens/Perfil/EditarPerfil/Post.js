import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border
} from '../../../GlobalStyles'
import DetallesSeleccion from '../../../components/DetallesSeleccion'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../../components/Carousel'
import { useRoute } from '@react-navigation/native'
import CustomHeaderBack from '../../../components/CustomHeaderBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStripe } from '@stripe/stripe-react-native'
import { Context } from '../../../context/Context'
import { deletePost, getAllPosts } from '../../../redux/actions/post'

const Post = () => {
  const route = useRoute()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [page, setPage] = useState(1)
  const {
    showDeletePostModalFromProfile,
    setShowDeletePostModalFromProfile,
    selectedPost
  } = useContext(Context)

  const { user, allUsers } = useSelector((state) => state.users)
  const item = route.params

  return (
    <ScrollView keyboardShouldPersistTaps={'always'} style={styles.paso6}>
      <CustomHeaderBack header={'Post'}></CustomHeaderBack>
      <View style={{ paddingBottom: 40,marginTop:-20 }}>
        <Carousel
          fromProfile={true}
          setShowDeletePostModal={setShowDeletePostModalFromProfile}
          showDeletePostModal={showDeletePostModalFromProfile}
          key={item.id}
          name={item?.author?.nickname}
          description={item.description}
          imgPerfil={
            item?.author?.sportman
              ? item?.author?.sportman?.info?.img_front
              : item?.author?.club?.img_perfil
          }
          image={[...new Set(item?.image)]}
          club={item?.club === user?.user?.type}
          likes={item?.likes}
          commentCount={item?.commentCount}
          index={page}
          id={item?.id}
          userId={user?.user?.id}
          authorId={item.author.id}
          data={item}
        />
      </View>
      <Modal visible={showDeletePostModalFromProfile} transparent={true}>
        <TouchableWithoutFeedback
          onPress={() => setShowDeletePostModalFromProfile(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: 300,
                height: 200,
                backgroundColor: '#292929',
                borderRadius: 10,
                padding: 20,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  width: '70%',
                  textAlign: 'center'
                }}
              >
                ¿Estás seguro que quieres eliminar esta publicación?
              </Text>
              <Pressable
                onPress={() => {
                  console.log('Cancel pressed')
                  setShowDeletePostModalFromProfile(false)
                }}
                style={{
                  width: '100%',
                  gap: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: '#949494',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    textAlign: 'center'
                  }}
                >
                  Cancelar
                </Text>
              </Pressable>
              <View
                style={{
                  height: 1,
                  backgroundColor: Color.colorDimgray_100,
                  width: '100%'
                }}
              />
              <Pressable
                onPress={() => {
                  console.log('Deleting post', selectedPost)
                  setShowDeletePostModalFromProfile(false)
                  navigation.goBack()
                  if (selectedPost) {
                    dispatch(deletePost(selectedPost)).then((res) =>
                      dispatch(getAllPosts())
                    )
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    textAlign: 'center'
                  }}
                >
                  Eliminar
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,

    width: '100%'
  },
  carrouselContainer: {
    paddingHorizontal: 10
  },
  cooliconParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    left: 15
  },
  coolicon: {
    width: 9,
    height: 15
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  editarPerfil1: {
    marginLeft: 9
  },
  editarPerfil2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  paso6: {
    width: '100%',
    height: '100%',
    gap: 20,
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  headersubirImagenesPerfil: {
    alignItems: 'center',
    marginTop: '10%'
  },
  circuloIcon: {
    width: 117,
    height: 117
  },
  botonSubirImagen: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 15,
    alignItems: 'center'
  },
  subirFotoDe: {
    color: Color.wHITESPORTSMATCH
  },
  paso4Typo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pesoMaximo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  rectangulobotonpesoMaximo: {
    height: 199,
    marginTop: 21,
    alignItems: 'center'
  },
  rectangulo: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro,
    width: '200%',
    flex: 1
  }
})

export default Post
