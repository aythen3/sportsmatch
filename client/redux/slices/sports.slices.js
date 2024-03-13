import { createSlice } from '@reduxjs/toolkit'
import { create, login } from '../actions/users'
import { getAll } from '../actions/sports'

const sportsSlices = createSlice({
  name: 'sports',
  initialState: {
    sports: [],
    sport: '',
    loading: false
  },
  reducers: {
    setSport: (state, action) => {
      state.sport = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // todos los deportes
      .addCase(getAll.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAll.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.sports = action.payload
        state.error = false
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setSport } = sportsSlices.actions

export default sportsSlices.reducer
