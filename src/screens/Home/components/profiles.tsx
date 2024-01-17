import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DataType,ResultType } from "../types/profile";
import { ProfileItem } from "./renderItem";

type Props = {
    data:DataType
}

export const ProfileComponent: React.FC<Props> = (props)=> {
    return (
        <View  style={style.container} >
             <FlatList
                data={props.data.results}
                keyExtractor={(item:any)=> item.id}
                renderItem={({item})=>(<ProfileItem item={item}/>)}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        borderWidth:1,
        borderColor:'red'
    }
})