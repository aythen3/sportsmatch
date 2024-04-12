import React, { useContext, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Image } from 'expo-image'
import PagerView from 'react-native-pager-view'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import IconsMuro from './IconsMuro'
import { LinearGradient } from 'expo-linear-gradient'
import CommentSection from './modals/CommentSection'
import { Context } from '../context/Context'

function Carousel({
  name,
  description,
  imgPerfil,
  image,
  likes,
  club,
  commentCount,
  id,
  userId,
  authorId,
  data
}) {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={{ ...styles.container }}>
      <Pressable
        style={styles.topContainer}
        onPress={() => {
          if (data.author.type === 'club') {
            navigation.navigate('ClubProfile', data)
          } else {
            navigation.navigate('PerfilFeedVisualitzaciJug', data)
          }
        }}
      >
        <Image style={styles.imgPerfil} source={imgPerfil} />
        <Text style={styles.nameText}>{name}</Text>
      </Pressable>
      <PagerView style={styles.postContainer} initialPage={0}>
        <View key={id}>
          <Image style={styles.postImage} source={image} />
        </View>
        {/* <View key={index + 1}>
          <Image
            style={styles.postImage}
            source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
          />
        </View> */}
      </PagerView>
      <View style={{ padding: 5 }}>
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
          <IconsMuro id={id} userId={userId} />
        </View>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.commentsTitle}>
            Ver los {commentCount} comentarios
          </Text>
        </TouchableOpacity>

        {modalVisible && (
          <CommentSection
            visible={modalVisible}
            closeModal={closeModal}
            postId={id}
          />
        )}
        {/* {showComments &&
          !error &&
          postComments?.map((comment) => (
            <CommentsMuro key={comment.id} comment={comment} />
          ))} */}

        {/* {!showComments && (
          <Text style={styles.comments}>{comments[0].comment}</Text>
        )}  */}
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
  },
  container: {
    width: '100%'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 5
  },
  imgPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  nameText: {
    color: 'white',
    fontWeight: '700'
  },
  postContainer: {
    width: '100%',
    height: 300,
    marginTop: 10
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 5
  }
})
