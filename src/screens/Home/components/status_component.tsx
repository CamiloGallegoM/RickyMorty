import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { constants } from "../../../constants/general";

type Props ={
    status:'unknown' | 'Dead' | 'Alive'
    species:string
}

export const StatusComponent: React.FC<Props> = (props)=> {
    return(
        <View style={{flexDirection:'row', alignItems:'center', gap:4}}  >
            <View  style={[style.status, {backgroundColor:constants.STATE[props.status]}]} />
            <Text style={{fontWeight:'600', color:'white',textTransform:'capitalize'}}  >{`${props.status} - ${props.species}`}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    status:{
        width:6,
        height:6,
        borderRadius:3,
    }
})