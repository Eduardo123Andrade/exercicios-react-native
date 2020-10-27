import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

const ladoP = 50

const style = StyleSheet.create({
  Quadrado: {
    width: ladoP,
    height: ladoP,
    backgroundColor: '#000',
  },
})

export default ({color, lado}) => {
    
    return (
    <SafeAreaView
      style={[style.Quadrado, {backgroundColor: color || '#000'}, {width: lado || ladoP, height: lado || ladoP}]}></SafeAreaView>
  )
}
