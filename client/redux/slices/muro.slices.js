import { createSlice } from '@reduxjs/toolkit'

const muroSlices = createSlice({
  name: 'muro',
  initialState: {
    publications: [
      {
        id: 1,
        name: 'Emanuel Ginobili',
        description: 'Manu metiendo un incleible tanto ante el dream teams',
        likes: 312,
        comments: 'Titan, gracias por todo genio',
        image: '../../assets/nickfithenbuugssofvounsplash-13.png',
        imgPerfil: '../../assets/mask-group12.png'
      },
      {
        id: 2,
        name: 'Edison Cavani',
        description: 'anotando 3 goles ante belgrano, una noche espectacular',
        likes: 486,
        comments: 'Vamos Uruguayo querido',
        image: '../../assets/hannahredingkqyboqrw5wunsplash-13.png',
        imgPerfil: '../../assets/mask-group1.png'
      },
      {
        id: 3,
        name: 'Maravilla Martinez',
        description: 'Noche de boxeo. Maravilla Martinez derrota a Mike Tison',
        likes: 246,
        comments: 'Sali de ahi Maravilla!!',
        image: '../../assets/nickfithenbuugssofvounsplash-13.png',
        imgPerfil: '../../assets/mask-group12.png'
      }
    ]
  },
  reducers: {
    setIsSpotMan: (state, action) => {
      state.isSportMan = action.payload
    }
  }
})

export const {} = muroSlices.actions

export default muroSlices.reducer
