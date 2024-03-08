import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderPerfil from '../components/HeaderPerfil'
import { Color } from '../GlobalStyles'
import CirclePerfilClub from '../components/CirclePerfilClub'
import PlayingFieldPerfilClub from '../components/PlayingFieldPerfilClub'
import ImagesRender from '../components/ImagesRender'
import { allImagesMuro } from '../utils/allimagesMuro'
import { useSelector } from 'react-redux'
import CircleSkills from '../components/CircleSkills'
import PercentageSkills from '../components/PercentageSkills'
import CardInfoPerfil from '../components/CardInfoPerfil'

const PerfilDatosPropioClub = () => {
  const { isSportman } = useSelector((state) => state.users)
  const navigation = useNavigation()
  const [selectComponents, setSelectComponents] = useState('perfil')
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
            myPerfil={true}
            setSelectComponents={setSelectComponents}
            selectComponents={selectComponents}
          />

          {selectComponents === 'perfil' && !isSportman && (
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
              <View>
                <CirclePerfilClub />
                <PlayingFieldPerfilClub />
              </View>
              {allImagesMuro.map((image) => (
                <ImagesRender key={image.id} img={image.img} />
              ))}
            </View>
          )}

          {selectComponents === 'estadisticas' && (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                  marginTop: 30
                }}
              >
                <CircleSkills skill="Ataque" percentage={80} />
                <CircleSkills skill="Defensa" percentage={60} />
                <CircleSkills skill="Velocidad" percentage={90} />
              </View>

              <PercentageSkills skill="Bote" percentage={'40%'} />
              <PercentageSkills skill="Lanzamiento" percentage={'80%'} />
              <PercentageSkills skill="Dribling" percentage={'40%'} />

              <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                <CardInfoPerfil text="Sexo" value="Masculino" />
                <CardInfoPerfil text="Edad" value="24" />
              </View>
              <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                <CardInfoPerfil text="Categoria" value="Senior" />
                <CardInfoPerfil text="Posicion principal" value="Pivot" />
              </View>

              <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                <CardInfoPerfil text="Altura" value="190cm" />
                <CardInfoPerfil text="Lugar de residencia" value="Mataro" />
              </View>
            </View>
          )}

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
