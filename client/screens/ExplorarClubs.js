import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Border, Color, Padding, FontFamily, FontSize } from '../GlobalStyles'
import HeaderIcons from '../components/HeaderIcons'
import { imgagesMuro } from '../utils/imagesMuro'
import FiltersHome from '../components/FiltersHome'
import ExplorarClubsConFiltroPrem from './ExplorarClubsConFiltroPrem'
import FiltersSportman from '../components/FiltersSportman'
import { getAllUsers } from '../redux/actions/users'
import { getAllPosts } from '../redux/actions/post'

const ExplorarClubs = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { allUsers } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.posts)

  const [modalFilters, setModalFilters] = useState(false)
  const [modalFilterSportman, setModalFilterSportman] = useState(false)

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllPosts())
  }, [])

  console.log(allUsers, allPosts)

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
          <View style={styles.imgMap}>
            {imgagesMuro.map((img) => (
              <Image
                key={img.id}
                style={styles.image}
                contentFit="cover"
                source={img.img}
              />
            ))}
          </View>
          <View style={styles.bigImage}>
            <Pressable
            // onPress={() => navigation.navigate('PerfilFeedVisualitzaciJug')}
            >
              <Image
                style={styles.eachImg}
                contentFit="cover"
                source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
              />
            </Pressable>
            <Pressable
            // onPress={() => navigation.navigate('PerfilFeedVisualitzaciJug')}
            >
              <Image
                style={styles.eachImg}
                contentFit="cover"
                source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
              />
            </Pressable>
            <Pressable
            // onPress={() => navigation.navigate('PerfilFeedVisualitzaciJug')}
            >
              <Image
                style={styles.eachImg}
                contentFit="cover"
                source={require('../assets/nickfithenbuugssofvounsplash-12.png')}
              />
            </Pressable>
          </View>
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
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  image: {
    width: '100%',
    height: 122.5,
    borderRadius: 3
  },
  eachImg: {
    width: '100%',
    height: 250,
    borderRadius: 3
  },
  imgContainer: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 5
  },
  imgMap: {
    flexDirection: 'column',
    width: '30%',
    gap: 5
  },
  bigImage: {
    width: '70%',
    gap: 5
  },
  modal: {
    width: 200,
    position: 'absolute',
    right: 10,
    top: 160
  }
})

export default ExplorarClubs
