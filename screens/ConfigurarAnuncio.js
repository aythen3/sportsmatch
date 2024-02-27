import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const ConfigurarAnuncio = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.configurarAnuncio, styles.iconLayout1]}>
      <View style={styles.contenido}>
        <View>
          <View style={styles.header}>
            <Pressable
              style={styles.configuraTuOfertaContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.configuraTuOferta}>Configura tu oferta</Text>
            </Pressable>
            <Pressable
              style={styles.simbolo}
              onPress={() => navigation.navigate("SiguiendoJugadores")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/simbolo5.png")}
              />
            </Pressable>
          </View>
          <View style={styles.camposBotones}>
            <View>
              <View>
                <View style={styles.sexo}>
                  <Text style={styles.title}>Sexo</Text>
                  <View style={[styles.field, styles.fieldSpaceBlock]}>
                    <View style={styles.textFlexBox}>
                      <Text style={[styles.unit, styles.unitClr]}>€</Text>
                      <View style={[styles.text, styles.textFlexBox]}>
                        <Text style={[styles.placeholder, styles.unitClr]}>
                          Añade una cantídad
                        </Text>
                        <Image
                          style={[styles.cursorIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/cursor.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={[styles.icon1, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <Text style={[styles.supportText, styles.unitClr]}>
                    Support text
                  </Text>
                </View>
                <View style={[styles.campoSexo, styles.campoBorder]}>
                  <Text style={[styles.masculino, styles.timeTypo]}>
                    Masculino
                  </Text>
                  <Image
                    style={[styles.simboloIcon, styles.simboloIconLayout]}
                    contentFit="cover"
                    source={require("../assets/coolicon5.png")}
                  />
                </View>
              </View>
              <View style={styles.moduloCategoria}>
                <View style={styles.sexo}>
                  <Text style={styles.title}>Categoría</Text>
                  <View style={[styles.field, styles.fieldSpaceBlock]}>
                    <View style={styles.textFlexBox}>
                      <Text style={[styles.unit, styles.unitClr]}>€</Text>
                      <View style={[styles.text, styles.textFlexBox]}>
                        <Text style={[styles.placeholder, styles.unitClr]}>
                          Añade una cantídad
                        </Text>
                        <Image
                          style={[styles.cursorIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/cursor.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={[styles.icon1, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <Text style={[styles.supportText, styles.unitClr]}>
                    Support text
                  </Text>
                </View>
                <View style={[styles.campoCategoria, styles.campoBorder]}>
                  <Text style={[styles.snior, styles.sniorClr]}>Sénior</Text>
                  <Image
                    style={[styles.simboloIcon1, styles.simboloIconLayout]}
                    contentFit="cover"
                    source={require("../assets/coolicon5.png")}
                  />
                </View>
              </View>
              <View style={styles.moduloCategoria}>
                <View style={styles.sexo}>
                  <Text style={styles.title}>Posición</Text>
                  <View style={[styles.field, styles.fieldSpaceBlock]}>
                    <View style={styles.textFlexBox}>
                      <Text style={[styles.unit, styles.unitClr]}>€</Text>
                      <View style={[styles.text, styles.textFlexBox]}>
                        <Text style={[styles.placeholder, styles.unitClr]}>
                          Añade una cantídad
                        </Text>
                        <Image
                          style={[styles.cursorIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/cursor.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={[styles.icon1, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <Text style={[styles.supportText, styles.unitClr]}>
                    Support text
                  </Text>
                </View>
                <View style={[styles.campoCategoria, styles.campoBorder]}>
                  <Text style={[styles.snior, styles.sniorClr]}>Pívot</Text>
                  <Image
                    style={[styles.simboloIcon2, styles.simboloIconLayout]}
                    contentFit="cover"
                    source={require("../assets/coolicon5.png")}
                  />
                </View>
              </View>
              <View style={styles.moduloCategoria}>
                <View style={styles.sexo}>
                  <Text style={styles.title}>Urgencia</Text>
                  <View style={[styles.field, styles.fieldSpaceBlock]}>
                    <View style={styles.textFlexBox}>
                      <Text style={[styles.unit, styles.unitClr]}>€</Text>
                      <View style={[styles.text, styles.textFlexBox]}>
                        <Text style={[styles.placeholder, styles.unitClr]}>
                          Añade una cantídad
                        </Text>
                        <Image
                          style={[styles.cursorIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/cursor.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={[styles.icon1, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <Text style={[styles.supportText, styles.unitClr]}>
                    Support text
                  </Text>
                </View>
                <View style={[styles.campoCategoria, styles.campoBorder]}>
                  <Text style={[styles.snior, styles.sniorClr]}>8</Text>
                  <Image
                    style={[styles.simboloIcon3, styles.simboloIconLayout]}
                    contentFit="cover"
                    source={require("../assets/coolicon5.png")}
                  />
                </View>
              </View>
              <View style={styles.moduloCategoria}>
                <View style={styles.sexo}>
                  <Text style={styles.title}>Retribución</Text>
                  <View style={[styles.field, styles.fieldSpaceBlock]}>
                    <View style={styles.textFlexBox}>
                      <Text style={[styles.unit, styles.unitClr]}>€</Text>
                      <View style={[styles.text, styles.textFlexBox]}>
                        <Text style={[styles.placeholder, styles.unitClr]}>
                          Añade una cantídad
                        </Text>
                        <Image
                          style={[styles.cursorIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/cursor.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={[styles.icon1, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <Text style={[styles.supportText, styles.unitClr]}>
                    Support text
                  </Text>
                </View>
                <View style={[styles.campoCategoria, styles.campoBorder]}>
                  <Text style={[styles.snior, styles.sniorClr]}>Si</Text>
                  <Image
                    style={[styles.simboloIcon4, styles.simboloIconLayout]}
                    contentFit="cover"
                    source={require("../assets/coolicon5.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.botonsOferta}
          onPress={() => navigation.navigate("SiguiendoJugadores")}
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
              source={require("../assets/cap1.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.configurarAnuncioChild}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  fieldSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  unitClr: {
    color: Color.neutralDarkLightest,
    textAlign: "left",
  },
  textFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  iconLayout: {
    height: 16,
    display: "none",
  },
  campoBorder: {
    paddingVertical: Padding.p_3xs,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  simboloIconLayout: {
    width: 12,
    height: 7,
  },
  sniorClr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  boitonCrearFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    justifyContent: "center",
    width: 360,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
  },
  ofertaTypo: {
    fontWeight: "700",
    fontSize: FontSize.button_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  groupChildPosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    height: 12,
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  configuraTuOferta: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  configuraTuOfertaContainer: {
    zIndex: 0,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  simbolo: {
    left: "184.04%",
    top: "18.18%",
    right: "-91.91%",
    bottom: "13.64%",
    width: "7.87%",
    height: "68.18%",
    zIndex: 1,
    position: "absolute",
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontSize: FontSize.t2TextSTANDARD_size,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  unit: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.bodyBodyXS,
    color: Color.neutralDarkLightest,
    display: "none",
    lineHeight: 18,
  },
  placeholder: {
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  cursorIcon: {
    width: 0,
    marginLeft: 1,
  },
  text: {
    marginLeft: 6,
  },
  icon1: {
    marginLeft: 8,
    width: 16,
    overflow: "hidden",
  },
  field: {
    borderRadius: Border.br_xs,
    borderColor: Color.colorSilver,
    height: 48,
    paddingVertical: Padding.p_xs,
    display: "none",
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
  },
  supportText: {
    fontSize: FontSize.bodyBodyXS_size,
    letterSpacing: 0.2,
    lineHeight: 14,
    fontFamily: FontFamily.bodyBodyXS,
    color: Color.neutralDarkLightest,
    display: "none",
    marginTop: 8,
    alignSelf: "stretch",
  },
  sexo: {
    alignSelf: "stretch",
  },
  masculino: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  simboloIcon: {
    marginLeft: 239,
    height: 7,
  },
  campoSexo: {
    marginTop: 12,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    borderColor: Color.gREY2SPORTSMATCH,
    borderRadius: Border.br_81xl,
  },
  snior: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "left",
  },
  simboloIcon1: {
    marginLeft: 263,
    height: 7,
  },
  campoCategoria: {
    paddingHorizontal: Padding.p_lgi,
    marginTop: 9,
  },
  moduloCategoria: {
    marginTop: 29,
  },
  simboloIcon2: {
    marginLeft: 275,
    height: 7,
  },
  simboloIcon3: {
    marginLeft: 300,
    height: 7,
  },
  simboloIcon4: {
    marginLeft: 298,
    height: 7,
  },
  camposBotones: {
    marginTop: 20,
  },
  promocionarOferta: {
    color: Color.wHITESPORTSMATCH,
  },
  botonPromocion: {
    backgroundColor: Color.colorDimgray_100,
  },
  crearOferta: {
    color: Color.bLACK1SPORTSMATCH,
  },
  boitonCrear: {
    marginTop: 13,
    backgroundColor: Color.wHITESPORTSMATCH,
  },
  botonsOferta: {
    marginTop: 50,
    flexDirection: "row",
  },
  contenido: {
    top: 59,
    left: 14,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390,
    left: 0,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: "solid",
    top: 0,
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
    backgroundColor: Color.wHITESPORTSMATCH,
    height: 7,
    position: "absolute",
  },
  battery: {
    width: 25,
    height: 12,
    top: 0,
  },
  wifiIcon: {
    height: 11,
    width: 16,
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
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
    lineHeight: 18,
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  configurarAnuncioChild: {
    marginLeft: -74,
    top: 831,
    left: "50%",
    width: 148,
    maxHeight: "100%",
    position: "absolute",
  },
  configurarAnuncio: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default ConfigurarAnuncio;
