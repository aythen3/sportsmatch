import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderPerfil from '../components/HeaderPerfil'
import { Color } from '../GlobalStyles'
import CirclePerfilClub from '../components/CirclePerfilClub'
import PlayingFieldPerfilClub from '../components/PlayingFieldPerfilClub'
import { useSelector } from 'react-redux'
import CircleSkills from '../components/CircleSkills'
import PercentageSkills from '../components/PercentageSkills'
import CardInfoPerfil from '../components/CardInfoPerfil'
import MoreDetailsAboutMe from '../components/MoreDetailsAboutMe'

const PerfilDatosPropioClub = () => {
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)
  const { user } = useSelector((state) => state.users)
  const { club } = useSelector((state) => state.clubs)
  const [selectComponents, setSelectComponents] = useState('perfil')

  useEffect(() => {
    console.log('user from PerfilDatosPropioClub: ', user)
  }, [])

  return (
    <View style={styles.perfilDatosPropioClub}>
      <ScrollView>
        <View>
          <HeaderPerfil
            name={isSportman ? '' : club?.name}
            sport={'Baloncesto'}
            position={isSportman ? 'Pivot' : ''}
            description={isSportman ? '' : club?.description}
            myPerfil={true}
            setSelectComponents={setSelectComponents}
            selectComponents={selectComponents}
            front={club?.img_front}
            avatar={club?.img_perfil}
          />

          {selectComponents === 'perfil' && isSportman && (
            <View style={styles.imgContainer}>
              {/* {allImagesMuro.map((image) => (
                <ImagesRender
                  key={image.id}
                  img={image.img}
                  width={115}
                  height={120}
                />
              ))} */}
            </View>
          )}
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

          {selectComponents === 'estadisticas' && isSportman && (
            <View>
              <View style={styles.circleSkills}>
                <CircleSkills skill="Ataque" percentage={80} />
                <CircleSkills skill="Defensa" percentage={60} />
                <CircleSkills skill="Velocidad" percentage={90} />
              </View>

              <PercentageSkills
                skill="Bote"
                percentage={'90%'}
                percentageText={90}
              />
              <PercentageSkills
                skill="Lanzamiento"
                percentage={'80%'}
                percentageText={80}
              />
              <PercentageSkills
                skill="Dribling"
                percentage={'40%'}
                percentageText={40}
              />

              <View style={styles.cardContainer}>
                <CardInfoPerfil text="Sexo" value="Masculino" />
                <CardInfoPerfil text="Edad" value="24" />
              </View>
              <View style={styles.cardContainer}>
                <CardInfoPerfil text="Categoria" value="Senior" />
                <CardInfoPerfil text="Posicion principal" value="Pivot" />
              </View>

              <View style={styles.cardContainer}>
                <CardInfoPerfil text="Altura" value="190cm" />
                <CardInfoPerfil text="Lugar de residencia" value="Mataro" />
              </View>
              <MoreDetailsAboutMe
                title="Mas detalles sobre mi"
                description="Apasionado lider competitivo. Mi carrera en baloncesto refleja
        dedicacion, habilidades excepcionales y la capacidad de motivar al
        equipo . Me dedico a ello desde que tengo 6 años y llevo toda la vida en
        el mismo club, el CF Mataro"
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
