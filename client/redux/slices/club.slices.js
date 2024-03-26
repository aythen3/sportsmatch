import { createSlice } from '@reduxjs/toolkit'
import { create, login } from '../actions/users'
import { createClub } from '../actions/club'

const clubSlices = createSlice({
  name: 'clubs',
  initialState: {
    club: {},
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createClub.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createClub.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.club = action.payload.data
        state.error = false
      })
      .addCase(createClub.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const {} = clubSlices.actions

export default clubSlices.reducer
