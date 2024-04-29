import { StyleSheet } from "react-native";
import Colors from "../Utils/Colors";

export const appBarStyles = StyleSheet.create({
    header:{
        backgroundColor: Colors.backgroundColor,
    },
    title:{
        color: Colors.redcolor,
        fontWeight:'bold'
    }
})

export const GenresStyle = StyleSheet.create({
    genrelist: {
        paddingLeft:14,
        paddingTop:4,
        paddingBottom:16,
        paddingRight:4,
        backgroundColor:Colors.backgroundColor
    },
    genreButton:{
        marginRight:10,
        borderRadius:4,
        padding:6,
        paddingBottom:8,
        paddingHorizontal:8,
        backgroundColor:Colors.defaultButtonColor,
    },
    selectedBUtton:{
        backgroundColor:Colors.redcolor,
    },
    textColor:{
        color:Colors.textColor
    }
}) 

export const MovieListStyle = StyleSheet.create({
    yearList:{
        paddingTop:30,
        paddingHorizontal:15,
        backgroundColor:Colors.listBackgroundColor
    },
    yearTextColor:{
        fontSize:16,
        color:Colors.textColor
    },
    moviesStyle:{
        backgroundColor:Colors.listBackgroundColor,
        height:'93.5%',
        paddingBottom:80,
        width:'100%'
    },
    loadingStyle:{
        height:'100%',
        flex:1,
        justifyContent:'center'
    },
    movieContainer:{
        paddingTop:20
    },
    movieImage:{
        width: 160,
        height: 230
    },
    movieTitleContainer:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:'space-between',
        flexDirection:"row",
        width:160,
        rowGap:30,
    },
    movieTitle:{
        flexShrink:1,
        flexWrap:"wrap",
        color:Colors.textColor
    },
    movieDescription:{
        width:160,
        color:Colors.textColor,
        marginTop:20
    }
})

export const ModalStyle = StyleSheet.create({
    moviesTitleContainer:{
        width:'100%'
    },
    modalBackground:{
        backgroundColor:Colors.transparentBackgroundColor,
        paddingTop:100,
        paddingBottom:30,
        paddingHorizontal:30,
        width:'100%',
        height:'100%'
    },
    modalContainer:{
        backgroundColor:Colors.listBackgroundColor,
        flex:1,
        justifyContent:'center',
        borderRadius:4
    },
    closeImageContainer:{
        alignSelf:"flex-end"
    },
    closeImage:{
        width:25,
        height:25,
    },
    modalContentContainer:{
        paddingBottom:10,
        paddingHorizontal:40,
        flex:1,
        flexGrow:1
    },
    movieImage:{
        width: '100%',
        height: 400,
    },
    scrollViewContainer:{
        flexGrow:1
    },
    ratingText:{
        color:Colors.textColor,
        fontSize:20
    },
    castingText:{
        color:Colors.textColor,
        paddingTop:5
    },
    castText:{
        fontWeight:'bold',
        color:Colors.textColor
    },
    descriptionText:{
        color:Colors.textColor,
        paddingTop:25
    }
})