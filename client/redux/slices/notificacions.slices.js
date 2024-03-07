import { createSlice } from '@reduxjs/toolkit'

const notificationsSlices = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [
      {
        id: 1,
        notification:
          '¡Has hecho un Match! ¡Felicidades! ¡Carles Mir y tú tenéis buen feeling!',
        send: 'Ayer'
      },
      {
        id: 2,
        notification:
          '¡Has hecho un Match! ¡Felicidades! ¡Carles Mir y tú tenéis buen feeling!',
        send: '10/10/2023'
      },
      {
        id: 3,
        notification:
          '¡Has hecho un Match! ¡Felicidades! ¡Carles Mir y tú tenéis buen feeling! lkadfj sdlfskdjf sdfaj dsflsdkfj osdiah jlskdfj aosfdiu ',
        send: '08/10/2023'
      }
    ],
    messages: [
      {
        id: 1,
        name: 'Jordi Espelt',
        message: 'Perfecto, quedamos asi',
        send: '10:16',
        read: true
      },
      {
        id: 2,
        name: 'Edison Cavani',
        message:
          'Yo tengo un perfil mas de atacante soy un crack y nadie puede pararme por izquierda, no encontraran mejor perfil que el mio',
        send: '09:42',
        read: false
      },
      {
        id: 3,
        name: 'Alma Perez',
        message: 'Pidele un Match para hablar',
        read: false,
        confirmation: true
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

export const {} = notificationsSlices.actions

export default notificationsSlices.reducer
