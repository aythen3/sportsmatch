import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import FeedSVG from '../../components/svg/FeedSVG'
import StatsSVG from '../../components/svg/StatsSVG'
import Feed from '../../components/Feed'
import FeedStats from '../../components/FeedStats'
import { Context } from '../../context/Context'
import { useIsFocused } from '@react-navigation/native'

const MiPerfil = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { sportman } = useSelector((state) => state.sportman)
  const { user, mainColor } = useSelector((state) => state.users)
  const isFocused = useIsFocused()
  const [sportColor, setSportColor] = useState('#E1451E')

  const { setActiveIcon } = useContext(Context)

  useEffect(() => {
    if (isFocused) {
      setActiveIcon('profile')
    }
  }, [isFocused])

  const [selectedTab, setSelectedTab] = useState('Feed')
  const renderContent = () => {
    if (selectedTab === 'Feed') {
      return <Feed />
    } else if (selectedTab === 'FeedStats') {
      return <FeedStats />
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={{ backgroundColor: Color.bLACK1SPORTSMATCH, overflow: 'hidden' }}
      >
        <View>
          {sportman?.info?.img_front === '' ? (
            <Image
              style={{ height: 150, backgroundColor: mainColor }}
              contentFit="cover"
              source={require('../../assets/whiteSport.png')}
            />
          ) : (
            <Image
              style={styles.imagenPosition}
              contentFit="cover"
              source={{ uri: sportman?.info?.img_front }}
            />
          )}
          <View
            style={{
              width: '95%',
              alignSelf: 'center'
            }}
          >
            <View style={styles.imagenInformacion1}>
              <View style={{ position: 'relative',minWidth:110 }}>
                {sportman?.info?.img_perfil &&
                  sportman?.info?.img_perfil !== '' && (
                    <Image
                      style={{
                        height: 110,
                        borderRadius: 100,
                        width: 110,
                        zIndex: 1000,
                        borderWidth: 3,
                        borderColor: '#000'
                      }}
                      contentFit="cover"
                      source={{
                        uri: sportman?.info?.img_perfil
                      }}
                    />
                  )}
                {!sportman?.info?.img_perfil  && (
                    <Image
                      style={{
                        height: 110,
                        borderRadius: 100,
                        width: 110,
                        zIndex: 1000,
                        borderWidth: 3,
                        borderColor: '#000',
                        backgroundColor: mainColor
                      }}
                      contentFit="cover"
                      source={require('../../assets/whiteSport.png')}
                    />
                  )}
                <View
                  style={{
                    position: 'absolute',
                    bottom: -5,
                    left: 2.5,
                    height: 105,
                    zIndex: -1000,
                    borderRadius: 100,
                    width: 105,
                    backgroundColor: mainColor
                  }}
                />
              </View>

              <View style={styles.informacion}>
                <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
                  <Text style={styles.textTypo}>{user?.user?.nickname}</Text>
                  <Text style={[styles.textTypo2, { color: mainColor }]}>
                    {typeof sportman?.info?.sport === 'object'
                      ? sportman?.info?.sport.name
                      : sportman?.info?.sport}
                  </Text>
                  <Text style={styles.textTypo3}>
                    {sportman?.type === 'coach'
                      ? sportman?.info?.rol
                      : sportman?.info?.position}
                  </Text>
                </View>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.jugandoAlUni,
                    styles.seguidoresTypo,
                    { width: '20%' }
                  ]}
                >
                  {sportman?.info?.description?.length > 0
                    ? `${sportman?.info?.description}`
                    : ''}
                </Text>
              </View>
            </View>

            <View style={styles.botonesPerfilSubscripcion}>
              <TouchableOpacity
                style={styles.botonEditarPerfilChild}
                onPress={() => navigation.navigate('EditarPerfil')}
              >
                <Text style={styles.editarPerfil}>Editar perfil</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('MiSuscripcin')}
                style={styles.boton}
              >
                <Text style={styles.miSuscripcin}>Mi suscripción</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.bloqueNumeroSeguidores}>
            <Text style={[styles.seguidores, styles.seguidoresTypo]}>
              Seguidores
            </Text>
            <Text style={[styles.text, styles.textTypo]}>24</Text>
          </View> */}
          </View>
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
                  borderBottomColor: selectedTab === 'Feed' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectedTab('Feed')}
              >
                <FeedSVG />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectedTab === 'FeedStats' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectedTab('FeedStats')}
              >
                <StatsSVG />
              </TouchableOpacity>
            </View>
          </View>
          {renderContent()}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textTypo: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: '700'
  },
  textTypo2: {
    textAlign: 'left',
    color: Color.colorGoldenrod,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700'
  },
  textTypo3: {
    textAlign: 'left',
    color: 'white',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400'
  },
  seguidoresTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  line: {
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: 'solid',
    height: 10,
    borderTopWidth: 2,
    width: 175
  },
  lineRight: {
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: 'solid',
    height: 10,
    borderTopWidth: 2,
    width: 175,
    left: '50%'
  },
  iconLayout: {
    borderRadius: Border.br_10xs,
    maxHeight: '100%',
    alignSelf: 'stretch',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1
  },
  imagenPosition: {
    height: 150
    // width: '100%'
  },
  jugandoAlUni: {
    width: '70%',
    marginTop: 2
  },
  informacion: {
    marginLeft: 15,
    alignSelf: 'flex-end',
    paddingTop: 20
  },
  imagenInformacion1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -14
  },
  botonEditarPerfilChild: {
    backgroundColor: Color.colorDimgray_100,
    width: '48%',
    height: 35,
    borderRadius: Border.br_81xl,
    justifyContent: 'center'
  },
  editarPerfil: {
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700',
    textAlign: 'center'
  },
  boton: {
    backgroundColor: Color.wHITESPORTSMATCH,
    width: '48%',
    height: 35,
    borderRadius: Border.br_81xl,
    marginLeft: 10,
    justifyContent: 'center'
  },
  miSuscripcin: {
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700',
    textAlign: 'center'
  },
  botonesPerfilSubscripcion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '1%'
  },
  text: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    width: 102,
    marginTop: 3
  },
  bloqueNumeroSeguidores: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
    overflow: 'hidden',
    marginTop: '5%'
  }
})

export default MiPerfil
