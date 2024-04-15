import { createSlice } from '@reduxjs/toolkit'
import {
  createSportman,
  getSportman,
  updateSportman
} from '../actions/sportman'
import { getAllMatchs, getClubMatchs, getUserMatchs } from '../actions/matchs'

const matchsSlices = createSlice({
  name: 'matchs',
  initialState: {
    clubMatchs: [],
    userMatchs: [],
    allMatchs: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get user matches
      .addCase(getUserMatchs.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getUserMatchs.fulfilled, (state, action) => {
        state.loading = false
        state.userMatchs = action.payload
        state.error = false
      })
      .addCase(getUserMatchs.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Get all matches
      .addCase(getAllMatchs.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllMatchs.fulfilled, (state, action) => {
        state.loading = false
        state.allMatchs = action.payload
        state.error = false
      })
      .addCase(getAllMatchs.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Get club matches
      .addCase(getClubMatchs.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getClubMatchs.fulfilled, (state, action) => {
        state.loading = false
        state.clubMatchs = action.payload
        state.error = false
      })
      .addCase(getClubMatchs.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export default matchsSlices.reducer
