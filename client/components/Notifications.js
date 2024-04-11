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

const Notifications = ({ text, date, read, match }) => {
  const [isMatch, setIsMatch] = useState(false)
  function formatDate(timestamp) {
    const date = new Date(timestamp)
    // Extract the day, month, and year components
    const day = date.getDate()
    const month = date.getMonth() + 1 // Months are zero-indexed, so we add 1
    const year = date.getFullYear() % 100 // Get the last two digits of the year

    // Pad day and month with leading zeros if necessary
    const formattedDay = day < 10 ? '0' + day : day
    const formattedMonth = month < 10 ? '0' + month : month

    // Return the formatted date string
    return `${formattedDay}/${formattedMonth}/${year}`
  }
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
          <Text style={[styles.hasHechoUn, styles.ayerTypo]}>
            {match && '¡Te han solicitado un Match!'}
          </Text>
        </View>
        <Text style={[styles.ayer, styles.ayerTypo]}>{formatDate(date)}</Text>
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
