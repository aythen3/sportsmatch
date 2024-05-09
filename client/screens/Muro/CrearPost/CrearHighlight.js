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
import { createPost, getAllPosts } from '../../../redux/actions/post'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    dispatch(createPost(data)).then((data) => dispatch(getAllPosts()))
    navigation.navigate('SiguiendoJugadores')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.bLACK1SPORTSMATCH }}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center'
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
            marginTop: 40,
            marginBottom: 15,
            borderRadius: 8,
            height: 340
          }}
          contentFit="cover"
          source={{ uri: image }}
        />
        <View
          style={{
            height: 100,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Color.wHITESPORTSMATCH,
            marginTop: 20
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
