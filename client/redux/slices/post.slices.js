import { createSlice } from '@reduxjs/toolkit'
import {
  createPost,
  getAllLikes,
  getAllPosts,
  like,
  listLikes,
  updateLike,
  filterPost
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
  reducers: {
    cleanPost: (state, action) => {
      state.allPosts = [],
      state.post = {},
      state.likes = [],
      state.findedLike = []

    },

    setFilterPost: (state, action) => {
      return {
        ...state,
        allPosts: action.payload
      }
    },
    setFindedLikes: (state, action) => {
      const updateLikesById = (array, id, action) => {
        return array.map((obj) => {
          if (obj.id === id) {
            const newLikes = action === 'add' ? obj.likes + 1 : obj.likes - 1
            return { ...obj, likes: newLikes }
          }
          return obj
        })
      }

      const alreadyLiked = state.findedLike.includes(action.payload.post)

      const operation = alreadyLiked ? 'substract' : 'add'

      const updatedPosts = updateLikesById(
        [...state.allPosts],
        action.payload.post,
        operation
      )

      let newLikesArray = [...state.findedLike]

      if (alreadyLiked) {
        newLikesArray = newLikesArray.filter(
          (like) => like !== action.payload.post
        )
      } else {
        newLikesArray.push(action.payload.post)
      }

      return {
        ...state,
        allPosts: updatedPosts,
        findedLike: newLikesArray
      }
    }
  },
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
      // .addCase(like.pending, (state) => {
      //   state.loading = true
      //   state.error = false
      // })
      // .addCase(like.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.post = action.payload
      //   state.error = false
      // })
      // .addCase(like.rejected, (state) => {
      //   state.loading = false
      //   state.error = true
      // })
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
      // Encontrar likes de user
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
    // edit post
    // .addCase(filterPost.pending, (state) => {
    //   state.loading = true
    //   state.error = false
    // })
    // .addCase(filterPost.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.allPosts = action.payload
    //   state.error = false
    // })
    // .addCase(filterPost.rejected, (state) => {
    //   state.loading = false
    //   state.error = true
    // })
  }
})



export const { cleanPost , setFindedLikes ,setFilterPost} = postSlices.actions
export default postSlices.reducer
