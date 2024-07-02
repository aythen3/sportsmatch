import { createSlice } from '@reduxjs/toolkit'
import { getAllPositions } from '../actions/sports'

const positionsSlices = createSlice({
  name: 'positions',
  initialState: {
    allPositions: []
  },
  reducers: {
    cleanPosition: (state, action) => {
      state.allPositions = []

    }
  },
  extraReducers: (builder) => {
    builder
      // Todos las posiciones
      .addCase(getAllPositions.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllPositions.fulfilled, (state, action) => {
        state.loading = false
        state.allPositions = action.payload
        state.error = false
      })
      .addCase(getAllPositions.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { cleanPosition } = positionsSlices.actions


export default positionsSlices.reducer
