import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import PagerView from 'react-native-pager-view'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import IconsMuro from './IconsMuro'
import { LinearGradient } from 'expo-linear-gradient'
import CommentsMuro from './CommentsMuro'

function Carousel({
  name,
  description,
  imgPerfil,
  image,
  likes,
  comments,
  club,
  index
}) {
  const navigation = useNavigation()
  const [showComments, setShowComments] = useState(false)

  return (
    <View style={{ width: '100%', marginVertical: 15, paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10
        }}
      >
        <Image
          style={{ width: 30, height: 30, borderRadius: 50 }}
          source={imgPerfil}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: '700'
          }}
          onPress={() =>
            navigation.navigate('PerfilFeedVisualitzaciJug', {
              club: club,
              name: name,
              description: description,
              image: image,
              imgPerfil: imgPerfil
            })
          }
        >
          {name}
        </Text>
      </View>
      <PagerView
        style={{ width: '100%', height: 300, marginTop: 10 }}
        initialPage={0}
      >
        <View
          style={{
            width: '100%',
            height: 300
          }}
          key={index}
        >
          <Image
            style={{ width: '100%', height: 300, borderRadius: 5 }}
            source={image}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 300
          }}
          key={index + 1}
        >
          <Image
            style={{ width: '100%', height: 300, borderRadius: 5 }}
            source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
          />
        </View>
      </PagerView>
      <View>
        <LinearGradient
          style={styles.botonPromocionarPublicacion}
          locations={[0, 0.18, 0.38, 0.58, 0.79, 1]}
          colors={[
            '#e6b300',
            '#bd9710',
            '#ebc02a',
            '#e6b300',
            '#bd9710',
            '#ebc02a'
          ]}
        >
          <Text style={[styles.jordiEspeltMireu, styles.jordiTypo]}>
            Promocionar publicación
          </Text>
        </LinearGradient>
        <View style={styles.iconsLikes}>
          <Text style={styles.likes}>{likes} likes</Text>
          <IconsMuro />
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text
          style={styles.commentsTitle}
          onPress={() => setShowComments(!showComments)}
        >
          Ver los 24 comentarios
        </Text>

        {showComments &&
          comments.map((comment) => (
            <CommentsMuro key={comment.id} comment={comment} />
          ))}

        {!showComments && (
          <Text style={styles.comments}>{comments[0].comment}</Text>
        )}
      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  likes: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size
  },
  botonPromocionarPublicacion: {
    marginTop: 15,
    borderRadius: Border.br_81xl,
    width: 210,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    backgroundColor: Color.promocio,
    alignItems: 'center',
    flexDirection: 'row'
  },
  jordiEspeltMireu: {
    fontSize: FontSize.t1TextSMALL_size
  },
  jordiTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
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
  },
  iconsLikes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  }
})
