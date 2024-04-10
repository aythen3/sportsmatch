import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Color } from '../../GlobalStyles'

const CustomModal = ({ closeModal, onSelectItem, options }) => {
  return (
    <View style={styles.modalContainer}>
      <ScrollView>
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
    flex: 1,
    position: 'absolute',
    zIndex: 999999999999,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'red',
    width: '100%',
    top: 40,
    height: 200
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    // elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
  }
})

export default CustomModal
