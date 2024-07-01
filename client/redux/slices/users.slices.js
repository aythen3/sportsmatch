import { createSlice } from '@reduxjs/toolkit'
import {
  create,
  login,
  getAllUsers,
  getUserData,
  updateUserData,
  deleteUserById,
  getUserChild,
  updateClubData,
  updateUserClubData
} from '../actions/users'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    mainColor: '#E1451E',
    loged: false,
    user: {},
    userChild: {},
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
    setMainColor: (state, action) => {
      state.mainColor = action.payload
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
      state.user = {}
    },
    updateUser: (state, action) => {
      state.user = action.payload
    },
    logedIn: (state, action) => {
      state.loged = true
    },
    logedOut: (state, action) => {
      state.loged = false
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
        console.log('LOGIN, setting user to ', action.payload)
        state.user = action.payload
        state.error = false
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Update user club data
      .addCase(updateUserClubData.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateUserClubData.fulfilled, (state, action) => {
        const oldUserData = { ...state.user }
        oldUserData.user.club = action.payload
        oldUserData.user.type = 'club'
        state.loading = false
        state.user = oldUserData
        state.error = false
      })
      .addCase(updateUserClubData.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Get all users
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
      // Get user child
      .addCase(getUserChild.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserChild.fulfilled, (state, action) => {
        state.loading = false
        state.userChild = action.payload
      })
      .addCase(getUserChild.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Get user data
      .addCase(getUserData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false
        console.log('setting user to:', { user: action.payload })
        state.user = { user: action.payload }
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Update user data (CHECK BACKEND)
      // .addCase(updateUserData.pending, (state) => {
      //   state.loading = true
      //   state.error = null
      // })
      // .addCase(updateUserData.fulfilled, (state, action) => {
      //   state.loading = false
      //   state.user = action.payload
      // })
      // .addCase(updateUserData.rejected, (state, action) => {
      //   state.loading = false
      //   state.error = action.error.message
      // })
      // Delete specific user (CHECK BACKEND)
      .addCase(deleteUserById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.loading = false
        state.allUsers = [...state.allUsers].filter(
          (user) => user.id !== action.payload
        )
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const {
  setMainColor,
  setIsSpotMan,
  setGender,
  setBirthdate,
  setCity,
  setProfesionalType,
  setCategory,
  setPosition,
  updateUser,
  logedIn,
  logedOut,
  clearUser
} = usersSlices.actions

export default usersSlices.reducer
