import { createSlice } from '@reduxjs/toolkit'
import { create, login } from '../actions/users'
import { createClub, getAllClubs, getClub } from '../actions/club'

const clubSlices = createSlice({
  name: 'clubs',
  initialState: {
    club: {},
    allClubs: [],
    loading: false
  },
  reducers: {
    setClub: (state, action) => {
      state.club = action.payload.payload.user.club
    }
  },
  extraReducers: (builder) => {
    builder
      // Crear club
      .addCase(createClub.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createClub.fulfilled, (state, action) => {
        state.loading = false
        state.club = action.payload.data
        state.error = false
      })
      .addCase(createClub.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Todos los clubes
      .addCase(getAllClubs.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllClubs.fulfilled, (state, action) => {
        state.loading = false
        state.allClubs = action.payload
        state.error = false
      })
      .addCase(getAllClubs.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      //Club por id
      .addCase(getClub.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getClub.fulfilled, (state, action) => {
        state.loading = false
        state.club = action.payload
        state.error = false
      })
      .addCase(getClub.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setClub } = clubSlices.actions

export default clubSlices.reducer
