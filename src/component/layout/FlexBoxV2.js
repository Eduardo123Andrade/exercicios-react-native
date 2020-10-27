import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

const style = StyleSheet.create({
  flexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    justifyContent: 'space-evenly',
  },
})

export default () => {
  return (
    <SafeAreaView style={style.flexV2}>
      <Quadrado color='#ff801a' />
      <Quadrado color='#50d1f6' />
      <Quadrado color='#dd22c1' />
      <Quadrado color='#8312ed' />
      <Quadrado color='#36c9a7' />
    </SafeAreaView>
  )
}
