import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border
} from '../../GlobalStyles'
import DetallesSeleccion from '../../components/DetallesSeleccion'
import { useSelector } from 'react-redux'
import Carousel from '../../components/Carousel'
import { useRoute } from '@react-navigation/native';
const Post = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const [page, setPage] = useState(1)
  const { user, allUsers } = useSelector((state) => state.users)
  const item = route.params;
  console.log("item", item)

  return (
    <View keyboardShouldPersistTaps={'always'} style={styles.paso6}>
      <View style={{flexDirection:"row" ,alignItems:"center",gap:10,paddingLeft:10}}>
      <Pressable
            // style={styles.coolicon}
            onPress={() => {
              console.log('EP')
              navigation.goBack()
            }}
          >
            <Image
              style={{width:20,height:20}}
              contentFit="cover"
              source={require('../../assets/coolicon3.png')}
            />
          </Pressable>
          <Pressable
            // style={styles.editarPerfil1}
            onPress={() => {
              console.log('EP')
              navigation.goBack()
            }}
          >
            <Text style={styles.editarPerfil2}>Post</Text>
          </Pressable>
      </View>
      <Carousel
        key={item.id}
        name={item?.author?.nickname}
        description={item?.description}
        imgPerfil={
          item?.author?.sportman
            ? item?.author?.sportman?.info?.img_front
            : item?.author?.club?.img_perfil
        }
        image={item?.image}
        club={item?.club === user?.user?.type}
        likes={item?.likes}
        commentCount={item?.commentCount}
        index={page}
        id={item?.id}
        userId={user?.user?.id}
        authorId={item.author.id}
        data={item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cooliconParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    left: 15
  },
  coolicon: {
    width: 9,
    height: 15
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  editarPerfil1: {
    marginLeft: 9
  },
  editarPerfil2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  paso6: {
    width: '100%',
    height:"100%",
    gap:20,
    backgroundColor: "black",
    paddingVertical:20,
    paddingHorizontal:10
  },
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  headersubirImagenesPerfil: {
    alignItems: 'center',
    marginTop: '10%'
  },
  circuloIcon: {
    width: 117,
    height: 117
  },
  botonSubirImagen: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 15,
    alignItems: 'center'
  },
  subirFotoDe: {
    color: Color.wHITESPORTSMATCH
  },
  paso4Typo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pesoMaximo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  rectangulobotonpesoMaximo: {
    height: 199,
    marginTop: 21,
    alignItems: 'center'
  },
  rectangulo: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro,
    width: '200%',
    flex: 1
  }
})

export default Post
