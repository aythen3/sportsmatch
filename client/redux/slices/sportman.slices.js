import { createSlice } from '@reduxjs/toolkit'
import {
  createSportman,
  getSportman,
  updateSportman
} from '../actions/sportman'
import { setMainColor } from './users.slices'
import { setColor } from '../../utils/handles/HandlerSportColor'

const sportmanSlices = createSlice({
  name: 'sportman',
  initialState: {
    sportman: {},
    loading: false
  },
  reducers: {
    setInitialSportman: (state, action) => {
      state.sportman = action.payload
    },
    cleanSportman: (state, action) => {
      state.sportman = {}
    }
  },
  extraReducers: (builder) => {
    builder
      // Create player
      .addCase(createSportman.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createSportman.fulfilled, (state, action) => {
        state.loading = false
        console.log('setting sportman to', action.payload)
        state.sportman = action.payload
        state.error = false
      })
      .addCase(createSportman.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Get player by user id
      .addCase(getSportman.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getSportman.fulfilled, (state, action) => {
        state.loading = false
        state.sportman = action.payload
        if (action.payload.type === 'coach') {
          console.log('setting color to ', '#00F0FF')
          setMainColor('#00F0FF')
        } else {
          console.log('setting color to', setColor(action.payload.sport?.name))
          setMainColor(setColor(action.payload.sport?.name))
        }
        state.error = false
      })
      .addCase(getSportman.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      // Update player info
      .addCase(updateSportman.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateSportman.fulfilled, (state, action) => {
        state.loading = false
        state.sportman = action.payload
        state.error = false
      })
      .addCase(updateSportman.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { setInitialSportman, cleanSportman } = sportmanSlices.actions

export default sportmanSlices.reducer
