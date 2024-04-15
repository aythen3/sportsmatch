import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  // Pressable,
  Text,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'
import { Border, Color, FontFamily } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import FiltersHome from '../../components/FiltersHome'
import ExplorarClubsConFiltroPrem from './ExplorarClubsConFiltroPrem'
import FiltersSportman from '../../components/FiltersSportman'
// import { getAllUsers } from '../redux/actions/users'
import { getAllPosts } from '../../redux/actions/post'

const ExplorarClubs = () => {
  // const navigation = useNavigation()

  const dispatch = useDispatch()

  // const { allUsers } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.post)

  const [modalFilters, setModalFilters] = useState(false)
  const [modalFilterSportman, setModalFilterSportman] = useState(false)

  useEffect(() => {
    // dispatch(getAllUsers())
    dispatch(getAllPosts())
  }, [])

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  const onFilters = () => {
    setModalFilters(true)
  }

  return (
    <View style={styles.explorarClubs}>
      <ScrollView>
        <HeaderIcons />

        <FiltersHome
          modalActive={onFilters}
          modalSportmanActive={onFilterSportman}
        />

        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            marginTop: 15,
            justifyContent: 'flex-start',
            gap: 10,
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          {allPosts?.length > 0 ? (
            allPosts?.map((post, index) => (
              <TouchableOpacity key={post.id}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={{ uri: post.image[0] }}
                />
              </TouchableOpacity>
            ))
          ) : (
            <View
              style={{ marginTop: 30, width: '100%', alignItems: 'center' }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '600',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  color: Color.wHITESPORTSMATCH
                }}
              >
                No hay publicaciones!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Modal visible={modalFilters} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalFilters(false)}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <ExplorarClubsConFiltroPrem onClose={() => setModalFilters(false)} />
      </Modal>

      <Modal
        visible={modalFilterSportman}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modal}>
          <FiltersSportman onClose={() => setModalFilterSportman(false)} />
        </View>
      </Modal>
    </View>
  )
}

const screenWidth = Dimensions.get('window').width
const itemSize = (screenWidth * 0.9 - 6) / 3

const styles = StyleSheet.create({
  explorarClubs: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  image: {
    width: 116,
    height: 116,
    borderRadius: 3
  },
  imgContainer: {
    marginTop: 15,
    flexDirection: 'row',
    aligse: 'center',
    borderWidth: 2,
    borderColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flexWrap: 'wrap'
  },
  iconLayout: {
    borderRadius: Border.br_10xs,
    height: itemSize + 15,
    alignSelf: 'stretch',
    width: itemSize,
    overflow: 'hidden'
  },
  modal: {
    width: 200,
    position: 'absolute',
    right: 10,
    top: 160
  }
})

export default ExplorarClubs
