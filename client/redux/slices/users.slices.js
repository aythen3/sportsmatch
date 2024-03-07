import { createSlice } from '@reduxjs/toolkit'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    isSportman: true
  },
  reducers: {
    setIsSpotMan: (state, action) => {
      state.isSportman = action.payload
    }
  }
})

export const { setIsSpotMan } = usersSlices.actions

export default usersSlices.reducer
