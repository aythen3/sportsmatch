import { createSlice } from '@reduxjs/toolkit'

const offersSlices = createSlice({
  name: 'offers',
  initialState: {
    offer: {},
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
        remuneration: 'SI'
      },
      {
        id: 3,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Lateral izquierdo',
        urgency: '8',
        remuneration: 'SI'
      },
      {
        id: 4,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Escolta',
        urgency: '7',
        remuneration: 'NO'
      },
      {
        id: 5,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Lateral izquierdo',
        urgency: '8',
        remuneration: 'SI'
      },
      {
        id: 6,
        gender: 'Masculino',
        category: 'Senior',
        position: 'Escolta',
        urgency: '7',
        remuneration: 'NO'
      }
    ],
    usersRegistered: [
      {
        id: 1,
        name: 'Cristian Perez',
        image: '../../assets/group9.png',
        match: true
      },
      {
        id: 2,
        name: 'Max Power',
        image: '../../assets/group9.png',
        match: true
      },
      {
        id: 3,
        name: '+ 4 inscripciones mas',
        image: '../../assets/image-borroso.png',
        match: false
      }
    ]
  },
  reducers: {
    setOffer: (state, action) => {
      console.log(action.payload)
      state.offer = action.payload
    }
  }
})

export const { setOffer } = offersSlices.actions

export default offersSlices.reducer
