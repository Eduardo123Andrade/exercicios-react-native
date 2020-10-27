import React, {Component} from 'react'
import {Text, TextInput, Button, View} from 'react-native'
import MegaNumero from './Mega-Numero'

export default class Mega extends Component {
  state = {
    qntNum: this.props.qntNum,
    numeros: [],
  }

  alterarQntNum = num => {
    this.setState({qntNum: +num}) // => + na frente de uma string transforma em numero
  }

  gerarNumerosNaoContidos = nums => {
    const novo = parseInt(Math.random() * 60) + 1
    return nums.includes(novo) ? this.gerarNumeros(nums) : novo
  }

  gerarNumeros = () => {
    const numeros = Array(this.state.qntNum)
      .fill()
      .reduce(nums => [...nums, this.gerarNumerosNaoContidos(nums)], [])
      .sort((a, b) => {
        return a - b
      })

    this.setState({numeros})
  }

  exibirNumeros = () => {
    const nums = this.state.numeros
    return nums.map(num => {
      return <MegaNumero key={`${num}`} num={num} />
    })
  }

  render () {
    return (
      <>
        <Text>Gerador de Mega-Sena {this.state.qntNum}</Text>
        <TextInput
          style={{borderBottomWidth: 1}}
          placeholder='Numeros'
          keyboardType='numeric'
          value={this.state.qntNum}
          onChangeText={this.alterarQntNum} // === onChangeText={item => alterarQntNum(item)}
        />
        <Button title='Gerar' onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    )
  }
}
