import { View, Text, Pressable, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderIcons from '../../components/HeaderIcons'
import FiltersHome from '../../components/FiltersHome'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'

const UserFollowers = () => {
  const [search, setSearch] = useState('')
  const { user } = useSelector((state) => state.users)
  const route = useRoute()
  const navigation = useNavigation()
  const [followers, setFollowers] = useState(route.params.followers || [])
  useEffect(() => {
    if (search.length > 0) {
      const actualFollowers = [...route.params.followers]
      setFollowers(
        actualFollowers.filter((follower) =>
          follower?.nickname?.toLowerCase()?.includes(search.toLowerCase())
        )
      )
      return
    } else {
      setFollowers(route.params.followers)
    }
  }, [search])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.bLACK1SPORTSMATCH }}>
      <HeaderIcons />

      <Pressable
        onPress={() => {
          navigation.goBack()
        }}
        style={{
          marginTop: 5,
          marginLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5
        }}
      >
        <Image
          style={{ width: 15, height: 15, marginBottom: 4 }}
          resizeMode="contain"
          source={require('../../assets/coolicon4.png')}
        />

        <Text
          style={{
            fontSize: FontSize.h3TitleMEDIUM_size,
            lineHeight: 22,
            fontWeight: '500',
            color: Color.wHITESPORTSMATCH,
            fontFamily: FontFamily.t4TEXTMICRO
          }}
        >
          Seguidores
        </Text>
      </Pressable>

      <Text
        style={{
          fontSize: 17,
          lineHeight: 17,
          fontWeight: '500',
          color: Color.wHITESPORTSMATCH,
          fontFamily: FontFamily.t4TEXTMICRO,
          marginVertical: 20,
          paddingHorizontal: 15
        }}
      >
        {route.params.followers.length > 1
          ? `${route.params.followers.length} seguidores`
          : `${route.params.followers.length} seguidor`}
      </Text>

      <TextInput
        placeholderTextColor={'#fff'}
        placeholder="Buscar..."
        value={search}
        onChangeText={(text) => setSearch(text)}
        style={{
          borderRadius: Border.br_81xl,
          borderColor: Color.wHITESPORTSMATCH,
          height: 42,
          borderWidth: 1,
          paddingHorizontal: 15,
          borderStyle: 'solid',
          color: '#fff',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10
        }}
      />

      <ScrollView
        contentContainerStyle={{
          width: '100%',
          marginTop: 25,
          paddingHorizontal: 10,
          paddingBottom: 20,
          gap: 10,
          flexDirection: 'column'
        }}
      >
        {followers.map((follower) => (
          <Pressable
            onPress={() => {
              if (follower.id === user.user.id) {
                if (follower.type !== 'club') {
                  navigation.navigate('MiPerfil')
                  return
                } else {
                  navigation.navigate('PerfilDatosPropioClub')
                  return
                }
              }
              if (follower.type === 'club') {
                navigation.navigate('ClubProfile', { author: follower })
              } else {
                navigation.navigate('PerfilFeedVisualitzaciJug', {
                  author: follower
                })
              }
            }}
            style={{
              flexDirection: 'row',
              gap: 15,
              width: '100%',
              alignItems: 'center'
            }}
          >
            <Image
              contentfit="cover"
              style={{ height: 40, borderRadius: 50, width: 40 }}
              source={{
                uri:
                  follower.type === 'club'
                    ? follower?.club?.img_perfil
                    : follower?.sportman?.info?.img_perfil
              }}
            />
            <Text
              style={{
                fontWeight: '700',
                color: Color.wHITESPORTSMATCH,
                fontSize: 16,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {follower.nickname}
            </Text>
          </Pressable>
        ))}
        {search.length > 0 && followers.length === 0 && (
          <View>
            <Text
              style={{
                fontSize: 14,
                marginTop: 10,
                color: Color.wHITESPORTSMATCH,
                fontWeight: '400',
                alignSelf: 'center',
                textAlign: 'left',
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              No se encontraron resultados!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserFollowers
