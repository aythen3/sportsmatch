import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import { Color } from '../../GlobalStyles'

const startYear = 2024
const endYear = 1920
const años = Array.from(
  { length: startYear - endYear + 1 },
  (_, index) => startYear - index
)

const AñoNacimientoModal = ({ visible, closeModal, onSelectAñoNacimiento }) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                height: 6,
                width: 50,
                borderRadius: 20,
                backgroundColor: Color.wHITESPORTSMATCH,
                alignSelf: 'center',
                marginBottom: 12
              }}
            />
            <ScrollView keyboardShouldPersistTaps={'always'}>
              {años.map((año, index) => (
                <Pressable
                  key={index}
                  style={styles.optionButton}
                  onPress={() => {
                    onSelectAñoNacimiento(año)
                    closeModal()
                  }}
                >
                  <Text style={styles.optionText}>{año}</Text>
                </Pressable>
              ))}
            </ScrollView>
            {/* <Pressable style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    maxHeight: 300,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    borderWidth: 0.5,
    borderColor: Color.wHITESPORTSMATCH,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 5
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Color.gREY2SPORTSMATCH
  },
  optionButton: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  optionText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    color: Color.gREY2SPORTSMATCH
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center'
  },
  cancelText: {
    color: Color.bALONCESTO,
    fontSize: 16
  }
})

export default AñoNacimientoModal
