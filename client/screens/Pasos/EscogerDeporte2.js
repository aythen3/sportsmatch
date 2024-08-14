import React, { useRef } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import Input from '../../components/Input'
import { useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/core'

const EscogerDeporte2 = ({ clubValues, setClubValues }) => {
  // const navigation = useNavigation()

  const cityRef = useRef(null)
  const countryRef = useRef(null)
  const fieldRef = useRef(null)
  const yearRef = useRef(null)
  const capacityRef = useRef(null)
  const descriptionRef = useRef(null)

  const handleSubmit = () => {
    const inputRefs = [
      cityRef,
      countryRef,
      fieldRef,
      yearRef,
      capacityRef,
      descriptionRef
    ]

    const currentIndex = inputRefs.findIndex((ref) => ref.current.isFocused())

    if (currentIndex < inputRefs.length - 1) {
      inputRefs[currentIndex + 1].current.focus()
    }
  }

  const handleValues = (field, value) => {
    setClubValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <View style={{ height: 'auto' }}>
      <Input
        title="Nombre del club"
        placeholderText="Nombre"
        field="name"
        value={clubValues.name}
        onValues={handleValues}
        onSubmit={handleSubmit}
      />
      <Input
        title="Ciudad"
        placeholderText="Ciudad"
        isAccordeon={false}
        field="city"
        value={clubValues.city}
        onValues={handleValues}
        inputRef={cityRef}
        onSubmit={handleSubmit}
      />
      <Input
        title="Pais"
        placeholderText="España"
        isAccordeon={false}
        field="country"
        value={clubValues.country}
        onValues={handleValues}
        inputRef={countryRef}
        onSubmit={handleSubmit}
      />
      <Input
        title="Nombre del estadio, campo o pabellón"
        placeholderText="Palau Municipal d’Esports Josep Mora"
        isAccordeon={false}
        field="field"
        value={clubValues.field}
        onValues={handleValues}
        inputRef={fieldRef}
        onSubmit={handleSubmit}
      />
      <Input
        title="Año de fundacion"
        placeholderText="1920"
        isAccordeon={false}
        field="year"
        value={clubValues.year}
        onValues={handleValues}
        inputRef={yearRef}
        onSubmit={handleSubmit}
        keyboardType="numeric"
        maxLength={4}
      />
      <Input
        title="Aforo"
        placeholderText="300 personas"
        field="capacity"
        value={clubValues.capacity}
        onValues={handleValues}
        inputRef={capacityRef}
        onSubmit={handleSubmit}
        keyboardType="numeric"
        maxLength={5}
      />

      <Input
        maxLength={200}
        title="Describe tu club"
        placeholderText="Descripción"
        isMultiLine={true}
        isLast={true}
        field="description"
        value={clubValues.description}
        onValues={handleValues}
        inputRef={descriptionRef}
      />
    </View>
  )
}

export default EscogerDeporte2
