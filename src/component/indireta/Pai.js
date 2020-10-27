import React, {useState} from 'react'
import {Text} from 'react-native'
import Filho from './Filho'

export default () => {
  const [num, setNum] = useState(0)
  
  function show (numero) {
    setNum(numero)
  }

  return (
    <>
      <Text>{num}</Text>
      <Filho min={100} max={300} func={show} />
      {/* <Filho /> */}
      {/* <Filho b={'mundo'} /> */}
    </>
  )
}
