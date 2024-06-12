import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import SkillSeleccion from '../../../../components/SkillSeleccion'
import { Color, FontFamily, FontSize } from '../../../../GlobalStyles'
import { useSelector } from 'react-redux'
import CustomHeaderBack from '../../../../components/CustomHeaderBack'
import { SafeAreaView } from 'react-native-safe-area-context'
const EditarSkills = () => {
  const navigation = useNavigation()
  const [editable, setEditable] = useState(true)

  return (
  <SafeAreaView style={{flex:1 ,backgroundColor:"#000"}}>
      <ScrollView keyboardShouldPersistTaps={'always'} style={styles.paso6}>
      <CustomHeaderBack header={'Define tus Skills'}></CustomHeaderBack>
      <SkillSeleccion editable={editable} setEditable={setEditable} />
    </ScrollView>
  </SafeAreaView>
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
