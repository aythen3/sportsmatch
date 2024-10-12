import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const FiltersHome = ({
  modalActive,
  text,
  modalSportmanActive,
  textValue,
  setTextValue,
  action
}) => {
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
          // onBlur={action ? action : ''}
          style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo, { flex: 1 }]}
          placeholderTextColor={Color.gREY2SPORTSMATCH}
          value={textValue}
          onChangeText={(text) => setTextValue(text)}
          placeholder={
            textValue?.length > 0
              ? textValue
              : 'Posición de juego, población, club...'
          }
        />
      </View>
      <Pressable
        onPress={() => {
          isSportman ? modalSportmanActive() : modalActive()
        }}
        style={{
          height: 40,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          style={styles.groupIcon2}
          contentFit="cover"
          source={require('../assets/nuevomenusetting.png')}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  groupContainer: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    alignItems: 'center',
    borderStyle: 'solid',
    flexDirection: 'row',
    width: '84%'
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs
  },
  frameChild1: {
    width: 20,
    height: 20
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
    height: 40,
    width: 40,
    objectFit: 'scale-down'
  }
})

export default FiltersHome
