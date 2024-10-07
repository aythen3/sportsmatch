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
  const [filterSelected, setFilterSelected] = useState('')
  const [searchUsers, setSearchUsers] = useState([])
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
    await axiosInstance
      .post('sportman/filter', {
        nickname: textValue
      })
      .then((e) => {
        console.log(e, 'eeee')
        const filter = e.data.filter((e) => e.user.emailCheck)
        setSearchUsers((prev) => [...filter])
      })
    // const position = await axiosInstance.post('sportman/filter', {
    //   position: textValue
    // })
    // setSearchPosition(position.data.filter((e) => e.user.emailCheck))
    // const city = await axiosInstance.post('sportman/filter', {
    //   city: textValue
    // })
    // setSearchCity(city.data.filter((e) => e.user.emailCheck))
    const clubes = await axiosInstance.post('info-entity/club/name/filter', {
      value: textValue
    })
    const fil2 = clubes.data.data
    setSearchUsers((prev) => [...prev, ...fil2])
  }
  const funcion = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(async () => {
      handleSearch(textValue)
    }, 300) // 1000ms = 1 segundo
  }
  useEffect(() => {
    funcion()
  }, [textValue])

  const handleChange = (event) => {
    const textValue = event
    console.log(event, 'valor que no anda')
    setTextValue(textValue)
  }

  const screenWidth = Dimensions.get('window').width
  const widthMio = (screenWidth - 8) / 3
  const RenderGroupedItem = React.memo(function RenderGroupedItem({
    item,
    navigation
  }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flexDirection: 'column',
            width: widthMio,
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
                  isMini={true}
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
              isMini={true}
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
  const ITEM_HEIGHT = (screenWidth - 8) / 3 // Altura de un post
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

  const combinedSearchResults = searchUsers

  const renderItem = ({ item }) => {
    // Si hay texto en la búsqueda, renderizar los usuarios
    if (textValue) {
      const user = item // Asumimos que el item es un usuario
      console.log('itemmmm', item)
      if (!user?.user?.isDelete) {
        return (
          <TouchableOpacity
            style={{ marginVertical: 5 }}
            onPress={() => {
              /* Manejo de la navegación */
              if (user.user.id === usuario.user.id) {
                if (usuario?.user?.type !== 'club') {
                  navigation.navigate('MiPerfil')
                  return
                } else {
                  navigation.navigate('PerfilDatosPropioClub')
                  return
                }
              }
              if (user?.user?.type !== 'club') {
                return navigation.navigate('PerfilFeedVisualitzaciJug', {
                  author: user.user
                })
              } else {
                navigation.navigate('ClubProfile', {
                  author: user.user
                })
                return
              }
            }}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              {user?.info?.img_perfil ? (
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: 'gray' // Color de fondo por defecto
                  }}
                  source={{ uri: user.info.img_perfil }}
                />
              ) : (
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: mainColor // Color de fondo por defecto
                  }}
                  source={require('../../assets/whiteSport.png')}
                />
              )}
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                {user?.info?.nickname || user.name}
              </Text>
            </View>
          </TouchableOpacity>
        )
      }
    } else {
      // Si no hay texto en la búsqueda, renderizar los posts
      return <RenderGroupedItem item={item} navigation={navigation} />
    }
    return null
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
        <FlatList
          data={textValue ? searchUsers : groupedPosts}
          keyExtractor={(item, index) =>
            item?.id ? item?.id?.toString() : index?.toString()
          }
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 140 }}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
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
