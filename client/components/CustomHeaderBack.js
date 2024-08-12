import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import { Image } from 'expo-image'
import NavigationBack from '../utils/CustomHooks/NavigationBack'


const CustomHeaderBack = ({ header, onBack }) => {
    return (
        <View style={styles.Arrowtext}>
            <NavigationBack>
                <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/coolicon3.png')}
                />
                <Text style={styles.editarPerfil2}>{header}</Text>
        </NavigationBack>
            </View>
    )
}

const styles = StyleSheet.create({
    Arrowtext: {
        height:80,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:18,
        gap:10
    },

    icon: {
        height: 18,
        width: 12
    },
    editarPerfil1: {
        marginLeft: 9
    },
    editarPerfil2: {
        fontSize: FontSize.h3TitleMEDIUM_size,
        fontWeight: '400',
        textAlign: 'left',
        fontFamily: FontFamily.t4TEXTMICRO,
        color: Color.wHITESPORTSMATCH
        , flexDirection: "column"
    },

})


export default CustomHeaderBack