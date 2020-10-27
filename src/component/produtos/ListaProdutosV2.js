import React from 'react'
import {Text, FlatList} from 'react-native'

import {produtos} from './produtos'

export default () => {
  return (
    <>
      <Text>Lista de Produtos V2: </Text>
      <FlatList
        data={produtos}
        keyExtractor={(i => `${i.id}`)}
        renderItem={({item}) => {
          return (
            <Text>
              {item.id} - {item.nome}: {item.preco}
            </Text>
          )
        }}
      />
    </>
  )
}
