import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Color, FontFamily } from '../GlobalStyles'
import { Image } from 'expo-image'


const FiltersSportman = ({
  posts,
  onClose,
  allPosts,
  setPosts,
  sports,
  setFilterSelected,
  filterSelected,
  setOffer,
  offer,
  setSelectedSports,
  selectedSports,
  byRelevance,
  setByRelevance
}) => {
  const sportsNames = [
    'Fútbol',
    'Fútbol Sala',
    'Básquetbol',
    'Voley',
    'Hockey',
    'Handball'
  ]

  const toggleSport = (sport) => {
    setSelectedSports((prevSports) => {
      if (prevSports.includes(sport)) {
        setOffer(offer)
        return prevSports.filter((s) => s !== sport)
      } else {
        return [sport]
      }
    })
  }


  const reorganizeAndSortPostsLikes = (postGroups) => {
    // Aplanar todos los posts en un solo array
    let allPosts = [];
    postGroups.forEach(group => {
      allPosts = allPosts.concat(group.columnItems, group.rightItem);
    });
  
    // Ordenar los posts por likes
    const sortedPosts = allPosts.sort((a, b) => b.likes - a.likes);
  
    // Redistribuir los posts en la estructura original
    const newPostGroups = postGroups.map(group => {
      const newColumnItems = sortedPosts.splice(0, group.columnItems.length);
      const newRightItem = sortedPosts.splice(0, 1)[0];
      return {
        columnItems: newColumnItems,
        rightItem: newRightItem
      };
    });
  
    return newPostGroups;
  };

  const reorganizeAndSortPostsComment = (postGroups) => {
    // Aplanar todos los posts en un solo array
    let allPosts = [];
    postGroups.forEach(group => {
      allPosts = allPosts.concat(group.columnItems, group.rightItem);
    });
  
    // Ordenar los posts por likes
    const sortedPosts = allPosts.sort((a, b) => b.commentCount - a.commentCount);
  
    // Redistribuir los posts en la estructura original
    const newPostGroups = postGroups.map(group => {
      const newColumnItems = sortedPosts.splice(0, group.columnItems.length);
      const newRightItem = sortedPosts.splice(0, 1)[0];
      return {
        columnItems: newColumnItems,
        rightItem: newRightItem
      };
    });
  
    return newPostGroups;
  };



  if (posts) {
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
            // Actualiza el estado de los posts con la nueva copia ordenada
            setFilterSelected('Por proximidad')
            setPosts(reorganizeAndSortPostsLikes(posts))
          }}
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {filterSelected == 'Por proximidad' && (
            <Image
              style={{ width: 10, height: 10 }}
              source={require('../assets/tildeBlanca.png')}
            ></Image>
          )}
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
   
            setFilterSelected('Por relevancia')

            setPosts(reorganizeAndSortPostsComment(posts))
          }}
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {filterSelected == 'Por relevancia' && (
            <Image
              style={{ width: 10, height: 10 }}
              source={require('../assets/tildeBlanca.png')}
            ></Image>
          )}
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
  if (sports) {
    return (
      <View
        style={{
          backgroundColor: Color.bLACK3SPORTSMATCH,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 8,
          gap: 10
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

        {sportsNames.map((sport, index) => (
          <TouchableOpacity
            onPress={() => {
              toggleSport(sport)
              console.log('offer', offer)
              const filt = offer.filter((s) => s?.club?.sport === sport)
              console.log('filtered offers', filt)
              setOffer(filt)
              // Genera una nueva copia del array de posts ordenado por la cantidad de likes
              // const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
              // // Actualiza el estado de los posts con la nueva copia ordenada
              // setPosts(sortedPosts);
            }}
            style={{
              flexDirection: 'row',
              gap: 8,
              width: 110,
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {selectedSports.includes(sport) && (
              <Image
                style={{
                  width: 10 * 1.2,
                  height: 7 * 1.2,
                  position: 'absolute',
                  left: -25
                }}
                contentFit="cover"
                source={require('../assets/tick.png')}
              />
            )}
            <Text
              style={{
                color: Color.colorWhitesmoke,
                fontFamily: FontFamily.openSansSemiBold
              }}
            >
              {sport}
            </Text>
            <Image
              style={{ width: 14, height: 17 }}
              contentFit="cover"
              source={require('../assets/pictograma.png')}
            />
          </TouchableOpacity>
        ))}

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
            setByRelevance((prevByRelevance) => {
              const newByRelevance = !prevByRelevance

              // const filt = [...offer].sort((a, b) => {
              //   const first = a.inscriptions?.length || 0
              //   const second = b.inscriptions?.length || 0
              //   console.log('first', first, 'second', second)

              //   return newByRelevance ? second - first : first - second
              // })

              // setOffer(filt)
              return newByRelevance
            })
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 120,
            marginBottom: 5,
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
          {byRelevance && (
            <Image
              style={{
                width: 10 * 1.2,
                height: 7 * 1.2,
                position: 'absolute',
                left: -25
              }}
              contentFit="cover"
              source={require('../assets/tick.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    )
  }
}

export default FiltersSportman
