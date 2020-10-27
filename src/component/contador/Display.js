import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'


const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF',
        textAlign: 'center'
    },
    textG: {
        fontSize: 30
    }
})

export default ({num}) => {
     return (
         <SafeAreaView style={style.Display}>
            <Text style={[style.DisplayText, style.textG]}>{num}</Text>
         </SafeAreaView>
     )
}