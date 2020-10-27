import React, {useState} from 'react'
import {Text} from 'react-native'
import Display from './Display'
import Botoes from './Botoes'

export default () => {
  const [num, setNum] = useState(0)

  const inc = () => setNum(num + 1)

  const dec = () => setNum(num - 1)

  return (
    <>
      <Text>Contador v2</Text>
      <Display num={num} />
      <Botoes inc={inc} dec={dec} />
    </>
  )
}
