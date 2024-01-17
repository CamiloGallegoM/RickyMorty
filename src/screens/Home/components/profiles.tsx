import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { DataType,ResultType } from "../types/profile";
import { ProfileItem } from "./renderItem";
import { EndList } from "../../../components/end_list";
import { EmptyComponent } from "./empty_component";
import { LoadingScreen } from "../../../components/loading_component";

type Props = {
    data:DataType
    nextPage: () => void
    loading: boolean
}

export const ProfileComponent: React.FC<Props> = (props)=> {
    return (
        <View  style={style.container} >
             <FlatList
                data={props.data.results}
                ListEmptyComponent={<EmptyComponent/>}
                onEndReached={props.nextPage}
                keyExtractor={(item:any)=> item.id}
                renderItem={({item})=>(<ProfileItem item={item}/>)}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={props.loading?<LoadingScreen  />:<EndList/>}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    }
})