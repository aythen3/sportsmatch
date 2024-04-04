import React, { useState, useEffect } from 'react'
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

const CommentSection = ({ visible, closeModal, postId }) => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { postComments } = useSelector((state) => state.comments)

  const [comment, setComment] = useState('')

  useEffect(() => {
    dispatch(getCommentByPost(postId))
  }, [postId])

  // const sortedComments = postComments?.slice().sort((a, b) => {
  //   const dateA = new Date(a.createdAt)
  //   const dateB = new Date(b.createdAt)
  //   return dateB - dateA
  // })

  return (
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
            postComments?.map((comment) => (
              <View key={comment.id} style={styles.commentContainer}>
                <View style={styles.authorContainer}>
                  {/* <Image /> */}
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
              Aun no hay ningun comentario, sé el primero!
            </Text>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Escribe un comentario..."
              placeholderTextColor={Color.wHITESPORTSMATCH}
              onChangeText={setComment}
              value={comment}
              multiline
              style={styles.input}
            />
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
    gap: 25
  },
  modalTop: {
    height: 10,
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
    backgroundColor: Color.wHITESPORTSMATCH
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
  input: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 15
  },
  submitText: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 16,
    fontWeight: '700'
  },
  commentContainer: {
    padding: 5,
    gap: 2
  },
  authorContainer: {
    flexDirection: 'row',
    gap: 10
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
