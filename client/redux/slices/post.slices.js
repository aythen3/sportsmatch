import { createSlice } from '@reduxjs/toolkit'
import { getAllPosts } from '../actions/post'

const postSlices = createSlice({
  name: 'post',
  initialState: {
    allPosts: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false
        state.allPosts = action.payload
        state.error = false
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export default postSlices.reducer
