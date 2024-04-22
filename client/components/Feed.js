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
import { useSelector } from 'react-redux'

const Feed = ({ externalId }) => {
  const [userPosts, setUserPosts] = useState([])
  const { user } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.post)

  useEffect(() => {
    const userId = externalId || user.user.id
    setUserPosts(allPosts.filter((post) => post.author.id === userId))
  }, [])

  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      style={{
        width: '95%',
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
            <TouchableOpacity key={index}>
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
                fontSize: 30,
                fontWeight: '600',
                fontFamily: FontFamily.t4TEXTMICRO,
                color: Color.wHITESPORTSMATCH
              }}
            >
              {externalId ?'El usuario aun no tiene publicaciones' :'No tienes publicaciones'}
            </Text>
          </View>
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
