import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  Modal,
  TouchableOpacity
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
import { getClubMatchs, getUserMatchs } from '../../redux/actions/matchs'
import axiosInstance from '../../utils/apiBackend'
import { Context } from '../../context/Context'

const TusMatchs = () => {
  const [matchsData, setMatchsData] = useState([])
  const [selectedClubDetails, setSelectedClubDetails] = useState()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { clubMatches } = useContext(Context)
  const { userMatchs } = useSelector((state) => state.matchs)

  useEffect(() => {
    if (user.user.type !== 'club') {
      dispatch(getUserMatchs(user.user.sportman?.id))
    }
    if (user.user.type === 'club') {
      dispatch(getClubMatchs(user.user.club.id))
    }
  }, [])

  const [details, setDetails] = useState(false)

  console.log('useramtchs: ', userMatchs)
  console.log('clubMatchs', clubMatches)

  const getOfferData = async (id) => {
    const { data } = await axiosInstance.get(`offer/${id}`)
    console.log('data from getOfferData', data)
    setMatchsData([...matchsData, data])
  }

  const getMatchData = async (id) => {
    const { data } = await axiosInstance.get(`match/${id}`)
    getOfferData(data?.offer?.id)
  }

  useEffect(() => {
    if (userMatchs?.length > 0) {
      userMatchs.forEach((match) => {
        getMatchData(match?.id)
      })
    }
  }, [])

  const { user } = useSelector((state) => state.users)

  return (
    <View style={styles.tusMatchs}>
      <View
        style={{
          marginBottom: 42,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          justifyContent: 'flex-start'
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 9, height: 15, marginTop: 2.5 }}
            contentFit="cover"
            source={require('../../assets/coolicon3.png')}
          />
        </TouchableOpacity>
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
      </View>

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
        />
      </View>

      <Text style={[styles.nuevosMatchs, styles.buscarTypo]}>
        Nuevos matchs
      </Text>

      {user?.user?.type === 'sportman' && matchsData.length > 0 && (
        <View>
          {matchsData.map((match, index) => (
            <View key={index} style={styles.targetaClub}>
              <Pressable
                onPress={() => {
                  setDetails(true)
                  setSelectedClubDetails(match.club)
                }}
                style={styles.fondoPastilla}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../../assets/fondo-pastilla.png')}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setDetails(true)
                  setSelectedClubDetails(match.club)
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
                    source={{ uri: match.club.img_perfil }}
                  />
                  <Text style={styles.clubBasquetLametlla}>
                    {match.club.name}
                  </Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      )}

      {user?.user?.type === 'sportman' && matchsData.length === 0 && (
        <View>
          <Text
            style={{
              fontSize: 30,
              marginTop: 40,
              color: Color.wHITESPORTSMATCH,
              fontWeight: '500',
              alignSelf: 'center',
              textAlign: 'left',
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            Aun no tienes matchs!
          </Text>
        </View>
      )}

      {user?.user?.type === 'club' && clubMatches?.length > 0 && (
        <View>
          {clubMatches
            .filter((match) => match.status === 'success')
            .map((match) => (
              <View style={styles.targetaClub}>
                <Pressable style={styles.fondoPastilla}>
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require('../../assets/fondo-pastilla.png')}
                  />
                </Pressable>
                <Pressable
                  style={styles.texto}
                  onPress={() => {
                    setDetails(true)
                  }}
                >
                  <View style={styles.escudo}>
                    {/* <Image
                      style={styles.logoUem21RemovebgPreview1Icon}
                      contentFit="cover"
                      source={require('../../assets/mask-group7.png')}
                    /> */}
                  </View>
                  <Text style={styles.playerName}></Text>
                </Pressable>
              </View>
            ))}
        </View>
      )}

      {user?.user?.type === 'club' && clubMatches?.length === 0 && (
        <View>
          <Text
            style={{
              fontSize: 30,
              marginTop: 40,
              color: Color.wHITESPORTSMATCH,
              fontWeight: '500',
              alignSelf: 'center',
              textAlign: 'left',
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            Aun no tienes matchs!
          </Text>
        </View>
      )}

      <Modal visible={details} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1
          }}
        >
          <TusMatchsDetalle
            data={selectedClubDetails}
            onClose={() => setDetails(false)}
          />
        </View>
      </Modal>
    </View>
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
    height: 42,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderStyle: 'solid',
    flexDirection: 'row',
    marginTop: 30
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
    fontSize: 15,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500'
  },
  playerName: {
    marginLeft: 9,
    fontSize: 19,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    width: '40%',
    height: 50
  },
  texto: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -30 }]
  },
  targetaClub: {
    marginTop: 14,
    width: '100%',
    position: 'relative'
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
