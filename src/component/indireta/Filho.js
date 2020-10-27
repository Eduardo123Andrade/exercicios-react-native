import React from 'react'
import {Text, Button} from 'react-native'

export default ({max, min, func}) => {
  function random (min, max) {
    const fator = max - min + 1
    return (random = parseInt(Math.random() * fator) + min)
  }

  return (
    <>
      <Button
        title='executar'
        onPress={() => {
          const n = random(min, max)
          func(n)
        }}
      />
    </>
  )
}
