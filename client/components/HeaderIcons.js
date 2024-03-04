import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Color } from '../GlobalStyles'

const HeaderIcons = () => {
  return (
    <View style={styles.vectorParent}>
      {/* <Image
        style={[styles.superiorLayout]}
        contentFit="cover"
        source={require('../assets/rectangle-176.png')}
      /> */}

      <Image
        style={[styles.groupIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require('../assets/group10.png')}
      />

      {/* <Image
        style={[styles.groupIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require('../assets/group10.png')}
      /> */}

      {/* <Image
        style={[styles.frameItem, styles.lineIconLayout]}
        contentFit="cover"
        source={require('../assets/line-211.png')}
      /> */}

      <Image
        style={styles.frameInner}
        contentFit="cover"
        source={require('../assets/group-6583.png')}
      />

      {/* <Image
        style={styles.frameInner}
        contentFit="cover"
        source={require('../assets/group-6583.png')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  vectorParent: {
    flexDirection: 'row',
    backgroundColor: Color.bALONCESTO,
    width: 100,
    height: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30
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
    height: '57.11%',
    width: '34.75%',
    top: '24.44%',
    right: '11.17%',
    bottom: '18.44%',
    left: '61.08%',
    zIndex: 1,
    maxHeight: '100%',
    position: 'absolute'
  },
  frameInner: {
    top: 8,
    left: 16,
    width: 31,
    height: 31,
    zIndex: 3,
    position: 'absolute'
  }
})

export default HeaderIcons
