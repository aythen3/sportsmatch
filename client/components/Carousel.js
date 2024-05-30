import React, { useContext, useEffect, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Image } from 'expo-image'
import PagerView from 'react-native-pager-view'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import IconsMuro from './IconsMuro'
import { LinearGradient } from 'expo-linear-gradient'
import CommentSection from './modals/CommentSection'
import { Context } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import DoubleTap from '@memrearal/react-native-doubletap'
import { setFindedLikes } from '../redux/slices/post.slices'
import { like } from '../redux/actions/post'
import { sendNotification } from '../redux/actions/notifications'
import Like2SVG from './svg/Like2SVG'

function Carousel({
  name,
  description,
  imgPerfil,
  image,
  likes,
  club,
  commentCount,
  id,
  userId,
  authorId,
  data
}) {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { findedLike } = useSelector((state) => state.post)

  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  const [doubleTap, setDoubleTap] = useState(false)
  const [doubleTapHeart, setDoubleTapHeart] = useState(false)

  const [liked, setLiked] = useState(false) // Estado para controlar si se ha dado like

  useEffect(() => {
    let timeoutId
    if (doubleTapHeart) {
      // Cambia el estado a true
      setDoubleTapHeart(true)

      // Después de 2 segundos, vuelve a poner en false
      timeoutId = setTimeout(() => {
        setDoubleTapHeart(false)
      }, 2000)
    }

    // Limpia el timeout si el componente se desmonta antes de que el timeout ocurra
    return () => clearTimeout(timeoutId)
  }, [doubleTapHeart])

  useEffect(() => {
    // Actualizar el estado de liked cuando se reciba la lista de likes del post
    setLiked(findedLike.includes(id))
  }, [findedLike, id])

  const handleDoubleTap = () => {
    setDoubleTap(true) // Marcar que se ha hecho doble clic en la imagen
    // Lógica adicional si es necesaria
  }

  const resetDoubleTap = () => {
    setTimeout(() => {
      setDoubleTap(false) // Reiniciar el estado de doubleTap después de un tiempo
    }, 300) // Puedes ajustar el tiempo según tus necesidades
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleLike = async () => {
    // Invertir el estado de liked
    setLiked(!liked)

    const data = {
      post: id,
      author: userId
    }

    await dispatch(
      setFindedLikes({
        ...data,
        liked: !liked // Invertir el estado del like
      })
    )

    if (!liked) {
      await dispatch(
        sendNotification({
          title: 'Like',
          message: `A ${user.user.nickname} le gusta tu highlight`,
          recipientId: authorId,
          date: new Date(),
          read: false,
          prop1: {
            userId: user?.user?.id,
            userData: {
              ...user
            }
          }
        })
      )
    }

    await dispatch(like(data))
  }
  const fecha = data.createdAt.slice(0,10)
  const año = fecha.slice(0,4)
  const mes = fecha.slice(5,7)
  const dia = fecha.slice(8,10)
  return (
    <View style={{ ...styles.container }}>
     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
     <Pressable
        style={styles.topContainer}
        onPress={() => {
          if (data.author.id === user.user.id) {
            if (user.user.type !== 'club') {
              navigation.navigate('MiPerfil')
              return
            } else {
              navigation.navigate('PerfilDatosPropioClub')
              return
            }
          }
          if (data.author.type === 'club') {
            navigation.navigate('ClubProfile', data)
          } else {
            navigation.navigate('PerfilFeedVisualitzaciJug', data)
          }
        }}
      >
        <Image style={styles.imgPerfil} source={imgPerfil} />
        <Text style={styles.nameText}>{name}</Text>
      </Pressable> 
      <Text style={{color: Color.gREY2SPORTSMATCH,paddingRight:0,fontSize:12}}>
       {`${dia} - ${mes} - ${año}`}
      </Text>
     </View>
      <PagerView style={styles.postContainer} initialPage={0}>
        <View style={{ width: '100%', height: '100%' }} key={id}>
          <DoubleTap
            onDoubleTap={() => {
              console.log('doble pressss2222')
              handleLike()
              setDoubleTapHeart(true)
              // handleDoubleTap(); // Llama a la función de manejar el doble clic
              // resetDoubleTap(); // Reinicia el estado de doubleTap
            }}
          >
            <View
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              {doubleTapHeart && liked && (
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 999
                  }}
                >
                  <Like2SVG id={id}></Like2SVG>
                </TouchableOpacity>
              )}

              <Image
                style={{ ...styles.postImage, zIndex: 990 }}
                source={image}
              />
            </View>
          </DoubleTap>
        </View>
        {/* <View key={index + 1}>
          <Image
            style={styles.postImage}
            source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
          />
        </View> */}
      </PagerView>
      <View style={{ padding: 5 }}>
        {authorId === user?.user?.id && (
          <TouchableOpacity onPress={() => navigation.navigate('MiSuscripcin')}>
            <LinearGradient
              style={styles.botonPromocionarPublicacion}
              start={{ x: 0, y: 1 }} // Cambiado de x: 1 a x: 0
              end={{ x: 1, y: 0 }} // Cambiado de y: 0 a x: 1
              locations={[0, 0.18, 0.38, 0.58, 0.79, 1]}
              colors={[
                '#e6b300',
                '#bd9710',
                '#ebc02a',
                '#e6b300',
                '#bd9710',
                '#ebc02a'
              ]}
            >
              <Text style={[styles.jordiEspeltMireu, styles.jordiTypo]}>
                Promocionar publicación
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center'
          }}
        >
          <Text style={styles.likes}>{likes} likes</Text>
          <IconsMuro
            id={id}
            userId={userId}
            postUserId={authorId}
            image={image} // Pasa la imagen del post como prop
            doubleTap={doubleTap}
            description={description} // Pasa la descripción del post como prop
          />
        </View>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.commentsTitle}>
            Ver los {commentCount} comentarios
          </Text>
        </TouchableOpacity>

        {modalVisible && (
          <CommentSection
            visible={modalVisible}
            closeModal={closeModal}
            postId={id}
          />
        )}
        {/* {showComments &&
          !error &&
          postComments?.map((comment) => (
            <CommentsMuro key={comment.id} comment={comment} />
          ))} */}

        {/* {!showComments && (
          <Text style={styles.comments}>{comments[0].comment}</Text>
        )}  */}
      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  likes: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size
  },
  botonPromocionarPublicacion: {
    marginTop: 15,
    borderRadius: Border.br_81xl,
    width: 210,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    backgroundColor: Color.promocio,
    alignItems: 'center',
    flexDirection: 'row'
  },
  jordiEspeltMireu: {
    fontSize: FontSize.t1TextSMALL_size
  },
  jordiTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  description: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  commentsTitle: {
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.gREY2SPORTSMATCH,
    marginTop: 8
  },
  comments: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  },
  container: {
    width: '100%'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 5
  },
  imgPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  nameText: {
    color: 'white',
    fontWeight: '700'
  },
  postContainer: {
    width: '100%',
    height: 300,
    marginTop: 10
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 5
  }
})
