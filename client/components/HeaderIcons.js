import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import LogoTopSportman from './svg/LogoTopSportman'
import LogoTopClub from './svg/LogoTopClub'
import LineaVertical from './svg/LineaVerticalSVG'


const HeaderIcons = () => {
  const navigation = useNavigation()
  const { isSportman } = useSelector((state) => state.users)

  return (
    <View style={styles.vectorParent}>
      <Image
        style={{ width: 180, height: 42, marginLeft: 20 }}
        contentFit="cover"
        source={require('../assets/logo3.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Color.bALONCESTO,
          width: 140,
          height: 50,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingHorizontal: 10
        }}
      >
        <Pressable
          onPress={() =>
            isSportman
              ? navigation.navigate('TodasLasOfertas')
              : navigation.navigate('OfertasEmitidas')
          }
        >
          {/* <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require('../assets/group-6583.png')}
          /> */}

          {!isSportman ? <LogoTopSportman></LogoTopSportman> : <LogoTopClub></LogoTopClub>}
        </Pressable>
        <LineaVertical />
        <Pressable onPress={() => navigation.navigate('TusMatchs')}>
          <Image
            style={[styles.groupIcon1, styles.iconGroupLayout]}
            contentFit="cover"
            source={require('../assets/group10.png')}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  vectorParent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 15
  },
  superiorLayout: {
    height: 45,
    width: 120
  },
  iconGroupLayout: {
    maxWidth: '100%',
    overflow: 'hidden'
  },
  frameItem: {
    left: 61,
    zIndex: 2,
    height: 44,
    top: 2
  },
  lineIconLayout: {
    width: 0,
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    position: 'absolute'
  },
  groupIcon1: {
    height: 26,
    width: 38
    // top: '24.44%',
    // right: '11.17%',
    // bottom: '18.44%',
    // left: '61.08%',
    // zIndex: 1,
    // maxHeight: '100%'
    // position: 'absolute'
  },
  frameInner: {
    // top: 8,
    // left: 16,
    width: 31,
    height: 31
    // zIndex: 3
    // position: 'absolute'
  }
})

export default HeaderIcons
