import { createSlice } from '@reduxjs/toolkit'
import { createPost, getAllPosts } from '../actions/post'

const postSlices = createSlice({
  name: 'post',
  initialState: {
    allPosts: [],
    post: {},
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Traer todos los post
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false
        state.allPosts = action.payload
        state.error = false
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Crear post
      .addCase(createPost.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
        state.error = false
      })
      .addCase(createPost.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export default postSlices.reducer
