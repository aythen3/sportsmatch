import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Color } from '../../GlobalStyles'

const CustomModal = ({ closeModal, onSelectItem, options }) => {
  return (
    <View style={styles.modalContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    zIndex: 999999999999,
    backgroundColor: '#000',
    width: '90%',
    alignSelf: 'center',
    top: 87,
    borderRadius: 5
    // maxHeight: 200, // Set a maximum height to allow scrolling
    // flex: 1 // Ensure the modal container can expand to accommodate content
  },
  scrollContainer: {
    flexGrow: 1
  },
  modalContent: {
    padding: 10,
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

export default CustomModal
