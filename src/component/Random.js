import React from 'react'
import {Text} from 'react-native'

export default ({init, final}) => {
    let random = Math.floor( Math.random() * (final - init) + init)
    let text = `Numero aleatorio entre [${init}] e [${final}]: ${random}`
    return(
        <Text>{text}</Text>
    )
}