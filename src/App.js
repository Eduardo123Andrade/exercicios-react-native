import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'

import Primerio from './component/Primeiro'
import Ok, {Comp, Comp2} from './component/Multis'
import Random from './component/Random'
import Titulo from './component/Titulo'
import Button from './component/Button'
// import Contador from './component/Contador'
import Teste from './component/teste'
import Pai from './component/indireta/Pai'
import Contador from './component/contador/Contador'
import Membro from './component/relacao/Membro'
import Familia from './component/relacao/Familia'
import UserLogged from './component/UsuarioLogado'
import ListaProdutos from './component/produtos/ListaProdutos'
import ListaProdutosV2 from './component/produtos/ListaProdutosV2'
import DigiteSeuNome from './component/DigiteSeuNome'
import Quadrado from './component/layout/Quadrado'
import FlexBoxV1 from './component/layout/FlexBoxV1'
import FlexBoxV2 from './component/layout/FlexBoxV2'
import FlexBoxV3 from './component/layout/FlexBoxV3'
import FlexBoxV4 from './component/layout/FlexBoxV4'
import Mega from './component/mega/Mega'

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
    // padding: '20'
  },
})

export default /*App*/ () => {
  return (
    <SafeAreaView style={style.App}>
      <Mega />
      {/* <FlexBoxV4/> */}
      {/* <FlexBoxV3/> */}
      {/* <FlexBoxV2/> */}
      {/* <FlexBoxV1/> */}
      {/* <Quadrado color='#ff801a' />
      <Quadrado />
      <Quadrado color='#50d1f6' />
      <Quadrado color='#dd22c1' />
      <Quadrado color='#8312ed' />
      <Quadrado color='#36c9a7' /> */}
      {/* <DigiteSeuNome/> */}
      {/* <UserLogged user={{nome: 'Edu', email: 'teste@teste.com'}} />
      <Text>[SPACE]</Text>
      <UserLogged user={{nome: "Julia", email: 'julia@teste.com'}}/> */}
      {/* <Familia teste="i\''m ok">
        <Membro nome='Bia' sobrenome='Arruda' />
        <Membro nome='Carlos' sobrenome='Arruda' />
      </Familia>

      <Familia>
        <Membro nome='Ana' sobrenome='Silva' />
        <Membro nome='Julia' sobrenome='Silva' />
      </Familia> */}

      {/* <Contador/> */}
      {/* <Pai/> */}
      {/* <Contador inicial={100}/> */}
      {/* <Button func={() => console.warn(">/////<\"")}/>   */}
      {/* <Titulo title="Hello World" subtitle="hello, again"/> */}
      {/* <Random init={10} final={30} />
      <Comp />
      <Comp2 />
      <Primerio />
      <Ok/> */}
    </SafeAreaView>
  )
}
