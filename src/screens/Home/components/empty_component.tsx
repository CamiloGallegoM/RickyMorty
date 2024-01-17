import { StyleSheet, Text, View } from "react-native"

export const EmptyComponent: React.FC = ()=> {
    return (
        <View  style={style.container} >
            <Text>No se encontraron resultados para esta busqueda</Text>
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