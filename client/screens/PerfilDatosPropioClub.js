import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderPerfil from '../components/HeaderPerfil'
import { Color } from '../GlobalStyles'
import CirclePerfilClub from '../components/CirclePerfilClub'
import PlayingFieldPerfilClub from '../components/PlayingFieldPerfilClub'
import ImagesRender from '../components/ImagesRender'
import { allImagesMuro } from '../utils/allimagesMuro'
import { useSelector } from 'react-redux'

const PerfilDatosPropioClub = () => {
  const { isSportman } = useSelector((state) => state.users)
  const navigation = useNavigation()

  return (
    <View style={styles.perfilDatosPropioClub}>
      <ScrollView>
        <View>
          <HeaderPerfil
            name={isSportman ? 'Cristian Perez' : 'Club Atletico Boca Juniors'}
            description={
              isSportman
                ? 'Jugando en Barcelona desde 2005'
                : 'Presidente: Cristian Perez'
            }
            myPerfil={false}
          />

          {isSportman ? (
            <View
              style={{
                height: '100%',
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 15,
                gap: 5,
                justifyContent: 'center'
              }}
            >
              {allImagesMuro.map((image) => (
                <ImagesRender key={image.id} img={image.img} />
              ))}
            </View>
          ) : (
            <View>
              <CirclePerfilClub />
              <PlayingFieldPerfilClub />
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
  }
})

export default PerfilDatosPropioClub
