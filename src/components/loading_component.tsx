import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const LoadingScreen: React.FC = ()=> {
    return (
        <View  style={style.container} >
            <ActivityIndicator/>
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