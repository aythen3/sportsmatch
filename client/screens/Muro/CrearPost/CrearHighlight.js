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
import { useToast } from '../../../components/Toast'
import { Video } from 'expo-av'

const CrearHighlight = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const route = useRoute()

  const { image } = route.params || {}
  const { provisoryProfileImage, pickImage, libraryImage } = useContext(Context)
  const { user } = useSelector((state) => state.users)
  const { height, width } = useWindowDimensions()
  const [description, setDescription] = useState('')
  const [multis, setMultis] = useState()
  const showToast = useToast()

  useEffect(() => {}, [image, provisoryProfileImage])
  const handleSubmit = async () => {
    if (image) {
      navigation.navigate('SiguiendoJugadores')
      showToast('Creando el nuevo post...')
    }
    let imageFinal
    if (!Array.isArray(image)) {
      const res = await pickImage('a', image.uri)
      imageFinal = res
    } else {
      const todas = []
      for (let i = 0; i < image.length; i++) {
        const res = await pickImage('a', image[i].uri)
        todas.push(res)
      }
      imageFinal = todas
    }
    const data = {
      image: imageFinal,
      description: description || '  ',
      authorType: user.user.type,
      author: user.user.id
    }
    dispatch(createPost(data)).then((data) => {
      dispatch(getAllPosts())
    })
  }
  console.log('imagen', image)
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column'
      }}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        style={{ flex: 1, backgroundColor: Color.bLACK1SPORTSMATCH }}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
            paddingHorizontal: 12
          }}
        >
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              style={{ width: 30 }}
              onPress={() => {
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
              <Text style={styles.siguiente}>Publicar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, gap: 20, paddingVertical: 20 }}>
            {!Array.isArray(image) ? (
              <>
                {image.mediaType === 'photo' && (
                  <Image
                    style={{
                      marginTop: 40,
                      marginBottom: 15,
                      borderRadius: 8,
                      height: 350,
                      width: '100%'
                    }}
                    contentFit="cover"
                    source={{ uri: image ? image.uri : provisoryProfileImage }}
                  />
                )}
                {image.mediaType === 'video' && (
                  <Video
                    style={{
                      marginTop: 40,
                      marginBottom: 15,
                      borderRadius: 8,
                      height: 350,
                      width: '100%'
                    }}
                    contentFit="cover"
                    shouldPlay
                    isMuted
                    isLooping
                    useNativeControls={false}
                    resizeMode="cover"
                    source={{ uri: image.uri }}
                  />
                )}
              </>
            ) : (
              <View style={{ height: '50%', width: '100%' }}>
                <PagerView
                  style={{ flex: 1, marginBottom: 10 }}
                  initialPage={0}
                >
                  {image.map((e, i) => (
                    <View style={{ width: '100%' }} key={i}>
                      <>
                        {e.mediaType === 'photo' && (
                          <Image
                            style={{
                              marginTop: 40,
                              marginBottom: 15,
                              borderRadius: 8,
                              height: 350,
                              width: '100%'
                            }}
                            contentFit="cover"
                            source={{ uri: e?.uri }}
                          />
                        )}
                        {e.mediaType === 'video' && (
                          <Video
                            style={{
                              marginTop: 40,
                              marginBottom: 15,
                              borderRadius: 8,
                              height: 350,
                              width: '100%'
                            }}
                            contentFit="cover"
                            shouldPlay
                            isMuted
                            isLooping
                            useNativeControls={false}
                            resizeMode="cover"
                            source={{ uri: e?.uri }}
                          />
                        )}
                      </>
                    </View>
                  ))}
                </PagerView>
              </View>
            )}
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: Color.wHITESPORTSMATCH
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
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
