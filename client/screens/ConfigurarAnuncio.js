import * as React from 'react'
import { Text, StyleSheet, Pressable, View } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation, useRoute } from '@react-navigation/native'
import Input from '../components/Input'
import { Color, Padding, Border, FontSize, FontFamily } from '../GlobalStyles'
import { useSelector } from 'react-redux'

const ConfigurarAnuncio = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { offer } = route.params

  console.log(offer)

  return (
    <View style={[styles.configurarAnuncio, styles.iconLayout1]}>
      <View style={styles.contenido}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15
          }}
        >
          <Text style={styles.configuraTuOferta}>Configura tu oferta</Text>
          <Text
            onPress={() => navigation.goBack()}
            style={styles.configuraTuOferta}
          >
            X
          </Text>
        </View>

        <Input title="Sexo" placeholderText={offer.gender} isAccordeon={true} />
        <Input
          title="Categoria"
          placeholderText={offer.category}
          isAccordeon={true}
        />
        <Input
          title="Posicion"
          placeholderText={offer.position}
          isAccordeon={true}
        />
        <Input
          title="Urgencia"
          placeholderText={offer.urgency}
          isAccordeon={true}
        />
        <Input
          title="Retribucion"
          placeholderText={offer.remuneration}
          isAccordeon={true}
        />

        <Pressable
          style={styles.botonsOferta}
          onPress={() => navigation.navigate('SiguiendoJugadores')}
        >
          <View>
            <View style={[styles.botonPromocion, styles.boitonCrearFlexBox]}>
              <Text style={[styles.promocionarOferta, styles.ofertaTypo]}>
                Promocionar la oferta
              </Text>
            </View>
            <View style={[styles.boitonCrear, styles.boitonCrearFlexBox]}>
              <Text style={[styles.crearOferta, styles.ofertaTypo]}>
                Crear oferta
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require('../assets/cap1.png')}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require('../assets/wifi.png')}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require('../assets/cellular-connection.png')}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.configurarAnuncioChild}
        contentFit="cover"
        source={require('../assets/line-9.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout1: {
    width: '100%',
    overflow: 'hidden'
  },
  fieldSpaceBlock: {
    marginTop: 8,
    alignSelf: 'stretch'
  },
  unitClr: {
    color: Color.neutralDarkLightest,
    textAlign: 'left'
  },
  textFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  iconLayout: {
    height: 16,
    display: 'none'
  },
  campoBorder: {
    paddingVertical: Padding.p_3xs,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  timeTypo: {
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  simboloIconLayout: {
    width: 12,
    height: 7
  },
  sniorClr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  boitonCrearFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: 'center',
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  ofertaTypo: {
    fontWeight: '700',
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupChildPosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  borderPosition: {
    top: 0,
    height: 12
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  configuraTuOferta: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  configuraTuOfertaContainer: {
    zIndex: 0
  },
  icon: {
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  simbolo: {
    left: '184.04%',
    top: '18.18%',
    right: '-91.91%',
    bottom: '13.64%',
    width: '7.87%',
    height: '68.18%',
    zIndex: 1,
    position: 'absolute'
  },
  header: {
    flexDirection: 'row'
  },
  title: {
    fontSize: FontSize.t2TextSTANDARD_size,
    alignSelf: 'stretch',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  unit: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.bodyBodyXS,
    color: Color.neutralDarkLightest,
    display: 'none',
    lineHeight: 18
  },
  placeholder: {
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cursorIcon: {
    width: 0,
    marginLeft: 1
  },
  text: {
    marginLeft: 6
  },
  icon1: {
    marginLeft: 8,
    width: 16,
    overflow: 'hidden'
  },
  field: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorSilver,
    height: 48,
    paddingVertical: Padding.p_xs,
    display: 'none',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: Padding.p_base,
    alignItems: 'center',
    borderStyle: 'solid',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  supportText: {
    fontSize: FontSize.bodyBodyXS_size,
    letterSpacing: 0.2,
    lineHeight: 14,
    fontFamily: FontFamily.bodyBodyXS,
    color: Color.neutralDarkLightest,
    display: 'none',
    marginTop: 8,
    alignSelf: 'stretch'
  },
  sexo: {
    alignSelf: 'stretch'
  },
  masculino: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  simboloIcon: {
    marginLeft: 239,
    height: 7
  },
  campoSexo: {
    marginTop: 12,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl
  },
  snior: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left'
  },
  simboloIcon1: {
    marginLeft: 263,
    height: 7
  },
  campoCategoria: {
    paddingHorizontal: Padding.p_lgi,
    marginTop: 9
  },
  moduloCategoria: {
    marginTop: 29
  },
  simboloIcon2: {
    marginLeft: 275,
    height: 7
  },
  simboloIcon3: {
    marginLeft: 300,
    height: 7
  },
  simboloIcon4: {
    marginLeft: 298,
    height: 7
  },
  camposBotones: {
    marginTop: 20
  },
  promocionarOferta: {
    color: Color.wHITESPORTSMATCH
  },
  botonPromocion: {
    backgroundColor: Color.colorDimgray_100
  },
  crearOferta: {
    color: Color.bLACK1SPORTSMATCH
  },
  boitonCrear: {
    marginTop: 13,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  botonsOferta: {
    marginTop: 50,
    flexDirection: 'row'
  },
  contenido: {
    top: 59,
    left: 14,
    position: 'absolute'
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390,
    left: 0
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: 'solid',
    top: 0,
    position: 'absolute'
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    backgroundColor: Color.wHITESPORTSMATCH,
    height: 7,
    position: 'absolute'
  },
  battery: {
    width: 25,
    height: 12,
    top: 0
  },
  wifiIcon: {
    height: 11,
    width: 16
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: 'absolute'
  },
  time: {
    marginTop: -9.55,
    top: '50%',
    left: 4,
    letterSpacing: 0,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size,
    lineHeight: 18,
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    top: 10,
    left: 15,
    height: 24
  },
  configurarAnuncioChild: {
    marginLeft: -74,
    top: 831,
    left: '50%',
    width: 148,
    maxHeight: '100%',
    position: 'absolute'
  },
  configurarAnuncio: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: 'hidden',
    flex: 1,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default ConfigurarAnuncio
