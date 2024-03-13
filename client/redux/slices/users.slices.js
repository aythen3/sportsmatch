import { createSlice } from '@reduxjs/toolkit'
import { create, login } from '../actions/users'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    error: false,
    loading: false,
    isSportman: true,
    profiles: [
      {
        id: 1,
        name: 'Club Deportivo Rosario Central',
        description: 'Presidente: Amuch Joel',
        image: require('../../assets/logo-uem21removebgpreview-11.png'),
        club: true
      },
      {
        id: 2,
        name: 'Alfredo Carrion',
        description: 'Lateral izquierdo',
        image: require('../../assets/mask-group8.png'),
        club: false
      }
    ]
  },
  reducers: {
    setIsSpotMan: (state, action) => {
      state.isSportman = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.user = action.payload
        state.error = false
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setIsSpotMan } = usersSlices.actions

export default usersSlices.reducer
