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
        positionId: '52b32097-b6a3-43ac-9ba4-4af1710b5ff3', //'9fc403b7-e032-46f5-938f-867756091824' ERROR DE DUPLICADO //
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
