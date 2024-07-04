import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from 'react-native'
import { Image } from 'expo-image'
import { Color, FontFamily } from '../../GlobalStyles'
import { getCommentByPost } from '../../redux/actions/comments'
import { handleSubmit, formatDateDifference } from './utils/commentHandler'
import GestureRecognizer from 'react-native-swipe-gestures'
import { Context } from '../../context/Context'

const CommentSection = ({ visible, closeModal, postId }) => {
  const dispatch = useDispatch()
  const { generateLowResUrl } = useContext(Context)
  const { user, mainColor } = useSelector((state) => state.users)
  const { postComments } = useSelector((state) => state.comments)
  const { sportman } = useSelector((state) => state.sportman)

  const [comment, setComment] = useState('')

  useEffect(() => {
    const body = {
      id: postId,
      type: user.user.type
    }
    dispatch(getCommentByPost(body))
  }, [postId])

  const sortedComments =
    postComments &&
    postComments?.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return dateB - dateA
    })

  return (
    <GestureRecognizer
      keyboardShouldPersistTaps="always"
      onSwipeDown={closeModal}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: Color.bLACK1SPORTSMATCH,
              borderRadius: 10,
              elevation: 5,
              paddingTop: 10,
              height: '85%',
              alignSelf: 'flex-end',
              width: '100%',
              paddingHorizontal: 10,
              borderWidth: 0.5,
              borderColor: Color.wHITESPORTSMATCH,
              paddingBottom: 85
            }}
          >
            <TouchableOpacity onPress={closeModal} style={styles.topContainer}>
              <View style={styles.modalTop} />
              <Text style={styles.text}>Comentarios</Text>
              <View style={styles.line} />
            </TouchableOpacity>
            <ScrollView>
              {postComments?.length > 0 ? (
                sortedComments?.map((comment) => (
                  <View key={comment.id} style={styles.commentContainer}>
                    <View style={styles.authorContainer}>
                      {
                        <Image
                          contentFit="cover"
                          source={
                            comment.author.sportman
                              ? generateLowResUrl(
                                  comment.author?.sportman?.info?.img_perfil,
                                  40
                                )
                              : generateLowResUrl(
                                  comment.author?.club?.img_perfil,
                                  40
                                ) || require('../../assets/whiteSport.png')
                          }
                          style={{
                            height: 28,
                            width: 28,
                            borderRadius: 15,
                            backgroundColor: mainColor
                          }}
                        />
                      }
                      <Text style={styles.authorText}>
                        {comment.author.nickname}
                      </Text>
                      <Text style={styles.timeText}>
                        {formatDateDifference(comment.createdAt)}
                      </Text>
                    </View>
                    <Text style={styles.input}>{comment.content}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.input}>
                  Aún no hay ningún comentario, ¡sé el primero!
                </Text>
              )}
            </ScrollView>
            {sportman.type !== 'invitado' && (
              <View
                style={{
                  width: '100%',
                  left: 10,
                  height: 70,
                  justifyContent: 'space-between',
                  position: 'absolute',
                  bottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'black'
                }}
              >
                <View
                  style={{
                    borderRadius: 13,
                    borderWidth: 0.5,
                    borderColor: Color.wHITESPORTSMATCH,
                    width: '80%',
                    height: '100%',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    display: 'flex',
                    paddingHorizontal: 8
                  }}
                >
                  <TextInput
                    placeholder="Escribe un comentario..."
                    placeholderTextColor={Color.wHITESPORTSMATCH}
                    onChangeText={setComment}
                    value={comment}
                    multiline
                    style={styles.input2}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    zIndex: 9999999
                  }}
                  onPress={() => {
                    Keyboard.dismiss()
                    handleSubmit({
                      comment,
                      user,
                      postId,
                      dispatch,
                      setComment
                    })
                    closeModal()
                  }}
                >
                  <Text
                    style={{
                      color: Color.wHITESPORTSMATCH,
                      fontFamily: FontFamily.t4TEXTMICRO,
                      fontSize: 16,
                      fontWeight: '700',
                      marginLeft: 15,
                      zIndex: 5000
                    }}
                  >
                    Publicar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  topContainer: {
    alignItems: 'center',
    gap: 10
  },
  modalTop: {
    height: 6,
    width: 50,
    borderRadius: 20,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  text: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  line: {
    height: 0.7,
    width: '113%',
    backgroundColor: Color.wHITESPORTSMATCH,
    marginTop: 7
  },
  input: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 12,
    marginTop: 10
  },
  input2: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 15,
    alignItems: 'center'
  },
  commentContainer: {
    padding: 15,
    gap: 2,
    top: 10
  },
  authorContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  authorImg: {
    height: 28,
    width: 28,
    borderRadius: 15
  },
  authorText: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 15,
    fontWeight: '700'
  },
  timeText: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 10,
    color: Color.gREY2SPORTSMATCH
  }
})
export default CommentSection
