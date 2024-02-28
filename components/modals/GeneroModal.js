import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'

const GeneroModal = ({ visible, closeModal, onSelectGenero }) => {
  const generos = ['Femenino', 'Masculino']

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecciona tu género</Text>
          {generos.map((genero, index) => (
            <Pressable
              key={index}
              style={styles.optionButton}
              onPress={() => {
                onSelectGenero(genero)
                closeModal()
              }}
            >
              <Text style={styles.optionText}>{genero}</Text>
            </Pressable>
          ))}
          <Pressable style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
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

export default GeneroModal
