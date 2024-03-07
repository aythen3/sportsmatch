import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'

const HeaderPerfil = ({
  name,
  description,
  button1,
  button2,
  setSelectComponents,
  selectComponents
}) => {
  const { isSportman } = useSelector((state) => state.users)
  const navigation = useNavigation()

  return (
    <View>
      <Image
        style={{ width: '100%', height: 150 }}
        contentFit="cover"
        source={require('../assets/hannahredingkqyboqrw5wunsplash-12.png')}
      />
      <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
        <View
          style={{
            borderWidth: 4,
            borderColor: Color.bALONCESTO,
            backgroundColor: Color.bALONCESTO,
            height: 108,
            borderRadius: 50,
            overflow: 'hidden'
          }}
        >
          <Image
            style={styles.perfilFeedVisualitzaciCluItem}
            contentFit="cover"
            source={require('../assets/group-5161.png')}
          />
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text
            style={[styles.jordiEspeltPvotBaloncesto, styles.jugandoAlUniTypo]}
          >
            {name}
          </Text>
          <Text style={[styles.jugandoAlUni, styles.seguidoresLayout]}>
            {description}
          </Text>
        </Pressable>
      </View>

      <View style={styles.groupContainer}>
        {isSportman === false ? (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Color.colorDimgray_100,
              borderRadius: Border.br_81xl,
              height: 35,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-5361.png')}
            />
            <Text style={[styles.ojear, styles.timeTypo]}>Ojear</Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Color.colorDimgray_100,
              borderRadius: Border.br_81xl,
              height: 35,
              width: 180,
              paddingHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={[styles.ojear, styles.timeTypo]}>
              {button1 ? button1 : 'Editar perfil'}
            </Text>
          </View>
        )}
        {isSportman === false ? (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Color.bALONCESTO,

              borderRadius: Border.br_81xl,
              height: 35,
              width: 170,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={[styles.ojear, styles.timeTypo]}>Pedir Match</Text>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.bALONCESTO,
                position: 'absolute',
                left: -10
                //   top: 5
              }}
            >
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group13.png')}
              />
            </View>
          </View>
        ) : (
          <Pressable
            style={{
              flexDirection: 'row',
              backgroundColor: button2
                ? Color.colorDimgray_100
                : Color.colorWhitesmoke,

              borderRadius: Border.br_81xl,
              height: 35,
              width: 180,

              paddingHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => navigation.navigate('MiSuscripcin')}
          >
            <Text
              style={[button2 ? styles.ojear : styles.ojear2, styles.timeTypo]}
            >
              {button2 ? button2 : 'Mi suscripcion'}
            </Text>
          </Pressable>
        )}
      </View>
      {isSportman === true && (
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: Color.bLACK3SPORTSMATCH,
            marginTop: 20,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              width: '30.28%',
              top: '10%',
              lineHeight: 14,
              fontSize: FontSize.t4TEXTMICRO_size,
              color: Color.wHITESPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO,
              marginBottom: 10
            }}
          >
            Seguidores
          </Text>
          <Text
            style={{
              fontSize: FontSize.h3TitleMEDIUM_size,
              lineHeight: 22,
              color: Color.wHITESPORTSMATCH
            }}
          >
            24
          </Text>
        </View>
      )}
      {isSportman === true && (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 15
          }}
        >
          <Pressable onPress={() => setSelectComponents('perfil')}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor:
                  selectComponents === 'perfil'
                    ? Color.colorGainsboro
                    : 'transparent',
                width: 100,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{ marginBottom: 10 }}
                contentFit="cover"
                source={require('../assets/cuadrado-icon.png')}
              />
            </View>
          </Pressable>
          <Pressable onPress={() => setSelectComponents('estadisticas')}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor:
                  selectComponents === 'estadisticas'
                    ? Color.colorGainsboro
                    : 'transparent',
                width: 100,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 30, height: 18, marginBottom: 10 }}
                contentFit="cover"
                source={require('../assets/vector-8.png')}
              />
            </View>
          </Pressable>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainer: {
    // top: 9,
    // left: 45,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  groupIcon: {
    height: 25,
    width: 32,
    // top: '23.68%',
    // right: '15%',
    // bottom: '21.32%',
    // left: '13.68%',
    opacity: 0.9
    // maxHeight: '100%',
    // maxWidth: '100%',
    // overflow: 'hidden'
  },
  frameLayout: {
    width: 60,
    height: 60
  },
  timeTypo: {
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  ojear: {
    marginLeft: 5,
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
  jugandoAlUni: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    marginTop: 3
  },
  seguidoresLayout: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  jordiEspeltPvotBaloncestoWrapper: {
    flexDirection: 'row',
    gap: 20,
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
  perfilFeedVisualitzaciCluChild: {
    // top: 148,
    // left: 20,
    width: 105,
    height: 105
    // position: 'absolute'
  },
  perfilFeedVisualitzaciCluItem: {
    height: 100,
    width: 100
  }
})

export default HeaderPerfil
