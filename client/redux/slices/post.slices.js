import { createSlice } from '@reduxjs/toolkit'
import {
  createPost,
  getAllLikes,
  getAllPosts,
  like,
  listLikes
} from '../actions/post'

const postSlices = createSlice({
  name: 'post',
  initialState: {
    allPosts: [],
    post: {},
    likes: [],
    findedLike: [],
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
      // Dar like
      .addCase(like.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(like.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
        state.error = false
      })
      .addCase(like.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Traer todos los likes
      .addCase(getAllLikes.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getAllLikes.fulfilled, (state, action) => {
        state.loading = false
        state.likes = action.payload
        state.error = false
      })
      .addCase(getAllLikes.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Encontrar like
      .addCase(listLikes.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(listLikes.fulfilled, (state, action) => {
        state.loading = false
        state.findedLike = action.payload
        state.error = false
      })
      .addCase(listLikes.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export default postSlices.reducer
