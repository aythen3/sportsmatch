import { createSlice } from '@reduxjs/toolkit'

const sportmanSlices = createSlice({
  name: 'sportman',
  initialState: {
    sportman: {},

    loading: false
  },
  reducers: {}
  //   extraReducers: (builder) => {
  //     builder
  //       // todos los deportes
  //       .addCase(getAll.pending, (state) => {
  //         state.loading = true
  //         state.error = false
  //       })
  //       .addCase(getAll.fulfilled, (state, action) => {
  //         state.loading = false
  //         state.sports = action.payload
  //         state.error = false
  //       })
  //       .addCase(getAll.rejected, (state, action) => {
  //         state.loading = false
  //         state.error = true
  //       })
  //   }
})

export const {} = sportmanSlices.actions

export default sportmanSlices.reducer
