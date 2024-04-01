import { createSlice } from '@reduxjs/toolkit'
import { createComment } from '../actions/comments'

const commentSlices = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    loading: false
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
  }
})

export default commentSlices.reducer
