import React from 'react'
import { Modal, Text, View, StyleSheet } from 'react-native'
import { Color } from '../../GlobalStyles'

const CommentSection = ({ visible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>comentario</Text>
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
    alignItems: 'center'
  }
})
export default CommentSection
