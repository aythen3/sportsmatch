import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import { useNavigation, useRoute } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { Color } from '../../GlobalStyles'
import PlayingFieldPerfilClub from '../../components/PlayingFieldPerfilClub'
import MoreDetailsAboutMe from '../../components/MoreDetailsAboutMe'

const ClubProfile = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const data = route.params

  const { isSportman } = useSelector((state) => state.users)
  const { user } = useSelector((state) => state.users)
  const { club } = useSelector((state) => state.clubs)
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
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View>
          <HeaderPerfil
            name={data?.author?.club?.name}
            description={data?.author?.club?.description}
            myPerfil={false}
            external={true}
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
    </View>
  )
}

export default ClubProfile
