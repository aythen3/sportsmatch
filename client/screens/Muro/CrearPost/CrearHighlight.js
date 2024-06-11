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
  Platform,
  useWindowDimensions
} from 'react-native'
import { Color, FontFamily, FontSize } from '../../../GlobalStyles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { createPost, getAllPosts } from '../../../redux/actions/post'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../../../context/Context'
import PagerView from 'react-native-pager-view'

const CrearHighlight = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const route = useRoute()

  const { image } = route.params || {}
  const { provisoryProfileImage, pickImage, libraryImage } = useContext(Context)
  const { user } = useSelector((state) => state.users)
  const { height, width } = useWindowDimensions();
  const [description, setDescription] = useState('')
  const [multis, setMultis] = useState();

  useEffect(() => {
    console.log('image changed: ', image)
    console.log('provisoryProfileImage changed: ', provisoryProfileImage)
  }, [image, provisoryProfileImage])

  const handleSubmit = async () => {
    let imageFinal
    if (!Array.isArray(image)) {
      const res = await pickImage('a', image)
      console.log(res, "pathh1")
      imageFinal = res
    } else {
      const todas = []
      for (let i = 0; i < image.length; i++) {
      const res = await pickImage('a', image[i].uri)
      console.log(res,"esto es del bucleee")
      todas.push(res)
      }
      imageFinal = todas
      console.log(imageFinal, "pathh2")
    }
    const data = {
      image: imageFinal,
      description: description || "  ",
      authorType: user.user.type,
      author: user.user.id
    }
    dispatch(createPost(data)).then((data) => {
      console.log(data)
      dispatch(getAllPosts())
    })
    navigation.navigate('SiguiendoJugadores')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: Color.bLACK1SPORTSMATCH }}>
      <ScrollView
        contentContainerStyle={{ flex: 1, height: 'auto' }}
        style={{
          flex: 1,
          width: '92%',
          height: height,
          alignSelf: 'center',
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
        {!Array.isArray(image) ? (

          <Image
            style={{
              marginTop: 40,
              marginBottom: 15,
              borderRadius: 8,
              height: 350,
              width: "100%",
            }}
            contentFit="cover"
            source={{ uri: image ? image : provisoryProfileImage }}
          />
        ) : (
          <View style={{ height: 344, width: "100%" }}>
            <PagerView style={{ flex: 1, marginBottom: 10 }} initialPage={0}>
              {image.map((e, i) => (
                <View style={{ width: "100%" }} key={i}>
                  <Image
                    style={{
                      marginTop: 40,
                      marginBottom: 15,
                      borderRadius: 8,
                      height: 350,
                      width: "100%",
                    }}
                    contentFit="cover"
                    source={{ uri: e?.uri }}
                  />
                </View>
              ))}
            </PagerView>
          </View>
        )}
        <View
          style={{
            flex: 1,
            width: "100%",
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
