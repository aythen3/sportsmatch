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
    <>
      <Pressable onPress={() => (match ? setIsMatch(true) : '')}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5
          }}
        >
          <Image
            style={[styles.groupIconLayout]}
            contentFit="cover"
            source={require('../assets/avatar.png')}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {!read && (
              <Text
                style={{
                  color: Color.bALONCESTO,
                  fontSize: 40,
                  top: -20
                }}
              >
                .
              </Text>
            )}
            <Text style={[styles.hasHechoUn, styles.ayerTypo]}>{text}</Text>
          </View>
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={[styles.ayer, styles.ayerTypo]}>{send}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: Color.colorDimgray_100,
            marginVertical: 15
          }}
        />
      </Pressable>
      {/* <Modal visible={isMatch} transparent={true}>
          
      </Modal> */}

      <Modal visible={isMatch} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20
          }}
        >
          <NotificacinMatch onClose={() => setIsMatch(false)} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 45,
    width: '10%'
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    width: '70%'
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
