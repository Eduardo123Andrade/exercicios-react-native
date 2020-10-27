import React, {useState} from 'react'
import {SafeAreaView, Text, TextInput, View} from 'react-native'

export default props => {
  let [nome, setNome] = useState('')

  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder='digite seu nome'
        value={nome}
        onChangeText={nome => {
          setNome(nome)
        }}
      />
    </View>
  )
}
