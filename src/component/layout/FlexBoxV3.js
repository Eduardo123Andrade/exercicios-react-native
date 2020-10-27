import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

const style = StyleSheet.create({
  flexV3: {
    height: 350,
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'

  },
})

export default () => {
  return (
    <SafeAreaView style={style.flexV3}>
      <Quadrado color='#ff801a' lado={15}/>
      <Quadrado color='#50d1f6' lado={20}/>
      <Quadrado color='#dd22c1' lado={35}/>
      <Quadrado color='#8312ed' lado={40}/>
      <Quadrado color='#36c9a7' lado={55}/>
    </SafeAreaView>
  )
}
