import { createSlice } from '@reduxjs/toolkit'
import { create, login } from '../actions/users'
import { getAll, getAllPositions } from '../actions/sports'

const sportsSlices = createSlice({
  name: 'sports',
  initialState: {
    sports: [],
    sport: '',
    loading: false,
    positions: []
  },
  reducers: {
    setSport: (state, action) => {
      state.sport = action.payload
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

export const { setSport } = sportsSlices.actions

export default sportsSlices.reducer
