import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import NotificacinMatch from '../screens/NotificacinMatch'

const Notifications = ({ text, send, read, match }) => {
  const [isMatch, setIsMatch] = useState(false)
  return (
    <Pressable
      style={{ marginTop: 20 }}
      onPress={() => (match ? setIsMatch(true) : '')}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <Image
          style={[styles.groupIconLayout]}
          contentFit="cover"
          source={require('../assets/avatar.png')}
        />
        {match && (
          <Text
            style={{
              color: Color.bALONCESTO,
              fontSize: 35,
              top: -20
            }}
          >
            .
          </Text>
        )}
        <View style={{ flex: 1 }}>
          <Text style={[styles.hasHechoUn, styles.ayerTypo]}>{text}</Text>
        </View>
        <Text style={[styles.ayer, styles.ayerTypo]}>{send}</Text>
      </View>
      <View
        style={{
          borderWidth: 1.3,
          borderColor: Color.bLACK3SPORTSMATCH,
          marginVertical: 10
        }}
      />
      <Modal visible={isMatch} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
        >
          <NotificacinMatch onClose={() => setIsMatch(false)} />
        </View>
      </Modal>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 45,
    width: 45,
    alignSelf: 'flex-start'
    // width: '10%'
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    alignSelf: 'flex-start'
    // width: '80%'
  },
  ayerTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ayer: {
    color: Color.gREY2SPORTSMATCH
  }
})

export default Notifications
