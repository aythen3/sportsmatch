import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { Image } from 'expo-image'

const RegisteredOffers = ({ name, image, match, modalPremium }) => {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.frameGroup}>
          {match ? (
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require('../assets/mask-group13.png')}
            />
          ) : (
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require('../assets/image-borroso.png')}
            />
          )}
          <Pressable
            style={[styles.jordiEspeltWrapper, styles.groupFrameSpaceBlock]}
            onPress={() =>
              match ? navigation.navigate('ChatAbierto1') : modalPremium()
            }
          >
            <Text style={[styles.jordiEspelt, styles.carlesMirTypo]}>
              {name}
            </Text>
          </Pressable>
        </View>

        {match && (
          <View style={styles.matchContainer}>
            <Text style={[styles.match, styles.timeTypo]}>Match</Text>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                contentFit="cover"
                source={require('../assets/group9.png')}
              />
            </View>
          </View>
        )}
      </View>
      <View style={styles.line} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  frameGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  maskGroupIcon: {
    width: 45,
    height: 45
  },
  jordiEspeltWrapper: {
    height: 16
  },
  groupFrameSpaceBlock: {
    marginLeft: 15
  },
  jordiEspelt: {
    fontWeight: '700',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    height: '100%',
    width: '100%'
  },
  carlesMirTypo: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  matchContainer: {
    backgroundColor: Color.colorMaroon,
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Border.br_81xl
  },
  match: {
    color: Color.bALONCESTO,
    alignSelf: 'flex-end',
    marginRight: 10,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700',
    lineHeight: 17
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  imgView: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: Color.bALONCESTO,
    position: 'absolute',
    left: -8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 30,
    height: 23
  },
  line: {
    borderWidth: 0.5,
    borderColor: Color.colorDimgray_100,
    marginVertical: 10
  }
})

export default RegisteredOffers
