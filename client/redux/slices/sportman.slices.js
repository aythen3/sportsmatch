import { createSlice } from '@reduxjs/toolkit'
import {
  createSportman,
  getSportman,
  updateSportman
} from '../actions/sportman'

const sportmanSlices = createSlice({
  name: 'sportman',
  initialState: {
    sportman: {},
    loading: false
  },
  reducers: {
    setInitialSportman: (state, action) => {
      state.sportman = action.payload
    },
    clearSportman: (state, action) => {
      state.sportman = {}
    }
  },
  extraReducers: (builder) => {
    builder
      // Create player
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
      // Get player by user id
      .addCase(getSportman.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getSportman.fulfilled, (state, action) => {
        state.loading = false
        state.sportman = action.payload
        state.error = false
      })
      .addCase(getSportman.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Update player info
      .addCase(updateSportman.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateSportman.fulfilled, (state, action) => {
        state.loading = false
        state.sportman = action.payload
        state.error = false
      })
      .addCase(updateSportman.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setInitialSportman ,clearSportman } = sportmanSlices.actions

export default sportmanSlices.reducer
