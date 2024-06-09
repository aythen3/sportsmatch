import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { Color, FontFamily, FontSize } from '../../../GlobalStyles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { createPost, getAllPosts } from '../../../redux/actions/post'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../../../context/Context'

const CrearHighlight = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const route = useRoute()

  const { image } = route.params || {}
  const { provisoryProfileImage } = useContext(Context)
  const { user } = useSelector((state) => state.users)

  const [description, setDescription] = useState('')

  useEffect(() => {
    console.log('image changed: ', image)
    console.log('provisoryProfileImage changed: ', provisoryProfileImage)
  }, [image, provisoryProfileImage])

  const handleSubmit = () => {
    const data = {
      image: image,
      description: description,
      authorType: user.user.type,
      author: user.user.id
    }
    dispatch(createPost(data)).then((data) => dispatch(getAllPosts()))
    navigation.navigate('SiguiendoJugadores')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: Color.bLACK1SPORTSMATCH }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        style={{
          width: '90%',
          height:"100%",
          alignSelf: 'center',
          paddingBottom: 70
        }}
      >
        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log('CH')
              navigation.goBack()
            }}
          >
            <Image
              style={{ height: 15, width: 15 }}
              contentFit="cover"
              source={require('../../../assets/group-565.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.siguiente}>Subir</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{
            flex: 1,
            marginTop: 40,
            marginBottom: 15,
            borderRadius: 8,
          }}
          contentFit="cover"
          source={{ uri: image ? image : provisoryProfileImage }}
        />
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Color.wHITESPORTSMATCH,
            marginTop: 20,
            marginBottom: 30
          }}
        >
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
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  siguiente: {
    color: Color.wHITESPORTSMATCH,
    fontSize: 17,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500'
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
