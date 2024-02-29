import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'
import LikeSVG from '../components/svg/LikeSVG'
import ShareSVG from '../components/svg/ShareSVG'
import CommentSVG from '../components/svg/CommentSVG'
import FooterNavBar from '../components/FooterNavBar'

const SiguiendoUsuarios = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.siguiendoUsuarios}>
      <View style={styles.cabezeraContenido}>
        <View style={styles.superiorLayout}>
          <Pressable style={styles.logo}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require('../assets/logo2.png')}
            />
          </Pressable>
          <View style={styles.rightDisplayLayout}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require('../assets/group-6581.png')}
            />
            <Image
              style={styles.line}
              contentFit="cover"
              source={require('../assets/line-5.png')}
            />
            <Image
              style={styles.groupIcon1}
              contentFit="cover"
              source={require('../assets/group4.png')}
            />
          </View>
        </View>
        <View style={styles.contenido}>
          <View style={styles.topNameContainer}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require('../assets/mask-group1.png')}
            />
            <Text style={[styles.jordiEspelt, styles.jordiTypo]}>
              Jordi Espelt
            </Text>
          </View>
          <View style={styles.postLayout}>
            <View style={[styles.contenidoPost, styles.postPosition]}>
              <Image
                style={styles.imagenIcon}
                contentFit="cover"
                source={require('../assets/imagen4.png')}
              />
              <View style={styles.footerPost}>
                <View style={styles.likesBullets}>
                  <Text style={[styles.likes, styles.jordiTypo]}>
                    236 likes
                  </Text>
                  <View style={styles.bulletsSlider}>
                    <View style={styles.bullets}>
                      <View style={styles.component6}>
                        <Image
                          style={styles.component6Layout}
                          contentFit="cover"
                          source={require('../assets/ellipse-85.png')}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout
                          ]}
                          contentFit="cover"
                          source={require('../assets/ellipse-85.png')}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout
                          ]}
                          contentFit="cover"
                          source={require('../assets/ellipse-83.png')}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout
                          ]}
                          contentFit="cover"
                          source={require('../assets/ellipse-85.png')}
                        />
                        <Image
                          style={[
                            styles.component6Item,
                            styles.component6Layout
                          ]}
                          contentFit="cover"
                          source={require('../assets/ellipse-85.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.iconsContainer}>
                  <LikeSVG />
                  <ShareSVG />
                  <CommentSVG />
                </View>
              </View>
              <View style={styles.textoPost}>
                <Text style={[styles.jordiEspeltMireu, styles.jordiTypo]}>
                  Jordi Espelt Mireu quina jugada vaig fer l’altre dia entrenant
                  al camp del meu poble. Toooop!... más
                </Text>
                <Text style={[styles.verLos24, styles.verLos24Typo]}>
                  Ver los 24 comentarios
                </Text>
                <Text style={[styles.alexMijaresPedazo, styles.verLos24Typo]}>
                  Alex Mijares Pedazo de jugada crack! Graaan!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FooterNavBar />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  superiorLayout: {
    height: 45,
    width: 120,
    flexDirection: 'row'
  },
  rightDisplayLayout: {
    height: 45,
    width: 120,
    left: '40%',
    backgroundColor: Color.bALONCESTO,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18
  },
  jordiTypo: {
    textAlign: 'left',
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  verLos24Typo: {
    marginTop: 2,
    textAlign: 'left',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  component6Layout: {
    height: 5,
    width: 5
  },
  postLayout: {
    height: 620,
    width: 360
  },
  maskGroupIcon: {
    width: 40,
    height: 40
  },
  logo: {
    width: 186,
    height: 44
  },
  groupIcon1: {
    height: '57.11%',
    width: '27.75%'
  },
  line: {
    height: '90%',
    width: 0.5
  },
  frameInner: {
    width: 31,
    height: 31,
    marginLeft: 10
  },
  jordiEspeltMireu: {
    lineHeight: 17,
    textAlign: 'left',
    fontSize: FontSize.t1TextSMALL_size
  },
  verLos24: {
    color: Color.gREY2SPORTSMATCH
  },
  alexMijaresPedazo: {
    color: Color.wHITESPORTSMATCH,
    marginTop: 2,
    fontWeight: '700'
  },
  textoPost: {
    top: '10%'
  },
  imagenIcon: {
    borderRadius: Border.br_10xs,
    alignSelf: 'stretch',
    width: '100%',
    flex: 1
  },
  likes: {
    textAlign: 'left',
    fontSize: FontSize.t1TextSMALL_size
  },
  component6Item: {
    marginLeft: 4
  },
  component6: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexDirection: 'row'
  },
  bullets: {
    flexDirection: 'row'
  },
  bulletsSlider: {
    padding: Padding.p_3xs,
    marginLeft: 71
  },
  likesBullets: {
    width: '58%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerPost: {
    marginTop: 20,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  contenidoPost: {
    top: 15,
    width: 362,
    height: 495
  },
  jordiEspelt: {
    width: '79.81%',
    lineHeight: 17,
    textAlign: 'left',
    fontSize: FontSize.t1TextSMALL_size
  },
  contenido: {
    marginTop: 20
  },
  cabezeraContenido: {
    padding: Padding.p_3xs,
    top: '4%'
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12
  },
  siguiendoUsuarios: {
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  topNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38%',
    height: '130%',
    backgroundColor: Color.bLACK3SPORTSMATCH,
    borderRadius: 30,
    gap: 14
  }
})

export default SiguiendoUsuarios
