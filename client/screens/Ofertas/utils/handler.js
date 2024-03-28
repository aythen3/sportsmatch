import { getAllOffers, setOffer } from '../../../redux/actions/offers'

export const handleSubmit = async (dispatch, values, navigation, club) => {
  if (values.sexo && values.category && values.urgency && values.retribution) {
    const data = {
      offerData: {
        sexo: values.sexo, //MALE OR FEMALE /////////////
        category: values.category,
        urgency: values.urgency,
        retribution: values.retribution
      },
      positionId: '36c29c40-78d1-4bd3-a332-5d7aa6307eb1', //'9fc403b7-e032-46f5-938f-867756091824' ERROR DE DUPLICADO //
      clubId: club.id
    }
    await dispatch(setOffer(data))
    await dispatch(getAllOffers())
    navigation.navigate('OfertasEmitidas')
  } else {
    alert('Debes rellenar todos los campos')
  }
}
