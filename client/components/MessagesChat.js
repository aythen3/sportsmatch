import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../redux/slices/notificacions.slices'
import { useNavigation } from '@react-navigation/core'

const MessagesChat = ({ name, message, read, send, confirmation }) => {
  const dispatch = useDispatch()
  const { message: messageRedux } = useSelector((state) => state.notifications)
  const navigation = useNavigation()

  console.log('mensajes', messageRedux)

  const cuteMessage =
    message.length >= 35 ? message.slice(0, 35).concat('...') : message

  return (
    <>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 5
        }}
        onPress={() => {
          navigation.navigate('ChatAbierto1')
          // dispatch(setChat({ message, name, send }))notifications
        }}
      >
        <View style={{ flexDirection: 'row', gap: 15, width: '80%' }}>
          <Image
            style={[styles.groupIconLayout]}
            contentFit="cover"
            source={require('../assets/mask-group1.png')}
          />
          <View style={{ alignSelf: 'flex-start' }}>
            <Text style={[styles.hasHechoUn, styles.ayerTypo]}>{name}</Text>
            <Text style={[styles.hasHechoUn, styles.ayerTypo]}>
              {cuteMessage}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '20%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline'
          }}
        >
          {/* {!read && !confirmation && <Text style={styles.point}>.</Text>} */}
          <Text style={[styles.ayer, styles.ayerTypo]}>{send}</Text>

          {confirmation && (
            <View
              style={{
                backgroundColor: Color.colorMaroon,
                width: 100,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Border.br_81xl,
                marginRight: 20
              }}
            >
              <Text style={[styles.match, styles.timeTypo]}>Match</Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  backgroundColor: Color.bALONCESTO,
                  position: 'absolute',
                  left: -12,
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
      </Pressable>
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
  groupIconLayout: {
    height: 28,
    width: 28
  },
  match: {
    marginLeft: 20,
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
    // width: '65%'
  },
  ayerTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ayer: {
    color: Color.gREY2SPORTSMATCH
  },
  point: {
    fontSize: 45,
    top: -2.5,
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.bALONCESTO
  }
})

export default MessagesChat
