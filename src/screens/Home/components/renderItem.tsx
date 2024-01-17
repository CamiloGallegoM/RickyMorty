import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { ResultType } from "../types/profile"
import { constants } from "../../../constants/general"
import { StatusComponent } from "./status_component"

type Props = {
    item:ResultType
}

const text = {
    lastKnownLocation:'Last known location:',
    FirstSeenIn: 'First seen in:'
}

export const ProfileItem: React.FC<Props> = (props)=> {
    return (
        <View style={style.content} >
            <Image
                source = {{ uri: props.item.image }}
                style={{
                    width : constants.WIDTH * 0.3,
                    resizeMode: "contain",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10
                }}
            />
            <View style = {{padding: 5, flex: 1, justifyContent:'space-around' }}>
                <Text style={style.nameTextStyle} numberOfLines={1} >{props.item.name}</Text>
                <StatusComponent  status={props.item.status} species={props.item.species}  />
                <Text style={style.labelTextStyle} numberOfLines={1} >{text.lastKnownLocation}</Text>
                <Text style={style.dataTextStyle} numberOfLines={1} >{props.item.location.name}</Text>
                <Text style={style.labelTextStyle} numberOfLines={1} >{text.FirstSeenIn}</Text>
                <Text style={style.dataTextStyle} numberOfLines={1} >{props.item.origin.name}</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    content:{
        flexDirection: 'row',
        backgroundColor:'#3c3e44',
        marginVertical:5,
        borderRadius:10,
    },
    nameTextStyle:{
        fontSize:18,
        fontWeight:'800',
        color:'white'
    },
    labelTextStyle:{
        color:'#6f7f8f',
    },
    dataTextStyle:{
        color:'#e6e5e1',
        fontSize:14,
    }
})