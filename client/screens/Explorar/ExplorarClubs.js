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

const Grilla = ({ group, img1, img2, img3 }) => {

  return (
    <View style={{ width: "100%", height: 320, paddingHorizontal: 2, gap: 6 }}>
      <View style={{
        flexDirection: "row", 
        alignItems: "center", gap: 7
      }} >
          <View style={{ flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <TouchableOpacity >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[0].image[0] }}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[1].image[0] }}
            />
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={{ height: "100%", borderRadius: Border.br_10xs, overflow: "hidden" }} >
          <Image
            style={{ width: itemSize2 - 100, height: "100%", objectFit: "contain" }}
            contentFit="cover"
            source={{ uri: group[2].image[0] }}
          />
        </TouchableOpacity>
      

      </View>
      <View style={{
        flexDirection: "row", 
        alignItems: "center", gap: 7
      }} >
      {  group[3]?.image[0] && (
         <TouchableOpacity style={{ height: "100%", borderRadius: Border.br_10xs, overflow: "hidden" }} >
         <Image
           style={{ width: itemSize2 - 100, height: "100%", objectFit: "contain" }}
           contentFit="cover"
           source={{ uri: group[3]?.image[0] ? group[3].image[0] : "" }}
         />
       </TouchableOpacity>
      )}
       
        <View style={{ flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <TouchableOpacity >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[4]?.image[0] }}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={{ uri: group[5].image[0] }}
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


  const additionalPosts = [
    {
      author: { id: '02df097b-c6ce-49ac-9ea5-90c49b562ddc', createdAt: '2024-04-19T16:34:41.933Z', updatedAt: '2024-04-22T03:24:25.033Z', isDelete: false, nickname: 'Club Atletico', email: 'club@prueba.com', stripeId: 'cus_PxEs6GWOOaPYjv', type: 'club', plan: 'basic', prop1: null },
      authorType: "club",
      commentCount: 0,
      createdAt: "2024-04-19T16:36:52.120Z",
      description: "Post Club",
      id: "76d9176e-28d7-469d-9f18-bdcb406c25db",
      image: ['https://res.cloudinary.com/dnewfuuv0/image/upload/v1713544603/ccygkzbus7w6qnyifvem.webp'],
      isDelete: false,
      likes: 0,
      prop1: null,
      prop2: null,
      prop3: null,
      prop4: null,
      updatedAt: "2024-04-19T16:36:52.120Z"
    },
    {
      id: '5c885a54-e644-481b-9945-744028418b9f',
      createdAt: '2024-04-19T20:20:07.510Z',
      updatedAt: '2024-04-19T20:20:07.510Z',
      isDelete: false,
      image: ['https://example.com/image1.jpg'],
      description: 'Basquet',
      likes: 0,
      commentCount: 0,
      prop1: null,
      prop2: null,
      // Agrega más propiedades según sea necesario
    },
    {
      id: '08adc97c-34a6-43c8-b47b-237156aa6f15',
      createdAt: '2024-04-19T20:21:04.837Z',
      updatedAt: '2024-04-19T20:21:09.967Z',
      isDelete: false,
      image: ['https://example.com/image2.jpg'],
      description: 'Post',
      likes: 1,
      commentCount: 0,
      prop1: null,
      prop2: null,
      // Agrega más propiedades según sea necesario
    },
    {
      id: '6ea10d74-ab12-4ea6-9119-0c3be30ad947',
      createdAt: '2024-04-19T21:12:29.927Z',
      updatedAt: '2024-04-19T22:55:06.918Z',
      isDelete: false,
      image: ['https://example.com/image3.jpg'],
      description: 'Club',
      likes: 2,
      commentCount: 0,
      prop1: null,
      prop2: null,
      // Agrega más propiedades según sea necesario
    },
    {
      id: '1e2e38a7-fa10-45cd-8d75-7d7b31a78552',
      createdAt: '2024-04-20T12:58:10.778Z',
      updatedAt: '2024-04-22T04:21:43.059Z',
      isDelete: false,
      image: ['https://example.com/image4.jpg'],
      description: 'Descripción',
      likes: 2,
      commentCount: 3,
      prop1: null,
      prop2: null,
      // Agrega más propiedades según sea necesario
    },
    {
      id: '6177bf8f-2ced-4830-913d-d43ffd30ed41',
      createdAt: '2024-04-22T20:17:50.960Z',
      updatedAt: '2024-04-22T20:17:50.960Z',
      isDelete: false,
      image: ['https://example.com/image5.jpg'],
      description: 'Match',
      likes: 0,
      commentCount: 0,
      prop1: null,
      prop2: null,
      // Agrega más propiedades según sea necesario
    }
  ];

  // Combinamos los objetos originales y adicionales
  const allPosts2 = [...allPosts,...additionalPosts];

  // Ahora dividimos el array en grupos de 6
  const groupedPosts = [];
  for (let i = 0; i < allPosts2.length; i += 6) {
    groupedPosts.push(allPosts2.slice(i, i + 6));
  }

  console.log(groupedPosts, "grupos");

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
                        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: position.info.img_front }}></Image>

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
          {/* {!textValue && allPosts?.length > 0 && (
            groupedPosts[0].map((post,
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
          {!textValue && groupedPosts?.length > 0 && (
            groupedPosts.map((group,
              index) => {
                if(group.length === 6){
                  return(
                    <Grilla group={group}></Grilla>
                  )
                }
              })
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
      >
        <TouchableWithoutFeedback onPress={() => setModalFilterSportman(false)}>

         <View style={{flex:1}}>
           <View style={styles.modal}>
             <FiltersSportman onClose={() => setModalFilterSportman(false)} />
           </View>
         </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
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
    height: itemSize + 35,
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
