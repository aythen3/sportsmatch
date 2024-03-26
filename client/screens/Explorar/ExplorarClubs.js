import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  // Pressable,
  ScrollView,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'
import { Color } from '../../GlobalStyles'
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

        <View style={styles.imgContainer}>
          {/* <View style={styles.imgMap}> */}
          {allPosts.map((post) => (
            <Image
              key={post.id}
              style={styles.image}
              contentFit="cover"
              source={post.image}
            />
          ))}
          {/* </View> */}
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
    gap: 5,
    flexWrap: 'wrap'
  },
  modal: {
    width: 200,
    position: 'absolute',
    right: 10,
    top: 160
  }
})

export default ExplorarClubs
