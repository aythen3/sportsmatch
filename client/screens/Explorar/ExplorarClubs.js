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
import axiosInstance from '../../utils/apiBackend'
import { useNavigation } from '@react-navigation/core'

const ExplorarClubs = () => {
  // const navigation = useNavigation()

  const dispatch = useDispatch()

  // const { allUsers } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.post)
  const [searchUsers, setSearchUsers] = useState([])
  const [searchPosition, setSearchPosition] = useState([])
  const [searchCity, setSearchCity] = useState([])

  const [searchClubes, setSearchClubes] = useState([])
  const [filter, setFilter] = useState({
    gender: "",
    category: "",
    position: "",
    attack: false,
    defense: false,
    speed: false
  })


  const [modalFilters, setModalFilters] = useState(false)
  const [textValue, setTextValue] = useState("")

  const [modalFilterSportman, setModalFilterSportman] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    // dispatch(getAllUsers())
    dispatch(getAllPosts())
    console.log(allPosts, "allpost")
  }, [])

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  const onFilters = () => {
    setModalFilters(true)
  }

  const handleSearch = async () => {
    const users = await axiosInstance.post('sportman/filter', { nickname: textValue })
    setSearchUsers(users.data)
    const position = await axiosInstance.post('sportman/filter', { position: textValue })
    console.log(position.data, "esto es el data")
    setSearchPosition(position.data)
    const city = await axiosInstance.post('sportman/filter', { city: textValue })
    setSearchCity(city.data)
    const clubes = await axiosInstance.post('info-entity/club/name/filter', { value: textValue })
    setSearchClubes(clubes.data.data)
    console.log(clubes, "usuarios estado")

  }

  return (
    <View style={styles.explorarClubs}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <HeaderIcons />

        <FiltersHome
          textValue={textValue}
          setTextValue={setTextValue}
          modalActive={onFilters}
          modalSportmanActive={onFilterSportman}
          action={handleSearch}
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
          {textValue && (
            <View style={{ flexDirection: "column", gap: 10 }}>
              {textValue && searchUsers.length > 0 && (
                <View style={{ flexDirection: "column", gap: 10 }}>
                  <Text style={{ color: "white" }}>Usuarios</Text>

                  {searchUsers.length > 0 && searchUsers.map((user, i) => (
                    <TouchableOpacity onPress={() => navigation.navigate("PerfilFeedVisualitzaciJug", { author: { nickname: user.info.nickname, sportman: user } })} key={i} >
                      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{
                          uri: user.info.img_front
                        }}></Image>
                        <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>{user.info.nickname}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {textValue && searchClubes.length > 0 && (
                <View style={{ flexDirection: "column", gap: 10 }}>
                  <Text style={{ color: "white" }}>Clubes</Text>
                  {searchClubes.length > 0 && searchClubes.map((club, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate("ClubProfile", { author: { type: "club", nickname: club.name, club } })} >
                      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: club.img_perfil }}></Image>
                        <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>{club.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {textValue && searchPosition.length > 0 && (
                <View style={{ flexDirection: "column", gap: 10 }}>
                  <Text style={{ color: "white" }}>Posiciones</Text>
                  {searchPosition.map((position, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate("PerfilFeedVisualitzaciJug", { author: { nickname: position.info.nickname, sportman: position } })} >
                      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: position.info.img_front}}></Image>

                        <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>{position.info.nickname}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {textValue && searchCity.length > 0 && (
                <View style={{ flexDirection: "column", gap: 10 }}>
                  <Text style={{ color: "white" }}>Ciudades</Text>
                  {searchCity.map((city, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate("PerfilFeedVisualitzaciJug", { author: { nickname: city.info.nickname, sportman: city } })}>
                      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: city.info.img_front }}></Image>

                        <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>{city.info.nickname}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          )}
          {!textValue && allPosts?.length > 0 && (
            allPosts?.map((post,
              index) => (
              <TouchableOpacity key={post.id}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={{ uri: post.image[0] }}
                />
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
      <Modal visible={modalFilters} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalFilters(false)}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <ExplorarClubsConFiltroPrem setTextValue={setTextValue} filter={filter} setSearchUsers={setSearchUsers} setFilter={setFilter} onClose={() => setModalFilters(false)} />
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
