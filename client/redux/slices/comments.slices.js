import { createSlice } from '@reduxjs/toolkit'
import { createComment, getCommentByPost } from '../actions/comments'

const commentSlices = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    postComments: [],
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Crear comentario
      .addCase(createComment.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false
        state.comments = action.payload
        state.error = false
      })
      .addCase(createComment.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Traer todos los comentarios por id de post
      .addCase(getCommentByPost.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getCommentByPost.fulfilled, (state, action) => {
        state.loading = false
        state.postComments = action.payload
        state.error = false
      })
      .addCase(getCommentByPost.rejected, (state) => {
        state.loading = false
        state.postComments = []
        state.error = true
      })
  }
})

export default commentSlices.reducer
