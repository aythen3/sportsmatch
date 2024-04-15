import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import CommentSVG from './svg/CommentSVG'
import ShareSVG from './svg/ShareSVG'
import LikeSVG from './svg/LikeSVG'
import { Color } from '../GlobalStyles'
import { like } from '../redux/actions/post'
import CommentSection from './modals/CommentSection'
import { setFindedLikes } from '../redux/slices/post.slices'

const IconsMuro = ({ id, userId }) => {
  const dispatch = useDispatch()

  const { findedLike } = useSelector((state) => state.post)

  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {}, [findedLike])

  const handleLike = async (id, userId) => {
    const data = {
      post: id,
      author: userId
    }
    const liked = findedLike.includes(id)
    await dispatch(
      setFindedLikes({
        ...data,
        liked
      })
    )
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
        <LikeSVG id={id} />
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
