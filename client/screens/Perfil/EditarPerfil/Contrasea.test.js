const React = require('react')
const { render, fireEvent, waitFor } = require('@testing-library/react-native')
const { Provider } = require('react-redux')
const configureStore = require('redux-mock-store').default
const Contrasea = require('./Contrasea') // Ajusta esta ruta si es necesario
const AsyncStorage = require('@react-native-async-storage/async-storage')

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn()
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() })
}))

const mockStore = configureStore([])

describe('Contrasea Component', () => {
  let store
  let user

  beforeEach(() => {
    user = { id: 1, email: 'test@user.com', password: 'OldPassword123!' }
    store = mockStore({
      users: { user }
    })

    AsyncStorage.getItem.mockResolvedValue(JSON.stringify(user))
  })

  it('debería renderizar el componente correctamente', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Contrasea />
      </Provider>
    )

    expect(getByPlaceholderText('*****')).toBeTruthy()
  })

  it('debería mostrar error si la contraseña actual no coincide', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Contrasea />
      </Provider>
    )

    fireEvent.changeText(getByPlaceholderText('*****'), 'WrongPassword123!')
    fireEvent.changeText(
      getByPlaceholderText('*****', { selector: 'Nueva contraseña' }),
      'NewPassword123!'
    )
    fireEvent.changeText(
      getByPlaceholderText('*****', { selector: 'Repetir nueva contraseña' }),
      'NewPassword123!'
    )

    fireEvent.press(getByText('Aceptar'))

    await waitFor(() => {
      expect(getByText('La contraseña actual no coincide.')).toBeTruthy()
    })
  })

  it('debería mostrar error si la nueva contraseña no cumple con el patrón', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Contrasea />
      </Provider>
    )

    fireEvent.changeText(getByPlaceholderText('*****'), 'OldPassword123!')
    fireEvent.changeText(
      getByPlaceholderText('*****', { selector: 'Nueva contraseña' }),
      'password'
    )
    fireEvent.changeText(
      getByPlaceholderText('*****', { selector: 'Repetir nueva contraseña' }),
      'password'
    )

    fireEvent.press(getByText('Aceptar'))

    await waitFor(() => {
      expect(
        getByText(
          'La nueva contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.'
        )
      ).toBeTruthy()
    })
  })

  it('debería mostrar error si las nuevas contraseñas no coinciden', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Contrasea />
      </Provider>
    )

    fireEvent.changeText(getByPlaceholderText('*****'), 'OldPassword123!')
    fireEvent.changeText(
      getByPlaceholderText('*****', { selector: 'Nueva contraseña' }),
      'NewPassword123!'
    )
    fireEvent.changeText(
      getByPlaceholderText('*****', { selector: 'Repetir nueva contraseña' }),
      'OtherPassword123!'
    )

    fireEvent.press(getByText('Aceptar'))

    await waitFor(() => {
      expect(getByText('Las nuevas contraseñas no coinciden.')).toBeTruthy()
    })
  })
})
