import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { Image } from 'expo-image'

const RegisteredOffers = ({ name, image, match, modalPremium }) => {
  const navigation = useNavigation()

  return (
    <>
      <View
        style={{
          //   marginTop: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
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
          <View
            style={{
              backgroundColor: Color.colorMaroon,
              width: 110,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: Border.br_81xl
            }}
          >
            <Text style={[styles.match, styles.timeTypo]}>Match</Text>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: Color.bALONCESTO,
                position: 'absolute',
                left: -8,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 30, height: 23 }}
                contentFit="cover"
                source={require('../assets/group9.png')}
              />
            </View>
          </View>
        )}
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.colorDimgray_100,
          marginVertical: 10
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default RegisteredOffers
