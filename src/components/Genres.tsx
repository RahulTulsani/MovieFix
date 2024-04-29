import React, {FC, useCallback, useEffect, useState } from "react";
import type {Dispatch, SetStateAction} from 'react';
import { FlatList, View } from "react-native";
import { AxiosResponse } from "axios";
import ApiManager from "../ApiManager/ApiManager";
import GenreButton from "./GenreButton";
import { GenresStyle } from "../styles/Styles";
import Colors from "../Utils/Colors";

export interface genresType {
  id:number,
  name:String
}

interface genrePropType {
  selectedGenre:genresType | null,
  setSelectedGenre:Dispatch<SetStateAction<genresType | null>>
}

const GenresView: FC<genrePropType> = ({
  selectedGenre,
  setSelectedGenre
}) => {

  const [genres,setGenres] = useState<genresType[] | null>(null);

  const fetchData = useCallback(async()=>{
    try{
      const response:AxiosResponse = await ApiManager.fetchGenres();
      const genresList:genresType[] = response.data.genres;
      const genresListAll = 
      [{
        id:1,
        name:'ALL'
      },...genresList]
      setSelectedGenre(genresListAll[0]);
      setGenres(genresListAll);
    }
    catch(error){
      console.error(error);
    }
  },[])

  const changeGenre = (genre:genresType) => {
    setSelectedGenre(genre)
  }

  useEffect(()=>{
    fetchData();
  },[])

    return (genres?
      <FlatList 
        data={genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle = {GenresStyle.genrelist}
        renderItem={({item
        })=>(selectedGenre && <GenreButton genreType={item.name} isSelected={(selectedGenre.id===item.id)} onClick={()=>changeGenre(item)} keyValue={item.id}/>)}></FlatList>:
        <View style={{backgroundColor:Colors.backgroundColor}}/>
    )
};
  
export default GenresView;