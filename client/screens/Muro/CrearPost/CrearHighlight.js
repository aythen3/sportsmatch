import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Color, FontFamily, FontSize } from '../../../GlobalStyles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { createPost } from '../../../redux/actions/post'

const CrearHighlight = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const route = useRoute()

  const { image } = route.params || {}
  const { user } = useSelector((state) => state.users)

  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    const data = {
      image: image,
      description: description,
      authorType: user.user.type,
      author: user.user.id
    }
    dispatch(createPost(data))
    navigation.navigate('SiguiendoJugadores')
  }

  return (
    <ScrollView style={styles.crearHighlight}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={styles.crearHighlightChild}
            contentFit="cover"
            source={require('../../../assets/group-565.png')}
          />
        </Pressable>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.siguiente}>Subir</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.codeBlockPersonaEnCanch}
        contentFit="cover"
        source={{ uri: image }}
      />
      <View style={styles.descriptionContainer}>
        <TextInput
          style={styles.descriptionText}
          placeholder="Añade una descripción"
          placeholderTextColor={Color.wHITESPORTSMATCH}
          multiline={true}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  crearHighlight: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  crearHighlightChild: {
    height: 15,
    width: 15
  },
  siguiente: {
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  codeBlockPersonaEnCanch: {
    marginTop: 20,
    marginBottom: 15,
    height: 340,
    width: '95%',
    left: '2.3%'
  },
  descriptionContainer: {
    height: 70,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Color.wHITESPORTSMATCH,
    width: '98%',
    left: '1%',
    marginTop: '10%'
  },
  descriptionText: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'left',
    padding: 5,
    left: 5
  }
})

export default CrearHighlight
