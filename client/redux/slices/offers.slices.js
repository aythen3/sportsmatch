import { createSlice } from '@reduxjs/toolkit'
import { setOffer, getAllOffers } from '../actions/offers'

const offersSlices = createSlice({
  name: 'offers',
  initialState: {
    offer: {},
    offers: [],
    usersRegistered: [
      {
        id: 1,
        name: 'Cristian Perez',
        image: '../../assets/group9.png',
        match: true
      },
      {
        id: 2,
        name: 'Max Power',
        image: '../../assets/group9.png',
        match: true
      },
      {
        id: 3,
        name: '+ 4 inscripciones mas',
        image: '../../assets/image-borroso.png',
        match: false
      }
    ]
  },
  reducers: {
    // setOffer: (state, action) => {
    //   state.offer = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      // Crear oferta
      .addCase(setOffer.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(setOffer.fulfilled, (state, action) => {
        state.loading = false
        state.offer = action.payload
        state.error
      })
      .addCase(setOffer.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Traer todas las ofertas
      .addCase(getAllOffers.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllOffers.fulfilled, (state, action) => {
        state.loading = false
        state.offers = action.payload
        state.error = false
      })
      .addCase(getAllOffers.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

// export const { setOffer } = offersSlices.actions

export default offersSlices.reducer
