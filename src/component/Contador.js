import React, {useState} from 'react'
import {Text, Button} from 'react-native'

export default ({inicial}) => {
  // let numero = ini
  const [numero, setNumero] = useState(inicial)
  const inc = () => {
    setNumero(numero + 1)
  }

  const dec = () => {
    setNumero(numero - 1)
  }

  return (
    <>
      <Text>{numero}</Text>
      <Button title='+' onPress={inc} />
      <Button title='-' onPress={dec} />
    </>
  )
}
