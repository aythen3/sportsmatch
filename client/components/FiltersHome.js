import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable
} from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const FiltersHome = ({ modalActive, text }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View style={[styles.groupContainer, styles.groupContainerSpaceBlock]}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require('../assets/group-428.png')}
        />
        <TextInput
          style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo]}
          placeholderTextColor={Color.gREY2SPORTSMATCH}
          placeholder={text ? text : 'Posicón de juego, población, club...'}
        />
      </View>
      <Pressable onPress={modalActive}>
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
    marginLeft: 20,
    height: 17,
    width: 22
  }
})

export default FiltersHome
