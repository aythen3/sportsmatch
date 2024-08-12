import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../GlobalStyles'
import { setColor } from '../utils/handles/HandlerSportColor'

const Lines = ({ index, club, profesional, selectedSport, color }) => {
  const [colorSelect, setColorSelect] = useState('')

  useEffect(() => {
    function setcolor() {
      if (color) {
        return setColorSelect(color)
      }
      if (profesional) {
        setColorSelect('#00F0FF')
        return
      }
      if (index == 1 && !color && club) return setColorSelect('#E1451E')
      if (selectedSport == null) {
        return setColorSelect('#E1451E')
      } else {
        setColorSelect(setColor(selectedSport?.name))
        return
      }
    }
    setcolor()
  }, [index, selectedSport, color])

  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: index === 1 ? colorSelect : Color.colorDimgray_100,
          width: club || profesional ? '24%' : '18%',
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: index === 2 ? colorSelect : Color.colorDimgray_100,
          width: club || profesional ? '24%' : '18%',
          marginTop: 10
        }}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: index === 3 ? colorSelect : Color.colorDimgray_100,
          width: club || profesional ? '24%' : '18%',
          marginTop: 10
        }}
      />
      {!club && !profesional && (
        <View
          style={{
            borderWidth: 2,
            borderColor: index === 4 ? colorSelect : Color.colorDimgray_100,
            width: '18%',
            marginTop: 10
          }}
        />
      )}
    </View>
  )
}

export default Lines
