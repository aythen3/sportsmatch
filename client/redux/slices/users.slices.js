import { createSlice } from '@reduxjs/toolkit'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    isSportMan: true
  },
  reducers: {
    setIsSpotMan: (state, action) => {
      state.isSportMan = action.payload
    }
  }
})

export const { setIsSpotMan } = usersSlices.actions

export default usersSlices.reducer
