import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import CommentSVG from './svg/CommentSVG'
import ShareSVG from './svg/ShareSVG'
import LikeSVG from './svg/LikeSVG'
import { Color } from '../GlobalStyles'
import { like, listLikes, updateLike } from '../redux/actions/post'
import CommentSection from './modals/CommentSection'

const IconsMuro = ({ id, userId }) => {
  const dispatch = useDispatch()

  const { findedLike } = useSelector((state) => state.post)

  const [modalVisible, setModalVisible] = useState(false)

  const handleLike = async (id, userId) => {
    const data = {
      post: id,
      author: userId
    }
    console.log(
      'findedLike?.some((likeId) => likeId === id): ',
      findedLike?.some((likeId) => likeId === id)
    )
    await dispatch(like(data))
    // await dispatch(
    //   updateLike({
    //     ...data,
    //     liked: findedLike?.some((likeId) => likeId === id)
    //   })
    // )
    const authorId = userId
    await dispatch(listLikes(authorId))
  }

  useEffect(() => {
    const authorId = userId
    dispatch(listLikes(authorId))
  }, [])

  const closeModal = () => {
    setModalVisible(false)
  }

  const liked = findedLike?.some((likeId) => likeId === id)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeView}
        onPress={() => handleLike(id, userId)}
      >
        <LikeSVG liked={liked} />
      </TouchableOpacity>
      <View style={styles.shareView}>
        <ShareSVG />
      </View>
      <TouchableOpacity
        style={styles.commentView}
        onPress={() => setModalVisible(true)}
      >
        <CommentSVG />
      </TouchableOpacity>
      {modalVisible && (
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
  container: {
    flexDirection: 'row',
    gap: 2
  },
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
