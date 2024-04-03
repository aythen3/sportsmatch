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
  offer,
  editOffer
) => {
  if (!editOffer) {
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
        positionId: '3e2bd188-f9a3-4d92-8902-e2d4ba20a037',
        clubId: club.id
      }
      await dispatch(setOffer(data))
      await dispatch(getAllOffers())
      navigation.navigate('OfertasEmitidas')
    } else {
      alert('Debes rellenar todos los campos')
    }
  } else {
    const data = {
      body: {
        offerData: {
          sexo: values.sexo || offer.sexo, //MALE OR FEMALE /////////////
          category: values.category || offer.category,
          urgency: values.urgency || offer.urgency,
          retribution: values.retribution || offer.retribution
        },
        positionId: offer.position.id,
        clubId: offer.club.id
      },
      id: offer.id
    }
    await dispatch(updateOffer(data))
    await dispatch(getAllOffers())
    navigation.navigate('OfertasEmitidas')
  }
}
