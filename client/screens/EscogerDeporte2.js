import React from 'react'
import { Image } from 'expo-image'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FontFamily, FontSize, Color, Padding, Border } from '../GlobalStyles'
import Lines from '../components/Lines'
import Input from '../components/Input'

const EscogerDeporte2 = () => {
  return (
    <View style={styles.escogerDeporte}>
      <Image
        style={styles.escogerDeporteChild}
        contentFit="cover"
        source={require('../assets/group-2412.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.atrsParent}>
          <Image
            style={styles.coolicon}
            contentFit="cover"
            source={require('../assets/coolicon.png')}
          />
          <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <Text style={styles.paso2}>Paso 2</Text>
          <Text style={styles.detallesDelClub}>Detalles del club</Text>
        </View>
        <Lines />
        <View style={{ marginBottom: 60 }}>
          <View style={{ height: 800 }}>
            <Input title="Nombre de club" placeholderText="union" />
            <Input
              title="Poblacion"
              placeholderText="union"
              isAccordeon={true}
            />
            <Input title="Pais" placeholderText="España" isAccordeon={true} />
            <Input
              title="Nombre del estadio, campo o pavellón"
              placeholderText="Palau Municipal d’Esports Josep Mora"
              isAccordeon={true}
            />
            <Input
              title="Año de fundacion"
              placeholderText="1920"
              isAccordeon={true}
            />
            <Input title="Aforo" placeholderText="300 personas" />

            <Input
              title="Descripbe tu club"
              placeholderText="lkj lskfj lsdkfj lsdkfj hjk sdfhjksdjhf shdfjksjdhf shdfjks dfsdfkjh df
        sdfjshdfkjsdh fhsjdfkjshd fhsjdkfjhsdf hjsdkf
        sdfkj hdfjksjdhf shdfjksjdhf sdkfjhsd fsjdkh "
              isMultiLine={true}
              isLast={true}
            />
            <TouchableOpacity
              style={{
                marginTop: 30,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color.wHITESPORTSMATCH,
                borderRadius: Border.br_81xl
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.button_size,
                  fontWeight: '700',
                  color: Color.bLACK1SPORTSMATCH
                }}
              >
                Siguiente
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.loremIpsum}>
        <View style={styles.loremIpsum1}>
          <Text style={[styles.aceptar, styles.atrsTypo]}>Siguiente</Text>
        </View>
      </View> */}

        {/* <View style={[styles.lineView, styles.lineViewLayout]} /> */}
        {/* <View style={styles.atrsParent}>
        <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
        <Image
          style={styles.coolicon}
          contentFit="cover"
          source={require('../assets/coolicon.png')}
        />
      </View>
      <View style={styles.loremIpsum}>
        <View style={styles.loremIpsum1}>
          <Text style={[styles.aceptar, styles.atrsTypo]}>Siguiente</Text>
        </View>
      </View>
      <View style={[styles.nombreDelClubParent, styles.parentLayout]}>
        <Text style={[styles.nombreDelClub, styles.clubTypo]}>
          Nombre del club
        </Text>
        <View style={[styles.uniEsportvaMatarParent, styles.groupLayout]}>
          <Text style={[styles.uniEsportvaMatar, styles.matarTypo]}>
            Unió Esportíva Mataró
          </Text>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
        </View>
      </View>

      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.poblacinParent, styles.paso2Position]}>
          <Text style={[styles.nombreDelClub, styles.clubTypo]}>Población</Text>
          <Text style={[styles.matar, styles.matarTypo]}>Mataró</Text>
          <View style={[styles.groupItem, styles.groupChildBorder]} />
        </View>
        <Image
          style={[styles.coolicon1, styles.cooliconLayout]}
          contentFit="cover"
          source={require('../assets/coolicon2.png')}
        />
      </View>
      <View style={styles.cooliconParent}>
        <Image
          style={[styles.coolicon2, styles.cooliconLayout]}
          contentFit="cover"
          source={require('../assets/coolicon2.png')}
        />
        <View style={[styles.poblacinParent, styles.paso2Position]}>
          <Text style={[styles.nombreDelClub, styles.clubTypo]}>País</Text>
          <View style={[styles.uniEsportvaMatarParent, styles.groupLayout]}>
            <Text style={[styles.uniEsportvaMatar, styles.matarTypo]}>
              España
            </Text>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
          </View>
        </View>
      </View>
      <View
        style={[styles.nombreDelEstadioCampoOPaParent, styles.parentLayout]}
      >
        <Text style={[styles.nombreDelClub, styles.clubTypo]}>
          Nombre del estadio, campo o pavellón
        </Text>
        <View style={[styles.uniEsportvaMatarParent, styles.groupLayout]}>
          <Text style={[styles.uniEsportvaMatar, styles.matarTypo]}>
            Palau Municipal d’Esports Josep Mora
          </Text>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
        </View>
      </View>
      <View style={[styles.aoDeFundacinParent, styles.parentLayout]}>
        <Text style={[styles.nombreDelClub, styles.clubTypo]}>
          Año de fundación
        </Text>
        <Image
          style={[styles.coolicon1, styles.cooliconLayout]}
          contentFit="cover"
          source={require('../assets/coolicon2.png')}
        />
        <View style={[styles.uniEsportvaMatarParent, styles.groupLayout]}>
          <Text style={[styles.uniEsportvaMatar, styles.matarTypo]}>1920</Text>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
        </View>
      </View>
      <View style={[styles.aforoParent, styles.parentLayout]}>
        <Text style={[styles.nombreDelClub, styles.clubTypo]}>{`Aforo `}</Text>
        <View style={[styles.uniEsportvaMatarParent, styles.groupLayout]}>
          <Text style={[styles.uniEsportvaMatar, styles.matarTypo]}>
            300 persona
          </Text>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
        </View>
      </View>
      <View style={styles.describeTuClubParent}>
        <Text style={[styles.describeTuClub, styles.clubTypo]}>
          Describe tu club
        </Text>
        <View
          style={[
            styles.hablaDeAquelloQueSeaMsRParent,
            styles.groupChild3Layout
          ]}
        >
          <Text
            style={[styles.hablaDeAquello, styles.clubTypo]}
          >{`Habla de aquello que sea más relevante de tu club. Campeonatos ganados, categorías, anécdotas, etc. `}</Text>
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        </View>
      </View>
      <View style={[styles.escogerDeporteItem, styles.escogerLayout]} />
      <View style={[styles.escogerDeporteInner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.escogerDeporteChild1, styles.escogerLayout]} />
      <Text style={styles.detallesDelClub}>Detalles del club</Text>
      <Text style={[styles.paso2, styles.paso2Position]}>Paso 2</Text>
      <View style={styles.groupChild4Position}>
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require('../assets/cap.png')}
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
            source={require('../assets/cellular-connection2.png')}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require('../assets/line-9.png')}
      /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  parentLayout: {
    height: 63,
    width: 361
  },
  clubTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: 'absolute'
  },
  groupLayout: {
    height: 40,
    left: 0,
    width: 360,
    position: 'absolute'
  },
  matarTypo: {
    width: 313,
    left: 20,
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: 'absolute'
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: 'solid'
  },

  cooliconLayout: {
    left: '92.24%',
    right: '4.43%',
    width: '3.32%',
    height: '11.11%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupChild3Layout: {
    height: 190,
    left: 0,
    width: 360,
    position: 'absolute'
  },
  escogerLayout: {
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166,
    borderStyle: 'solid',
    position: 'absolute'
  },
  lineViewLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    borderColor: Color.colorDimgray_100,
    top: 166,
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupChild4Position: {
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
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  escogerDeporteChild: {
    // top: -1000,
    // left: -1821,
    width: '100%',
    height: '100%',
    // opacity: 0.2
    position: 'absolute'
  },
  atrs: {
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size
    // left: 14,
    // position: 'absolute',
    // top: 0
  },
  coolicon: {
    height: 15,
    width: 10,
    marginRight: 8
    // height: '83.33%',
    // width: '16.92%',
    // top: '11.11%',
    // right: '83.08%',
    // bottom: '5.56%',
    // left: '0%',
    // maxHeight: '100%',
    // maxWidth: '100%',
    // position: 'absolute',
    // overflow: 'hidden'
  },
  atrsParent: {
    // top: 77,

    // left: 323,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    top: 60,
    justifyContent: 'flex-end',
    right: 30
    // height: 18
    // position: 'absolute'
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center'
  },
  loremIpsum1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    width: 360,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    flexDirection: 'row'
  },
  loremIpsum: {
    // marginLeft: -180,
    // top: 1026,
    flexDirection: 'row'
    // left: '50%'
    // position: 'absolute'
  },
  nombreDelClub: {
    height: 23,
    color: Color.wHITESPORTSMATCH,
    left: 1,
    textAlign: 'left',
    width: 360,
    top: 0
  },
  uniEsportvaMatar: {
    top: 10
  },
  groupChild: {
    height: 40,
    left: 0,
    width: 360,
    position: 'absolute',
    borderRadius: Border.br_81xl,
    borderColor: Color.gREY2SPORTSMATCH,
    top: 0
  },
  uniEsportvaMatarParent: {
    top: 23,
    height: 40
  },
  nombreDelClubParent: {
    top: 225,
    left: 14,
    position: 'absolute'
  },
  matar: {
    top: 33
  },
  groupItem: {
    height: 40,
    left: 0,
    width: 360,
    position: 'absolute',
    top: 23,
    borderRadius: Border.br_81xl,
    borderColor: Color.gREY2SPORTSMATCH
  },
  poblacinParent: {
    height: 63,
    width: 361,
    top: 0
  },
  coolicon1: {
    top: '61.9%',
    bottom: '26.98%'
  },
  groupParent: {
    top: 318,
    left: 14,
    position: 'absolute'
  },
  coolicon2: {
    top: '66.67%',
    bottom: '22.22%'
  },
  cooliconParent: {
    height: '5.6%',
    width: '92.56%',
    top: '36.44%',
    right: '3.85%',
    bottom: '57.96%',
    left: '3.59%',
    position: 'absolute'
  },
  nombreDelEstadioCampoOPaParent: {
    top: 503,
    left: 14,
    position: 'absolute'
  },
  aoDeFundacinParent: {
    top: 596,
    left: 14,
    position: 'absolute'
  },
  aforoParent: {
    top: 689,
    left: 14,
    position: 'absolute'
  },
  describeTuClub: {
    height: 24,
    color: Color.wHITESPORTSMATCH,
    left: 1,
    textAlign: 'left',
    width: 360,
    top: 0
  },
  hablaDeAquello: {
    top: 9,
    left: 12,
    width: 335,
    height: 165,
    color: Color.gREY2SPORTSMATCH
  },
  groupChild3: {
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: 'solid',
    top: 0
  },
  hablaDeAquelloQueSeaMsRParent: {
    top: 24
  },
  describeTuClubParent: {
    top: 782,
    height: 214,
    width: 361,
    left: 14,
    position: 'absolute'
  },
  escogerDeporteItem: {
    borderColor: Color.colorDimgray_100,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166,
    left: 14
  },
  escogerDeporteInner: {
    left: 108
  },
  lineView: {
    left: 202
  },
  escogerDeporteChild1: {
    left: 297,
    borderColor: Color.bALONCESTO,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166
  },
  detallesDelClub: {
    // top: -113,
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: '500',
    width: '100%',
    // left: 0,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
    // position: 'absolute'
  },
  paso2: {
    // top: 98,
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: '100%',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupChild4: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
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
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  battery: {
    width: 25,
    height: 12,
    top: 0
  },
  wifiIcon: {
    width: 16,
    height: 11
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
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  starus: {
    left: 15,
    height: 24,
    top: 10
  },
  lineIcon: {
    marginLeft: -74,
    top: 831,
    width: 148,
    left: '50%',
    maxHeight: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    // borderRadius: Border.br_21xl,
    flex: 1,
    // height: '100%',
    // width: '100%',
    // height: 1125,
    overflow: 'hidden',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default EscogerDeporte2
