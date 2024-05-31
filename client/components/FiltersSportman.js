import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, FontFamily } from '../GlobalStyles'
import { Image } from 'expo-image'
import { useDispatch } from 'react-redux'
import { filterPost } from '../redux/actions/post'
import { setFilterPost } from '../redux/slices/post.slices'

const FiltersSportman = ({ posts, onClose, allPosts, setPosts , sports }) => {

  const copy = posts ? [...posts] : []
  const change = copy.sort((a, b) => b.likes - a.likes);

  const change2 = copy.sort((a, b) => b.commentCount - a.commentCount);


  const dispatch = useDispatch()

  if(posts){

 
  return (
    <View
      style={{
        backgroundColor: Color.bLACK3SPORTSMATCH,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
      }}
    >
      <Text
        style={{
          color: Color.gREY2SPORTSMATCH,
          fontFamily: FontFamily.openSansSemiBold
        }}
      >
        Filtros sugeridos
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.gREY2SPORTSMATCH,
          marginVertical: 5,
          width: '100%'
        }}
      />

      <TouchableOpacity
           onPress={() => {
            // Genera una nueva copia del array de posts ordenado por la cantidad de likes
            const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
            // Actualiza el estado de los posts con la nueva copia ordenada
            setPosts(sortedPosts);
          }}

        style={{
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: Color.colorWhitesmoke,
            fontFamily: FontFamily.openSansSemiBold
          }}
        >
          Por proximidad
        </Text>
        <Image
          style={{ width: 14, height: 17 }}
          contentFit="cover"
          source={require('../assets/pictograma.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.gREY2SPORTSMATCH,
          marginVertical: 5,
          width: '100%'
        }}
      />
      <TouchableOpacity
         onPress={() => {
          // Genera una nueva copia del array de posts ordenado por la cantidad de likes
          const sortedPosts = [...posts].sort((a, b) => b.commentCount - a.commentCount);
          // Actualiza el estado de los posts con la nueva copia ordenada
          setPosts(sortedPosts);
        }}

        style={{
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: Color.colorWhitesmoke,
            fontFamily: FontFamily.openSansSemiBold
          }}
        >
          Por relevancia
        </Text>
        <Image
          style={{ width: 14, height: 16 }}
          contentFit="cover"
          source={require('../assets/group6.png')}
        />
      </TouchableOpacity>
    </View>
  ) }
  if(sports){
    return (
      <View
        style={{
          backgroundColor: Color.bLACK3SPORTSMATCH,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 8
        }}
      >
        <Text
          style={{
            color: Color.gREY2SPORTSMATCH,
            fontFamily: FontFamily.openSansSemiBold
          }}
        >
          Filtros sugeridos
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: Color.gREY2SPORTSMATCH,
            marginVertical: 5,
            width: '100%'
          }}
        />
  
        <TouchableOpacity
             onPress={() => {
              // Genera una nueva copia del array de posts ordenado por la cantidad de likes
              // const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
              // // Actualiza el estado de los posts con la nueva copia ordenada
              // setPosts(sortedPosts);
            }}
  
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: Color.colorWhitesmoke,
              fontFamily: FontFamily.openSansSemiBold
            }}
          >
            Por proximidad
          </Text>
          <Image
            style={{ width: 14, height: 17 }}
            contentFit="cover"
            source={require('../assets/pictograma.png')}
          />
        </TouchableOpacity>
  
        <View
          style={{
            borderWidth: 0.5,
            borderColor: Color.gREY2SPORTSMATCH,
            marginVertical: 5,
            width: '100%'
          }}
        />
        <TouchableOpacity
           onPress={() => {
            // Genera una nueva copia del array de posts ordenado por la cantidad de likes
            // const sortedPosts = [...posts].sort((a, b) => b.commentCount - a.commentCount);
            // // Actualiza el estado de los posts con la nueva copia ordenada
            // setPosts(sortedPosts);
          }}
  
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: Color.colorWhitesmoke,
              fontFamily: FontFamily.openSansSemiBold
            }}
          >
            Por relevancia
          </Text>
          <Image
            style={{ width: 14, height: 16 }}
            contentFit="cover"
            source={require('../assets/group6.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default FiltersSportman
