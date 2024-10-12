import React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react-native'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from 'axios'
import Contrasea from '../screens/Perfil/EditarPerfil/Contrasea' // Asegúrate de que la ruta sea correcta

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn()
}))

jest.mock('axios', () => {
  const mockAxiosInstance = {
    post: jest.fn(),
    interceptors: {
      request: {
        use: jest.fn()
      },
      response: {
        use: jest.fn()
      }
    }
  }
  return {
    create: jest.fn(() => mockAxiosInstance)
  }
})

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn()
  })
}))

describe('Contrasea Component', () => {
  const mockUser = {
    user: { id: '1', email: 'test@example.com', password: 'Test123!' }
  }

  beforeEach(() => {
    useSelector.mockReturnValue({ user: mockUser })
    AsyncStorage.getItem.mockResolvedValue(JSON.stringify(mockUser))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the component correctly', () => {
    const { getByPlaceholderText } = render(<Contrasea />)

    expect(getByPlaceholderText('*****')).toBeTruthy()
  })

  test('shows error if current password does not match', async () => {
    const { getByText, getByPlaceholderText } = render(<Contrasea />)

    // Envolvemos el cambio de texto y la acción en act()
    await act(async () => {
      fireEvent.changeText(getByPlaceholderText('****'), 'wrongPassword')
      fireEvent.changeText(getByPlaceholderText('*****'), 'NewPass123!')
      fireEvent.changeText(getByPlaceholderText('******'), 'NewPass123!')

      const acceptButton = getByText('Aceptar')
      fireEvent.press(acceptButton)
    })

    // Esperamos a que aparezca el mensaje de error después de que se actualice el estado
    await waitFor(() => {
      expect(getByText('La contraseña actual no coincide.')).toBeTruthy()
    })
  })
  test('shows error if new password does not meet the requirements', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Contrasea />
    )
    fireEvent.changeText(getByPlaceholderText('****'), 'Test123!')
    fireEvent.changeText(getByPlaceholderText('*****'), 'NewPass123')
    fireEvent.changeText(getByPlaceholderText('******'), 'NewPass123')
    const acceptButton = getByText('Aceptar')
    fireEvent.press(acceptButton)

    await waitFor(() => {
      expect(
        getByText(
          'La nueva contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.'
        )
      ).toBeTruthy()
    })
  })

  test('shows error if new passwords do not match', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Contrasea />
    )
    fireEvent.changeText(getByTestId('currentPassword'), 'wrongPassword')
    fireEvent.changeText(getByTestId('newPassword'), 'NewPass123!')
    fireEvent.changeText(getByTestId('confirmPassword'), 'NewPass123!')
    const acceptButton = getByText('Aceptar')
    fireEvent.press(acceptButton)

    await waitFor(() => {
      expect(getByText('Las nuevas contraseñas no coinciden.')).toBeTruthy()
    })
  })

  test('calls axios and navigates on successful password change', async () => {
    axiosInstance.post.mockResolvedValue({
      data: { message: 'Clave modificada con éxito' }
    })
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Contrasea />
    )

    fireEvent.changeText(getByTestId('currentPassword'), 'wrongPassword')
    fireEvent.changeText(getByTestId('newPassword'), 'NewPass123!')
    fireEvent.changeText(getByTestId('confirmPassword'), 'NewPass123!')

    const acceptButton = getByText('Aceptar')
    fireEvent.press(acceptButton)

    await waitFor(() => {
      expect(axiosInstance.post).toHaveBeenCalledWith(
        `user/change-password/1`,
        {
          email: 'test@example.com',
          password: 'Test123!',
          newPassword: 'NewPass123!'
        }
      )
      expect(AsyncStorage.setItem).toHaveBeenCalled()
    })
  })

  test('shows error message on API failure', async () => {
    axiosInstance.post.mockRejectedValue(new Error('Network Error'))
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Contrasea />
    )

    fireEvent.changeText(getByTestId('currentPassword'), 'wrongPassword')
    fireEvent.changeText(getByTestId('newPassword'), 'NewPass123!')
    fireEvent.changeText(getByTestId('confirmPassword'), 'NewPass123!')

    const acceptButton = getByText('Aceptar')
    fireEvent.press(acceptButton)

    await waitFor(() => {
      expect(
        getByText('Hubo un error cambiando la contraseña. Intenta de nuevo.')
      ).toBeTruthy()
    })
  })
})
