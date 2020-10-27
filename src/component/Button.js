import React from 'react'
import {Button} from 'react-native'


export default ({func}) => {
    console.log(func, 123)
    // function touch() {
    //     console.warn(">////<")
    // }
    
    return(
        <Button title='Touch-me, senpai' onPress={func}></Button>
    )
}