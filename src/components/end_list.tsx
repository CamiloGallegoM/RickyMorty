import { View } from "react-native";
import { constants } from "../constants/general";

export function EndList(){
    return(
        <View style = {{ width: constants.WIDTH, alignItems: 'center',marginTop:5}} >
            <View style = {{ height: 1, width: '100%', backgroundColor: '#414141', borderRadius: 3 }} />
            <View style = {{ height: 4, width: 4, borderRadius: 4, backgroundColor: '#414141', marginVertical: 10 }} />
        </View>
    );
}