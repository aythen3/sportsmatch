import { View, Text, Image } from 'react-native'
import React from 'react'
import DiarySVG from './svg/footerSVG/DiarySVG'
import LensSVG from './svg/footerSVG/LensSVG'
import HomeSVG from './svg/footerSVG/HomeSVG'
import MessageSVG from './svg/footerSVG/MessageSVG'
import { Color } from '../GlobalStyles'

const NavBarInferior = () => {
  return (
    <View
      style={{
        backgroundColor: Color.bLACK2SPORTMATCH,
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
      }}
    >
      <View>
        <DiarySVG />
      </View>
      <View>
        <LensSVG />
      </View>
      <View>
        <HomeSVG />
      </View>
      <View>
        <MessageSVG />
      </View>
      <View>
        <Image
          // style={styles.perfilFeedVisualitzaciCluItem}
          style={{ width: 25, height: 25 }}
          contentFit="cover"
          source={require('../assets/group-5161.png')}
        />
      </View>
    </View>
  )
}

export default NavBarInferior
