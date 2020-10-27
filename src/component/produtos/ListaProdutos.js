import React from 'react'
import {Text} from 'react-native'

import {produtos} from './produtos'

export default () => {
    function toString(p){
    return `${p.id} - ${p.nome} - ${p.preco}`
    }
  return (
    <>
      <Text>Lista de Produtos: </Text>
      {produtos.map(p => {
          return <Text key={p.id}>{toString(p)}</Text>
      })}
    </>
  )
}
