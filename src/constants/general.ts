import { Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
export const BORDERADIUSGLOBAL = 1 - 1 / WIDTH;

export const constants = {
    WIDTH : WIDTH,
    SPACING: WIDTH * 0.05,
    STATE:{
        unknown:'gray',
        Dead:'red',
        Alive:'green',
    }
}
