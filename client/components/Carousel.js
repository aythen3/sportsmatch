import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

function Carousel({
  name,
  description,
  imgPerfil,
  image,
  likes,
  comments,
  index
}) {
  const navigation = useNavigation()

  return (
    <View style={{ width: '100%', marginVertical: 15 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Image
          style={{ width: 30, height: 30, borderRadius: 50 }}
          source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
        />
        <Text
          style={{ color: 'white' }}
          onPress={() => navigation.navigate('PerfilFeedVisualitzaciClu2')}
        >
          {name}
        </Text>
      </View>
      <PagerView
        style={{ width: '100%', height: 300, marginTop: 10 }}
        initialPage={0}
      >
        <View style={{ width: '100%', height: 300 }} key={index}>
          <Image
            style={{ width: '100%', height: 300 }}
            source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
          />
        </View>
        <View style={{ width: '100%', height: 300 }} key={index + 1}>
          <Image
            style={{ width: '100%', height: 300 }}
            source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
          />
        </View>
      </PagerView>
      <View>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.commentsTitle}>Ver los 24 comentarios</Text>
        <Text style={styles.comments}>{comments}</Text>
      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  likes: {
    fontWeight: '700',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size
  },
  description: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  commentsTitle: {
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.gREY2SPORTSMATCH,
    marginTop: 8
  },
  comments: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  }
})
