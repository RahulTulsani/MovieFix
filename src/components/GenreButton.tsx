import React,{FC} from "react"
import { GestureResponderEvent,  TouchableOpacity } from "react-native"
import { Text } from "react-native-paper"
import { GenresStyle } from "../styles/Styles"
interface ButtonPropType{
    genreType: String,
    isSelected: Boolean,
    keyValue:number,
    onClick:(event:GestureResponderEvent) => void
}

const GenreButton: FC<ButtonPropType> =({
    genreType,
    isSelected,
    keyValue,
    onClick
})=> <TouchableOpacity  onPress={onClick} key={keyValue} style={[GenresStyle.genreButton, isSelected && GenresStyle.selectedBUtton]}>
        <Text style={GenresStyle.textColor}>{genreType}</Text>
    </TouchableOpacity>


export default GenreButton;