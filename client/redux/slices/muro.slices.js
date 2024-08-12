import { createSlice } from '@reduxjs/toolkit'

const muroSlices = createSlice({
  name: 'muro',
  initialState: {
    publication: {},
    publications: [
      {
        id: 1,
        name: 'Club Deportivo Rosario Central',
        description: 'Manu metiendo un incleible tanto ante el dream teams',
        likes: 312,
        comments: [
          {
            id: 1,
            name: 'Alex Mijares',
            comment: 'Pedazo de jugada, Crack!'
          },
          {
            id: 2,
            name: 'Carles Mir',
            comment: 'Buena jugada, nos vemos en el partido'
          }
        ],
        image: require('../../assets/basketball-mira-kireeva-11.png'),
        imgPerfil: require('../../assets/logo-uem21removebgpreview-11.png'),
        club: true
      },
      {
        id: 2,
        name: 'Edison Cavani',
        description: 'anotando 3 goles ante belgrano, una noche espectacular',
        likes: 486,
        comments: [
          {
            id: 1,
            name: 'Alex Mijares',
            comment: 'Pedazo de jugada, Crack!'
          },
          {
            id: 2,
            name: 'Carles Mir',
            comment: 'Buena jugada, nos vemos en el partido'
          }
        ],
        image: require('../../assets/basketball-unsplash-3-1.png'),
        imgPerfil: require('../../assets/mask-group8.png'),
        club: false
      },
      {
        id: 3,
        name: 'Maravilla Martinez',
        description: 'Noche de boxeo. Maravilla Martinez derrota a Mike Tison',
        likes: 246,
        comments: [
          {
            id: 1,
            name: 'Alex Mijares',
            comment: 'Pedazo de jugada, Crack!'
          },
          {
            id: 2,
            name: 'Carles Mir',
            comment: 'Buena jugada, nos vemos en el partido'
          }
        ],
        image: require('../../assets/basketball-mira-kireeva-11.png'),
        imgPerfil: require('../../assets/logo-uem21removebgpreview-11.png'),
        club: false
      }
    ]
  },
  reducers: {
    resetMuroSlices: (state, action) => {
      ;(state.publication = {}), (state.publications = [])
    },
    setIsSpotMan: (state, action) => {
      state.isSportMan = action.payload
    },
    setPublication: (state, action) => {
      state.publication = action.payload
    }
  }
})

export const { setPublication, resetMuroSlices } = muroSlices.actions

export default muroSlices.reducer
