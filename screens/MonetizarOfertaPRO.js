import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const MonetizarOfertaPRO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monetizarOfertaPro}>
      <View style={[styles.component21, styles.componentPosition]}>
        <View style={[styles.component21Inner, styles.groupChildPosition]}>
          <View style={[styles.component21Inner, styles.groupChildPosition]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/group-4891.png")}
            />
            <Text style={[styles.pivot, styles.pivotPosition]}>Pívot</Text>
            <Text style={[styles.posicin, styles.pivotPosition]}>Posición</Text>
          </View>
        </View>
        <View style={[styles.component21Child, styles.childBorder]} />
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Masculino</Text>
          <Text style={styles.sexo}>Sexo</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Benjamín</Text>
          <Text style={styles.sexo}>Categoría</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.sexo}>Urgencia</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-691.png")}
          />
          <Text style={styles.sexo}>Retribución</Text>
        </View>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.pivot1, styles.pivot1Typo]}>Base</Text>
          <Text style={[styles.maresme, styles.pivot1Typo]}>Maresme</Text>
          <Text style={[styles.posicin1, styles.comarcaLayout]}>Posición</Text>
          <Text style={[styles.comarca, styles.comarcaLayout]}>Comarca</Text>
        </View>
        <View style={[styles.component21Item, styles.itemBg]} />
        <View style={[styles.aceptarWrapper, styles.aceptarLayout1]}>
          <View style={[styles.aceptar, styles.fondoBg]}>
            <Text
              style={[styles.verOferta, styles.verOfertaTypo]}
            >{`Inscríbete a la oferta `}</Text>
          </View>
        </View>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Image
          style={[styles.component21Child1, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-692.png")}
        />
      </View>
      <View style={[styles.component22, styles.componentPosition]}>
        <View style={[styles.component21Inner, styles.groupChildPosition]}>
          <View style={[styles.component21Inner, styles.groupChildPosition]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/group-4891.png")}
            />
            <Text style={[styles.pivot, styles.pivotPosition]}>Pívot</Text>
            <Text style={[styles.posicin, styles.pivotPosition]}>Posición</Text>
          </View>
        </View>
        <View style={[styles.component21Child, styles.childBorder]} />
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Masculino</Text>
          <Text style={styles.sexo}>Sexo</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Veteranos</Text>
          <Text style={styles.sexo}>Categoría</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.sexo}>Urgencia</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-691.png")}
          />
          <Text style={styles.sexo}>Retribución</Text>
        </View>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.pivot1, styles.pivot1Typo]}>Ala-Pívot</Text>
          <Text style={[styles.maresme, styles.pivot1Typo]}>Maresme</Text>
          <Text style={[styles.posicin1, styles.comarcaLayout]}>Posición</Text>
          <Text style={[styles.comarca, styles.comarcaLayout]}>Comarca</Text>
        </View>
        <View style={[styles.component21Item, styles.itemBg]} />
        <View style={[styles.aceptarWrapper, styles.aceptarLayout1]}>
          <View style={[styles.aceptar, styles.fondoBg]}>
            <Text
              style={[styles.verOferta, styles.verOfertaTypo]}
            >{`Inscríbete a la oferta `}</Text>
          </View>
        </View>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Image
          style={[styles.component21Child1, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-692.png")}
        />
      </View>
      <View style={[styles.component23, styles.componentPosition]}>
        <View style={[styles.component21Inner, styles.groupChildPosition]}>
          <View style={[styles.component21Inner, styles.groupChildPosition]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/group-4891.png")}
            />
            <Text style={[styles.pivot, styles.pivotPosition]}>Pívot</Text>
            <Text style={[styles.posicin, styles.pivotPosition]}>Posición</Text>
          </View>
        </View>
        <View style={[styles.component21Child, styles.childBorder]} />
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Masculino</Text>
          <Text style={styles.sexo}>Sexo</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.masculino}>Sénior</Text>
          <Text style={styles.sexo}>Categoría</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Text style={styles.sexo}>Urgencia</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-691.png")}
          />
          <Text style={styles.sexo}>Retribución</Text>
        </View>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.pivot1, styles.pivot1Typo]}>Pívot</Text>
          <Text style={[styles.maresme, styles.pivot1Typo]}>Maresme</Text>
          <Text style={[styles.posicin1, styles.comarcaLayout]}>Posición</Text>
          <Text style={[styles.comarca, styles.comarcaLayout]}>Comarca</Text>
        </View>
        <View style={[styles.component21Item, styles.itemBg]} />
        <View style={[styles.aceptarWrapper, styles.aceptarLayout1]}>
          <View style={[styles.aceptar, styles.fondoBg]}>
            <Text
              style={[styles.verOferta, styles.verOfertaTypo]}
            >{`Inscríbete a la oferta `}</Text>
          </View>
        </View>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Image
          style={[styles.component21Child1, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-692.png")}
        />
      </View>
      <View style={[styles.popup, styles.popupLayout]}>
        <View style={styles.popupFrame}>
          <View style={[styles.fondosColor, styles.popupLayout]}>
            <View style={[styles.fondo, styles.popupLayout]} />
            <Image
              style={[styles.cabezeraIcon, styles.lineViewPosition]}
              contentFit="cover"
              source={require("../assets/cabezera.png")}
            />
          </View>
          <View style={styles.contenido}>
            <Text style={[styles.pro, styles.proTypo]}>PRO</Text>
            <View style={styles.contenido1}>
              <View style={styles.contenidoInner}>
                <View style={styles.contenidoInner}>
                  <Text
                    style={[styles.loSentmosConContainer, styles.aceptarTypo]}
                  >
                    <Text style={styles.loSentmos}>{`¡Lo sentímos!
`}</Text>
                    <Text
                      style={styles.conTuModelo}
                    >{`Con tu modelo de suscripción no 
puedes visualizar más ofertas 
deportívas de los clubs.`}</Text>
                  </Text>
                  <View style={styles.precioTextoBoton}>
                    <View style={styles.precioTexto}>
                      <View style={styles.precio}>
                        <View style={styles.parent}>
                          <Text style={styles.text}>12,90€</Text>
                          <Text style={styles.aoTypo}>/mes</Text>
                        </View>
                        <Text style={[styles.ao, styles.aoTypo]}>
                          124,40€/año
                        </Text>
                      </View>
                      <Text
                        style={[styles.subeDeNivel, styles.verOfertaTypo]}
                      >{`¡Sube de nivel en tu cuenta para visualizar todas 
las ofertas deportívas de forma ilimitada!`}</Text>
                    </View>
                    <View style={styles.botonesFrame}>
                      <View>
                        <LinearGradient
                          style={styles.loremIpsum}
                          locations={[0, 0.18, 0.38, 0.58, 0.79, 1]}
                          colors={[
                            "#e6b300",
                            "#bd9710",
                            "#ebc02a",
                            "#e6b300",
                            "#bd9710",
                            "#ebc02a",
                          ]}
                        >
                          <Pressable
                            style={[styles.pressable, styles.pressableFlexBox]}
                            onPress={() =>
                              navigation.navigate("ConfigurarAnuncio")
                            }
                          >
                            <Text style={[styles.aceptar3, styles.aceptarTypo]}>
                              Contínuar
                            </Text>
                          </Pressable>
                        </LinearGradient>
                      </View>
                      <Pressable
                        style={[styles.loremIpsum1, styles.pressableFlexBox]}
                        onPress={() =>
                          navigation.navigate("SiguiendoJugadores")
                        }
                      >
                        <Text style={[styles.aceptar4, styles.aceptarTypo]}>
                          No, gracias
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menuClub}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <View style={[styles.menuClubChild, styles.groupChildPosition]} />
        <View style={styles.menuClubItem} />
        <View style={styles.menuClubInner} />
        <Image
          style={[styles.menuClubChild1, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/group-535.png")}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Image
          style={[styles.menuClubChild2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <View style={styles.groupParent2}>
          <Image
            style={[styles.groupChild20, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/group-5401.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("TusMensajes")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-5391.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menuClubChild3, styles.menuClubChild3Layout]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.menuClubChild3Layout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-83.png")}
        />
      </View>
      <View style={styles.cabezeraBuscadorFiltros}>
        <View style={styles.cabezera}>
          <View style={styles.cooliconParent}>
            <Pressable
              style={styles.coolicon}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/coolicon3.png")}
              />
            </Pressable>
            <Pressable
              style={styles.ofertas}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.ofertas1, styles.proTypo]}>Ofertas</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buscadorFiltros}>
          <Image
            style={[styles.pictogramaFiltrosIcon, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/pictograma-filtros.png")}
          />
          <View style={styles.buscador}>
            <View style={[styles.buscadorChild, styles.aceptarLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.iphonePosition}>
        <View style={[styles.uiIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.fondoBg]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection2.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentPosition: {
    height: 400,
    left: "50%",
    marginLeft: -180,
    width: 360,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pivotPosition: {
    display: "none",
    left: "53.56%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectanglePosition: {
    bottom: "75%",
    top: "5%",
    width: "41.67%",
    height: "20%",
    position: "absolute",
  },
  itemBg: {
    opacity: 0.5,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: "absolute",
  },
  groupPosition: {
    left: "52.78%",
    right: "5.56%",
  },
  groupViewPosition: {
    bottom: "25%",
    top: "55%",
    width: "41.67%",
    height: "20%",
    position: "absolute",
  },
  groupIconLayout: {
    height: 18,
    width: 122,
    position: "absolute",
  },
  groupChildLayout: {
    width: "46.73%",
    opacity: 0.5,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  pivot1Typo: {
    top: "42.5%",
    width: "46.73%",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.button_size,
    height: "22.5%",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "500",
    position: "absolute",
  },
  comarcaLayout: {
    width: "44.55%",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    height: "21.25%",
    top: "5%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  aceptarLayout1: {
    width: 179,
    left: "50%",
  },
  fondoBg: {
    backgroundColor: Color.wHITESPORTSMATCH,
    position: "absolute",
  },
  verOfertaTypo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  lineViewPosition: {
    width: 361,
    left: 0,
    position: "absolute",
  },
  popupLayout: {
    height: 550,
    width: 361,
  },
  proTypo: {
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  aceptarTypo: {
    fontSize: FontSize.button_size,
    textAlign: "center",
  },
  aoTypo: {
    lineHeight: 31,
    color: Color.colorDimgray_100,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  pressableFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
  },
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
  },
  iconPosition: {
    bottom: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIconLayout: {
    width: 0,
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  menuClubChild3Layout: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aceptarLayout: {
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  iphonePosition: {
    height: 34,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  groupChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  pivot: {
    height: "6.5%",
    width: "46.44%",
    top: "67.05%",
    fontSize: FontSize.size_lgi_3,
    lineHeight: 21,
    fontWeight: "500",
    display: "none",
    left: "53.56%",
  },
  posicin: {
    height: "4.13%",
    width: "16.22%",
    top: "58.2%",
    fontSize: FontSize.size_smi_9,
    display: "none",
    left: "53.56%",
  },
  component21Inner: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  component21Child: {
    borderColor: Color.colorDimgray_100,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  groupItem: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  masculino: {
    top: "40%",
    textAlign: "center",
    lineHeight: 20,
    height: "22.5%",
    fontSize: FontSize.button_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "500",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  sexo: {
    width: "95.33%",
    left: "4.67%",
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    height: "21.25%",
    top: "5%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  rectangleParent: {
    left: "5.56%",
    right: "52.78%",
  },
  rectangleGroup: {
    bottom: "75%",
    top: "5%",
    width: "41.67%",
    height: "20%",
    position: "absolute",
  },
  rectangleContainer: {
    left: "5.56%",
    right: "52.78%",
  },
  groupIcon: {
    top: 31,
    left: 14,
  },
  groupView: {
    left: "52.78%",
    right: "5.56%",
  },
  groupChild2: {
    right: "53.27%",
    left: "0%",
  },
  groupChild3: {
    right: "0.31%",
    left: "52.96%",
  },
  pivot1: {
    left: "0%",
  },
  maresme: {
    left: "53.27%",
  },
  posicin1: {
    left: "2.18%",
  },
  comarca: {
    left: "55.14%",
  },
  rectangleParent1: {
    width: "89.17%",
    top: "30%",
    right: "5.28%",
    bottom: "50%",
    left: "5.56%",
    height: "20%",
    position: "absolute",
  },
  component21Item: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 70,
    left: 0,
    top: 330,
    width: 360,
  },
  verOferta: {
    color: Color.bLACK1SPORTSMATCH,
    fontWeight: "700",
  },
  aceptar: {
    marginLeft: -89.5,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    width: 179,
    left: "50%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  aceptarWrapper: {
    height: "6.75%",
    marginLeft: -89,
    top: "88.25%",
    bottom: "5%",
    position: "absolute",
  },
  lineView: {
    borderTopWidth: 1,
    height: 1,
    top: 330,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
  },
  component21Child1: {
    top: 256,
    left: 34,
  },
  component21: {
    top: 1119,
  },
  component22: {
    top: 1589,
  },
  component23: {
    top: 2059,
  },
  fondo: {
    borderRadius: Border.br_mini,
    top: 0,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: "absolute",
    left: 0,
  },
  cabezeraIcon: {
    height: 80,
    top: 0,
  },
  fondosColor: {
    zIndex: 0,
  },
  pro: {
    alignSelf: "stretch",
    fontWeight: "700",
    textAlign: "center",
  },
  loSentmos: {
    fontWeight: "700",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  conTuModelo: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loSentmosConContainer: {
    color: Color.bLACK2SPORTMATCH,
    alignSelf: "stretch",
    textAlign: "center",
  },
  text: {
    fontSize: 70,
    lineHeight: 74,
    color: Color.colorDimgray_100,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  parent: {
    height: 62,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  ao: {
    alignSelf: "stretch",
    flex: 1,
  },
  precio: {
    height: 85,
    alignItems: "center",
  },
  subeDeNivel: {
    marginTop: 32,
    width: 360,
  },
  precioTexto: {
    alignItems: "center",
  },
  aceptar3: {
    fontWeight: "700",
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  pressable: {
    backgroundColor: Color.promocio,
    width: "100%",
  },
  loremIpsum: {
    width: 299,
  },
  aceptar4: {
    color: Color.gREY2SPORTSMATCH,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loremIpsum1: {
    width: 299,
  },
  botonesFrame: {
    marginTop: 20,
  },
  precioTextoBoton: {
    marginTop: 24,
    alignItems: "center",
  },
  contenidoInner: {
    alignItems: "flex-end",
  },
  contenido1: {
    marginTop: 120,
    alignItems: "flex-end",
  },
  contenido: {
    top: 33,
    zIndex: 1,
    left: 0,
    position: "absolute",
  },
  popupFrame: {
    top: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  popup: {
    top: 163,
    left: 15,
    position: "absolute",
  },
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon1: {
    top: "21.79%",
    right: "9.74%",
    left: "81.28%",
    width: "8.97%",
    height: "44.87%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  menuClubItem: {
    width: "19.74%",
    right: "59.49%",
    left: "20.77%",
    backgroundColor: Color.bLACK3SPORTSMATCH,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  menuClubInner: {
    height: "3.85%",
    width: "20.51%",
    top: "1.92%",
    right: "59.1%",
    bottom: "94.23%",
    left: "20.38%",
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  menuClubChild1: {
    height: "37.95%",
    width: "7.69%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    left: "25.9%",
  },
  lineIcon: {
    left: "20.77%",
  },
  menuClubChild2: {
    left: "40.51%",
  },
  groupChild20: {
    width: "11.94%",
    right: "88.06%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: "absolute",
  },
  groupParent2: {
    height: "39.23%",
    width: "68.69%",
    top: "19.74%",
    right: "25.41%",
    bottom: "41.03%",
    left: "5.9%",
    position: "absolute",
  },
  menuClubChild3: {
    right: "44.87%",
    left: "46.15%",
  },
  maskGroupIcon2: {
    right: "6.15%",
    left: "84.87%",
  },
  ellipseIcon: {
    height: "6.41%",
    width: "1.28%",
    top: "60.26%",
    right: "28.97%",
    left: "69.74%",
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    left: "50%",
    position: "absolute",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  ofertas1: {
    width: 74,
    height: 22,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: "500",
  },
  ofertas: {
    marginLeft: 9,
  },
  cooliconParent: {
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  cabezera: {
    width: 92,
    height: 22,
  },
  pictogramaFiltrosIcon: {
    height: "46.11%",
    width: "6.38%",
    top: "25%",
    bottom: "28.89%",
    left: "93.62%",
    right: "0%",
  },
  buscadorChild: {
    borderColor: Color.wHITESPORTSMATCH,
    top: 0,
    alignItems: "center",
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  buscador: {
    width: 312,
    height: 36,
    top: 0,
    left: 0,
    position: "absolute",
  },
  buscadorFiltros: {
    width: 349,
    height: 36,
    marginTop: 20,
  },
  cabezeraBuscadorFiltros: {
    top: 60,
    left: 16,
    justifyContent: "center",
    position: "absolute",
  },
  uiIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
  },
  battery: {
    width: 25,
    height: 12,
    top: 0,
  },
  wifiIcon: {
    width: 16,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: "absolute",
  },
  time: {
    marginTop: -9.55,
    top: "50%",
    left: 4,
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    width: 61,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    top: 10,
    height: 24,
    left: 15,
  },
  monetizarOfertaPro: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default MonetizarOfertaPRO;
