import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  Border,
  FontSize,
  Color,
  Padding
} from '../../GlobalStyles'
import TusMatchsDetalle from '../TusMatchsDetalle'
import { useSelector, useDispatch } from 'react-redux'
import {
  getAllMatchs,
  getClubMatchs,
  getUserMatchs
} from '../../redux/actions/matchs'
import axiosInstance from '../../utils/apiBackend'
import { Context } from '../../context/Context'
import TusMatchsDetalle1 from '../TusMatchsDetalle1'

const TusMatchs = () => {
  const [matchsData, setMatchsData] = useState([])
  const [selectedClubDetails, setSelectedClubDetails] = useState({})
  const [selectedUserDetails, setSelectedUserDetails] = useState({})
  const [selectedMatch, setSelectedMatch] = useState({})

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { clubMatches, userMatches, setUserMatches } = useContext(Context)
  const { allUsers, mainColor, user } = useSelector((state) => state.users)

  const images = {
    '#6A1C4F': require('../../assets/6A1C4F.png'),
    '#E1451E': require('../../assets/E1451E.png'),
    '#1FD430': require('../../assets/00FF18.png'),
    '#0062FF': require('../../assets/0062FF.png'),
    '#E1AA1E': require('../../assets/E1AA1E.png'),
    '#A8154A': require('../../assets/A8154A.png'),
    '#00F0FF': require('../../assets/00F0FF.png')
  }

  console.log('maincolor', mainColor)
  const imageSource = images[mainColor] || images['#E1451E']
  useEffect(() => {
    if (user?.user?.type !== 'club') {
      dispatch(getUserMatchs(user?.user?.sportman?.id))
    }
    if (user?.user?.type === 'club') {
      dispatch(getClubMatchs(user?.user?.club.id))
    }
    console.log(
      'clubmatches',
      clubMatches
        .filter((match) => match.status === 'success')
        .reduce(
          (accumulator, current) => {
            const userId = current.prop1.sportManData.userId
            if (!accumulator.seenIds.has(userId)) {
              accumulator.seenIds.add(userId)
              accumulator.filteredArray.push(current)
            }
            return accumulator
          },
          { seenIds: new Set(), filteredArray: [] }
        ).filteredArray
    )
  }, [])

  const [details, setDetails] = useState(false)
  const [userDetails, setUserDetails] = useState(false)
  const [search, setSearch] = useState('')

  // const getOfferData = async (id) => {
  //   const { data } = await axiosInstance.get(`offer/${id}`)
  //   console.log('data from getOfferData', data)
  //   setMatchsData([...matchsData, data])
  // }

  // const getMatchData = async (id) => {
  //   const { data } = await axiosInstance.get(`match/${id}`)
  //   getOfferData(data?.offer?.id)
  // }

  // useEffect(() => {
  //   if (userMatches?.length > 0) {
  //     userMatches.forEach((match) => {
  //       getMatchData(match?.id)
  //     })
  //   }
  // }, [])

  console.log(userMatches, clubMatches, 'MATCHES')

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 50 }}
      style={styles.tusMatchs}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        style={{
          marginBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          marginTop: 25,
          justifyContent: 'flex-start'
        }}
      >
        <Image
          style={{ width: 9, height: 15, marginTop: 2.5 }}
          contentFit="cover"
          source={require('../../assets/coolicon3.png')}
        />

        <Text
          style={{
            color: '#fff',
            fontWeight: '500',
            fontSize: 22,
            fontFamily: FontFamily.t4TEXTMICRO
          }}
        >
          Tus Matchs
        </Text>
      </TouchableOpacity>

      <View style={[styles.groupContainer, styles.groupContainerSpaceBlock]}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require('../../assets/group-428.png')}
        />
        <TextInput
          style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo]}
          placeholderTextColor={Color.gREY2SPORTSMATCH}
          placeholder="Buscar"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <Text style={[styles.nuevosMatchs, styles.buscarTypo]}>
        Nuevos matchs
      </Text>

      {user?.user?.type === 'sportman' && (
        <View>
          {user?.user?.matches
            ?.filter(
              (match) =>
                match.status === 'success' &&
                !user?.user?.banned?.includes(match?.club?.user?.id) &&
                match?.club?.name?.toLowerCase().includes(search.toLowerCase()) // Filtrar por nombre del club
            )
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((match, index) => (
              <View key={index} style={{ marginTop: 14, width: '100%' }}>
                <Pressable
                  onPress={() => {
                    setDetails(true)
                    setSelectedClubDetails(match?.club)
                    setSelectedMatch(match)
                  }}
                  style={styles.fondoPastilla}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={imageSource}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setDetails(true)

                    setSelectedClubDetails(match?.club)
                    setSelectedMatch(match)
                  }}
                  style={styles.texto}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 15,
                      marginTop: 9,
                      marginLeft: 15,
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 50 }}
                      contentFit="cover"
                      source={
                        match?.club?.img_perfil
                          ? { uri: match?.club?.img_perfil }
                          : require('../../assets/whiteSport.png')
                      }
                    />
                    <Text style={styles.clubBasquetLametlla}>
                      {match?.club?.name}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
        </View>
      )}

      {user?.user?.type === 'sportman' &&
        user.user.matches
          .filter((match) => {
            if (search.length > 0) {
              if (
                match.user?.club?.name
                  ?.toLowerCase()
                  .includes(search?.toLowerCase())
              ) {
                return true
              } else {
                return false
              }
            } else {
              return true
            }
          })
          .filter((match) => match.status === 'success').length === 0 && (
          <View>
            <Text
              style={{
                fontSize: 14,
                marginTop: 40,
                color: Color.wHITESPORTSMATCH,
                fontWeight: '400',
                alignSelf: 'center',
                textAlign: 'left',
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {search?.length > 0
                ? 'No encontramos matchs relacionados con su búsqueda.'
                : '¡Aún no tienes matchs!'}
            </Text>
          </View>
        )}

      {user?.user?.type === 'club' && (
        <View>
          {user.user.club.matches
            .filter(
              (match) =>
                match.status === 'success' &&
                !user?.user?.banned?.includes(match?.user?.id) &&
                match?.user?.sportman?.info?.nickname
                  ?.toLowerCase()
                  .includes(search.toLowerCase()) // Filtrar por nombre del jugador
            )
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((match, index) => (
              <View key={index} style={{ marginTop: 14, width: '100%' }}>
                <Pressable
                  onPress={() => {
                    console.log(match?.user?.club?.user, 'matchhhhhhhhhhhh')
                    setUserDetails(true)

                    setSelectedMatch(match)
                    setSelectedUserDetails(match?.user)
                  }}
                  style={styles.fondoPastilla}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={imageSource}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setUserDetails(true)
                    setSelectedMatch(match)

                    setSelectedUserDetails(match?.user)
                  }}
                  style={styles.texto}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 15,
                      marginTop: 9,
                      marginLeft: 15,
                      height: '100%',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 50 }}
                      contentFit="cover"
                      source={
                        match?.user?.sportman?.info?.img_perfil
                          ? { uri: match?.user?.sportman?.info?.img_perfil }
                          : require('../../assets/whiteSport.png')
                      }
                    />
                    <Text style={styles.clubBasquetLametlla}>
                      {match?.user?.sportman?.info?.nickname}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
        </View>
      )}

      {user?.user?.type === 'club' &&
        user?.user?.club?.matches
          .filter((match) => {
            if (search.length > 0) {
              if (
                match?.user?.sportman?.info?.nickname?.nickname
                  ?.toLowerCase()
                  .includes(search?.toLowerCase())
              ) {
                return true
              } else {
                return false
              }
            } else {
              return true
            }
          })
          .filter((match) => match.status === 'success').length === 0 && (
          <View>
            <Text
              style={{
                fontSize: 14,
                marginTop: 40,
                color: Color.wHITESPORTSMATCH,
                fontWeight: '400',
                alignSelf: 'center',
                textAlign: 'left',
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {search?.length > 0
                ? 'No encontramos matchs relacionados con su búsqueda.'
                : '¡Aún no tienes matchs!'}
            </Text>
          </View>
        )}

      <Modal
        visible={details}
        transparent={true}
        onRequestClose={() => setDetails(false)}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={() => setDetails(false)}>
          <View
            style={{
              flex: 1
            }}
          >
            <TusMatchsDetalle
              data={selectedClubDetails}
              match={selectedMatch}
              onClose={() => setDetails(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        visible={userDetails}
        onRequestClose={() => setUserDetails(false)}
        transparent={true}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={() => setUserDetails(false)}>
          <View
            style={{
              flex: 1
            }}
          >
            <TusMatchsDetalle1
              match={selectedMatch}
              data={selectedUserDetails}
              onClose={() => setUserDetails(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buscarTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupContainer: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderStyle: 'solid',
    flexDirection: 'row'
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs
  },
  posicnDeJuego: {
    marginLeft: 6,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  posicnDeJuegoTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  iconGroupLayout: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  groupChildLayout: {
    borderRadius: Border.br_81xl,
    height: '100%'
  },
  tusMatchs2Typo: {
    fontSize: 16,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500'
  },
  nuevosMatchs: {
    fontSize: FontSize.button_size,
    marginTop: 20,
    marginBottom: 15,
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  iconLayout: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  fondoPastilla: {
    height: 85,
    zIndex: 0
  },
  escudoChild: {
    height: '100%',
    width: '100%'
  },
  logoUem21RemovebgPreview1Icon: {
    width: '90%',
    height: '90%',
    right: '10%',
    left: '10%',
    top: '10%',
    position: 'absolute',
    zIndex: 1
  },
  escudo: {
    width: 45,
    height: 45
  },
  clubBasquetLametlla: {
    fontSize: 17,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500'
  },
  texto: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -30 }]
  },
  icon1: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 18
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: 'absolute'
  },
  tusMatchs: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    alignItems: 'center',
    gap: 10
  }
})

export default TusMatchs
