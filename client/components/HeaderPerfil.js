import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import * as ImagePicker from 'expo-image-picker'
import FeedSVG from './svg/FeedSVG'
import StatsSVG from './svg/StatsSVG'
import axiosInstance from '../utils/apiBackend'
import { Context } from '../context/Context'

const HeaderPerfil = ({
  name,
  description,
  button1,
  button2,
  setSelectComponents,
  selectComponents,
  club,
  myPerfil,
  position,
  sport,
  front,
  avatar,
  data,
  external
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { isSportman, user } = useSelector((state) => state.users)
  const [clubOffers, setClubOffers] = useState([])
  const { clubMatches, userMatches } = useContext(Context)

  const getOffersById = async (id) => {
    console.log('id from getoffers: ', id)
    const { data } = await axiosInstance.get('offer')
    const filteredOffers = data.filter((offer) => offer.club.id === id)
    setClubOffers(filteredOffers)
  }

  useEffect(() => {
    if (external) {
      if (data.author.type === 'club') {
        getOffersById(data.author.club.id)
      }
    }
    if (!external) {
      if (!isSportman) {
        getOffersById(user.user.club.id)
      }
    }
  }, [])

  console.log('clubMatches', clubMatches)

  return (
    <View>
      <TouchableOpacity>
        <Image
          style={styles.imgFront}
          contentFit="cover"
          source={{ uri: front }}
        />
      </TouchableOpacity>
      <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
        <View style={styles.circleAvatar}>
          {isSportman ? (
            <Image
              style={styles.perfilFeedVisualitzaciCluItem}
              contentFit="cover"
              source={{ uri: avatar }}
            />
          ) : (
            <Image
              style={styles.perfilFeedVisualitzaciCluItem}
              contentFit="cover"
              source={{ uri: avatar }}
            />
          )}
        </View>
        <View>
          <Text
            style={[styles.jordiEspeltPvotBaloncesto, styles.jugandoAlUniTypo]}
          >
            {name}
          </Text>
          {position && (
            <Text
              style={[
                styles.jordiEspeltPvotBaloncesto,
                styles.jugandoAlUniTypo
              ]}
            >
              {position}
            </Text>
          )}
          {sport && (
            <Text
              style={[
                styles.jordiEspeltPvotBaloncesto,
                styles.jugandoAlUniTypo
              ]}
            >
              {sport}
            </Text>
          )}
          <Text style={[styles.description, styles.seguidoresLayout]}>
            {description}
          </Text>
        </View>
      </View>

      {/* ================================================================= */}
      {/* ========================== EXTERNAL ============================= */}
      {/* ================================================================= */}
      {external && data.author.type !== 'club' ? (
        <View style={styles.groupContainer}>
          {!isSportman ? (
            <View style={styles.leftButton}>
              <Image
                style={{ ...styles.frameChild, marginRight: 10 }}
                contentFit="cover"
                source={require('../assets/group-5361.png')}
              />
              <Text style={[styles.ojear, styles.timeTypo]}>Ojear</Text>
            </View>
          ) : (
            <Pressable style={styles.leftButton}>
              <Text style={[styles.ojear, styles.timeTypo]}>{'Seguir'}</Text>
            </Pressable>
          )}
          {!isSportman &&
          clubMatches.filter(
            (match) => match.prop1.sportmanId === data.author.sportman.id
          ).length === 0 ? (
            <Pressable
              style={{
                flexDirection: 'row',
                backgroundColor: '#7B2610',
                borderRadius: Border.br_81xl,
                height: 35,
                width: 170,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginRight: 40,
                  width: '100%',
                  textAlign: 'right',
                  fontSize: FontSize.t2TextSTANDARD_size,
                  color: '#E1451E',
                  fontSize: FontSize.t2TextSTANDARD_size,
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: '700'
                }}
              >
                {'Pedir match'}
              </Text>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Color.bALONCESTO,
                  position: 'absolute',
                  left: 0
                }}
              >
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require('../assets/group13.png')}
                />
              </View>
            </Pressable>
          ) : !isSportman &&
            clubMatches.filter(
              (match) => match.prop1.sportmanId === data.author.sportman.id
            ).length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChatAbierto1', {
                  receiverId: data.author.id,
                  receiverName: data.author.nickname,
                  profilePic: avatar
                })
              }
              style={styles.leftButton}
            >
              <Text style={[styles.ojear, styles.timeTypo]}>
                Enviar mensaje
              </Text>
            </TouchableOpacity>
          ) : (
            <Pressable
              style={{
                flexDirection: 'row',
                backgroundColor: button2
                  ? Color.colorDimgray_100
                  : Color.colorWhitesmoke,
                borderRadius: Border.br_81xl,
                height: 35,
                width: 170,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() =>
                navigation.navigate('ChatAbierto1', {
                  receiverId: data.author.id,
                  receiverName: data.author.nickname,
                  profilePic: avatar
                })
              }
            >
              <Text
                style={[
                  button2 ? styles.ojear : styles.ojear2,
                  styles.timeTypo
                ]}
              >
                {'Enviar mensaje'}
              </Text>
            </Pressable>
          )}
        </View>
      ) : (
        external &&
        data.author.type === 'club' && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChatAbierto1', {
                receiverId: data.author.id,
                receiverName: data.author.nickname,
                profilePic: avatar
              })
            }
            style={{
              flexDirection: 'row',
              marginTop: 10,
              backgroundColor: Color.colorDimgray_100,
              borderRadius: Border.br_81xl,
              height: 35,
              width: '95%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={[styles.ojear, styles.timeTypo]}>Mensaje</Text>
          </TouchableOpacity>
        )
      )}
      {/* ================================================================= */}
      {/* ================== CLUB DATA EXTERNAL OR NOT ==================== */}
      {/* ================================================================= */}
      {external && data.author.type === 'club' && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'center',
            marginTop: 10
          }}
        >
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: '#E1451E', fontSize: 27, fontWeight: 500 }}>
              {data.author.club.year}
            </Text>
            <Text
              style={{
                color: '#E1451E',
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Fundación
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: '#E1451E', fontSize: 27, fontWeight: 500 }}>
              {data.author.club.capacity}
            </Text>
            <Text
              style={{
                color: '#E1451E',
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Aforo
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: '#E1451E', fontSize: 27, fontWeight: 500 }}>
              {clubOffers?.length}
            </Text>
            <Text
              style={{
                color: '#E1451E',
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Nº ofertas
            </Text>
          </View>
        </View>
      )}
      {/* ================================================================= */}
      {/* ===================== CLUB/USER PROFILE ========================= */}
      {/* ================================================================= */}
      {!external && (
        <View style={styles.groupContainer}>
          <Pressable
            style={styles.leftButton}
            onPress={() => {
              if (!external) {
                navigation.navigate('EditarPerfil')
              }
            }}
          >
            <Text style={[styles.ojear, styles.timeTypo]}>
              {'Editar perfil'}
            </Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: Border.br_81xl,
              height: 35,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              navigation.navigate('MiSuscripcin')
            }}
          >
            <Text
              style={{
                color: Color.bLACK1SPORTSMATCH,
                fontSize: FontSize.t2TextSTANDARD_size,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: '700',
                fontSize: FontSize.t2TextSTANDARD_size
              }}
            >
              {'Mi suscripción'}
            </Text>
          </Pressable>
        </View>
      )}
      {/* ================================================================= */}
      {/* ========================== EXTERNAL ============================= */}
      {/* ================================================================= */}
      {!external && isSportman === true && (
        <View
          style={{
            width: '95%',
            height: 50,
            alignSelf: 'center',
            justifyContent: 'space-around',
            borderRadius: 5,
            backgroundColor: Color.bLACK3SPORTSMATCH,
            marginTop: 20,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              fontSize: FontSize.t4TEXTMICRO_size,
              color: Color.wHITESPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            Seguidores
          </Text>
          <Text style={styles.numeroText}>24</Text>
        </View>
      )}
      {external && data.author.type !== 'club' && (
        <View
          style={{
            width: '95%',
            height: 50,
            alignSelf: 'center',
            justifyContent: 'space-around',
            borderRadius: 5,
            backgroundColor: Color.bLACK3SPORTSMATCH,
            marginTop: 20,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              fontSize: FontSize.t4TEXTMICRO_size,
              color: Color.wHITESPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            Seguidores
          </Text>
          <Text style={styles.numeroText}>24</Text>
        </View>
      )}

      {!external && !isSportman && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'center',
            marginTop: 10
          }}
        >
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: '#E1451E', fontSize: 27, fontWeight: 500 }}>
              {user.user.club.year}
            </Text>
            <Text
              style={{
                color: '#E1451E',
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Fundación
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: '#E1451E', fontSize: 27, fontWeight: 500 }}>
              {user.user.club.capacity}
            </Text>
            <Text
              style={{
                color: '#E1451E',
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Aforo
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: '#E1451E', fontSize: 27, fontWeight: 500 }}>
              {clubOffers?.length}
            </Text>
            <Text
              style={{
                color: '#E1451E',
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Nº ofertas
            </Text>
          </View>
        </View>
      )}

      {!external && isSportman === true && (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 15
          }}
        >
          <View
            style={{
              width: '95%',
              marginTop: 20,
              alignSelf: 'center'
            }}
          >
            <View
              style={{ width: '100%', marginBottom: 15, flexDirection: 'row' }}
            >
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'perfil' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('perfil')}
              >
                <FeedSVG />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'estadisticas' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('estadisticas')}
              >
                <StatsSVG />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {external && data.author.type !== 'club' && (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 15
          }}
        >
          <View
            style={{
              width: '95%',
              marginTop: 20,
              alignSelf: 'center'
            }}
          >
            <View
              style={{ width: '100%', marginBottom: 15, flexDirection: 'row' }}
            >
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'perfil' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('perfil')}
              >
                <FeedSVG />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'estadisticas' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('estadisticas')}
              >
                <StatsSVG />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  groupIcon: {
    marginRight: 1,
    marginTop: 1,
    height: 25,
    width: 32,
    opacity: 0.9
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size
  },
  timeTypo2: {
    marginRight: 20,
    width: '100%',
    textAlign: 'right',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  ojear: {
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  ojear2: {
    marginLeft: 5,
    color: Color.bLACK2SPORTMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  frameChild: {
    width: 26,
    height: 17
  },
  description: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    marginTop: 3,
    width: '80%'
  },
  seguidoresLayout: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  jordiEspeltPvotBaloncestoWrapper: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    maxWidth: '60%',
    alignItems: 'center',
    height: 120,
    paddingHorizontal: 15
  },

  jordiEspeltPvotBaloncesto: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: '700'
  },
  jugandoAlUniTypo: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  perfilFeedVisualitzaciCluItem: {
    height: 100,
    width: 100
  },
  imgFront: {
    width: '100%',
    height: 150
  },
  circleAvatar: {
    borderWidth: 4,
    borderColor: Color.bALONCESTO,
    backgroundColor: Color.bALONCESTO,
    width: 110,
    overflow: 'hidden',
    height: 110,
    borderRadius: 50
  },
  leftButton: {
    flexDirection: 'row',
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_81xl,
    height: 35,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numeroText: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    color: Color.wHITESPORTSMATCH
  }
})

export default HeaderPerfil
