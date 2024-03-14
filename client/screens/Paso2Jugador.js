import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import DeportesSeleccion from '../components/DeportesSeleccion'
import { useSelector } from 'react-redux'
import Lines from '../components/Lines'

const Paso2Jugador = () => {
  const navigation = useNavigation()
  const { isSportMan } = useSelector((state) => state.users)
  const { sports } = useSelector((state) => state.sports)
  // const router = useRoute()

  // const { role } = router.params

  const handleNavigation = () => {
    if (isSportMan === true) {
      // if (role === 'Profesional del deporte') {
      //   navigation.navigate('Paso4Profesional')
      // } else {
      navigation.navigate('Paso3Jugador')
      // }
    } else {
      navigation.navigate('EscogerDeporte2')
    }
  }

  const [selectedSport, setSelectedSport] = useState(null)

  const handleSportSelection = (name) => {
    setSelectedSport(name)
  }

  return (
    <View style={styles.paso6}>
      {sports.map((sport) => (
        <DeportesSeleccion
          key={sport.id}
          name={sport.name}
          selectedSport={selectedSport}
          onSelect={handleSportSelection}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  jugadorTypo1: {
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  liniaLayout1: {
    height: 3,
    width: '20%',
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid'
  },
  liniaLayout2: {
    height: 3,
    width: '20%',
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.bALONCESTO,
    borderStyle: 'solid'
  },
  imagenDeFondo: {
    position: 'absolute',
    height: '110%',
    width: '100%',
    zIndex: 0
  },
  coolicon: {
    width: 9,
    height: 15
  },
  atrs: {
    color: Color.gREY2SPORTSMATCH,
    marginLeft: 5,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    right: '10%',
    marginBottom: '5%'
  },
  paso1: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
    textAlign: 'center'
  },
  escogeTuRol: {
    alignSelf: 'stretch',
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  linias: {
    padding: Padding.p_3xs,
    marginTop: 20,
    flexDirection: 'row',
    gap: 20
  },
  stepseccion: {
    marginTop: 3,
    alignItems: 'center'
  },
  headerSteps: {
    alignItems: 'flex-end'
  },
  siguiente: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    top: '10%'
  },
  siguiente1: {
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  contenido: {
    // top: 77,
    // justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    // left: 0
    height: '100%',
    marginBottom: 130
  },
  paso6: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15
    // flex: 1,
    // overflow: 'hidden',
    // width: '100%',
    // backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default Paso2Jugador
