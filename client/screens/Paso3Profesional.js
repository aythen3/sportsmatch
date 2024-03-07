import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import SeleccionProfesional from '../components/SeleccionProfesional'
import Lines from '../components/Lines'
import Input from '../components/Input'

const Paso3Jugador = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.paso6}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require('../assets/imagen-de-fondo1.png')}
      />
      <View style={styles.contenido}>
        <View style={styles.headerSteps}>
          <Pressable
            style={styles.botonAtras}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.coolicon}
              contentFit="cover"
              source={require('../assets/coolicon1.png')}
            />
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </Pressable>
          <View style={styles.stepseccion}>
            <View>
              <Text style={[styles.paso1, styles.atrsTypo]}>Paso 3</Text>
              <Text style={[styles.escogeTuRol, styles.jugadorTypo1]}>
                Define tus skills
              </Text>
            </View>
            <Lines index={3} />
          </View>
        </View>
        {/* <SeleccionProfesional /> */}
        <Input
          title="Tipo de profesional"
          placeholderText="Entrenador"
          isAccordeon={true}
        />
        <Input title="Años en activo" placeholderText="2000" />
        <Input
          title="Lugar de residencia"
          placeholderText="Barcelona"
          isAccordeon={true}
        />
        <Input
          title="Club actual"
          placeholderText="Rellena solo si estas en algun club"
        />
        <Input
          title="Como te defines como profesional"
          placeholderText="Describe tu juego, tu condicion fisica, tu personalidad en el campo"
          isMultiLine={true}
        />

        <Pressable
          style={styles.siguiente}
          onPress={() => navigation.navigate('Paso4Profesional')}
        >
          <Text style={styles.siguiente1}>Siguiente</Text>
        </Pressable>
      </View>
    </ScrollView>
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
    top: 30
  },
  siguiente1: {
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  contenido: {
    top: 77,
    alignItems: 'center',
    height: '120%'
    // height: '150%'
  },
  paso6: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default Paso3Jugador
