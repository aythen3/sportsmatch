import React from 'react'
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native'

const HomeGif = ({ fromRegister }) => {
  const { height, width } = useWindowDimensions()

  return (
    <View style={{ maxWidth: width }}>
      <View style={[styles.loginSwitchChild]}>
        <Image
          style={[styles.loginSwitchChild2]}
          contentFit="contain"
          source={require('../assets/carrouselgif.gif')}
        />
      </View>
      <Image
        style={{
          width: width,
          height: height,
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 0
        }}
        contentFit="cover"
        source={require('../assets/loginswitch2.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  loginSwitchChild: {
    marginBottom: 0, // o el modo de ajuste que prefieras
    width: 320,
    height: 300,
    bottom: -200,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // bottom: '75%',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    right: '-26%',
    zIndex: 0,
    overflow: 'hidden'
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
  },
  loginSwitchChild2: {
    // backgroundColor: 'red',
    width: '100%',
    height: '150%',
    // bottom: '75%',
    transform: [{ rotate: '-45deg' }],
    zIndex: 0
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
  }
})
export default HomeGif
