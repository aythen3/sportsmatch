import { createSlice } from '@reduxjs/toolkit'

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
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
  }
})

export const { setIsSpotMan } = usersSlices.actions

export default usersSlices.reducer
