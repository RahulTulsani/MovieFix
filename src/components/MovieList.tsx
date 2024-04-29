import React,{FC,useEffect, useState} from "react";
import { genresType } from "./Genres";
import { AxiosResponse } from "axios";
import ApiManager, { IMAGE_BASE_URL } from "../ApiManager/ApiManager";
import { ActivityIndicator, FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { Text, } from "react-native-paper";
import { View,Image } from "react-native";
import { GenresStyle, ModalStyle, MovieListStyle } from "../styles/Styles";
import Colors from "../Utils/Colors";
import CustomModal from "./Modal";

interface MovieListProps{
    selectedGenre:genresType |null 
}

interface MovieYear{
    [key:number]:Movie[]
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MovieListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }
  
  interface CrewMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
  }
  
  export interface MovieCredits {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
  }

const Movies:FC<MovieListProps>=({selectedGenre})=>{
    const [movies,setMovies] = useState<MovieYear>({})
    const [currentYear,setCurrentYear] = useState<number>(2012);
    const [loading,setLoading] = useState<boolean>(false);
    const [credits,setCredits] = useState<MovieCredits | null>(null);
    const [currentMovie,setCurrentMovie] = useState<Movie | null>(null);
    const [modalVisible,setModalVisible] = useState<boolean>(false);
    const years = [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];

    const fetchMovies = async(MovieYear:number,genreID:number)=>{
        try{
            const resposne:AxiosResponse = await ApiManager.fetchMovies({year:MovieYear,genreID:genreID});
            const responseData:MovieListResponse = await resposne.data;
            movies[MovieYear]= responseData.results;
            setMovies(movies);
            if(currentYear<2024)
                setCurrentYear((previousYear)=>previousYear+1)
            if(currentYear===2024)
                setLoading(false)
        }
        catch(error){
            console.log(error);
        }   
      }
    
    useEffect(()=>{
    setMovies({});
    setCurrentYear(()=>years[0]);
    setLoading(true);
    if(selectedGenre){
        fetchMovies(years[0],selectedGenre.id);
    }
    },[selectedGenre])

    useEffect(()=>{
        selectedGenre && fetchMovies(currentYear,selectedGenre.id);
    },[currentYear])

    const showModal = async (movieID:number,movie:Movie)=>{
        setModalVisible(true);
        setCurrentMovie(movie);
        try{
            const response:AxiosResponse = await ApiManager.fetchCredits(movieID);
            const responseData:MovieCredits = await response.data;
            console.log(responseData);
            setCredits(responseData);
        }
        catch(error){
            console.error(error);
        }
    }

    const closeModal = ()=>{
        setCredits(null);
        setCurrentMovie(null);
        setModalVisible(false);
    }

    const MovieList:ListRenderItem<Movie> = ({item})=>(
        <TouchableOpacity onPress={()=>showModal(item.id,item)}>
            <View style={MovieListStyle.movieContainer}> 
                <Image style={MovieListStyle.movieImage} source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}`  }}
                />
                <View 
                    style={MovieListStyle.movieTitleContainer} >
                    <Text style={MovieListStyle.movieTitle}>{item.title}</Text>
                    <Text style={GenresStyle.textColor}>{Math.round(item.vote_average*10)/10}</Text>
                </View>
                <Text numberOfLines={5} ellipsizeMode='tail' style={MovieListStyle.movieDescription}>{item.overview}</Text>
            </View>
        </TouchableOpacity>)

    const YearList:ListRenderItem<number> = ({item}) =>
        (<View style={MovieListStyle.yearList}>
            {movies[item]?.length>0 && <Text style={MovieListStyle.yearTextColor}>{item}</Text>}
            <FlatList
                data={movies[item]}
                renderItem={MovieList}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent:'space-between',
                    alignItems:'flex-start' 
                }}
            />
        </View>)

    return (<View style= {MovieListStyle.moviesStyle}>
        {loading?
        <View style= {MovieListStyle.loadingStyle}> 
            <ActivityIndicator size="large" color={Colors.redcolor}/>
        </View> : 
        <View>
            <FlatList
                data={years}
                renderItem={YearList}
            />
            <CustomModal credits={credits} currentMovie={currentMovie} modalVisible={modalVisible} closeModal={closeModal}/>
        </View>}
    </View>)
}


export default Movies;