import React from "react";
import { View } from "react-native";
import { InputSearch } from "./components/input_search";
import { FetchApiData } from "./home";

export const GeneralComponent: React.FC = ()=>{
    let execute:NodeJS.Timeout
    const [search, setSearch] = React.useState('')

    const onChangeSearch = (text:string) => {
        clearTimeout(execute)
        execute = setTimeout(()=>{
            if(text.length>0){
                setSearch(text)
            }else{
                setSearch('')
            }
        },120)
    }
    return (
        <View  style={{flex:1}} >
            <InputSearch  onChange={onChangeSearch}  />
            <FetchApiData search={search}   />
        </View>
    )
}