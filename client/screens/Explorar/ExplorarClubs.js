import React, { useEffect, useRef, useState } from 'react'
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
  FlatList,
  Pressable,
  ActivityIndicator
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
import Thumbnail from '../../components/Thumbnail'

const ExplorarClubs = () => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  const { setActiveIcon } = React.useContext(Context)

  React.useEffect(() => {
    setActiveIcon('lens')
  }, [isFocused])

  const { allPosts } = useSelector((state) => state.post)
  const {
    mainColor,
    user: usuario,
    allUsers
  } = useSelector((state) => state.users)

  const navigation = useNavigation()

  const [modalFilters, setModalFilters] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [posts, setPosts] = useState([])
  const [modalFilterSportman, setModalFilterSportman] = useState(false)
  const [searchUsers, setSearchUsers] = useState([])
  const [filterSelected, setFilterSelected] = useState('')
  const [searchPosition, setSearchPosition] = useState([])
  const [searchCity, setSearchCity] = useState([])
  const [searchClubes, setSearchClubes] = useState([])
  const [groupedPosts, setGroupedPosts] = useState([])
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [loading, setLoading] = useState(false)

  const loadMorePosts = () => {
    if (visiblePosts < allPosts.length) {
      setLoading(true)
      // Simular un retraso de carga
      setTimeout(() => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6)
        setLoading(false)
      }, 1000)
    }
  }

  const [filter, setFilter] = useState({
    gender: '',
    category: '',
    position: '',
    attack: false,
    defense: false,
    speed: false
  })

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  const onFilters = () => {
    setModalFilters(true)
  }

  const timeoutRef = useRef(null)

  const handleSearch = async (textValue) => {
    const users = await axiosInstance.post('sportman/filter', {
      nickname: textValue
    })
    console.log(users, 'usuarios')
    setSearchUsers(users.data.filter((e) => e.user.emailCheck))
    const position = await axiosInstance.post('sportman/filter', {
      position: textValue
    })
    setSearchPosition(position.data.filter((e) => e.user.emailCheck))
    const city = await axiosInstance.post('sportman/filter', {
      city: textValue
    })
    setSearchCity(city.data.filter((e) => e.user.emailCheck))
    const clubes = await axiosInstance.post('info-entity/club/name/filter', {
      value: textValue
    })
    setSearchClubes(clubes.data.data.filter((e) => e.user.emailCheck))
  }

  const handleChange = (value) => {
    console.log(value, 'valor que no anda')
    setTextValue(value)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      handleSearch(value)
    }, 1000) // 1000ms = 1 segundo
  }

  const screenWidth = Dimensions.get('window').width

  const RenderGroupedItem = React.memo(function RenderGroupedItem({
    item,
    navigation
  }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flexDirection: 'column',
            width: (screenWidth - 8) / 3,
            marginRight: 8
          }}
        >
          {item.columnItems &&
            item.columnItems.map((columnItem) => (
              <TouchableOpacity
                key={columnItem.id} // Cambia 'index' por un ID único
                onPress={() => {
                  navigation.navigate('Post', columnItem)
                }}
              >
                <Thumbnail
                  play={false}
                  url={columnItem.image[0]}
                  styles={{
                    width: '100%',
                    height: (screenWidth - 8) / 3,
                    marginBottom: 8,
                    borderRadius: 5
                  }}
                />
              </TouchableOpacity>
            ))}
        </View>
        {item.rightItem && (
          <TouchableOpacity
            style={{ zIndex: 999 }}
            onPress={() => {
              navigation.navigate('Post', item.rightItem)
            }}
          >
            <Thumbnail
              play={false}
              url={item.rightItem.image[0]}
              styles={{
                width: ((screenWidth - 45) / 3) * 2,
                height: ((screenWidth + 5) / 3) * 2,
                borderRadius: 5
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    )
  })

  const posttt = () => {
    const groupedPostsTotal = []
    const postChecked = allPosts.filter(
      (e) =>
        e.author.emailCheck && !usuario?.user?.banned?.includes(e?.author?.id)
    )
    for (let i = 0; i < postChecked.length; i += 3) {
      groupedPostsTotal.push({
        columnItems: postChecked.slice(i, i + 2),
        rightItem: postChecked[i + 2]
      })
    }
    setGroupedPosts(groupedPostsTotal)
  }

  useEffect(() => {
    posttt()
  }, [allPosts])

  console.log('searchClubes', searchClubes)

  return (
    <SafeAreaView style={styles.explorarClubs}>
      <HeaderIcons />

      <FiltersHome
        textValue={textValue}
        setTextValue={handleChange}
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
          <ScrollView
            contentContainerStyle={{ paddingBottom: 120 }}
            style={{ flexDirection: 'column', gap: 10 }}
          >
            {textValue && searchUsers.length > 0 && (
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={{ color: 'white' }}>Usuarios</Text>

                {searchUsers.length > 0 &&
                  searchUsers.map((user, i) => {
                    if (
                      !user?.user?.isDelete &&
                      !usuario?.user?.banned?.includes(user?.user?.id)
                    ) {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            const actualUser = allUsers.filter(
                              (userr) => userr.id === user.user.id
                            )[0]
                            if (user.user.id === usuario.user.id) {
                              if (usuario?.user?.type !== 'club') {
                                navigation.navigate('MiPerfil')
                                return
                              } else {
                                navigation.navigate('PerfilDatosPropioClub')
                                return
                              }
                            }

                            navigation.navigate('PerfilFeedVisualitzaciJug', {
                              author: actualUser
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
                            {user.info.img_perfil ? (
                              <Thumbnail
                                styles={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: user.info.img_font
                                    ? 'transparent'
                                    : mainColor
                                }}
                                url={user.info.img_perfil}
                              ></Thumbnail>
                            ) : (
                              <Image
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: user.info.img_font
                                    ? 'transparent'
                                    : mainColor
                                }}
                                source={require('../../assets/whiteSport.png')}
                                contentFit="cover"
                              />
                            )}
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
                      )
                    }
                  })}
              </View>
            )}
            {textValue && searchClubes.length > 0 && (
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={{ color: 'white', paddingTop: 10 }}>Clubes</Text>
                {searchClubes.length > 0 &&
                  searchClubes.map((club, i) => {
                    if (
                      !club?.user?.isDelete &&
                      !usuario?.user?.banned?.includes(club?.user?.id)
                    ) {
                      return (
                        <TouchableOpacity
                          key={i}
                          onPress={() => {
                            if (usuario.user.id === club.user.id) {
                              navigation.navigate('PerfilDatosPropioClub')
                              return
                            } else {
                              navigation.navigate('ClubProfile', {
                                author: {
                                  type: 'club',
                                  nickname: club.name,
                                  club
                                }
                              })
                            }
                          }}
                        >
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 10
                            }}
                          >
                            {club.img_perfil ? (
                              <Thumbnail
                                styles={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: club.img_perfil
                                    ? 'transparent'
                                    : mainColor
                                }}
                                url={club.img_perfil}
                              />
                            ) : (
                              <Image
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50,
                                  backgroundColor: club.img_perfil
                                    ? 'transparent'
                                    : mainColor
                                }}
                                contentFit="cover"
                                source={require('../../assets/whiteSport.png')}
                              />
                            )}
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
                      )
                    }
                  })}
              </View>
            )}
            {textValue && searchPosition.length > 0 && (
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={{ color: 'white', paddingTop: 10 }}>
                  Posiciones
                </Text>
                {searchPosition.map((position, i) => {
                  if (
                    !position?.user?.isDelete &&
                    !usuario?.user?.banned?.includes(position?.user?.id)
                  ) {
                    return (
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
                          {position.info.img_perfil ? (
                            <Thumbnail
                              styles={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: position.info.img_perfil
                                  ? 'transparent'
                                  : mainColor
                              }}
                              url={position.info.img_perfil}
                            />
                          ) : (
                            <Image
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: position.info.img_perfil
                                  ? 'transparent'
                                  : mainColor
                              }}
                              contentFit="cover"
                              source={require('../../assets/whiteSport.png')}
                            ></Image>
                          )}

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
                    )
                  }
                })}
              </View>
            )}
            {textValue && searchCity.length > 0 && (
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={{ color: 'white', paddingTop: 10 }}>Ciudades</Text>
                {searchCity.map((city, i) => {
                  if (
                    !city?.user?.isDelete &&
                    !usuario?.user?.banned?.includes(city?.user?.id)
                  ) {
                    return (
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
                          {city.info.img_perfil ? (
                            <Thumbnail
                              styles={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: city.info.img_perfil
                                  ? 'transparent'
                                  : mainColor
                              }}
                              url={city.info.img_perfil}
                            />
                          ) : (
                            <Image
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: city.info.img_perfil
                                  ? 'transparent'
                                  : mainColor
                              }}
                              contentFit="cover"
                              source={require('../../assets/whiteSport.png')}
                            ></Image>
                          )}

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
                    )
                  }
                })}
              </View>
            )}
          </ScrollView>
        )}

        {!textValue && allPosts?.length > 0 && (
          <FlatList
            data={groupedPosts.slice(
              0,
              Math.min(visiblePosts, groupedPosts.length)
            )} // Solo muestra los posts visibles
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <RenderGroupedItem item={item} navigation={navigation} />
            )}
            numColumns={1}
            contentContainerStyle={{ paddingHorizontal: 5, paddingBottom: 140 }}
            onEndReached={loadMorePosts} // Llama a la función cuando se alcanza el final
            onEndReachedThreshold={0.1} // Umbral para activar la carga
            ListFooterComponent={
              loading ? <ActivityIndicator size="large" /> : null
            } // Muestra un indicador de carga
          />
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
                posts={groupedPosts}
                setPosts={setGroupedPosts}
                setNormalPost={posttt}
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
    top: 130
  }
})

export default ExplorarClubs
