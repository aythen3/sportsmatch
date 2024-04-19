import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { Color } from '../../GlobalStyles'

const ScrollableModal = ({
  closeModal,
  onSelectItem,
  options,
  parentTop,
  visible,
  scrollHeight
}) => {
  console.log('parentTop: ', parentTop)
  console.log('scrollHeight: ', scrollHeight)
  return (
    <Modal transparent={true} visible={visible} onRequestClose={closeModal}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: parentTop + 72 - scrollHeight,
              backgroundColor: Color.bLACK1SPORTSMATCH,
              maxHeight: 115,
              width: '85%',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              paddingHorizontal: 5,
              borderRadius: 10,
              elevation: 5,
              alignItems: 'center'
            }}
          >
            <ScrollView
              keyboardShouldPersistTaps={'always'}
              contentContainerStyle={styles.scrollContainer}
            >
              <View style={styles.modalContent}>
                {options.map((item, index) => (
                  <Pressable
                    key={index}
                    style={styles.optionButton}
                    onPress={() => {
                      onSelectItem(item)
                      closeModal()
                    }}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1
  },
  modalContent: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionButton: {
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  optionText: {
    fontSize: 16,
    color: Color.gREY2SPORTSMATCH
  }
})

export default ScrollableModal
