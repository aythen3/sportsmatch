import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions
} from 'react-native'
import { Color } from '../../GlobalStyles'

const CustomModal = ({ closeModal, onSelectItem, options }) => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 999999999999,
        backgroundColor: '#000',
        width: '90%',
        alignSelf: 'center',
        top: 72,
        borderRadius: 5
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
  )
}

const styles = StyleSheet.create({
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
