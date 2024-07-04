import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Share, View, StyleSheet, TouchableOpacity } from 'react-native'
import CommentSVG from './svg/CommentSVG'
import ShareSVG from './svg/ShareSVG'
import LikeSVG from './svg/LikeSVG'
import { Color } from '../GlobalStyles'
import { like } from '../redux/actions/post'
import CommentSection from './modals/CommentSection'
import { setFindedLikes } from '../redux/slices/post.slices'
import { sendNotification } from '../redux/actions/notifications'

import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'

const IconsMuro = ({ id, userId, postUserId, image, doubleTap, name }) => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)

  const { findedLike } = useSelector((state) => state.post)

  const [modalVisible, setModalVisible] = useState(false)
  const [liked, setLiked] = useState(false) // Estado para controlar si se ha dado like

  useEffect(() => {
    if (findedLike.length > 0) {
      setLiked(findedLike?.includes(id))
      return
    }
    setLiked(false)
  }, [findedLike, id])

  // const handleShare = async () => {
  //   if (sportman?.type == 'invitado') return
  //   try {
  //     // Descargar el archivo desde la URL remota
  //     const localUri = `${FileSystem.cacheDirectory}image.jpg`
  //     const downloadResult = await FileSystem.downloadAsync(image[0], localUri)

  //     if (downloadResult.status === 200) {
  //       // Obtener información sobre el archivo descargado
  //       const fileInfo = await FileSystem.getInfoAsync(localUri)

  //       // Compartir el archivo si existe
  //       if (fileInfo.exists) {
  //         // Esperar un segundo antes de llamar a Sharing.shareAsync()
  //         await Sharing.shareAsync(localUri, {
  //           dialogTitle: `Comparte la publicación`
  //         })
  //       } else {
  //         console.log('El archivo no existe.')
  //       }
  //     } else {
  //       console.log('Error al descargar el archivo.')
  //     }
  //   } catch (error) {
  //     console.error('Error al compartir:', error.message)
  //   }
  // }
  const onShare = async (message) => {
    try {
      const result = await Share.share(
        {
          message,
          title: 'Echa un vistazo!'
        },
        {
          // Android only:
          dialogTitle: 'Compartir esta publicación con',
          // iOS only:
          excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
        }
      )

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // compartido con el tipo de actividad de result.activityType
          // console.log('evento conmpartido con ', result.activityType)
        } else {
          // compartido
          // console.log('evento conmpartido')
        }
      } else if (result.action === Share.dismissedAction) {
        // descartado
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const handleLike = async () => {
    if (sportman?.type == 'invitado') return

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
          recipientId: postUserId,
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

  // useEffect(() => {
  //   console.log('findedLike', findedLike)
  //   console.log('id: ', id)
  // }, [])

  const closeModal = () => {
    setModalVisible(false)
  }

  // if (!findedLike || !id) return null
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 2
      }}
    >
      <TouchableOpacity
        style={styles.likeView}
        onPress={() => handleLike(id, userId)}
      >
        <LikeSVG id={id} doubleTap={doubleTap} />
      </TouchableOpacity>
      <View style={styles.shareView}>
        <TouchableOpacity
          style={styles.shareView}
          onPress={() =>
            onShare(
              `Da un vistazo a la publicación de ${name}!. Si aún no te bajaste la app descargala en Google Play https://play.google.com/store/apps/details?id=com.aythenapps.sportsmatch`
            )
          }
        >
          <ShareSVG />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.commentView}
        onPress={() => setModalVisible(true)}
      >
        <CommentSVG />
      </TouchableOpacity>
      {modalVisible && sportman?.type !== 'invitado' && (
        <CommentSection
          visible={modalVisible}
          closeModal={closeModal}
          postId={id}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  likeView: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    height: 35,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareView: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    height: 35,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentView: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    height: 35,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default IconsMuro
