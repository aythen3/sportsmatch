import { createSlice } from '@reduxjs/toolkit'
import { create, login } from '../actions/users'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    sportmanGender: '',
    birthdate: '',
    city: '',
    profesionalType: '',

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
    },
    setGender: (state, action) => {
      state.sportmanGender = action.payload
    },
    setBirthdate: (state, action) => {
      state.birthdate = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    },
    setProfesionalType: (state, action) => {
      state.profesionalType = action.payload
    },
    clearUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(login.fulfilled, (state, action) => {
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

export const {
  setIsSpotMan,
  setGender,
  setBirthdate,
  setCity,
  setProfesionalType,
  clearUser
} = usersSlices.actions

export default usersSlices.reducer
