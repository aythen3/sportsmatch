import { createSlice } from '@reduxjs/toolkit'
import { createSportman } from '../actions/sportman'

const sportmanSlices = createSlice({
  name: 'sportman',
  initialState: {
    sportman: {},
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Crear jugador
      .addCase(createSportman.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createSportman.fulfilled, (state, action) => {
        state.loading = false
        state.sportman = action.payload
        state.error = false
      })
      .addCase(createSportman.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export default sportmanSlices.reducer
