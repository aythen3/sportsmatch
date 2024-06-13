import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native'
import { Border, Color, FontFamily } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import ScrollableModal from './modals/ScrollableModal'
import axiosInstance from '../utils/apiBackend'
import { getAllPosts } from '../redux/actions/post'

const Feed = ({ externalId }) => {
  const navigation = useNavigation()
  const [modal, setModal] = useState(false)
  const [postSelected, setPostSelected] = useState({})

  const [userPosts, setUserPosts] = useState([])
  const { user } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.post)

  const dispatch = useDispatch()

  useEffect(() => {
    const userId = externalId || user.user.id
    const post = allPosts.filter((post) => post.author.id === userId && !post.prop1 )
    const postPined = allPosts.filter((post) => post.author.id === userId && post.prop1 )
    setUserPosts([...postPined,...post])
  }, [allPosts])

  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      style={{
        width: '100%',
        paddingHorizontal: 10,
        alignSelf: 'center'
      }}
    >
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          gap: 10,
          flexDirection: 'row', // Set flexDirection to 'row'
          flexWrap: 'wrap'
        }}
      >
        {userPosts?.length > 0 ? (
          userPosts?.map((post, index) => (
            <TouchableOpacity
              onLongPress={() => {
                setPostSelected(post)
                setModal(true)}}
              onPress={() => {
                navigation.navigate('Post', post)
              }}
              key={index}>
                {post?.prop1?.pined && (
                   <Image
                   style={{width:20,height:20,position:"absolute",top:5,right:5,zIndex:999}}
                   contentFit="cover"
                   source={require('../assets/pined.png')}
                 />
                )}
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={{ uri: post.image[0] }}
              />
            </TouchableOpacity>
          ))
        ) : (
          <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                fontFamily: FontFamily.t4TEXTMICRO,
                color: Color.wHITESPORTSMATCH
              }}
            >
              {externalId ? 'El usuario aun no tiene publicaciones' : 'No tienes publicaciones'}
            </Text>
          </View>
        )}
        { modal && (
          <ScrollableModal visible={modal} options={!postSelected.prop1 ? ['Fijar post'] : ['Quitar post fijo']} onSelectItem={ async (e)=> {
           if(e == 'Fijar post'){
            axiosInstance.patch(`post/${postSelected.id}`,{prop1:{pined:true}})
      
           }
           if(e == 'Quitar post fijo'){
            axiosInstance.patch(`post/${postSelected.id}`,{prop1:null})
       
           }
          dispatch(getAllPosts())
          }
           } closeModal={()=> setModal(false)}></ScrollableModal>
        )}
      </View>
    </ScrollView>
  )
}
const screenWidth = Dimensions.get('window').width
const itemSize = (screenWidth * 0.9 - 6) / 3
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
    height: itemSize + 15,
    alignSelf: 'stretch',
    width: itemSize,
    overflow: 'hidden'
  }
})

export default Feed
