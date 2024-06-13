import { createSlice } from '@reduxjs/toolkit'
import {
  setOffer,
  getAllOffers,
  updateOffer,
  deleteOffer,
  getOfferById
} from '../actions/offers'

const offersSlices = createSlice({
  name: 'offers',
  initialState: {
    offer: {},
    offers: [],
    usersRegistered: []
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
        const unpausedOffers = action.payload.filter(
          (offer) => offer.paused === false
        )
        state.loading = false
        state.offers = unpausedOffers
        state.error = false
      })
      .addCase(getAllOffers.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Traer oferta por id
      .addCase(getOfferById.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getOfferById.fulfilled, (state, action) => {
        state.loading = false
        state.offer = action.payload
        state.error = false
      })
      .addCase(getOfferById.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Borrar oferta
      .addCase(deleteOffer.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(deleteOffer.fulfilled, (state) => {
        state.loading = false
        state.offer = {}
        state.error
      })
      .addCase(deleteOffer.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Actualizar oferta
      .addCase(updateOffer.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateOffer.fulfilled, (state, action) => {
        state.loading = false
        state.offer = action.payload
        state.error
      })
      .addCase(updateOffer.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

// export const { setOffer } = offersSlices.actions

export default offersSlices.reducer
