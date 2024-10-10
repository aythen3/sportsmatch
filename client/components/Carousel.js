import React, { useContext, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { Image } from 'expo-image'
import PagerView from 'react-native-pager-view'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import IconsMuro from './IconsMuro'
import { LinearGradient } from 'expo-linear-gradient'
import CommentSection from './modals/CommentSection'
import { Context } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import DoubleTap from '@memrearal/react-native-doubletap'
import { setFindedLikes } from '../redux/slices/post.slices'
import { getAllPosts, getAllPostsFeed, like } from '../redux/actions/post'
import { sendNotification } from '../redux/actions/notifications'
import Like2SVG from './svg/Like2SVG'
import { Modal } from 'react-native'
import ModalOptionOffers from './ModalOptionOffers'
import Thumbnail from './Thumbnail'
import ModalExt from './modals/ModalExt'
import axiosInstance from '../utils/apiBackend'
import { getUserData } from '../redux/actions/users'
import CheckBox from 'react-native-check-box'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { resetCommentsSlices } from '../redux/slices/comments.slices'

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
  setShowDeletePostModal,
  showDeletePostModal,
  fromProfile,
  data
}) {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(0)
  const handlePageSelected = (event) => {
    const { position } = event.nativeEvent
    setCurrentPage(position)
  }
  const { setSelectedPost, selectedPost, generateLowResUrl } =
    useContext(Context)
  const { user, mainColor } = useSelector((state) => state.users)
  const { findedLike } = useSelector((state) => state.post)
  const { sportman } = useSelector((state) => state.sportman)

  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [doubleTap, setDoubleTap] = useState(false)
  const [doubleTapHeart, setDoubleTapHeart] = useState(false)
  const [bannedLoading, setBannedLoading] = useState(false)
  const [reportLoading, setReportLoading] = useState(false)
  const [reports, setReports] = useState([])

  const [reportOption, setReportOption] = useState(null)

  const [liked, setLiked] = useState(false) // Estado para controlar si se ha dado like

  const [isTruncated, setIsTruncated] = useState(true)

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated)
  }

  useEffect(() => {
    let timeoutId
    if (doubleTapHeart) {
      if (sportman?.type === 'invitado') return
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
    if (findedLike.length > 0) {
      setLiked(findedLike?.includes(id))
      return
    }
    setLiked(false)
  }, [findedLike, id])

  const closeModal = () => {
    dispatch(resetCommentsSlices())

    setModalVisible(false)
  }
  const handleLike = async () => {
    if (sportman?.type === 'invitado') return
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
      // TODO: aqui envia la notificación
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
          },
          prop2: {
            rol: user.user.type === 'sportman' ? 'user' : 'club'
          }
        })
      )
    }

    await dispatch(like(data))
  }
  const fecha = data.createdAt.slice(0, 10)
  const año = fecha.slice(0, 4)
  const mes = fecha.slice(5, 7)
  const dia = fecha.slice(8, 10)

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [optionsModal, setOptionsModal] = useState(false)
  const [bannedModal, setBannedModal] = useState(false)
  const [reportModal, setReportModal] = useState(false)

  const handlePostClick = (event) => {
    const { pageX, pageY } = event.nativeEvent

    const height = fromProfile ? 60 : 37

    setModalPosition({ x: pageX - 160, y: pageY - height })

    setOptionsModal(true)
  }

  const BanUser = async (userId) => {
    setBannedLoading(true)
    axiosInstance
      .put(`user/${user.user.id}/ban`, {
        userId
      })
      .then(() => {
        dispatch(getUserData(user.user.id)).then(() => {
          dispatch(getAllPostsFeed(user.user.id))
          dispatch(getAllPosts())

          setBannedModal(false)
          setBannedLoading(false)

          navigation.navigate('SiguiendoJugadores')
        })
      })
  }

  const Bann = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 20
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>
        ¿Estas seguro/a que quieres bloquear al usuario {name}?
      </Text>
      {bannedLoading ? (
        <ActivityIndicator color={'red'}></ActivityIndicator>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 30
          }}
        >
          <TouchableOpacity
            onPress={() => BanUser(authorId)}
            style={{
              backgroundColor: 'red',
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text style={{ color: 'white' }}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBannedModal(false)}
            style={{
              backgroundColor: 'gray',
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text style={{ color: 'white' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )

  const Report = () => {
    return (
      <View style={{ gap: 14, paddingVertical: 15 }}>
        {!reports?.includes(id) && !reportLoading ? (
          <>
            <View>
              <CheckBox
                isChecked={reportOption === 1}
                onClick={() => setReportOption(1)}
                rightTextStyle={{ color: 'white' }}
                checkBoxColor="white"
                rightText="Contenido inapropiado o ofensivo"
                style={{ color: 'white' }}
              ></CheckBox>
              <CheckBox
                isChecked={reportOption === 2}
                onClick={() => setReportOption(2)}
                rightTextStyle={{ color: 'white' }}
                checkBoxColor="white"
                rightText="Información falsa o engañosa"
                style={{ color: 'white' }}
              ></CheckBox>
              <CheckBox
                isChecked={reportOption === 3}
                onClick={() => setReportOption(3)}
                rightTextStyle={{ color: 'white' }}
                checkBoxColor="white"
                rightText="Acoso o intimidación"
                style={{ color: 'white' }}
              ></CheckBox>
            </View>
            <TouchableOpacity
              onPress={reportPost}
              style={{
                backgroundColor: 'red',
                width: '60%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10
              }}
            >
              <Text style={{ color: 'white' }}>Enviar</Text>
            </TouchableOpacity>
          </>
        ) : reportLoading ? (
          <ActivityIndicator color={'red'}></ActivityIndicator>
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Ya se envió el reporte</Text>
          </View>
        )}
      </View>
    )
  }

  const getReports = async () => {
    const report = await AsyncStorage.getItem('reports')
    console.log(report, 'JSON')
    setReports(report)
  }

  useEffect(() => {
    getReports()
  }, [])

  const reportPost = async () => {
    if (reportOption) {
      setReportLoading(true)
      const mot =
        (reportOption === 1 && 'Contenido inapropiado u ofensivo') ||
        (reportOption === 2 && 'Información falsa o engañosa') ||
        (reportOption === 3 && 'Acoso o intimidación')

      await axiosInstance
        .post(`user/report-publication/${id}`, { motivo: mot })
        .then(async () => {
          const reportedPosts = await AsyncStorage.getItem('reports')
          const reportedPostsArray = reportedPosts
            ? JSON.parse(reportedPosts)
            : []
          reportedPostsArray.push(id)
          await AsyncStorage.setItem(
            'reports',
            JSON.stringify(reportedPostsArray)
          )
          getReports()
          setReportLoading(false)
          setReportModal(false)
        })
    }
  }
  // console.log(data,"esto es la data")
  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Pressable
          style={styles.topContainer}
          onPress={() => {
            if (data?.author?.id === user?.user?.id) {
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
              console.log(data, 'data de viaje')
              navigation.navigate('PerfilFeedVisualitzaciJug', {
                author: data?.author
              })
            }
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: mainColor
            }}
            resizeMode="cover"
            source={
              imgPerfil
                ? generateLowResUrl(imgPerfil, 30)
                : require('../assets/whiteSport.png')
            }
          />
          <Text style={styles.nameText}>{name}</Text>
        </Pressable>

        {authorId === user?.user?.id ? (
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                color: Color.gREY2SPORTSMATCH,
                paddingRight: 4,
                fontSize: 12,
                alignSelf: 'flex-end'
              }}
            >
              {`${dia}/${mes}/${año.slice(2, 4)}`}
            </Text>
            <TouchableOpacity
              onPress={(event) => {
                handlePostClick(event)
                setSelectedPost(id)
              }}
              style={{
                width: 24,
                height: 20,
                top: 2,
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 5, height: '100%' }}
                contentFit="scale-down"
                source={require('../assets/frame-957.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                color: Color.gREY2SPORTSMATCH,
                paddingRight: 4,
                fontSize: 12,
                alignSelf: 'flex-end'
              }}
            >
              {`${dia}/${mes}/${año.slice(2, 4)}`}
            </Text>
            <TouchableOpacity
              onPress={(event) => {
                handlePostClick(event)
                setSelectedPost(id)
              }}
              style={{
                width: 24,
                height: 20,
                top: 2,
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 5, height: '100%' }}
                contentFit="scale-down"
                source={require('../assets/frame-957.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <PagerView
        onPageSelected={handlePageSelected}
        style={styles.postContainer}
        initialPage={0}
      >
        {image.map((e, i) => (
          <View style={{ width: '100%', height: '100%' }} key={i}>
            <DoubleTap
              onDoubleTap={() => {
                handleLike()
                setDoubleTapHeart(true)
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

                <Thumbnail play={true} url={e} />
              </View>
            </DoubleTap>
          </View>
        ))}
      </PagerView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: authorId === user?.user?.id ? 0 : -10
        }}
      >
        {image.length > 1 &&
          image.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentPage
                  ? [styles.indicatorActive, { backgroundColor: mainColor }]
                  : styles.indicatorInactive
              ]}
            />
          ))}
      </View>
      <View style={{ padding: 0 }}>
        {authorId === user?.user?.id && (
          <Pressable
            onPress={() => navigation.navigate('PostPromocion', data)}
            style={{
              width: '55%',
              height: 28,
              backgroundColor: Color.colorSilver,
              justifyContent: 'center',
              borderRadius: 50,
              overflow: 'hidden'
            }}
          >
            <LinearGradient
              style={{
                width: '100%',
                height: 500,
                transform: [{ scaleY: 0.056 }],
                position: 'absolute',
                left: 0,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              colors={[
                '#e6b300',
                '#bd9710',
                '#ebc02a',
                '#e6b300',
                '#bd9710',
                '#ebc02a'
              ]}
              locations={[0, 0.18, 0.38, 0.58, 0.79, 1]}
              start={[0, 1.0]}
              end={[1.0, 0.0]}
            ></LinearGradient>
            <Text
              style={{
                fontSize: FontSize.t1TextSMALL_size,
                color: Color.wHITESPORTSMATCH,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: '700',
                textAlign: 'center'
              }}
            >
              Promocionar publicación
            </Text>
          </Pressable>
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
            author={data.author.id}
            id={id}
            userId={userId}
            postUserId={authorId}
            image={image} // Pasa la imagen del post como prop
            doubleTap={doubleTap}
            description={description} // Pasa la descripción del post como prop
            name={name}
          />
        </View>
        <Text
          numberOfLines={isTruncated ? 2 : undefined} // Limita el número de líneas si está truncado
          ellipsizeMode="tail"
          style={styles.description}
        >
          {description}
        </Text>
        {isTruncated && description.length > 160 ? ( // Ajusta la lógica de truncamiento
          <TouchableOpacity onPress={toggleTruncate}>
            <Text style={{ color: Color.colorDimgray_100, marginTop: 3 }}>
              Ver más
            </Text>
          </TouchableOpacity>
        ) : (
          !isTruncated && (
            <TouchableOpacity onPress={toggleTruncate}>
              <Text style={{ color: Color.colorDimgray_100, marginTop: 3 }}>
                Ver menos
              </Text>
            </TouchableOpacity>
          )
        )}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.commentsTitle}>
            Ver los {commentCount} comentarios
          </Text>
        </TouchableOpacity>

        {modalVisible && (
          <CommentSection
            sportman1={data.author.id}
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
      <ModalExt
        visible={bannedModal}
        closeModal={() => setBannedModal(false)}
        title={'Bloquear usuario'}
        content={Bann}
      ></ModalExt>
      <ModalExt
        visible={reportModal}
        closeModal={() => setReportModal(false)}
        title={'Reportar'}
        content={Report}
      ></ModalExt>
      <Modal visible={optionsModal} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setOptionsModal(false)}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                position: 'absolute',
                top: modalPosition.y,
                left: modalPosition.x,
                padding: 20,
                borderRadius: 8
              }}
            >
              <ModalOptionOffers
                post={true}
                postId={selectedPost}
                data={data}
                perfil={false}
                setBannedModal={setBannedModal}
                setReportModal={setReportModal}
                post_ext={authorId !== user?.user?.id}
                setShowDeletePostModal={setShowDeletePostModal}
                onClose={() => setOptionsModal(false)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 3.5,
    marginBottom: 5
  },
  indicatorActive: {
    backgroundColor: 'blue'
  },
  indicatorInactive: {
    backgroundColor: 'gray'
  },
  likes: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size
  },
  container: {
    marginTop: 15,
    borderRadius: Border.br_81xl,
    maxWidth: '55%',
    justifyContent: 'center',
    height: 28,
    alignItems: 'center',
    flexDirection: 'row'
  },
  gradient: {
    width: '100%',
    height: 500,
    transform: [{ scaleY: 0.056 }],
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
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
    gap: 10
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
    height: 400,
    marginTop: 10
  },
  postImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  }
})
