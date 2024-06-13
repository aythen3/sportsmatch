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
  TouchableOpacity,
  FlatList
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
import { useIsFocused, useNavigation } from '@react-navigation/core'
import { Context } from '../../context/Context'
import { SafeAreaView } from 'react-native-safe-area-context'

const Grilla = ({ group, img1, img2, img3 }) => {
  const navigation = useNavigation()

  return (
    <View style={{ width: '100%', height: 320, paddingHorizontal: 2, gap: 6 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 7
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (group[0].author.type === 'club') {
                navigation.navigate('ClubProfile', group[0])
              } else {
                navigation.navigate('PerfilFeedVisualitzaciJug', group[0])
              }
            }}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[0]?.image[0] }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (group[1].author.type === 'club') {
                navigation.navigate('ClubProfile', group[1])
              } else {
                navigation.navigate('PerfilFeedVisualitzaciJug', group[1])
              }
            }}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[1]?.image[0] }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (group[2].author.type === 'club') {
              navigation.navigate('ClubProfile', group[2])
            } else {
              navigation.navigate('PerfilFeedVisualitzaciJug', group[2])
            }
          }}
          style={{
            height: '100%',
            borderRadius: Border.br_10xs,
            overflow: 'hidden'
          }}
        >
          <Image
            style={{
              width: itemSize2 - 100,
              height: '100%',
              objectFit: 'contain'
            }}
            contentFit="cover"
            source={{ uri: group[2]?.image[0] }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 7
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (group[4].author.type === 'club') {
              navigation.navigate('ClubProfile', group[4])
            } else {
              navigation.navigate('PerfilFeedVisualitzaciJug', group[4])
            }
          }}
          style={{
            height: '100%',
            borderRadius: Border.br_10xs,
            overflow: 'hidden'
          }}
        >
          <Image
            style={{
              width: itemSize2 - 100,
              height: '100%',
              objectFit: 'contain'
            }}
            contentFit="cover"
            source={{ uri: group[4]?.image[0] }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (group[4].author.type === 'club') {
                navigation.navigate('ClubProfile', group[4])
              } else {
                navigation.navigate('PerfilFeedVisualitzaciJug', group[4])
              }
            }}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[4]?.image[0] }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (group[5].author.type === 'club') {
                navigation.navigate('ClubProfile', group[5])
              } else {
                navigation.navigate('PerfilFeedVisualitzaciJug', group[5])
              }
            }}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[5]?.image[0] }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const ExplorarClubs = () => {
  // const navigation = useNavigation()

  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  const {setActiveIcon} = React.useContext(Context)
  React.useEffect(() => {
    setActiveIcon("lens")
  }, [isFocused])
  // const { allUsers } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.post)
  const [searchUsers, setSearchUsers] = useState([])
  const [filterSelected, setFilterSelected] = useState("")

  const [searchPosition, setSearchPosition] = useState([])
  const [searchCity, setSearchCity] = useState([])

  const [searchClubes, setSearchClubes] = useState([])
  const [filter, setFilter] = useState({
    gender: '',
    category: '',
    position: '',
    attack: false,
    defense: false,
    speed: false
  })

  const [modalFilters, setModalFilters] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [posts, setPosts] = useState([])

  const [modalFilterSportman, setModalFilterSportman] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    // dispatch(getAllUsers())
    dispatch(getAllPosts())
    // console.log(allPosts, 'allpost')
  }, [])

  useEffect(() => {
    setPosts(allPosts)
  }, [allPosts])

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  const onFilters = () => {
    setModalFilters(true)
  }

  const handleSearch = async () => {
    const users = await axiosInstance.post('sportman/filter', {
      nickname: textValue
    })
    setSearchUsers(users.data)
    const position = await axiosInstance.post('sportman/filter', {
      position: textValue
    })
    // console.log(position.data, 'esto es el data')
    setSearchPosition(position.data)
    const city = await axiosInstance.post('sportman/filter', {
      city: textValue
    })
    setSearchCity(city.data)
    const clubes = await axiosInstance.post('info-entity/club/name/filter', {
      value: textValue
    })
    setSearchClubes(clubes.data.data)
    // console.log(clubes, 'usuarios estado')
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.author.type === 'club') {
            navigation.navigate('Post', item)
          } else {
            navigation.navigate('Post', item)
          }
        }}
        style={{ width: '100%', flex: 2 }}
        key={index}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={{ uri: item.image[0] }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.explorarClubs}>
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
            width: '100%',
            marginTop: 15,
            paddingHorizontal: 10,
            paddingBottom: 20,
            gap: 10,
            flexDirection: 'column'
          }}
        >
          {textValue && (
            <View style={{ flexDirection: 'column', gap: 10 }}>
              {textValue && searchUsers.length > 0 && (
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  <Text style={{ color: 'white' }}>Usuarios</Text>

                  {searchUsers.length > 0 &&
                    searchUsers.map((user, i) => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('PerfilFeedVisualitzaciJug', {
                            author: {
                              nickname: user.info.nickname,
                              sportman: user
                            }
                          })
                        }}
                        key={i}
                      >
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10
                          }}
                        >
                          <Image
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                            source={{
                              uri: user.info.img_front
                            }}
                          ></Image>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 16,
                              fontWeight: 600
                            }}
                          >
                            {user.info.nickname}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                </View>
              )}
              {textValue && searchClubes.length > 0 && (
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  <Text style={{ color: 'white' }}>Clubes</Text>
                  {searchClubes.length > 0 &&
                    searchClubes.map((club, i) => (
                      <TouchableOpacity
                        key={i}
                        onPress={() => {
                          navigation.navigate('ClubProfile', {
                            author: { type: 'club', nickname: club.name, club }
                          })
                        }}
                      >
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10
                          }}
                        >
                          <Image
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                            source={{ uri: club.img_perfil }}
                          ></Image>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 16,
                              fontWeight: 600
                            }}
                          >
                            {club.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                </View>
              )}
              {textValue && searchPosition.length > 0 && (
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  <Text style={{ color: 'white' }}>Posiciones</Text>
                  {searchPosition.map((position, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        navigation.navigate('PerfilFeedVisualitzaciJug', {
                          author: {
                            nickname: position.info.nickname,
                            sportman: position
                          }
                        })
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 10
                        }}
                      >
                        <Image
                          style={{ width: 50, height: 50, borderRadius: 50 }}
                          source={{ uri: position.info.img_front }}
                        ></Image>

                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 600
                          }}
                        >
                          {position.info.nickname}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {textValue && searchCity.length > 0 && (
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  <Text style={{ color: 'white' }}>Ciudades</Text>
                  {searchCity.map((city, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        navigation.navigate('PerfilFeedVisualitzaciJug', {
                          author: {
                            nickname: city.info.nickname,
                            sportman: city
                          }
                        })
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 10
                        }}
                      >
                        <Image
                          style={{ width: 50, height: 50, borderRadius: 50 }}
                          source={{ uri: city.info.img_front }}
                        ></Image>

                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 600
                          }}
                        >
                          {city.info.nickname}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          )}
          {/* {!textValue && allPosts?.length > 0 && (
            allPosts.map((post,
              index) => (
              <TouchableOpacity key={post.id}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={{ uri: post.image[0] }}
                />
              </TouchableOpacity>
            ))
          )} */}
          {/* {!textValue && groupedPosts?.length > 0 && (
            groupedPosts.map((group,
              index) => {
              if (group.length === 6) {
                return (
                  <Grilla group={group}></Grilla>
                )
              }
            })
          )} */}
          {!textValue && allPosts?.length > 0 && (
            <FlatList
              data={posts}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              numColumns={3}
              
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 10,
                gap: 10
              }}
              contentContainerStyle={{ paddingHorizontal: 5 , paddingBottom:140 }}
            ></FlatList>
          )}
        </View>
      <Modal visible={modalFilters} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalFilters(false)}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <ExplorarClubsConFiltroPrem
          setTextValue={setTextValue}
          filter={filter}
          setSearchUsers={setSearchUsers}
          setFilter={setFilter}
          onClose={() => setModalFilters(false)}
        />
      </Modal>

      <Modal visible={modalFilterSportman} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setModalFilterSportman(false)}>
          <View style={{ flex: 1 }}>
            <View style={styles.modal}>
              <FiltersSportman
              setFilterSelected={setFilterSelected}
              filterSelected={filterSelected}
                posts={posts}
                setPosts={setPosts}
                allPosts={allPosts}
                onClose={() => setModalFilterSportman(false)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  )
}

const screenWidth = Dimensions.get('window').width
const itemSize = (screenWidth * 0.9 - 6) / 3
const itemSize2 = (screenWidth * 0.9 - 6) / 1

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
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flexWrap: 'wrap'
  },
  iconLayout: {
    borderRadius: Border.br_10xs,
    height: 140,
    alignSelf: 'stretch',
    width: '100%',
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
