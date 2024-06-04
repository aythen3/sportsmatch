import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import SkillSeleccion from '../../components/SkillSeleccion'
import { Color, FontFamily, FontSize } from '../../GlobalStyles'
import { useSelector } from 'react-redux'

const EditarSkills = () => {
  const navigation = useNavigation()
  const [editable, setEditable] = useState(true)

  return (
    <ScrollView keyboardShouldPersistTaps={'always'} style={styles.paso6}>
      <View style={styles.cooliconParent}>
        <Pressable
          style={styles.coolicon}
          onPress={() => {
            console.log('ES')
            navigation.goBack()
          }}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../../assets/coolicon3.png')}
          />
        </Pressable>
        <Pressable
          style={styles.editarPerfil1}
          onPress={() => {
            console.log('ES')
            navigation.goBack()
          }}
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
    marginTop: 20,
    marginBottom: 15,
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
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default EditarSkills
