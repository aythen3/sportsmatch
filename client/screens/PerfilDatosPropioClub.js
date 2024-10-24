import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import HeaderPerfil from './Perfil/EditarPerfil/club/HeaderPerfil'
import { Color } from '../GlobalStyles'
import CirclePerfilClub from '../components/CirclePerfilClub'
import PlayingFieldPerfilClub from '../components/PlayingFieldPerfilClub'
import { useSelector } from 'react-redux'
import CircleSkills from '../components/CircleSkills'
import PercentageSkills from '../components/PercentageSkills'
import CardInfoPerfil from '../components/CardInfoPerfil'
import MoreDetailsAboutMe from '../components/MoreDetailsAboutMe'
import { Context } from '../context/Context'

const PerfilDatosPropioClub = () => {
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)
  const { user } = useSelector((state) => state.users)
  const { club } = useSelector((state) => state.clubs)
  const [selectComponents, setSelectComponents] = useState('perfil')
  const isFocused = useIsFocused()

  const { setActiveIcon } = useContext(Context)
  useEffect(() => {
    setActiveIcon('profile')
  }, [isFocused])
  return (
    <View
      style={{
        backgroundColor: Color.bLACK1SPORTSMATCH,
        width: '100%',
        flex: 1
      }}
    >
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View>
          <HeaderPerfil
            name={isSportman ? '' : club?.name}
            description={isSportman ? '' : club?.description}
            myPerfil={true}
            sport={isSportman ? '' : club?.sport}
            setSelectComponents={setSelectComponents}
            selectComponents={selectComponents}
            front={club?.img_front}
            avatar={club?.img_perfil}
          />
          {!isSportman && (
            <View>
              <PlayingFieldPerfilClub
                fieldName={club?.field}
                city={club?.city}
                country={club?.country}
              />
              <MoreDetailsAboutMe
                title="Descripcion del club"
                description={club?.description}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  perfilDatosPropioClub: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: '100%',
    flex: 1
  },
  imgContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    gap: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleSkills: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 30
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15
  }
})

export default PerfilDatosPropioClub
