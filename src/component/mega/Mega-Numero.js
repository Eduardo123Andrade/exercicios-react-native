import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    Container: {
        width: 50,
        height: 50, 
        backgroundColor: "#000",
        margin: 5,
        borderRadius: 25,
        alignItems: 'center'
    },
    Num: {
        color: "#FFF",
        alignContent: 'center'
    },
    txtG:{
        fontSize: 40
    }
})

export default ({num}) => {
     return (
         <SafeAreaView style={style.Container}>
             <Text style={[style.txtG, style.Num]}>{num}</Text>
         </SafeAreaView>
     )
}