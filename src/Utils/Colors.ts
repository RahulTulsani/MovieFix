import { ColorValue } from "react-native";

interface colorType{
    backgroundColor: ColorValue,
    redcolor:ColorValue,
    defaultButtonColor:ColorValue,
    textColor:ColorValue,
    listBackgroundColor:ColorValue,
    transparentBackgroundColor:ColorValue
}

const Colors:colorType = {
    backgroundColor:'#242424',
    redcolor:'#f0283c',
    defaultButtonColor:'#484848',
    textColor:'#ffffff',
    listBackgroundColor:'#000000',
    transparentBackgroundColor:'rgba(0,0,0,0.60)'
}

export default Colors;