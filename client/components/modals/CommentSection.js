import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Image } from 'expo-image'
import { Color, FontFamily } from '../../GlobalStyles'
import { getCommentByPost } from '../../redux/actions/comments'
import { handleSubmit, formatDateDifference } from './utils/commentHandler'
import GestureRecognizer from 'react-native-swipe-gestures'
import { Context } from '../../context/Context'

const CommentSection = ({ visible, closeModal, postId }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users)
  const { postComments } = useSelector((state) => state.comments)

  const [comment, setComment] = useState('')

  useEffect(() => {
    const body = {
      id: postId,
      type: user.user.type
    }
    dispatch(getCommentByPost(body))
  }, [postId])

  const sortedComments = postComments && postComments?.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return dateB - dateA
  })

  return (
    <GestureRecognizer onSwipeDown={closeModal}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable onPress={closeModal} style={styles.topContainer}>
              <View style={styles.modalTop} />
              <Text style={styles.text}>Comentarios</Text>
              <View style={styles.line} />
            </Pressable>
            {postComments?.length > 0 ? (
              sortedComments?.map((comment) => (
                <View key={comment.id} style={styles.commentContainer}>
                  <View style={styles.authorContainer}>
                    <Image
                      contentFit="cover"
                      source={
                        comment.author.sportman
                          ? comment.author?.sportman?.info?.img_perfil
                          : comment.author?.club?.img_perfil
                      }
                      style={styles.authorImg}
                    />
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
                Aun no hay ningún comentario, ¡sé el primero!
              </Text>
            )}

            <View style={styles.inputContainer}>
              <View style={styles.inputBox}>
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
                onPress={() =>
                  handleSubmit({ comment, user, postId, dispatch, setComment })
                }
              >
                <Text style={styles.submitText}>Publicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    height: '95%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: Color.wHITESPORTSMATCH
  },
  topContainer: {
    alignItems: 'center',
    gap: 13
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
  inputContainer: {
    width: '100%',
    height: '10%',
    paddingLeft: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputBox: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: Color.wHITESPORTSMATCH,
    width: '80%',
    height: '90%',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  input: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 15,
    marginTop: 10
  },
  input2: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 15
  },
  submitText: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 15
  },
  commentContainer: {
    padding: 5,
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
    fontSize: 12,
    color: Color.gREY2SPORTSMATCH
  }
})
export default CommentSection
