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
  Pressable
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

// const Grilla = ({ group, img1, img2, img3 }) => {
//   const navigation = useNavigation()

//   return (
//     <View style={{ width: '100%', height: 320, paddingHorizontal: 2, gap: 6 }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           gap: 7
//         }}
//       >
//         <View
//           style={{
//             flexDirection: 'column',
//             height: '100%',
//             justifyContent: 'space-between'
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               if (group[0].author.type === 'club') {
//                 navigation.navigate('ClubProfile', group[0])
//               } else {
//                 navigation.navigate('PerfilFeedVisualitzaciJug', group[0])
//               }
//             }}
//           >
//             <Image
//               style={styles.iconLayout}
//               contentFit="cover"
//               source={{ uri: group[0]?.image[0] }}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               if (group[1].author.type === 'club') {
//                 navigation.navigate('ClubProfile', group[1])
//               } else {
//                 navigation.navigate('PerfilFeedVisualitzaciJug', group[1])
//               }
//             }}
//           >
//             <Image
//               style={styles.iconLayout}
//               contentFit="cover"
//               source={{ uri: group[1]?.image[0] }}
//             />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           onPress={() => {
//             if (group[2].author.type === 'club') {
//               navigation.navigate('ClubProfile', group[2])
//             } else {
//               navigation.navigate('PerfilFeedVisualitzaciJug', group[2])
//             }
//           }}
//           style={{
//             height: '100%',
//             borderRadius: Border.br_10xs,
//             overflow: 'hidden'
//           }}
//         >
//           <Image
//             style={{
//               width: itemSize2 - 100,
//               height: '100%',
//               objectFit: 'contain'
//             }}
//             contentFit="cover"
//             source={{ uri: group[2]?.image[0] }}
//           />
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           gap: 7
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             if (group[4].author.type === 'club') {
//               navigation.navigate('ClubProfile', group[4])
//             } else {
//               navigation.navigate('PerfilFeedVisualitzaciJug', group[4])
//             }
//           }}
//           style={{
//             height: '100%',
//             borderRadius: Border.br_10xs,
//             overflow: 'hidden'
//           }}
//         >
//           <Image
//             style={{
//               width: itemSize2 - 100,
//               height: '100%',
//               objectFit: 'contain'
//             }}
//             contentFit="cover"
//             source={{ uri: group[4]?.image[0] }}
//           />
//         </TouchableOpacity>
//         <View
//           style={{
//             flexDirection: 'column',
//             height: '100%',
//             justifyContent: 'space-between'
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               if (group[4].author.type === 'club') {
//                 navigation.navigate('ClubProfile', group[4])
//               } else {
//                 navigation.navigate('PerfilFeedVisualitzaciJug', group[4])
//               }
//             }}
//           >
//             <Image
//               style={styles.iconLayout}
//               contentFit="cover"
//               source={{ uri: group[4]?.image[0] }}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               if (group[5].author.type === 'club') {
//                 navigation.navigate('ClubProfile', group[5])
//               } else {
//                 navigation.navigate('PerfilFeedVisualitzaciJug', group[5])
//               }
//             }}
//           >
//             <Image
//               style={styles.iconLayout}
//               contentFit="cover"
//               source={{ uri: group[5]?.image[0] }}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   )
// }

const ExplorarClubs = () => {
  // const navigation = useNavigation()

  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  const { setActiveIcon } = React.useContext(Context)
  React.useEffect(() => {
    setActiveIcon('lens')
  }, [isFocused])
  // const { allUsers } = useSelector((state) => state.users)
  const { allPosts } = useSelector((state) => state.post)
  const {
    mainColor,
    user: usuario,
    allUsers
  } = useSelector((state) => state.users)

  const [searchUsers, setSearchUsers] = useState([])
  const [filterSelected, setFilterSelected] = useState('')

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

  useEffect(() => {
    console.log('CANTIDAD DE POSTS', allPosts.length)
  }, [allPosts])

  const timeoutRef = useRef(null)

  const handleChange = (value) => {
    setTextValue(value)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      handleSearch(value)
    }, 1000) // 1000ms = 1 segundo
  }

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

  const screenWidth = Dimensions.get('window').width
  const renderGroupedItem = ({ item }) => {
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
            item.columnItems.map((columnItem, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Post', columnItem)
                }}
              >
                <Image
                  source={{ uri: columnItem.image[0] }}
                  style={{
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
            onPress={() => {
              navigation.navigate('Post', item.rightItem)
            }}
          >
            <Image
              source={{ uri: item.rightItem.image[0] }}
              style={{
                width: ((screenWidth - 45) / 3) * 2,
                height: ((screenWidth + 5) / 3) * 2,
                borderRadius: 5
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    )
  }

  const renderItem = ({ item, index }) => {
    const isRightItem = index % 3 === 2

    if (isRightItem) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Post', item)
            }}
          >
            <Image
              source={{ uri: item.image[0] }}
              style={{
                width: ((screenWidth - 45) / 3) * 2,
                height: ((screenWidth + 5) / 3) * 2,
                borderRadius: 5
              }}
            />
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View
          style={{
            flexDirection: 'column',
            width: (screenWidth - 8) / 3,
            marginRight: 8
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Post', item)
            }}
          >
            <Image
              source={{ uri: item.image[0] }}
              style={{
                width: '100%',
                height: (screenWidth - 8) / 3,
                marginBottom: 8,
                borderRadius: 5
              }}
            />
          </TouchableOpacity>
        </View>
      )
    }
  }

  const groupedPosts = []

  for (let i = 0; i < allPosts.length; i += 3) {
    groupedPosts.push({
      columnItems: allPosts.slice(i, i + 2),
      rightItem: allPosts[i + 2]
    })
  }

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
                  searchUsers.map((user, i) => (
                    <TouchableOpacity
                      onPress={() => {
                        const actualUser = allUsers.filter(
                          (userr) => userr.id === user.user.id
                        )[0]
                        if (user.user.id === usuario.id) {
                          if (usuario?.user?.type !== 'club') {
                            navigation.navigate('MiPerfil')
                          } else {
                            navigation.navigate('PerfilDatosPropioClub')
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
                        <Image
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: user.info.img_font
                              ? 'transparent'
                              : mainColor
                          }}
                          source={
                            user.info.img_perfil
                              ? {
                                  uri: user.info.img_perfil
                                }
                              : require('../../assets/whiteSport.png')
                          }
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
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: club.img_perfil
                              ? 'transparent'
                              : mainColor
                          }}
                          source={
                            club.img_perfil
                              ? {
                                  uri: club.img_perfil
                                }
                              : require('../../assets/whiteSport.png')
                          }
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
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                          backgroundColor: position.info.img_front
                            ? 'transparent'
                            : mainColor
                        }}
                        source={
                          position.info.img_front
                            ? { uri: position.info.img_front }
                            : require('../../assets/whiteSport.png')
                        }
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
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                          backgroundColor: city.info.img_front
                            ? 'transparent'
                            : mainColor
                        }}
                        source={
                          city.info.img_front
                            ? { uri: city.info.img_front }
                            : require('../../assets/whiteSport.png')
                        }
                      ></Image>

                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: 600
                        }}
                      >
                        {city.info.nickname}2
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
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
            data={groupedPosts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderGroupedItem}
            numColumns={1}
            contentContainerStyle={{ paddingHorizontal: 5, paddingBottom: 140 }}
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
