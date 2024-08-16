import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import LogoTopSportman from './svg/LogoTopSportman'
import LogoTopClub from './svg/LogoTopClub'
import LineaVertical from './svg/LineaVerticalSVG'

const HeaderIcons = () => {
  const navigation = useNavigation()
  const { isSportman, mainColor } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)

  const [sportColor, setSportColor] = useState('#E1451E')

  console.log(mainColor, 'maincolor')

  return (
    <View style={styles.vectorParent}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{
            width: 180,
            height: 42,
            marginLeft: -10,
            objectFit: 'contain'
          }}
          contentFit=""
          source={require('../assets/sportmatchlogooo.png')}
        />
        {mainColor == '#E1451E' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sportbaloncestoo.png')}
          />
        )}
        {mainColor == '#6A1C4F' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sporthandball.png')}
          />
        )}
        {mainColor == '#1FD430' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sportfutbol.png')}
          />
        )}
        {mainColor == '#A8154A' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sportvoley.png')}
          />
        )}
        {mainColor == '#E1AA1E' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sporthockey.png')}
          />
        )}
        {mainColor == '#0062FF' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sportfutbolsala.png')}
          />
        )}
        {mainColor === '#00F0FF' && (
          <Image
            style={{
              width: 68,
              height: 40,
              marginLeft: -32,
              objectFit: 'scale-down'
            }}
            source={require('../assets/sportprop.png')}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: mainColor,
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
          onPress={() => {
            if (sportman.type === 'invitado') {
              return navigation.navigate('Paso1')
            }
            if (isSportman) {
              navigation.navigate('TodasLasOfertas')
            } else {
              navigation.navigate('OfertasEmitidas')
            }
          }}
        >
          {!isSportman ? (
            <LogoTopSportman></LogoTopSportman>
          ) : (
            <LogoTopClub></LogoTopClub>
          )}
        </Pressable>
        <LineaVertical />
        <Pressable
          onPress={() => {
            if (sportman.type === 'invitado') {
              return navigation.navigate('Paso1')
            } else {
              return navigation.navigate('TusMatchs')
            }
          }}
        >
          <Image
            style={[
              styles.groupIcon1,
              styles.iconGroupLayout,
              { objectFit: 'scale-down' }
            ]}
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
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#000',
    zIndex: 99999999
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
    height: 34,
    width: 38
  },
  frameInner: {
    width: 31,
    height: 31
  }
})

export default HeaderIcons
