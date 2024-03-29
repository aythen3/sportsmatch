import {
  getAllOffers,
  setOffer,
  updateOffer
} from '../../../redux/actions/offers'

export const handleSubmit = async (
  dispatch,
  values,
  navigation,
  club,
  offer
) => {
  console.log('offeroffer', offer)
  if (!offer) {
    if (
      values.sexo &&
      values.category &&
      values.urgency &&
      values.retribution
    ) {
      const data = {
        offerData: {
          sexo: values.sexo, //MALE OR FEMALE /////////////
          category: values.category,
          urgency: values.urgency,
          retribution: values.retribution
        },
        positionId: 'eb2a7261-857b-403a-a3be-4c8041cb66c2', //'9fc403b7-e032-46f5-938f-867756091824' ERROR DE DUPLICADO //
        clubId: club.id
      }
      await dispatch(setOffer(data))
      await dispatch(getAllOffers())
      navigation.navigate('OfertasEmitidas')
    } else {
      alert('Debes rellenar todos los campos')
    }
  } else {
    console.log('values0', values)
    const data = {
      offerData: {
        sexo: values.sexo, //MALE OR FEMALE /////////////
        category: values.category,
        urgency: values.urgency,
        retribution: values.retribution
      },
      id: offer.id
    }
    console.log('data', data)
    await dispatch(updateOffer(data))
    await dispatch(getAllOffers())
    navigation.navigate('OfertasEmitidas')
  }
}
