import React from 'react'
import {Text} from 'react-native'

export default ({nome, sobrenome}) => {
  return (
    <>
      <Text>
        {nome} {sobrenome}
      </Text>
    </>
  )
}
