import React from 'react'
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Color } from '../../GlobalStyles'

const CategoriaModal = ({ visible, closeModal, onSelectPosition }) => {
  const futbol = [
    { label: 'Pase', value: 'Pase' },
    { label: 'Resistencia', value: 'Resistencia' },
    { label: 'Disparo', value: 'Disparo' },
    { label: 'Regate', value: 'Regate' }
  ]

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecciona una posicion</Text>
          {futbol.map((posicion, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => {
                onSelectPosition(posicion.value)
                closeModal()
              }}
            >
              <Text style={styles.optionText}>{posicion.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: Color.gREY2SPORTSMATCH
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

export default CategoriaModal
