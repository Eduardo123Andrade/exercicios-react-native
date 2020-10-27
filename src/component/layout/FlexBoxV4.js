import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  V0: {
    backgroundColor: '#36c9a7',
    height: 0,
  },
  V1: {
    backgroundColor: '#ff801a',
    flexGrow: 1,
  },

  V2: {
    backgroundColor: '#dd22c1',
    flexGrow: 2,
  },
})

export default () => {
  return (
    <SafeAreaView style={style.flexV4}>
      <SafeAreaView style={style.V0} />
      <SafeAreaView style={style.V1} />
      <SafeAreaView style={style.V2} />
    </SafeAreaView>
  )
}
