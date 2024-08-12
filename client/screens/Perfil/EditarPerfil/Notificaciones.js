import React, { useState } from 'react'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import CustomHeaderBack from '../../../components/CustomHeaderBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Switch } from 'react-native-switch'
import { useSelector } from 'react-redux'

const Notificaciones = () => {
  const [activated, setActivated] = useState(true)
  const { mainColor } = useSelector((state) => state.users)

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeaderBack header={'Notificaciones'}></CustomHeaderBack>
      <Pressable
        onPress={() => setActivated(!activated)}
        style={styles.subcontainer}
      >
        <View>
          <Text style={styles.text1}>Pausar notificaciones push</Text>
          <Text style={styles.text2}>Pausar todas las notificaciones</Text>
        </View>
        <Switch
          circleSize={16}
          onValueChange={() => setActivated(!activated)}
          value={activated}
          backgroundActive={mainColor}
          backgroundInactive={'gray'}
          activeText={false}
          inActiveText={false}
          circleActiveColor={'white'}
          circleInActiveColor={'white'}
          barHeight={18}
          switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={5}
        />
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  subcontainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text1: { color: 'white', fontSize: 16 },

  text2: { color: 'gray', fontSize: 12 },

  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})

export default Notificaciones
