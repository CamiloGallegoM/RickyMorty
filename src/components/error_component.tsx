import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ErrorComponent: React.FC = ()=> {
    return (
        <View  style={style.container} >
            <Text>Error 404</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'red',
    }
})