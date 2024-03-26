import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const FiltersHome = ({ modalActive, text, modalSportmanActive }) => {
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)

  return (
    <View style={styles.container}>
      <View style={[styles.groupContainer, styles.groupContainerSpaceBlock]}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require('../assets/group-428.png')}
        />
        <TextInput
          style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo]}
          placeholderTextColor={Color.gREY2SPORTSMATCH}
          placeholder={text ? text : 'Posición de juego, población, club...'}
        />
      </View>
      <Pressable
        onPress={() => {
          isSportman ? modalSportmanActive() : modalActive()
        }}
      >
        <Image
          style={styles.groupIcon2}
          contentFit="cover"
          source={require('../assets/group5.png')}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  groupContainer: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    height: 42,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderStyle: 'solid',
    flexDirection: 'row'
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs
  },
  frameChild1: {
    top: 3,
    width: 13,
    height: 15
  },
  posicnDeJuego: {
    marginLeft: 6,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  posicnDeJuegoTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupIcon2: {
    height: 17,
    width: 22
  }
})

export default FiltersHome
