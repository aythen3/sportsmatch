import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  Modal
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
import { useSelector } from 'react-redux'

const TusMatchs = () => {
  const navigation = useNavigation()

  const [details, setDetails] = useState(false)

  const { user } = useSelector((state) => state.users)

  return (
    <View style={styles.tusMatchs}>
      <View style={styles.topContainer}>
        <Pressable style={styles.coolicon} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon1, styles.iconGroupLayout]}
            contentFit="cover"
            source={require('../../assets/coolicon4.png')}
          />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.tusMatchs2Typo}>Tus Matchs</Text>
        </Pressable>
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

      {user.user.type === 'sportman' && (
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
              <Image
                style={[styles.escudoChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require('../../assets/ellipse-762.png')}
              />
              <Image
                style={styles.logoUem21RemovebgPreview1Icon}
                contentFit="cover"
                source={require('../../assets/logo-uem21removebgpreview-12.png')}
              />
            </View>
            <Text style={styles.clubBasquetLametlla}>
              Club Basquet L’ametlla de Mar
            </Text>
          </Pressable>
        </View>
      )}

      {user.user.type === 'club' && (
        <View>
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
                <Image
                  style={styles.logoUem21RemovebgPreview1Icon}
                  contentFit="cover"
                  source={require('../../assets/mask-group7.png')}
                />
              </View>
              <Text style={styles.playerName}>Jordi Espelt</Text>
            </Pressable>
          </View>

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
                <Image
                  style={styles.logoUem21RemovebgPreview1Icon}
                  contentFit="cover"
                  source={require('../../assets/mask-group12.png')}
                />
              </View>
              <Text style={styles.playerName}>Carles Mir</Text>
            </Pressable>
          </View>
        </View>
      )}

      <Modal visible={details} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1
          }}
        >
          <TusMatchsDetalle onClose={() => setDetails(false)} />
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
    width: '77.78%',
    height: '77.78%',
    right: '11.11%',
    left: '11.11%',
    top: '11.11%',
    position: 'absolute',
    zIndex: 1
  },
  escudo: {
    width: 45,
    height: 45
  },
  clubBasquetLametlla: {
    marginLeft: 9,
    fontSize: 15,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500',
    width: '45%',
    height: 60
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
