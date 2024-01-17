import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


const text={
    buscar:'Buscar personaje'
}
interface Props {
    onChange: (text:string)=> void
}
export const InputSearch: React.FC<Props> = (props) =>{
    return (
        <View style={{width:'100%', height:50,justifyContent:'center', alignItems:'center',padding:5, marginTop:10}}  >
            <TextInput
                style = {[styles.inputContainer]}
                placeholder={text.buscar}
                onChangeText={props.onChange}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    
    inputContainer:{
        flex: 1,
        width:'95%',
        color:'white',
        backgroundColor:'#414141',
        borderRadius:10,
        paddingHorizontal:5
    },
})