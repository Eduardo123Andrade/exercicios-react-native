import React from 'react'
import {Text, StyleSheet} from 'react-native'
import If from './if'

const style = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
})

export default ({user = {}}) => {
    console.log(user, user === undefined)
  return (
    <>
      <If teste={user && user.nome && user.email}>
        <Text style={style.txt}>
          {user.nome} - {user.email}
        </Text>
      </If>
    </>
  )
}
