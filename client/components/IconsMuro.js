import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import CommentSVG from './svg/CommentSVG'
import ShareSVG from './svg/ShareSVG'
import LikeSVG from './svg/LikeSVG'
import { Color } from '../GlobalStyles'
import { like } from '../redux/actions/post'
import CommentSection from './modals/CommentSection'

const IconsMuro = ({ id, userId }) => {
  const dispatch = useDispatch()

  const { likes } = useSelector((state) => state.post)

  const [modalVisible, setModalVisible] = useState(false)

  const handleLike = (id, userId) => {
    const data = {
      post: id,
      author: userId
    }
    dispatch(like(data))
  }

  const isLiked = likes.some((like) => like.id === id)

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeView}
        onPress={() => handleLike(id, userId)}
      >
        <LikeSVG fill={isLiked} />
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
        <CommentSection visible={modalVisible} closeModal={closeModal} />
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
