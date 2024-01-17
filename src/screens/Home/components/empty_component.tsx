import { StyleSheet, Text, View } from "react-native"

const text = {
    emptyText: 'No se encontraron resultados para esta busqueda'
}

export const EmptyComponent: React.FC = ()=> {
    return (
        <View  style={style.container} >
            <Text>{text.emptyText}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})