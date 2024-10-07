import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderPerfil from '../Perfil/EditarPerfil/club/HeaderPerfil'
import { useNavigation, useRoute } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../GlobalStyles'
import PlayingFieldPerfilClub from '../../components/PlayingFieldPerfilClub'
import MoreDetailsAboutMe from '../../components/MoreDetailsAboutMe'
import axiosInstance from '../../utils/apiBackend'
import { getUserData } from '../../redux/actions/users'

const ClubProfile = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const dataa = route.params
  const [data, setData] = useState({})
  const [isBanned, setIsBanned] = useState(false)
  const dispatch = useDispatch()
  const { mainColor, user } = useSelector((state) => state.users)

  const getUser = async () => {
    axiosInstance.get(`user/${dataa?.author?.id}`).then((r) => {
      setData({ author: r.data })
      setIsBanned(r?.data?.banned?.includes(user?.user?.id))
      console.log({ author: r.data }, 'respuesta')
      console.log(r?.data?.banned?.includes(user?.user?.id), 'respuesta2')
      if (r?.data?.banned?.includes(user?.user?.id)) {
        dispatch(getUserData(user?.user?.id))
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  const [selectComponents, setSelectComponents] = useState('perfil')
  console.log('data: ', data)
  return (
    <View
      style={{
        backgroundColor: Color.bLACK1SPORTSMATCH,
        width: '100%',
        flex: 1
      }}
    >
      {data?.author?.id && !isBanned ? (
        <ScrollView keyboardShouldPersistTaps={'always'}>
          <View>
            <HeaderPerfil
              name={data?.author?.club?.name}
              description={data?.author?.club?.description}
              myPerfil={false}
              external={true}
              sport={data?.author?.club?.sport}
              setSelectComponents={setSelectComponents}
              selectComponents={selectComponents}
              front={data?.author?.club?.img_front}
              avatar={data?.author?.club?.img_perfil}
              data={data}
            />
            <View>
              <PlayingFieldPerfilClub
                fieldName={data?.author?.club?.field}
                city={data?.author?.club?.city}
                country={data?.author?.club?.country}
              />
              <MoreDetailsAboutMe
                title="Descripcion del club"
                description={data?.author?.club?.description}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={50} color={mainColor}></ActivityIndicator>
        </View>
      )}
    </View>
  )
}

export default ClubProfile
