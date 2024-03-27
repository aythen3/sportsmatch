import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import * as ImagePicker from 'expo-image-picker'
import { updateImgClub } from '../redux/actions/club'

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
  avatar
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)

  const [image1, setImage1] = useState(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage1(result.assets[0])

      const fileName = `${result.assets[0].uri.split('.').pop()}`

      const file = new FormData()

      file.append('file', {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: fileName
      })
      dispatch(updateImgClub(file))
    }
  }

  console.log(image1)

  return (
    <View>
      <TouchableOpacity onPress={() => pickImage(setImage1)}>
        <Image
          style={styles.imgFront}
          contentFit="cover"
          source={{ uri: image1?.uri }}
        />
      </TouchableOpacity>
      <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
        <View style={styles.circleAvatar}>
          {isSportman ? (
            <Image
              style={styles.perfilFeedVisualitzaciCluItem}
              contentFit="cover"
              source={require('../assets/group-5161.png')}
            />
          ) : (
            <Image
              style={styles.perfilFeedVisualitzaciCluItem}
              contentFit="cover"
              source={require('../assets/avatar1.png')}
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

      <View style={styles.groupContainer}>
        {club && !myPerfil ? (
          <View style={styles.leftButton}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require('../assets/group-5361.png')}
            />
            <Text style={[styles.ojear, styles.timeTypo]}>Ojear</Text>
          </View>
        ) : (
          <Pressable
            style={styles.leftButton}
            onPress={() =>
              !button1 ? navigation.navigate('EditarPerfil') : ''
            }
          >
            <Text style={[styles.ojear, styles.timeTypo]}>
              {button1 ? button1 : 'Editar perfil'}
            </Text>
          </Pressable>
        )}
        {club && !myPerfil ? (
          <View style={styles.matchButton}>
            <Text style={[styles.ojear, styles.timeTypo2]}>Pedir Match</Text>
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
              width: 170,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => !button2 && navigation.navigate('MiSuscripcin')}
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
        <View style={styles.seguidoresContainer}>
          <Text style={styles.seguidoresText}>Seguidores</Text>
          <Text style={styles.numeroText}>24</Text>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 15
        }}
      >
        {isSportman && (
          <Pressable onPress={() => setSelectComponents('perfil')}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor:
                  selectComponents === 'perfil'
                    ? Color.colorWhitesmoke
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
        )}
        {isSportman && (
          <Pressable onPress={() => setSelectComponents('estadisticas')}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor:
                  selectComponents === 'estadisticas'
                    ? Color.colorWhitesmoke
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
        )}
      </View>
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
    height: 108,
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
  matchButton: {
    flexDirection: 'row',
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    height: 35,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seguidoresContainer: {
    width: '100%',
    height: 60,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    marginTop: 20,
    paddingHorizontal: 15
  },
  seguidoresText: {
    width: '30.28%',
    top: '10%',
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    marginBottom: 10
  },
  numeroText: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    color: Color.wHITESPORTSMATCH
  }
})

export default HeaderPerfil
