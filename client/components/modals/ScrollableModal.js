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
  console.log('parentTop: ', options)
  console.log('scrollHeight: ', scrollHeight)
  return (
    <Modal transparent={true} visible={visible} animationType='slide' onRequestClose={closeModal}>
      <TouchableWithoutFeedback style={{ width: "100%",height:"100%" }} onPress={closeModal}>
        <View
          style={{
            width: "100%",
            paddingVertical: 30,
            bottom: 0,
            position: "absolute",
            maxHeight: 300,
            backgroundColor: Color.bLACK1SPORTSMATCH,
            borderWidth: 0.5,
            borderColor: Color.wHITESPORTSMATCH,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <View style={{
            height: 6,
            width: 50,
            borderRadius: 20,
            backgroundColor: Color.wHITESPORTSMATCH,
            alignSelf:"center",
            marginBottom:12

          }} />
          <View
            style={{

              width: '100%',
              paddingHorizontal: 5,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <ScrollView
              keyboardShouldPersistTaps={'always'}
              contentContainerStyle={styles.scrollContainer}
            >
              <View style={styles.modalContent}>
                {options.length > 0 && options.map((item, index) => (
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
    width: "100%",
  },
  modalContent: {
    borderRadius: 10,
    alignItems: 'center',
    width: "100%",
    height: "100%",
  },
  optionButton: {
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  optionText: {
    width: "100%",
    fontSize: 16,
    textAlign: "center",
    color: Color.gREY2SPORTSMATCH
  }
})

export default ScrollableModal
