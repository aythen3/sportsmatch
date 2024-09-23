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

const ModalExt = ({ visible, closeModal, title, content }) => {
  const dispatch = useDispatch()

  const { user, mainColor, isSportman } = useSelector((state) => state.users)
  const { postComments } = useSelector((state) => state.comments)
  const { sportman } = useSelector((state) => state.sportman)
  const { allPosts } = useSelector((state) => state.post)

  const { clubMatches, userMatches, getClubMatches } = useContext(Context)

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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,

              elevation: 5,
              paddingTop: 10,
              alignSelf: 'flex-end',
              width: '100%',
              paddingHorizontal: 10,
              borderWidth: 0.5,
              borderColor: Color.wHITESPORTSMATCH
            }}
          >
            <TouchableOpacity onPress={closeModal} style={styles.topContainer}>
              <View style={styles.modalTop} />
              <Text style={styles.text}>{title}</Text>
              <View style={styles.line} />
            </TouchableOpacity>
            {content && content()}
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
export default ModalExt
