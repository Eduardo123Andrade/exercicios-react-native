import React, {Fragment} from 'react'
import {Text, SafeAreaView} from 'react-native'
import Estilo from './estilo'

export default ({title, subtitle}) => {
  return (
    //   nao pode retornar mais de um elemento no react-native
    //   para retornar indiretamente mais de um elemento tem que cobrir com uma view
    // <SafeAreaView>
    //     <Text>Something</Text>
    // </SafeAreaView>
    // ou
    // <React.Fragment>
    //     <Text>Something</Text>
    // </React.Fragment>
    // ou
    // <Fragment>
    //     <Text>Something</Text>
    // </Fragment>
    // ou retornar como está abaixo
    <> 
      <Text style={Estilo.txtGrande}>{title}</Text>
      <Text>{subtitle}</Text>
    </>
  )
}
