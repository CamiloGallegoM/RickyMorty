import React from "react";
import { View } from "react-native";
import { InputSearch } from "./components/input_search";
import { FetchApiData } from "./home";

export const GeneralComponent: React.FC = ()=>{
    const [search, setSearch] = React.useState('')

    const onChangeSearch = (text:string) => {
        if(text.length>0){
            setSearch(text)
        }else{
            setSearch('')
        }
    }
    return (
        <View  style={{flex:1}} >
            <InputSearch  onChange={onChangeSearch}  />
            <FetchApiData search={search}   />
        </View>
    )
}