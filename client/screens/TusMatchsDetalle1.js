import * as React from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontSize, Color, FontFamily, Padding, Border } from '../GlobalStyles'
import { Context } from '../context/Context'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

const TusMatchsDetalle1 = ({ onClose, data }) => {
  const navigation = useNavigation()
  const { mainColor } = useSelector((state) => state.users)
  const { getUserAge, generateLowResUrl } = useContext(Context)

  const images = {
    '#6A1C4F': require('../assets/expandedMatchCards/6A1C4F.png'),
    '#E1451E': require('../assets/expandedMatchCards/E1451E.png'),
    '#00FF18': require('../assets/expandedMatchCards/00FF18.png'),
    '#0062FF': require('../assets/expandedMatchCards/0062FF.png'),
    '#E1AA1E': require('../assets/expandedMatchCards/E1AA1E.png'),
    '#A8154A': require('../assets/expandedMatchCards/A8154A.png')
  }
  const imageSource = images[mainColor] || images['#E1451E']

  console.log(data, 'dataa')

  return (
    <View style={styles.tusMatchsDetalle}>
      <View
        style={[
          styles.matchContainer,
          { backgroundColor: data?.sportman?.type !== 'coach' && mainColor }
        ]}
      >
        <Image
          style={styles.backgroundImage}
          contentFit="cover"
          source={imageSource}
        />
        <Image
          style={[styles.frameItem, styles.iconFrameLayout]}
          contentFit="cover"
          source={require('../assets/group-4141.png')}
        />
        {data?.sportman?.type !== 'coach' && (
          <Image
            style={[styles.frameChild, styles.iconFrameLayout]}
            contentFit="cover"
            source={require('../assets/mask-group16.png')}
          />
        )}
        <View style={styles.infoContainer}>
        <View style={{flexDirection:"row",alignItems:"center",marginVertical:10,gap:10}}>
          <Image
            style={styles.profileImage}
            contentFit="cover"
            source={
              !data?.sportman?.info?.img_perfil ||
              data?.sportman?.info?.img_perfil === ''
                ? require('../assets/whiteSport.png')
                : {
                    uri: generateLowResUrl(data?.sportman?.info?.img_perfil, 70)
                  }
            }
          />
          <Text style={styles.nickname}>{data?.nickname}</Text>
        </View>
         <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"white"}}>
         <Text style={styles.label}>
            {data?.sportman?.type === 'coach' ? 'Años de experiencia' : 'Sexo'}
          </Text>
          <Text style={styles.infoText}>
            {data?.sportman?.type === 'coach'
              ? data.sportman.info.yearsOfExperience
              : data?.sportman.info.gender}
          </Text>
         </View>
         <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"white"}}>

          <Text style={styles.label}>
            {data?.sportman?.type === 'coach' ? 'Lugar de residencia' : 'Edad'}
          </Text>
          <Text style={styles.infoText}>
            {data?.sportman?.type === 'coach'
              ? data.sportman.info.city || '-'
              : getUserAge(data?.sportman.info.birthdate)}
          </Text>
          </View>
         <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"white"}}>

          <Text style={styles.label}>
            {data?.sportman?.type === 'coach' ? 'Rol' : 'Categoría'}
          </Text>
          <Text style={styles.infoText}>
            {data?.sportman?.type === 'coach'
              ? data?.sportman?.info?.rol || '-'
              : data?.sportman.info.category}
          </Text>
          </View>
          
          {data?.sportman?.type !== 'coach' && (
            <>
         <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"white"}}>
            
              <Text style={styles.label}>Posición principal</Text>

              <Text style={styles.infoText}>
                {data?.sportman.info.position}
              </Text>
</View>
<View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"white"}}>

              <Text style={styles.label}>Altura</Text>
              <Text style={styles.infoText}>{data?.sportman.info.height}</Text>
              </View>
         <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"white"}}>

              {data?.sportman?.type !== 'coach' && (
                <Text style={styles.label}>Lugar de residencia</Text>
              )}
              <Text style={styles.infoText}>{data?.sportman.info.city}</Text>
              </View>
            </>
          )}
        </View>

      
        <View style={styles.actionsContainer}>
          <Pressable
            style={styles.actionButton}
            onPress={() => {
              onClose()
              navigation.navigate('ChatAbierto1', {
                sportman:data?.sportman?.id,
                receiverId: data?.id,
                receiverName: data?.nickname,
                profilePic: data?.sportman?.info?.img_perfil
              })
            }}
          >
            <Text style={styles.actionText}>Enviar mensaje</Text>
          </Pressable>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() =>
              navigation.navigate('PerfilFeedVisualitzaciJug', { author: data })
            }
          >
            <Text style={styles.actionText}>Ver perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tusMatchsDetalle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  matchContainer: {
    width: '96%',
    height: '80%',
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 25
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 25,
    marginLeft: 15
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  nickname: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
    width: '90%',gap:3
  },
  infoText: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    marginBottom: 5
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    position:"absolute",
    bottom:20
    
  },
  actionButton: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Border.br_81xl,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: '45%'
  },
  actionText: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  labelsContainer: {
    width: '90%',
    marginTop: 20
  },
  label: {
    fontSize: FontSize.size_smi_9,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    marginBottom: 5
  },
  frameItem: {
    height: '42.26%',
    position: 'absolute',
    width: '100%'
  },
  iconFrameLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  }
})

export default TusMatchsDetalle1
