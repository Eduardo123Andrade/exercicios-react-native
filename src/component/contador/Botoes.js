import React from 'react'
import {Button, SafeAreaView, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    Direction: {
        flexDirection: 'row',
        // padding: 20,
        // width: 150
    },
    Botao:{
        fontSize: 30,
        // width: 150
    }
})

export default ({inc, dec}) => {
  return (
    <SafeAreaView style={style.Direction}>
      <Button style={style.Botao} title='+' onPress={inc} />
      <Button style={style.Botao} title='-' onPress={dec} />
    </SafeAreaView>
  )
}
