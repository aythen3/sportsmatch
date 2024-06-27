import React, { useContext, useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native'
import { Border, Color, FontFamily } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import ScrollableModal from './modals/ScrollableModal'
import axiosInstance from '../utils/apiBackend'
import { getAllPosts } from '../redux/actions/post'
import { Context } from '../context/Context'

const Feed = ({ externalId }) => {
  const navigation = useNavigation()
  const [modal, setModal] = useState(false)
  const { showDeletePostModalFromProfile, setShowDeletePostModalFromProfile } =
    useContext(Context)
  const [postSelected, setPostSelected] = useState({})

  const [userPosts, setUserPosts] = useState([])
  const { user, mainColor } = useSelector((state) => state.users)
  const [pineable, setPineable] = useState(false)

  const { allPosts } = useSelector((state) => state.post)

  const dispatch = useDispatch()

  useEffect(() => {
    const userId = externalId || user.user.id
    const post = allPosts.filter(
      (post) => post?.author?.id === userId && !post.prop1
    )
    const postPined = allPosts.filter(
      (post) => post?.author?.id === userId && post.prop1
    )
    setUserPosts([...postPined, ...post])

   if(post[0]){
    setPineable(post[0].author.id === user.user.id)
   }
  }, [allPosts])

  const renderItem = ({ item: post, index }) => (
    <TouchableOpacity
      onLongPress={() => {
        if (pineable) {
          setPostSelected(post);
          setModal(true);
        }
      }}
      onPress={() => {
        navigation.navigate('Post', post);
      }}
      key={index}
      style={{ flex: 1 / 3, margin: 2, }}
    >
      {post?.prop1?.pined && (
        <View style={{ position: "absolute", top: 6, borderRadius: 50, right: 6, backgroundColor: mainColor, padding: 5, zIndex: 999 }}>
          <Image
            style={{ width: 8, height: 8 }}
            contentFit="cover"
            source={require('../assets/pinpin.png')}
          />
        </View>
      )}
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={{ uri: post.image[0] }}
      />
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      {userPosts?.length > 0 ? (
        <FlatList
          scrollEnabled={false}
          data={userPosts}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.noPostsContainer}>
          <Text style={styles.noPostsText}>
            {externalId
              ? 'El usuario aun no tiene publicaciones'
              : 'No tienes publicaciones'}
          </Text>
        </View>
      )}
      {modal && (
        <ScrollableModal
          visible={modal}
          options={
            !postSelected.prop1 || postSelected.prop1.pined === false
              ? ['Fijar post']
              : ['Quitar post fijo']
          }
          onSelectItem={async (e) => {
            if (e === 'Fijar post') {
              await axiosInstance.patch(`post/${postSelected.id}`, {
                prop1: { pined: true },
              });
            }
            if (e === 'Quitar post fijo') {
              await axiosInstance.patch(`post/${postSelected.id}`, { prop1: null });
            }
            dispatch(getAllPosts());
          }}
          closeModal={() => setModal(false)}
        />
      )}
    </View>
  );
}
const screenWidth = Dimensions.get('window').width
const itemSize = (screenWidth * 0.9 + 10) / 3
const styles = StyleSheet.create({
  fila1: {
    flexDirection: 'column'
  },
  imagen1pin: {
    width: 117,
    height: 146
  },
  fila2Layout: {
    height: 146,
    flexDirection: 'row'
  },
  imagen2pin: {
    marginLeft: 4,
    width: 117,
    height: 146
  },
  fila2: {
    marginTop: 2,
    width: 359
  },
  imagen5Icon: {
    marginLeft: 4
  },
  iconLayout: {
    borderRadius: Border.br_10xs,
    height: 160,
    alignSelf: 'stretch',
    width: "100%",
    overflow: 'hidden'
  }
})

export default Feed
