import { createSlice } from '@reduxjs/toolkit'

const offersSlices = createSlice({
  name: 'offers',
  initialState: {
    offers: [
      {
        id: 1,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Escolta',
        urgency: '7',
        remuneration: 'NO'
      },
      {
        id: 2,
        gender: 'Femenino',
        category: 'Senior',
        position: 'Escolta',
        urgency: '9',
        remuneration: 'NO'
      },
      {
        id: 3,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Lateral izquierdo',
        urgency: '8',
        remuneration: 'NO'
      },
      {
        id: 4,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Escolta',
        urgency: '7',
        remuneration: 'NO'
      }
    ]
  },
  reducers: {}
})

export const {} = offersSlices.actions

export default offersSlices.reducer
