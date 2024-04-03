import { createSlice } from '@reduxjs/toolkit'
import { create, login, getAllUsers } from '../actions/users'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    sportmanGender: '',
    birthdate: '',
    city: '',
    profesionalType: '',
    category: '',
    position: '',
    allUsers: [],
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
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setPosition: (state, action) => {
      state.position = action.payload
    },
    clearUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
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
      // Traer todos los usuarios
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.allUsers = action.payload
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const {
  setIsSpotMan,
  setGender,
  setBirthdate,
  setCity,
  setProfesionalType,
  setCategory,
  setPosition,
  clearUser
} = usersSlices.actions

export default usersSlices.reducer
