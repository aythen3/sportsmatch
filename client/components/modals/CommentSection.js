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
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native'
import { Image } from 'expo-image'
import { Color, FontFamily } from '../../GlobalStyles'
import { getCommentByPost } from '../../redux/actions/comments'
import { handleSubmit, formatDateDifference } from './utils/commentHandler'
import GestureRecognizer from 'react-native-swipe-gestures'
import { Context } from '../../context/Context'
import { getAllMatchs } from '../../redux/actions/matchs'
import { resetCommentsSlices } from '../../redux/slices/comments.slices'

const CommentSection = ({ visible, closeModal, postId, sportman1 = '' }) => {
  const dispatch = useDispatch()

  const { generateLowResUrl, scalableFontSize } = useContext(Context)
  const { user, mainColor, isSportman } = useSelector((state) => state.users)
  const { postComments } = useSelector((state) => state.comments)
  const { sportman } = useSelector((state) => state.sportman)
  const { allPosts } = useSelector((state) => state.post)

  const [canSend, setCanSend] = useState(false)
  const { clubMatches, userMatches, getClubMatches } = useContext(Context)
  const [comment, setComment] = useState('')

  const allfilter = allPosts.find((e) => e.id === postId)

  console.log(allfilter, 'ALLLLL')

  useEffect(() => {
    if (clubMatches) {
      const e =
        clubMatches.filter(
          (match) =>
            match.prop1.sportmanId === sportman1 && match.status === 'success'
        ).length > 0
      setCanSend(e)
    }
  }, [])
  useEffect(() => {
    const body = {
      id: postId,
      type: user.user.type
    }
    dispatch(getAllMatchs())
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
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
                sortedComments?.map((comment) => {
                  console.log(comment, 'cccccc')
                  if (!comment.author.isDelete) {
                    return (
                      <View key={comment.id} style={styles.commentContainer}>
                        <View style={styles.authorContainer}>
                          {
                            <Image
                              contentFit="cover"
                              source={
                                comment.author.sportman?.info?.img_perfil
                                  ? generateLowResUrl(
                                      comment.author?.sportman?.info
                                        ?.img_perfil,
                                      40
                                    )
                                  : comment.author?.club?.img_perfil
                                    ? generateLowResUrl(
                                        comment.author?.club?.img_perfil,
                                        40
                                      )
                                    : require('../../assets/whiteSport.png')
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
                    )
                  }
                })
              ) : (
                <Text style={styles.input}>
                  Aún no hay ningún comentario, ¡sé el primero!
                </Text>
              )}
            </ScrollView>
            {sportman.type !== 'invitado' && (
              <View
                style={{
                  width: Dimensions.get('screen').width,
                  height: 70,
                  justifyContent: 'center',

                  position: 'absolute',
                  bottom: 30,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                {canSend ||
                  (isSportman && (
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        minHeight: 80,
                        alignItems: 'center'
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 13,
                          borderWidth: 0.5,
                          borderColor: Color.wHITESPORTSMATCH,
                          width: '80%',
                          minHeight: 80,
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
                          zIndex: 9999999,
                          width: '20%'
                        }}
                        onPress={() => {
                          Keyboard.dismiss()
                          handleSubmit({
                            comment,
                            user,
                            postId,
                            dispatch,
                            setComment,
                            allfilter
                          })
                          dispatch(resetCommentsSlices())
                          closeModal()
                        }}
                      >
                        <Text
                          style={{
                            color: Color.wHITESPORTSMATCH,
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontSize: scalableFontSize(12),
                            fontWeight: '700',
                            marginLeft: 15,
                            zIndex: 5000
                          }}
                        >
                          Publicar
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                {!canSend && !isSportman && (
                  <>
                    <View
                      style={{
                        borderRadius: 13,
                        borderWidth: 0.5,
                        borderColor: Color.wHITESPORTSMATCH,
                        width: '100%',
                        padding: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        display: 'flex',
                        paddingHorizontal: 8
                      }}
                    >
                      <Text style={{ color: '#fff' }}>
                        No puedes comentar si no has hecho match.
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
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
