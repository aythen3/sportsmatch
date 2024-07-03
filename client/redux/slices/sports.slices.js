import { createSlice } from '@reduxjs/toolkit'
import { getAll, getAllPositions, getSportById } from '../actions/sports'

const sportsSlices = createSlice({
  name: 'sports',
  initialState: {
    sports: [],
    sport: {},
    loading: false,
    positions: []
  },
  reducers: {
    cleanSports: (state, action) => {
      state.sports = [],
      state.sport = {},
      state.positions = []
    }

  },
  extraReducers: (builder) => {
    builder
      // Todos los deportes
      .addCase(getAll.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false
        state.sports = action.payload
        state.error = false
      })
      .addCase(getAll.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Deporte por id
      .addCase(getSportById.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getSportById.fulfilled, (state, action) => {
        state.loading = false
        state.sport = action.payload
        state.error = false
      })
      .addCase(getSportById.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Todas las posiciones
      .addCase(getAllPositions.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllPositions.fulfilled, (state, action) => {
        state.loading = false
        state.positions = action.payload
        state.error = false
      })
      .addCase(getAllPositions.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { cleanSports } = sportsSlices.actions

export default sportsSlices.reducer
