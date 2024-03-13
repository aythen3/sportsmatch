import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import SkillSeleccion from '../../components/SkillSeleccion'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'

const EditarSkills = () => {
  const navigation = useNavigation()
  const [editable, setEditable] = useState(true)

  return (
    <ScrollView style={styles.paso6}>
      <View style={styles.cooliconParent}>
        <Pressable style={styles.coolicon} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../../assets/coolicon3.png')}
          />
        </Pressable>
        <Pressable
          style={styles.editarPerfil1}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.editarPerfil2}>Define tus Skills</Text>
        </Pressable>
      </View>
      <SkillSeleccion editable={editable} setEditable={setEditable} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cooliconParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    left: 15
  },
  coolicon: {
    width: 9,
    height: 15
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  editarPerfil1: {
    marginLeft: 9
  },
  editarPerfil2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  paso6: {
    width: '100%',
    backgroundColor: Color.bLACK3SPORTSMATCH
  }
})

export default EditarSkills
