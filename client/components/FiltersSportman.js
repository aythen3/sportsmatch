import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Color, FontFamily } from '../GlobalStyles'
import { Image } from 'expo-image'
import { useDispatch } from 'react-redux'
import { filterPost } from '../redux/actions/post'
import { setFilterPost } from '../redux/slices/post.slices'

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
  selectedSports
}) => {
  const sportsNames = [
    'Fútbol',
    'Fútbol Sala',
    'Básquetbol',
    'Voley',
    'Hockey',
    'Handball'
  ]
  const copy = posts ? [...posts] : []
  const change = copy.sort((a, b) => b.likes - a.likes)

  const change2 = copy.sort((a, b) => b.commentCount - a.commentCount)

  const dispatch = useDispatch()

  const toggleSport = (sport) => {
    setSelectedSports((prevSports) => {
      if (prevSports.includes(sport)) {
        setOffer(offer)
        return prevSports.filter((s) => s !== sport)
      } else {
        return [ sport]
      }
    })
  }

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
            const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes)
            // Actualiza el estado de los posts con la nueva copia ordenada
            setFilterSelected('Por proximidad')
            setPosts(sortedPosts)
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
            // Genera una nueva copia del array de posts ordenado por la cantidad de likes
            const sortedPosts = [...posts].sort(
              (a, b) => b.commentCount - a.commentCount
            )
            // Actualiza el estado de los posts con la nueva copia ordenada
            setFilterSelected('Por relevancia')

            setPosts(sortedPosts)
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
              const filt = offer.filter(s => s.sport === sport)
              console.log(filt)
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
            // Genera una nueva copia del array de posts ordenado por la cantidad de likes
            // const sortedPosts = [...posts].sort((a, b) => b.commentCount - a.commentCount);
            // // Actualiza el estado de los posts con la nueva copia ordenada
            // setPosts(sortedPosts);
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
        </TouchableOpacity>
      </View>
    )
  }
}

export default FiltersSportman
