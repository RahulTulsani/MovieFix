import React,{FC,} from "react";
import { Modal,View,TouchableOpacity,Image, ScrollView, ActivityIndicator } from "react-native";
import { Movie, MovieCredits } from "./MovieList";
import Colors from "../Utils/Colors";
import { IMAGE_BASE_URL } from "../ApiManager/ApiManager";
import { Text } from "react-native-paper";
import { ModalStyle, MovieListStyle } from "../styles/Styles";

interface CustomModalPropTypes{
    credits:MovieCredits | null,
    currentMovie:Movie | null,
    closeModal:()=>void
    modalVisible:boolean
}

const CustomModal:FC<CustomModalPropTypes>=({
    credits,
    currentMovie,
    closeModal,
    modalVisible
})=>{
    return<Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={ModalStyle.modalBackground}>
            {currentMovie && credits?
            <View style={ModalStyle.modalContainer}>    
                <TouchableOpacity onPress={closeModal} style={ModalStyle.closeImageContainer}>
                    <Image source={require('../images/Close.png')}
                        style={ModalStyle.closeImage}/>
                </TouchableOpacity>
                <View style={ModalStyle.modalContentContainer}>                 
                    <Image 
                        style={ModalStyle.movieImage} 
                        source={{ uri: `${IMAGE_BASE_URL}${currentMovie.poster_path}`  }} 
                    />
                    <ScrollView contentContainerStyle={ModalStyle.scrollViewContainer}>
                        <View 
                            style={[MovieListStyle.movieTitleContainer,ModalStyle.moviesTitleContainer]}>
                            <Text style={MovieListStyle.movieTitle}>{currentMovie.title}</Text>
                            <Text style={ModalStyle.ratingText}>{Math.round((currentMovie.vote_average)*10)/10}</Text>
                        </View>
                        <Text style={ModalStyle.castingText}>
                            <Text style={ModalStyle.castText}>Cast:- </Text>
                            {credits.cast.splice(0,5).map((castName)=>` ${castName.name}, `)}...
                        </Text>
                        <Text style={ModalStyle.descriptionText}>{currentMovie.overview}</Text>
                    </ScrollView>
                </View>            
            </View>
            :
            <View style={ModalStyle.modalContainer}>
                <ActivityIndicator size="large" color={Colors.redcolor}/>
            </View>}
        </View>
    </Modal>
}

export default CustomModal;