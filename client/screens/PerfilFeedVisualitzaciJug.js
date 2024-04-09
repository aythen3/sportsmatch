import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import HeaderPerfil from '../components/HeaderPerfil'
import CircleSkills from '../components/CircleSkills'
import PercentageSkills from '../components/PercentageSkills'
import CardInfoPerfil from '../components/CardInfoPerfil'
import { allImagesMuro } from '../utils/allimagesMuro'
import ImagesRender from '../components/ImagesRender'

const PerfilFeedVisualitzaciJug = () => {
  const navigation = useNavigation()
  const router = useRoute()
  const { isSportman } = useSelector((state) => state.users)
  const { club } = useSelector((state) => state.clubs)
  const [selectComponents, setSelectComponents] = useState('perfil')

  return (
    <View style={styles.perfilFeedVisualitzaciJug}>
      <ScrollView>
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

        {selectComponents === 'perfil' && (
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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  perfilFeedVisualitzaciJug: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default PerfilFeedVisualitzaciJug
