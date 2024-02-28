import React from 'react'
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Color } from '../../GlobalStyles'

const CategoriaModal = ({ visible, closeModal, onSelectEdad }) => {
  const edades = [
    { label: 'Escuela (4-6 años)', value: 'Escuela' },
    { label: 'Prebenjamín (6-8 años)', value: 'Pre Benjamin' },
    { label: 'Benjamín (8-10 años)', value: 'Benjamin' },
    { label: 'Alevín (10-12 años)', value: 'Alevin' },
    { label: 'Infantil (12-14 años)', value: 'Infantil' },
    { label: 'Cadete (14-16 años)', value: 'Cadete' },
    { label: 'Juvenil (16-18 años)', value: 'Juvenil' },
    { label: 'Senior (+18 años)', value: 'Senior' },
    { label: 'Veteranos (+30 años)', value: 'Veteranos' }
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
          <Text style={styles.modalTitle}>Selecciona una categoría</Text>
          {edades.map((edad, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => {
                onSelectEdad(edad.value)
                closeModal()
              }}
            >
              <Text style={styles.optionText}>{edad.label}</Text>
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
    borderBottomColor: Color.gREY2SPORTSMATCH
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
